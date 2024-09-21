import React, { useState } from 'react';
import AdminNavbar from '../../components/admin/AdminNavbar';
import FacultyCard from '../../components/admin/FacultyCard';
import FacultyDetails from '../../components/admin/FacultyDetails';
const ManageFaculty = () => {
  const [selectedFaculty, setSelectedFaculty] = useState(null);

  const faculties = [
    {
      name: 'Dr. Nishant Namdev',
      position: 'Adjunct Asst. Prof',
      courses: 4,
      department: 'Basic Science',
      code: '123456',
      joiningDate: '2nd April 2022',
      status: 'Permanent',
      subjects: ['PS', 'ILA', 'CDS'],
      contact: '1234567890',
      email: 'abc@iiitn.ac.in',
    },
    {
      name: 'Dr. Kamaljeet',
      position: 'Adjunct Asst. Prof',
      courses: 5,
      department: 'Basic Science',
      code: '123456',
      joiningDate: '2nd April 2022',
      status: 'Permanent',
      subjects: ['PS', 'ILA', 'CDS'],
      contact: '1234567890',
      email: 'abc@iiitn.ac.in',
    },
    {
      name: 'Mr. Vikrant Dhenge',
      position: 'Adjunct Asst. Prof',
      courses: 6,
      department: 'Basic Science',
      code: '123456',
      joiningDate: '2nd April 2022',
      status: 'Permanent',
      subjects: ['PS', 'ILA', 'CDS'],
      contact: '1234567890',
      email: 'abc@iiitn.ac.in',
    },
    {
      name: 'Dr. Chandrashekhar Kamargaonkar',
      position: 'Adjunct Asst. Prof',
      courses: 6,
      department: 'Electronics',
      code: '123456',
      joiningDate: '2nd April 2022',
      status: 'Permanent',
      subjects: ['PS', 'ILA', 'CDS'],
      contact: '1234567890',
      email: 'abc@iiitn.ac.in',
    },
    {
      name: 'Dr. Nishant Namdev',
      position: 'Adjunct Asst. Prof',
      courses: 4,
      department: 'Basic Science',
      code: '123456',
      joiningDate: '2nd April 2022',
      status: 'Permanent',
      subjects: ['PS', 'ILA', 'CDS'],
      contact: '1234567890',
      email: 'abc@iiitn.ac.in',
    },
    {
      name: 'Dr. Kamaljeet',
      position: 'Adjunct Asst. Prof',
      courses: 5,
      department: 'Basic Science',
      code: '123456',
      joiningDate: '2nd April 2022',
      status: 'Permanent',
      subjects: ['PS', 'ILA', 'CDS'],
      contact: '1234567890',
      email: 'abc@iiitn.ac.in',
    },
    {
      name: 'Mr. Vikrant Dhenge',
      position: 'Adjunct Asst. Prof',
      courses: 6,
      department: 'Basic Science',
      code: '123456',
      joiningDate: '2nd April 2022',
      status: 'Permanent',
      subjects: ['PS', 'ILA', 'CDS'],
      contact: '1234567890',
      email: 'abc@iiitn.ac.in',
    },
    {
      name: 'Mr. Vikrant Dhenge',
      position: 'Adjunct Asst. Prof',
      courses: 6,
      department: 'Basic Science',
      code: '123456',
      joiningDate: '2nd April 2022',
      status: 'Permanent',
      subjects: ['PS', 'ILA', 'CDS'],
      contact: '1234567890',
      email: 'abc@iiitn.ac.in',
    },
    // Add more faculties as needed
  ];
  return (
    <div className="flex bg-gray-100 min-h-full">
      <AdminNavbar />

      <div className="flex flex-col w-[78%] m-8 ml-0">
        <div className="flex flex-row">
          <div className="bg-gray-300 flex flex-col w-[45%] h-[760px] pl-8 py-4 rounded-xl ">
            <h2 className="text-2xl font-bold mb-4">Manage Faculties</h2>

            <div className="flex flex-row mb-4 w-auto mr-9 outline-black">
              <input
                type="text"
                placeholder="Search for Faculty Name"
                className="flex-1 p-2 rounded-xl border "
              />
            </div>

            <div className="flex-1 items-center overflow-auto no-scrollbar">
              {faculties.map((faculty, index) => (
                <FacultyCard
                  key={index}
                  {...faculty}
                  onClick={() => setSelectedFaculty(faculty)}
                />
              ))}
            </div>
          </div>

          <div className="flex-1 pl-4 w-full h-full">
            <FacultyDetails faculty={selectedFaculty} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageFaculty;
