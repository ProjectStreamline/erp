import React from 'react';
import StartRegistration from './StartRegistration';
import CreateNewCourse from './CreateNewCourse';
import CourseCard from './CourseCard';

const ManageCourses = () => {
  const courses = [
    {
      id: 1,
      course: 'PS-CSD 2023',
      faculty: { firstName: 'Dr. Nishant', lastName: 'Namdev' },
      credits: 4,
      lab: 'NA',
    },
    {
      id: 2,
      course: 'PS-CSD 2023',
      faculty: { firstName: 'Dr. Nishant', lastName: 'Namdev' },
      credits: 4,
      lab: 'NA',
    },
    {
      id: 3,
      course: 'PS-CSD 2023',
      faculty: { firstName: 'Dr. Nishant', lastName: 'Namdev' },
      credits: 4,
      lab: 'NA',
    },
    {
      id: 4,
      course: 'PS-CSD 2023',
      faculty: { firstName: 'Dr. Nishant', lastName: 'Namdev' },
      credits: 4,
      lab: 'NA',
    },
    {
      id: 5,
      course: 'PS-CSD 2023',
      faculty: { firstName: 'Dr. Nishant', lastName: 'Namdev' },
      credits: 4,
      lab: 'NA',
    },
    {
      id: 6,
      course: 'PS-CSD 2023',
      faculty: { firstName: 'Dr. Nishant', lastName: 'Namdev' },
      credits: 4,
      lab: 'NA',
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-full bg-card-bg rounded-lg col-span-3">
      <div className="grid grid-cols-9 h-full w-full gap-2 pt-5 px-7 sm:grid-cols-3">
        <div className="rounded-lg">
          <h4 className="text-2xl font-bold text-black px-2">Manage Courses</h4>
        </div>

        {/* start registration */}
        <StartRegistration />
        {/* create new course */}
        <CreateNewCourse />
        {/* courses */}
        {courses.map((course) => {
          return <CourseCard key={course.id} {...course} />;
        })}
      </div>
    </div>
  );
};

export default ManageCourses;
