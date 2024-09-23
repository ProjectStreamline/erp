import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const QuickCourseForm = ({ popup }) => {
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState('');

  const onSubmit = (data) => {
    setData(data);
  };
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-8 rounded shadow-lg">
        <h2 className="text-center text-xl mb-4">Adding New Course</h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-1 flex-col justify-evenly"
        >
          <div className="flex flex-col w-[500px] h-[450px] overflow-auto">
            <input
              className="border-2 outline-none p-2 rounded-md m-4"
              placeholder="Course Name"
              {...register('Course Name')}
            />
            <input
              className="border-2 outline-none p-2 rounded-md m-4"
              placeholder="Course Code"
              {...register('Course Code')}
            />
            <input
              className="border-2 outline-none p-2 rounded-md m-4"
              placeholder="Course Faculty"
              {...register('Course Faculty')}
            />
            <input
              className="border-2 outline-none p-2 rounded-md m-4"
              placeholder="Course Credits"
              {...register('Course Credits')}
            />
            <input
              className="border-2 outline-none p-2 rounded-md m-4"
              placeholder="Starting Date"
              {...register('Starting Date')}
            />
            <input
              className="border-2 outline-none p-2 rounded-md m-4"
              placeholder="Ending Date"
              {...register('Ending Date')}
            />
            <input
              className="border-2 outline-none p-2 rounded-md m-4"
              placeholder="Lab Availability"
              {...register('Lab Availability')}
            />
            <input
              className="border-2 outline-none p-2 rounded-md m-4"
              placeholder="Creation date"
              {...register('Creation date')}
            />
          </div>
          <div className="flex justify-between mt-4">
            <button
              type="button"
              className="bg-red-500 text-white px-4 py-2 rounded"
              onClick={popup}
            >
              Cancel
            </button>
            <button
              className=" flex justify-center p-2 rounded-md w-1/4 self-center bg-green-500  text-white hover:bg-gray-800"
              type="submit"
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
  );
};

export default QuickCourseForm;
