import React from 'react';
import { Link } from 'react-router-dom';
const StudentResults = () => {
  return (
    <div className="flex flex-col justify-center items-center h-full bg-card-bg rounded-lg shadow-xl">
      <Link
        className="text-l font-bold text-white bg-black rounded-lg w-fit p-5"
        to={'/results'}
      >
        STUDENT RESULTS
      </Link>
    </div>
  );
};

export default StudentResults;
