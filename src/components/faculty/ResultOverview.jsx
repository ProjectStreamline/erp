import React from 'react';

const ResultOverview = () => {
  return (
    <div className="w-full bg-card-bg shadow-md rounded-xl p-5 mb-8 overflow-auto flex">
      <div className="m-4">
        <h1 className="text-xl font-bold text-card-text pb-5">
          Final Result overview
        </h1>
        <div className="rounded-lg bg-navbar-bg h-fit p-5 text-navbar-text">
          <h1 className="text-xl font-bold pb-5">
            Highest Marks = 580 (BT23CSD066)
          </h1>
          <h1 className="text-xl font-bold ">
            Highest Marks = 420 (BT23CSD063)
          </h1>
        </div>
      </div>
      <div className="bg-navbar-bg rounded-xl h-auto m-4">
        <h1 className="text-xl font-bold text-navbar-text p-5">
          Total number of students: 65
        </h1>
        <h1 className="text-xl font-bold text-navbar-text pb-5 px-5">
          Number of Students passed in all subjects: 50
        </h1>
        <h1 className="text-xl font-bold text-navbar-text pb-5 px-5">
          Number of Students failed in atleast one subject: 15
        </h1>
      </div>
    </div>
  );
};

export default ResultOverview;
