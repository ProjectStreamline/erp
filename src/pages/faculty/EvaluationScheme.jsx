import React from 'react';
import FacultyNavbar from '../../components/faculty/FacultyNavbar';
import EvalSchemeCard from '../../components/faculty/EvalSchemeCard';

const EvaluationScheme = () => {
  return (
    <div className="bg-[#e6e6e6] h-auto flex">
      <FacultyNavbar />
      <div className="flex flex-row justify-between m-8 ">
        {/* evaluation scheme */}
        <EvalSchemeCard />
        {/* marks set */}
        <div className="flex flex-col justify-around w-auto h-full mx-20">
          <div className=" p-12 bg-white shadow-md rounded-xl w-auto hover:bg-gray-200 transition">
            <div className="text-center font-bold text-2xl mb-8">Marks Set</div>
            <div className="text-center text-4xl font-black">80/100</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EvaluationScheme;
