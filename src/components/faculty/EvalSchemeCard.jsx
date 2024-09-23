import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
const EvalSchemeCard = () => {
  const scheme = [
    { exam: 'Sessional - 1', marks: 15 },
    { exam: 'Sessional - 2', marks: 15 },
    { exam: 'End Semester', marks: 50 },
  ];
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState('');

  const onSubmit = (data) => {
    setData(data);
  };

  const [isPopupVisible, setPopupVisible] = useState(false);

  return (
    <div className="flex flex-col items-center w-full h-full bg-white shadow-md rounded-xl p-8">
      <h1 className="text-2xl font-bold mb-4">Evaluation Scheme</h1>
      <div className="w-full flex flex-col items-center">
        {scheme.map((evaluation, index) => (
          <div
            key={index}
            className="w-full flex justify-between p-4 bg-black text-white text-4xl rounded-md mb-4"
          >
            <div>{evaluation.exam}</div>
            <div>{evaluation.marks}</div>
          </div>
        ))}
      </div>

      <div className="flex justify-center align-bottom m-32">
        <button
          className="bg-black text-white rounded-full w-20 h-20 flex items-center justify-center"
          onClick={() => setPopupVisible(!isPopupVisible)}
        >
          <span className="text-5xl">+</span>
        </button>
      </div>

      {isPopupVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-8 rounded shadow-lg">
            <h2 className="text-center text-xl mb-4">Marks Left : 20</h2>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-1 flex-col justify-evenly"
            >
              <div className="flex flex-col">
                <input
                  className="border-2 outline-none p-2 rounded-md m-4"
                  placeholder="Type"
                  {...register('type')}
                />
                <input
                  className="border-2 outline-none p-2 rounded-md m-4"
                  placeholder="Marks"
                  {...register('marks')}
                />
              </div>
              <div className="flex justify-between mt-4">
                <button
                  type="button"
                  className="bg-red-500 text-white px-4 py-2 rounded"
                  onClick={() => setPopupVisible(!isPopupVisible)}
                >
                  Cancel
                </button>
                <button
                  className=" flex justify-center p-2 rounded-md w-1/2 self-center bg-green-500  text-white hover:bg-gray-800"
                  type="submit"
                  onClick={() => setPopupVisible(!isPopupVisible)}
                >
                  <span>Submit</span>
                </button>
              </div>
            </form>

            <div className="h-4">
              <p>Data: {JSON.stringify(data)}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EvalSchemeCard;
