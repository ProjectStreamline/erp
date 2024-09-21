import React, { useState } from 'react';
import Loader from '../Loader';

const GenerateGrade = () => {
  const [generateGrade, setGenerateGrade] = useState(false);
  const [startGenerateGrade, setStartGenerateGrade] = useState(false);
  const [viewGrade, setViewGrade] = useState(false);
  const simulateGradeGeneration = () => {
    setStartGenerateGrade(true);
    setTimeout(() => {
      setStartGenerateGrade(false);
      setViewGrade(true);
    }, 5000);
  };
  return (
    <div className="flex flex-col justify-center items-center h-full bg-card-bg rounded-lg shadow-xl">
      <button
        className="text-l font-bold text-white bg-black rounded-lg w-fit p-5"
        onClick={() => setGenerateGrade(true)}
      >
        LOCK MARKS AND
        <br />
        GENERATE GRADE
      </button>
      <div
        className={`fixed flex justify-center items-center  w-full h-full p-5 top-0 left-0 ${
          generateGrade ? 'block bg-black/20' : 'hidden'
        }`}
        onClose={() => setGenerateGrade(false)}
      >
        <div className="bg-card-bg w-fit h-fit rounded-lg p-5">
          <h1 className="text-xl font-bold text-card-text w-fit">
            Are you sure you want to generate grades?
          </h1>
          <h1 className="text-xl font-bold text-card-text w-fit m-auto">
            (Note: This action is irreversible)
          </h1>
          <div className="flex gap-5 m-auto py-7 w-fit">
            <button
              className="text-button-cancel-text font-bold w-32 bg-button-cancel h-12 rounded-lg"
              onClick={() => setGenerateGrade(false)}
            >
              Cancel
            </button>
            <button
              className="text-button-submit-text font-bold w-32 bg-button-submit h-12 rounded-lg"
              onClick={() => {
                setGenerateGrade(false);
                simulateGradeGeneration();
              }}
            >
              Generate
            </button>
          </div>
        </div>
      </div>
      <div
        className={`fixed flex justify-center items-center  w-full h-full p-5 top-0 left-0 ${
          startGenerateGrade ? 'block bg-black/20' : 'hidden'
        }`}
        onClose={() => setStartGenerateGrade(false)}
      >
        <div className="bg-card-bg w-fit h-fit rounded-lg p-5">
          <h1 className="text-xl font-bold text-card-text w-fit px-5">
            Generating Grades
          </h1>
          <Loader />
        </div>
      </div>
      <div
        className={`fixed flex justify-center items-center  w-full h-full p-5 top-0 left-0 ${
          viewGrade ? 'block bg-black/20' : 'hidden'
        }`}
        onClose={() => setViewGrade(false)}
      >
        <div className="bg-card-bg w-fit h-fit rounded-lg p-5">
          <h1 className="text-xl font-bold text-card-text w-fit">
            Grades Generated Successfully
          </h1>
          <div className="flex gap-5 m-auto py-7 w-fit">
            <button
              className="text-button-cancel-text font-bold w-32 bg-button-cancel h-12 rounded-lg"
              onClick={() => setViewGrade(false)}
            >
              Close
            </button>
            <button
              className="text-button-submit-text font-bold w-32 bg-button-submit h-12 rounded-lg"
              onClick={() => (window.location.href = '/results')}
            >
              View Results
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GenerateGrade;
