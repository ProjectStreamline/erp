import React, { useState } from 'react';
import { ImCross } from 'react-icons/im';
import MultiSelect from './Multiselect';
const StartRegistration = () => {
  const [openRegistration, setOpenRegistration] = useState(false);
  const [slot, setSlot] = useState([]);
  const slots = [
    {
      id: 'A',
      courseOptions: [
        { label: 'CSE 101', value: 'CSE 101' },
        { label: 'CSE 102', value: 'CSE 102' },
      ],
    },
    {
      id: 'B',
      courseOptions: [
        { label: 'CSE 103', value: 'CSE 103' },
        { label: 'CSE 104', value: 'CSE 104' },
      ],
    },
    {
      id: 'C',
      courseOptions: [
        { label: 'CSE 105', value: 'CSE 105' },
        { label: 'CSE 106', value: 'CSE 106' },
      ],
    },
    {
      id: 'D',
      courseOptions: [
        { label: 'CSE 101', value: 'CSE 101' },
        { label: 'CSE 102', value: 'CSE 102' },
      ],
    },
    {
      id: 'E',
      courseOptions: [
        { label: 'CSE 103', value: 'CSE 103' },
        { label: 'CSE 104', value: 'CSE 104' },
      ],
    },
    {
      id: 'F',
      courseOptions: [
        { label: 'CSE 105', value: 'CSE 105' },
        { label: 'CSE 106', value: 'CSE 106' },
      ],
    },
    {
      id: 'G',
      courseOptions: [
        { label: 'CSE 103', value: 'CSE 103' },
        { label: 'CSE 104', value: 'CSE 104' },
      ],
    },
    {
      id: 'H',
      courseOptions: [
        { label: 'CSE 105', value: 'CSE 105' },
        { label: 'CSE 106', value: 'CSE 106' },
      ],
    },
  ];

  return (
    <div className="rounded-lg flex justify-center">
      <button
        className="text-white font-bold w-64 bg-black h-12 rounded-lg"
        onClick={() => setOpenRegistration(true)}
      >
        Start Registration
      </button>

      {/* modal */}
      <div
        className={`fixed flex justify-center items-center  w-full h-full p-5 top-0 left-0 ${
          openRegistration ? 'block bg-black/20' : 'hidden'
        }`}
        onClose={() => setOpenRegistration(false)}
      >
        <div className="bg-card-bg w-fit h-fit rounded-lg p-5">
          <div className="relative">
            <button
              className="text-navbar-text w-7 h-7 bg-navbar-bg rounded-full absolute right-0 top-0 flex items-center justify-center"
              onClick={() => setOpenRegistration(false)}
            >
              <ImCross />
            </button>
          </div>

          {slots.map((slot) => {
            return (
              <MultiSelect
                key={slot.id}
                id={slot.id}
                courseOptions={slot.courseOptions}
              />
            );
          })}
          <button className="text-navbar-text font-bold w-full bg-navbar-bg h-12 rounded-lg mt-3">
            Start Registration
          </button>
        </div>
      </div>
    </div>
  );
};

export default StartRegistration;
