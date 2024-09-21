import React, { useState } from 'react';
import lockmarks from '../../assets/Lockmarks.png';
const LockMarks = () => {
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
    <div className="flex flex-col items-center p-5 bg-white shadow-md rounded-xl w-[20%] hover:bg-gray-200 transition">
      <img
        src={lockmarks}
        alt="icon"
        className="object-contain w-20 h-20 mb-4 align-middle"
      />
      <div className="text-center mt-2 font-bold">
        <button onClick={() => setGenerateGrade(true)}>
          LOCK MARKS AND GENERATE GRADE
        </button>
      </div>
      <div
        className={`fixed flex justify-center items-center  w-full h-full p-5 top-0 left-0 ${
          generateGrade ? 'block bg-black/20' : 'hidden'
        }`}
        onClose={() => setGenerateGrade(false)}
      >
        <div className="bg-card-bg w-fit h-fit rounded-lg p-5">
          <h1 className="text-xl font-bold text-card-text w-fit">
            Are you sure you want to lock the marks?
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
              Lock
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
            Locking Marks
          </h1>
          <div className="text-center py-5">
            <div role="status">
              <svg
                aria-hidden="true"
                className="inline w-8 h-8 text-gray-200 animate-spin dark:text-background fill-button-submit"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
            </div>
          </div>
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
            Marks Locked Successfully
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
              View Grades
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LockMarks;
