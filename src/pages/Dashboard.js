import React from 'react';
import DashboardNavbar from '../components/DashboardNavbar';
import {Outlet} from "react-router-dom";

function AdminDashboard() {
  return (
    <div>
      <DashboardNavbar />
      <div className="dashboard-wrapper">
        <Outlet />
      </div>
    </div>
  )
}

export default AdminDashboard
