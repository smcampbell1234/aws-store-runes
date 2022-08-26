import React from 'react';
import DashboardNavbar from '../components/DashboardNavbar';
import {Outlet} from "react-router-dom";

function AdminDashboard() {
  return (
    <div>
      <div className="dashboard-wrapper">
        <DashboardNavbar />
        <Outlet />
      </div>
    </div>
  )
}

export default AdminDashboard
