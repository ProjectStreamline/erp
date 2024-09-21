import React from 'react';
import FacultyNavbar from '../../components/faculty/FacultyNavbar';
import StudentList from '../../components/faculty/StudentList';
import DashboardCard from '../../components/faculty/DashboardCard';
import EvalScheme from '../../assets/EvalScheme.png';
import Cutoff from '../../assets/Cutoff.png';
import MarkEvaluation from '../../assets/MarkEvaluation.png';
import LockMarks from '../../components/faculty/LockMarks';
const CourseDashboard = () => {
  return (
    <div className="bg-[#e6e6e6] h-auto w-full flex flex-row">
      <FacultyNavbar />
      <div className="flex flex-col items-center w-[80%] p-8">
        {/* student list */}
        <StudentList />
        <div className="flex flex-row justify-between w-full ">
          {/* create evaluation scheme */}
          <DashboardCard
            icon={EvalScheme}
            text="EDIT/CREATE EVALUATION SCHEME"
            url="/faculty/evaluation-scheme"
          />
          {/* mark evaluation */}
          <DashboardCard
            icon={MarkEvaluation}
            text="MARK EVALUATION"
            url="/faculty/marks-evaluation"
          />
          {/* cutoff */}
          <DashboardCard icon={Cutoff} text="CUTOFF" url="/faculty/cutoff" />
          {/* lock marks and generate grades */}
          <LockMarks />
        </div>
      </div>
    </div>
  );
};

export default CourseDashboard;
