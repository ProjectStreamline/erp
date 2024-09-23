// components/FacultyDetails.js
import React from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import avatar from '../../assets/Avatar.png';
import QuickFacultyForm from './QuickFacultyForm';
const FacultyDetails = ({ faculty }) => {
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState('');

  const onSubmit = (data) => {
    setData(data);
  };

  const [isPopupVisible, setPopupVisible] = useState(false);

  const togglePopup = () => {
    setPopupVisible(!isPopupVisible);
  };

  if (!faculty)
    return (
      <div className=" bg-gray-300 p-4">Select a faculty to view details</div>
    );

  return (
    <div className="bg-gray-300 p-4 rounded-xl ml-4">
      <div className="flex flex-row justify-between w-full">
        <h2 className="text-2xl font-bold mb-4 ml-8">Faculty Details</h2>
        <div className=" bg-white px-4 mb-4 rounded-xl flex justify-center align-bottom font-bold">
          <button onClick={togglePopup}>
            <span className="">List of courses assigned</span>
          </button>
        </div>
      </div>

      <div className="bg-gray-400 p-4 w-auto h-full ml-4 mr-6 my-2 rounded-xl">
        <div className="items-end">
          <img src={avatar} alt="Avatar" className="object-contain w-36 h-36" />
        </div>

        <div>
          <div className="text-2xl mb-4">
            <p>Faculty Name: {faculty.name}</p>
          </div>
          <div className="text-2xl mb-4">
            <p>Faculty Code: {faculty.code}</p>
          </div>
          <div className="text-2xl mb-4">
            <p>Joining Date: {faculty.joiningDate}</p>
          </div>
          <div className="text-2xl mb-4">
            <p>Faculty Status: {faculty.status}</p>
          </div>
          <div className="text-2xl mb-4">
            <p>Subjects Assigned: {faculty.subjects.join(', ')}</p>
          </div>
          <div className="text-2xl mb-4">
            <p>Number of Courses Assigned: {faculty.courses}</p>
          </div>
          <div className="text-2xl mb-4">
            <p>Faculty Position: {faculty.position}</p>
          </div>
          <div className="text-2xl mb-4">
            <p>Contact Number: {faculty.contact}</p>
          </div>
          <div className="text-2xl mb-4">
            <p>Email ID: {faculty.email}</p>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-between m-4">
        <button className="bg-white p-1 rounded-xl font-bold">
          Discharge Faculty
        </button>

        <button className="bg-white p-1 px-8 rounded-xl">
          <div className="flex justify-center align-bottom font-bold">
            <button onClick={togglePopup}>
              <span className="">Add New Faculty</span>
            </button>
          </div>
          {isPopupVisible && <QuickFacultyForm popup={togglePopup} />}
        </button>

        <button className="bg-white p-1 px-8 rounded-xl font-bold">
          Edit Details
        </button>
      </div>
    </div>
  );
};

export default FacultyDetails;
