import React from 'react';
import AdminNavbar from '../../components/admin/AdminNavbar';
import QuickStats from '../../components/admin/QuickStats';
import QuickActions from '../../components/admin/QuickActions';
import RecentActivities from '../../components/admin/RecentActivities';
import Profile from '../../components/admin/Profile';

const AdminDashboard = () => {
  return (
    <div className="bg-[#e6e6e6] h-auto flex flex-row">
      <AdminNavbar />

      <div className="bg-white shadow-md rounded-xl h-full w-[78%] p-8 m-8 ml-0">
        <h1 className="text-2xl font-bold">Welcome Mr. Sameer</h1>
        <div className="flex flex-col justify-between h-full">
          <div className="flex flex-row my-4">
            {/* quick stats */}
            <QuickStats />
            {/* quick actions */}
            <QuickActions />
          </div>
          <div className="flex flex-row my-4">
            {/* recent activities */}
            <RecentActivities />
            {/* profile */}
            <Profile />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
