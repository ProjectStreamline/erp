import React from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import QuickSemesterForm from './QuickSemesterForm';

const SemesterDetails = ({ semester }) => {
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState('');

  const onSubmit = (data) => {
    setData(data);
  };

  const [isPopupVisible, setPopupVisible] = useState(false);

  const togglePopup = () => {
    setPopupVisible(!isPopupVisible);
  };

  return (
    <div className="bg-gray-300 p-4 rounded-xl ml-4">
      <div className="flex flex-row justify-between w-full ">
        <h2 className="text-2xl font-bold mb-4 ml-8">
          {semester.name} Details
        </h2>
        <div className=" bg-white px-8 mb-4 mr-6 rounded-xl flex justify-center align-bottom font-bold">
          <button>
            <span className="">List of courses available</span>
          </button>
        </div>
      </div>

      <div className="bg-gray-400 p-4 w-auto h-full ml-8 mr-6 my-2 rounded-xl overflow-auto">
        <div className="text-2xl mb-4">
          <p>Semester: {semester.semester}</p>
        </div>
        <div className="text-2xl mb-4">
          <p>Branch: {semester.branch}</p>
        </div>
        <div className="text-2xl mb-4">
          <p>Faculty Advisor: {semester.facultyAdvisor}</p>
        </div>
        <div className="text-2xl mb-4">
          <p>Number of Courses: {semester.courses}</p>
        </div>
        <div className="text-2xl mb-4">
          <p>Number of Credits: {semester.credits}</p>
        </div>
        <div className="text-2xl mb-4">
          <p>Classroom: {semester.classroom}</p>
        </div>
        <div className="text-2xl mb-4">
          <p>Semester Started on: {semester.startDate}</p>
        </div>
        <div className="text-2xl mb-4">
          <p>Semester Ending on: {semester.endDate}</p>
        </div>
        <div className="text-2xl mb-4">
          <p>Lab Availability: {semester.labAvailability}</p>
        </div>
        <div className="text-2xl">
          <p>Semester Created on: {semester.createdDate}</p>
        </div>
      </div>
      <div className="flex flex-row justify-between mx-8 mt-4">
        <button className="bg-white p-1 rounded-xl font-bold">
          Delete Semester
        </button>

        <button className="bg-white p-1 px-4 rounded-xl">
          <div className="flex justify-center align-bottom font-bold">
            <button onClick={togglePopup}>
              <span className="">Add New Semester</span>
            </button>
          </div>
          {isPopupVisible && <QuickSemesterForm popup={togglePopup} />}
        </button>

        <button className="bg-white p-1 px-8 rounded-xl font-bold">
          Edit Details
        </button>
      </div>
    </div>
  );
};

export default SemesterDetails;
