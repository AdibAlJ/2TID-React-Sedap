import frameworkData from "./framework.json"; // Mengimpor data framework dari file JSON
import { useState } from "react"; // Mengimpor hook useState dari React untuk menangani state

export default function SearchFilter() {
    // State untuk menangani nilai pencarian dan tag yang dipilih
    const [searchTerm, setSearchTerm] = useState(""); 
    const [selectedTag, setSelectedTag] = useState(""); 

    // Mengubah searchTerm menjadi huruf kecil untuk pencarian yang tidak case-sensitive
    const _searchTerm = searchTerm.toLowerCase();

    // Menyaring framework berdasarkan pencarian dan tag yang dipilih
    const filteredFrameworks = frameworkData.filter((framework) => {
      // Memeriksa apakah nama atau deskripsi framework cocok dengan searchTerm
      const matchesSearch =
        framework.name
                  .toLowerCase()
                  .includes(_searchTerm) ||
        framework.description
                  .toLowerCase()
                  .includes(_searchTerm);

      // Memeriksa apakah tag yang dipilih cocok dengan tag di framework
      const matchesTag = selectedTag ? framework.tags.includes(selectedTag) : true;

      // Mengembalikan framework yang memenuhi kedua kriteria: pencarian dan tag
      return matchesSearch && matchesTag;
    });

    // Membuat daftar tag unik dari semua framework
    const allTags = [
        ...new Set(frameworkData.flatMap((framework) => framework.tags)),
    ];

    return (
        <div className="p-8">
            {/* Input pencarian framework */}
            <input
                type="text"
                name="searchTerm"
                placeholder="Search framework..."
                className="w-full p-2 border border-gray-300 rounded mb-4"
                value={searchTerm} // Nilai input dikendalikan oleh state
                onChange={(e) => setSearchTerm(e.target.value)} // Update state saat user mengetik
            />

            {/* Dropdown untuk memilih tag */}
            <select
                name="selectedTag"
                className="w-full p-2 border border-gray-300 rounded mb-4"
                value={selectedTag} // Nilai select dikendalikan oleh state
                onChange={(e) => setSelectedTag(e.target.value)} // Update state saat tag dipilih
            >
                <option value="">All Tags</option> {/* Opsi untuk memilih semua tag */}
                {allTags.map((tag, index) => ( // Menampilkan semua tag unik
                    <option key={index} value={tag}>
                        {tag}
                    </option>
                ))}
            </select>

            {/* Menampilkan hasil framework yang telah difilter */}
            {filteredFrameworks.map((item) => (
                <div key={item.id} className="border p-4 mb-4 rounded-lg shadow-md bg-white">
                    <h2 className="text-lg font-bold text-gray-800">{item.name}</h2>
                    <p className="text-gray-600">{item.description}</p>
                    <p className="text-gray-600">Release Year: {item.details.releaseYear}</p>
                    <p className="text-blue-600">{item.details.officialWebsite}</p>
                    <p className="text-green-700">{item.details.developer}</p>

                    {/* Menampilkan tag yang dimiliki oleh framework */}
                    {item.tags.map((tag, index) => (
                        <span key={index} className="bg-gray-200 text-gray-700 px-2 py-1 text-xs rounded-full mr-2">
                            {tag}
                        </span>
                    ))}
                </div>
            ))}
        </div>
    );
}
