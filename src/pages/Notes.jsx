import { useState, useEffect } from "react";
import { 
  AiFillDelete, 
  AiOutlineEdit, 
  AiOutlinePlus, 
  AiOutlineSearch, 
  AiOutlineFileText, 
  AiOutlineCalendar,
  AiOutlineClose
} from "react-icons/ai";
import { notesAPI } from "../services/notesAPI";
import EmptyState from "../components/EmptyState";
import LoadingSpinner from "../components/LoadingSpinner";

const AlertBox = ({ type, children, onClose }) => {
  const styles = {
    success: "bg-green-50 border-green-200 text-green-800",
    error: "bg-red-50 border-red-200 text-red-800"
  };

  return (
    <div className={`p-4 rounded-xl border ${styles[type]} mb-6 flex items-center justify-between`}>
      <span>{children}</span>
      {onClose && (
        <button onClick={onClose} className="ml-2 text-gray-500 hover:text-gray-700">
          <AiOutlineClose size={16} />
        </button>
      )}
    </div>
  );
};

export default function Notes() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [notes, setNotes] = useState([]);
  const [editNote, setEditNote] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const [showForm, setShowForm] = useState(false);

  const [dataForm, setDataForm] = useState({
    title: "",
    content: "",
  });

  useEffect(() => {
    loadNotes();
  }, []);

  const loadNotes = async () => {
    try {
      setLoading(true);
      setError("");
      const data = await notesAPI.fetchNotes();
      setNotes(data);
    } catch (err) {
      setError("Gagal memuat catatan");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setDataForm({
      ...dataForm,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      setError("");
      setSuccess("");

      if (editNote) {
        await notesAPI.updateNote(editNote.id, dataForm);
        setSuccess("Catatan berhasil diperbarui!");
        // Reload data setelah update
        loadNotes();
      } else {
        await notesAPI.createNote(dataForm);
        setSuccess("Catatan berhasil ditambahkan!");
        // Reload data setelah create
        loadNotes();
      }

      setDataForm({ title: "", content: "" });
      setEditNote(null);
      setShowForm(false);
      setTimeout(() => setSuccess(""), 3000);
    } catch (err) {
      setError(`Terjadi kesalahan: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    const konfirmasi = confirm("Yakin ingin menghapus catatan ini?");
    if (!konfirmasi) return;

    try {
      setLoading(true);
      setError("");
      setSuccess("");

      await notesAPI.deleteNote(id);
      setSuccess("Catatan berhasil dihapus!");
      setTimeout(() => setSuccess(""), 3000);
      loadNotes();
    } catch (err) {
      setError(`Terjadi kesalahan: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (note) => {
    setEditNote(note);
    setDataForm({
      title: note.title,
      content: note.content,
    });
    setShowForm(true);
  };

  const handleCancel = () => {
    setEditNote(null);
    setDataForm({ title: "", content: "" });
    setShowForm(false);
  };

  const filteredNotes = notes.filter(note => {
    const matchesSearch = note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         note.content.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesSearch;
  });



  return (
    <div className=" from-slate-50 to-blue-50">
      <div className="max-w-4xl mx-auto p-6">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">My Notes</h1>
              <p className="text-gray-600">Kelola catatan Anda dengan mudah dan efisien</p>
            </div>
            <button
              onClick={() => setShowForm(!showForm)}
              className="flex items-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200"
            >
              <AiOutlinePlus size={20} />
              Tambah Catatan
            </button>
          </div>

          {/* Search */}
          <div className="mb-6">
            <div className="relative">
              <AiOutlineSearch size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Cari catatan..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-white rounded-xl border border-gray-200 focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200"
              />
            </div>
          </div>
        </div>

        {error && <AlertBox type="error" onClose={() => setError("")}>{error}</AlertBox>}
        {success && <AlertBox type="success" onClose={() => setSuccess("")}>{success}</AlertBox>}

        {/* Form Modal */}
        {showForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-gray-900">
                    {editNote ? "Edit Catatan" : "Tambah Catatan Baru"}
                  </h3>
                  <button
                    onClick={handleCancel}
                    className="text-gray-500 hover:text-gray-700 p-2"
                  >
                    <AiOutlineClose size={24} />
                  </button>
                </div>

                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Judul Catatan
                    </label>
                    <input
                      type="text"
                      name="title"
                      value={dataForm.title}
                      placeholder="Masukkan judul catatan"
                      disabled={loading}
                      onChange={handleChange}
                      required
                      className="w-full p-4 bg-gray-50 rounded-xl border border-gray-200 focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Isi Catatan
                    </label>
                    <textarea
                      name="content"
                      value={dataForm.content}
                      placeholder="Tulis isi catatan di sini..."
                      disabled={loading}
                      onChange={handleChange}
                      required
                      rows="6"
                      className="w-full p-4 bg-gray-50 rounded-xl border border-gray-200 focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200 resize-none"
                    />
                  </div>

                  <div className="flex gap-4 pt-4">
                    <button
                      type="button"
                      onClick={handleSubmit}
                      disabled={loading}
                      className="flex-1 px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-lg"
                    >
                      {loading ? "Menyimpan..." : editNote ? "Update Catatan" : "Simpan Catatan"}
                    </button>
                    <button
                      type="button"
                      onClick={handleCancel}
                      className="px-6 py-3 text-gray-700 border border-gray-300 rounded-xl hover:bg-gray-50 transition-all duration-200"
                    >
                      Batal
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Notes Grid */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-100">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold text-gray-900">
                Daftar Catatan ({filteredNotes.length})
              </h3>
              {searchTerm && (
                <span className="text-sm text-gray-500">
                  Hasil pencarian untuk "{searchTerm}"
                </span>
              )}
            </div>
          </div>

          {loading && <LoadingSpinner text="Memuat catatan..." />}
          
          {!loading && filteredNotes.length === 0 && !error && (
            <EmptyState text={searchTerm ? "Tidak ada catatan yang cocok dengan pencarian" : "Belum ada catatan. Tambah catatan pertama!"} />
          )}

          {!loading && filteredNotes.length > 0 && (
            <div className="divide-y divide-gray-100">
              {filteredNotes.map((note, index) => (
                <div key={note.id} className="p-6 hover:bg-gray-50 transition-colors duration-150">
                  <div className="flex items-start justify-between">
                    <div className="flex-1 min-w-0">
                      <div className="mb-2">
                        <h4 className="text-lg font-semibold text-gray-900 truncate">
                          {note.title}
                        </h4>
                      </div>
                      <p className="text-gray-600 mb-3 line-clamp-2">
                        {note.content}
                      </p>
                      <div className="flex items-center text-sm text-gray-500">
                        <AiOutlineCalendar size={16} className="mr-1" />
                        {note.created_at ? new Date(note.created_at).toLocaleDateString('id-ID', {
                          day: 'numeric',
                          month: 'long',
                          year: 'numeric'
                        }) : 'Tanggal tidak tersedia'}
                      </div>
                    </div>
                    <div className="flex items-center gap-2 ml-4">
                      <button
                        onClick={() => handleEdit(note)}
                        disabled={loading}
                        className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-150"
                        title="Edit catatan"
                      >
                        <AiOutlineEdit size={18} />
                      </button>
                      <button
                        onClick={() => handleDelete(note.id)}
                        disabled={loading}
                        className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors duration-150"
                        title="Hapus catatan"
                      >
                        <AiFillDelete size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}