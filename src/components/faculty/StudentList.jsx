import React from 'react';

const StudentList = () => {
  return (
    <div className="w-full h-[400px] bg-white shadow-md rounded-xl p-8 mb-8 overflow-auto">
      <table className="w-full text-left border-collapse">
        <thead className="bg-black text-white sticky top-50">
          <tr>
            <th className="border-b-2 p-4">Name</th>
            <th className="border-b-2 p-4">Roll Number</th>
            <th className="border-b-2 p-4">Batch</th>
            <th className="border-b-2 p-4">Section</th>
          </tr>
        </thead>
        <tbody>
          {/* Add rows dynamically as needed */}
          {[...Array(15)].map((_, i) => (
            <tr key={i}>
              <td className="border-b p-4">Student {i + 1}</td>
              <td className="border-b p-4">Roll {i + 1}</td>
              <td className="border-b p-4">Batch {i + 1}</td>
              <td className="border-b p-4">Section {i + 1}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentList;
