import React from 'react';
import FacultyNavbar from '../../components/faculty/FacultyNavbar';
import CourseCard from '../../components/faculty/CourseCard';
const FacultyDashboard = () => {
  const courses = [
    {
      id: 1,
      title: 'CSE 2024 - SEM 2 - 2024 (Strength: 65)',
      subject: 'MAL 103',
      type: 'Theory',
      scheme: 'Decided',
      grades: 'Unlocked',
    },
    {
      id: 2,
      title: 'CSD 2024 - SEM 2 - 2024 (Strength: 61)',
      subject: 'MAL 103',
      type: 'Theory',
      scheme: 'Decided',
      grades: 'Unlocked',
    },
    {
      id: 3,
      title: 'CSD 2024 - SEM 2 - 2024 (Strength: 61)',
      subject: 'MAL 103',
      type: 'Theory',
      scheme: 'Decided',
      grades: 'Unlocked',
    },
    {
      id: 4,
      title: 'CSD 2024 - SEM 2 - 2024 (Strength: 61)',
      subject: 'MAL 103',
      type: 'Theory',
      scheme: 'Decided',
      grades: 'Unlocked',
    },
    {
      id: 5,
      title: 'CSD 2024 - SEM 2 - 2024 (Strength: 61)',
      subject: 'MAL 103',
      type: 'Theory',
      scheme: 'Decided',
      grades: 'Unlocked',
    },
  ];

  return (
    <div className="bg-[#e6e6e6] h-auto flex flex-row">
      <FacultyNavbar />
      <div className="flex flex-col items-center w-[80%] p-4">
        {courses.map((course) => (
          <CourseCard key={course.id} {...course} />
        ))}
      </div>
    </div>
  );
};

export default FacultyDashboard;
