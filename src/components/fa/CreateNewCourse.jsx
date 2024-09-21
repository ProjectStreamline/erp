import React, { useState } from 'react';
import { ImCross } from 'react-icons/im';
import SelectDropdown from './SelectDropdown';
const CreateNewCourse = () => {
  const semesters = [
    { label: '1', value: '1' },
    { label: '2', value: '2' },
    { label: '3', value: '3' },
    { label: '4', value: '4' },
    { label: '5', value: '5' },
    { label: '6', value: '6' },
    { label: '7', value: '7' },
    { label: '8', value: '8' },
  ];
  const courseCodes = [
    { label: 'CSE 101', value: 'CSE 101' },
    { label: 'CSE 102', value: 'CSE 102' },
    { label: 'CSE 103', value: 'CSE 103' },
    { label: 'CSE 104', value: 'CSE 104' },
    { label: 'CSE 105', value: 'CSE 105' },
    { label: 'CSE 106', value: 'CSE 106' },
  ];
  const faculties = [
    { label: 'Dr. Nishant Namdev', value: 'Dr. Nishant Namdev' },
    { label: 'Dr. Nishant Namdev', value: 'Dr. Nishant Namdev' },
    { label: 'Dr. Nishant Namdev', value: 'Dr. Nishant Namdev' },
  ];
  const lab = [
    { label: 'Yes', value: 'Yes' },
    { label: 'No', value: 'No' },
  ];
  const [openCourse, setOpenCourse] = useState(false);
  const [courseName, setCourseName] = useState('');

  return (
    <div className="rounded-lg flex justify-center">
      <button
        className="text-white font-bold w-64 bg-black h-12 rounded-lg"
        onClick={() => setOpenCourse(true)}
      >
        Create new Course
      </button>
      <div
        className={`fixed flex justify-center items-center  w-full h-full p-5 top-0 left-0 ${
          openCourse ? 'block bg-black/20' : 'hidden'
        }`}
        onClose={() => setOpenCourse(false)}
      >
        <div className="bg-card-bg w-fit h-fit rounded-lg p-5">
          <div className="relative">
            <button
              className="text-navbar-text w-7 h-7 bg-navbar-bg rounded-full absolute right-0 top-0 flex items-center justify-center"
              onClick={() => setOpenCourse(false)}
            >
              <ImCross />
            </button>
          </div>
          {/* semester */}
          <SelectDropdown label="Semester" options={semesters} />
          {/* coursecode */}
          <SelectDropdown label="Course Code" options={courseCodes} />
          {/* course name */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="courseName"
              className="text-lg font-bold text-card-text"
            >
              Course Name
            </label>
            <input
              type="text"
              placeholder="Enter Course Name"
              className="border border-gray-300 rounded-md p-2"
              value={courseName}
              onChange={(e) => setCourseName(e.target.value)}
            />
          </div>
          {/* faculty */}
          <SelectDropdown label="Faculty" options={faculties} />
          {/* lab */}
          <SelectDropdown label="Lab" options={lab} />

          <button className="text-navbar-text font-bold w-full bg-navbar-bg h-12 rounded-lg mt-3">
            Create Course
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateNewCourse;
