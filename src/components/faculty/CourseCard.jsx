import React from 'react';

const CourseCard = ({ title, subject, type, scheme, grades }) => {
  return (
    <div className="flex items-center justify-between bg-white shadow-md rounded-[15px] w-full h-[128px] px-8 my-4">
      <div>
        <div className="text-black font-bold text-2xl mb-8">
          <button
            onClick={() => (window.location.href = '/faculty_coursedashboard')}
          >
            {title}
          </button>
        </div>

        <div className="flex flex-row">
          <div className="text-black font-medium text-lg px-16">
            Subject: {subject}
          </div>

          <div className="text-black font-medium text-lg px-16">
            Type: {type}
          </div>
          <div className="text-black font-medium text-lg px-16">
            Evaluation Scheme: {scheme}
          </div>

          <div className="text-black font-medium text-lg px-16">
            Grades: {grades}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
