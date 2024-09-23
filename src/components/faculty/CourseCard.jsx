import React from 'react';
import { Link } from 'react-router-dom';

const CourseCard = ({ title, subject, type, scheme, grades }) => {
  return (
    <Link to="/faculty/course-dashboard">
      <div className="flex items-center justify-between bg-white shadow-md rounded-[15px] w-full h-[128px] px-8 my-4">
        <div>
          <div className="text-black font-bold text-2xl mb-8">
            <h1>{title}</h1>
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
    </Link>
  );
};

export default CourseCard;
