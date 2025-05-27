import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Memanggil API untuk mengambil data pengguna
    axios
      .get('https://dummyjson.com/users')
      .then((response) => {
        setUsers(response.data.users);  // Menyimpan data pengguna ke state
      })
      .catch((err) => {
        setError('Error fetching users'); // Menangani error jika ada
      })
      .finally(() => {
        setLoading(false);  // Menandakan bahwa loading sudah selesai
      });
  }, []);

  if (loading) {
    return (
      <div className="text-center py-10">
        <p>Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-10 text-red-600">
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">User List</h2>
      <table className="min-w-full bg-white border border-gray-200 rounded-lg">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2 border-b text-left">ID</th>
            <th className="px-4 py-2 border-b text-left">Name</th>
            <th className="px-4 py-2 border-b text-left">Username</th>
            <th className="px-4 py-2 border-b text-left">Email</th>
            <th className="px-4 py-2 border-b text-left">Phone</th>
            <th className="px-4 py-2 border-b text-left">Age</th>
            <th className="px-4 py-2 border-b text-left">Role</th>
            <th className="px-4 py-2 border-b text-left">Company</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td className="px-4 py-2 border-b">{user.id}</td>
              <td className="px-4 py-2 border-b">
                {user.firstName} {user.lastName}
              </td>
              <td className="px-4 py-2 border-b">{user.username}</td>
              <td className="px-4 py-2 border-b">{user.email}</td>
              <td className="px-4 py-2 border-b">{user.phone}</td>
              <td className="px-4 py-2 border-b">{user.age}</td>
              <td className="px-4 py-2 border-b">{user.role}</td>
              <td className="px-4 py-2 border-b">{user.company?.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
