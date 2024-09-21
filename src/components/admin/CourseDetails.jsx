import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
const CourseDetails = ({ course }) => {
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState('');

  const onSubmit = (data) => {
    setData(data);
  };

  const [isPopupVisible, setPopupVisible] = useState(false);

  const togglePopup = () => {
    setPopupVisible(!isPopupVisible);
  };
  if (!course)
    return <div className="p-4">Select a course to view details</div>;

  return (
    <div className="bg-gray-300 p-4 rounded-xl ml-4">
      <div className="flex flex-row justify-between w-full ">
        <h2 className="text-2xl font-bold mb-4 ml-8">Course Details</h2>
        <div className=" bg-white px-8 mb-4 mr-6 rounded-xl flex justify-center align-bottom font-bold">
          <button>
            <span className="">List of courses assigned</span>
          </button>
        </div>
      </div>

      <div className="bg-gray-400 p-4 w-auto h-full ml-8 mr-6 my-2 rounded-xl overflow-auto">
        <div className="text-2xl mb-4">
          <p>Course Code: {course.code}</p>
        </div>
        <div className="text-2xl mb-4">
          <p>Course Name: {course.name}</p>
        </div>
        <div className="text-2xl mb-4">
          <p>Course Faculty: {course.faculty}</p>
        </div>
        <div className="text-2xl mb-4">
          <p>Course Credits: {course.credits}</p>
        </div>
        <div className="text-2xl mb-4">
          <p>Course Classroom: {course.classroom}</p>
        </div>
        <div className="text-2xl mb-4">
          <p>Course Started on: {course.startDate}</p>
        </div>
        <div className="text-2xl mb-4">
          <p>Course Ending on: {course.endDate}</p>
        </div>
        <div className="text-2xl mb-4">
          <p>Course Created on: {course.createdDate}</p>
        </div>
        <div className="text-2xl mb-4">
          <p>Lab Availability: {course.lab ? 'Available' : 'NA'}</p>
        </div>
      </div>
      <div className="flex flex-row justify-between mx-8 mt-4">
        <button className="bg-white p-1 rounded-xl font-bold">
          Delete this Course
        </button>

        <button className="bg-white p-1 px-4 rounded-xl">
          <div className="flex justify-center align-bottom font-bold">
            <button onClick={togglePopup}>
              <span className="">Add New Course</span>
            </button>
          </div>
          {isPopupVisible && <QuickForm />}
        </button>

        <button className="bg-white p-1 px-8 rounded-xl font-bold">
          Edit this Course
        </button>
      </div>
    </div>
  );
};

export default CourseDetails;
