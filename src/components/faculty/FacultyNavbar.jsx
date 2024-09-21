import React from 'react';
import iiitnLogo from '../../assets/iiitn.png';
import { Link } from 'react-router-dom';

const FacultyNavbar = () => {
  return (
    <div className="bg-black text-white flex flex-col items-center m-8 p-4 rounded-xl sticky min-h-full">
      {/* name */}
      <div className="flex flex-col items-center mb-8">
        <div className="text-lg font-semibold">Dr. Nishant Namdev</div>
        <div className="text-sm text-gray-400">Adjacent Faculty</div>
      </div>

      {/* logo */}
      <div className="mb-8">
        <img
          src={iiitnLogo}
          className="object-contain h-24 w-24"
          alt="iiitn logo"
        />
      </div>

      {/* nav links */}
      <div className="flex flex-col items-center mb-8">
        <Link
          to={'/faculty/dashboard'}
          className="w-full mb-3 hover:bg-gray-100 hover:text-black rounded-xl px-5 py-2 transition-all duration-500 hover:animate-pulse text-center"
        >
          All Courses
        </Link>
        <Link
          to={'/faculty/course-dashboard'}
          className="w-full mb-3 hover:bg-gray-100 hover:text-black rounded-xl px-5 py-2 transition-all duration-500 hover:animate-pulse text-center"
        >
          Course Dashboard
        </Link>
        <Link
          to={'/faculty/cutoff'}
          className="w-full mb-3 hover:bg-gray-100 hover:text-black rounded-xl px-5 py-2 transition-all duration-500 hover:animate-pulse text-center"
        >
          Cut-Off
        </Link>
        <Link
          to={'/faculty/marks-evaluation'}
          className="w-full mb-3 hover:bg-gray-100 hover:text-black rounded-xl px-5 py-2 transition-all duration-500 hover:animate-pulse text-center"
        >
          Marks Evaluation
        </Link>
        <Link
          to={'/faculty/evaluation-scheme'}
          className="w-full mb-3 hover:bg-gray-100 hover:text-black rounded-xl px-5 py-2 transition-all duration-500 hover:animate-pulse text-center"
        >
          Create Evaluation Scheme
        </Link>
      </div>

      {/* logout */}
      <div className="mt-auto mb-8">
        <Link
          to={'/'}
          className="bg-white text-black rounded-full w-32 h-12 flex items-center justify-center hover:text-black hover:bg-blue-500 duration-500"
        >
          Logout
        </Link>
      </div>
      <div className="text-center text-sm mb-auto">&copy; 2024 IIITN ERP</div>
    </div>
  );
};

export default FacultyNavbar;
