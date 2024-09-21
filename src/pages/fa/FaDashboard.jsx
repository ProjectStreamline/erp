import React from 'react';
import FaNavbar from '../../components/fa/FaNavbar';
import ManageCourses from '../../components/fa/ManageCourses';
import CourseDashboard from '../../components/fa/CourseDashboard';
import StudentResults from '../../components/fa/StudentResults';
import GenerateGrade from '../../components/fa/GenerateGrade';

const FaDashboard = () => {
  return (
    <>
      <div className="grid grid-cols-[25%_auto_auto_auto] min-h-screen gap-5 p-5 bg-background">
        {/* navbar */}
        <FaNavbar />
        {/* manage courses */}
        <ManageCourses />
        {/* course dashboard */}
        <CourseDashboard />
        {/* student results */}
        <StudentResults />
        {/* lock marks and generate grades */}
        <GenerateGrade />
        <div></div>
      </div>
    </>
  );
};

export default FaDashboard;
