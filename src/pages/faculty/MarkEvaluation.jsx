import React from 'react';
import FacultyNavbar from '../../components/faculty/FacultyNavbar';
import ResultOverview from '../../components/faculty/ResultOverview';
import Marks from '../../components/faculty/Marks';

const MarkEvaluation = () => {
  return (
    <div className="bg-[#e6e6e6] h-auto w-full flex flex-row">
      <FacultyNavbar />
      <div className="flex flex-col items-center w-[80%] p-8">
        {/* result overview */}
        <ResultOverview />
        {/* marks */}
        <Marks />
      </div>
    </div>
  );
};

export default MarkEvaluation;
