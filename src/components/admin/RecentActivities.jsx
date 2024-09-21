import React from 'react';

const RecentActivities = () => {
  return (
    <div className="bg-gray-300 flex flex-col h-auto rounded-xl p-2 w-[50%] mr-4">
      <h2 className="text-xl font-bold my-4 ml-8">Recent Activities</h2>
      <h2 className="text-xl mb-4 ml-8">
        Dr. Nishant Namdev added to Faculty list
      </h2>
      <h2 className="text-xl mb-4 ml-8">
        New course 'MAL106 - Probability and Statistics' created
      </h2>
      <h2 className="text-xl mb-4 ml-8">Semester CSD 2024 activated</h2>
    </div>
  );
};

export default RecentActivities;
