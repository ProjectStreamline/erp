import React from 'react';

const CourseDashboard = () => {
  return (
    <div className="flex flex-col h-full bg-card-bg rounded-lg shadow-xl p-4">
      <h1 className="text-2xl font-bold text-black"> Course Dashboard</h1>
      <div className="p-2 px-4 bg-black text-white w-9/10 h-full rounded-lg">
        <h1 className="text-l font-semibold text-white my-2">
          Students Enrolled: 65
        </h1>
        <h1 className="text-l font-semibold text-white my-2">
          Course Code: CSL 112
        </h1>
        <h1 className="text-l font-semibold text-white my-2">
          Faculty Name: Dr. Nishant Namdev
        </h1>
      </div>
    </div>
  );
};

export default CourseDashboard;
