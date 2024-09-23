import React, { useState } from 'react';
import QuickFacultyForm from './QuickFacultyForm';
import QuickCourseForm from './QuickCourseForm';
const QuickActions = () => {
  const [isPopupVisible, setPopupVisible] = useState(false);
  const togglePopup = () => {
    setPopupVisible(!isPopupVisible);
  };
  return (
    <div className="bg-gray-300 flex flex-col h-auto rounded-xl p-2 w-[50%] ml-4">
      <h2 className="text-xl font-bold my-4 ml-8">Quick Actions</h2>
      <h2 className="text-xl mb-4 ml-8">
        <button onClick={togglePopup}>
          <span className="">Add New Semester +</span>
          {isPopupVisible && <QuickFacultyForm popup={togglePopup} />}
        </button>
      </h2>
      <h2 className="text-xl mb-4 ml-8">
        <button onClick={togglePopup}>
          <span className="">Add New Faculty +</span>
          {isPopupVisible && <QuickFacultyForm popup={togglePopup} />}
        </button>
      </h2>
      <h2 className="text-xl mb-4 ml-8">
        <button onClick={togglePopup}>
          <span className="">Add New Course +</span>
          {isPopupVisible && <QuickCourseForm popup={togglePopup} />}
        </button>
      </h2>
    </div>
  );
};

export default QuickActions;
