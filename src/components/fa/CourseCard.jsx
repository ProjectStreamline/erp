import React from 'react';

const CourseCard = ({ course, faculty, credits, lab }) => {
  return (
    <div className="bg-card-bg rounded-lg flex shadow-xl  hover:bg-gray-200 m-2">
      <div>
        <div className="font-bold p-2">{course}</div>
        <div className="p-2 font-bold flex flex-col">
          <p>{faculty.firstName}</p>
          <p>{faculty.lastName}</p>
        </div>
      </div>
      <div>
        <div className="p-2">{credits} credits</div>
        <div className="p-2">Lab {lab}</div>
      </div>
    </div>
  );
};

export default CourseCard;
