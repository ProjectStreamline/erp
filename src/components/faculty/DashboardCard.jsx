import React from 'react';
import { Link } from 'react-router-dom';
const DashboardCard = ({ icon, text, url }) => {
  return (
    <Link
      to={url}
      className="flex flex-col items-center p-5 bg-white shadow-md rounded-xl w-[20%] hover:bg-gray-200 transition"
    >
      <img
        src={icon}
        alt="icon"
        className="object-contain w-20 h-20 mb-4 align-middle"
      />
      <div className="text-center mt-2 font-bold">
        <p>{text}</p>
      </div>
    </Link>
  );
};

export default DashboardCard;
