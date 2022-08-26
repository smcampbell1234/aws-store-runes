import React from 'react'
import { NavLink } from "react-router-dom";

function DashboardNavbar() {
  return (
    <nav className="dashboard-navbar-wrapper">
      <NavLink 
        to="/dashboard/edit"
        className={({isActive}) => isActive ? "dash-link link dash-active" : "dash-link link"}
        >Edit</NavLink>
      <NavLink 
        to="/dashboard/add"
        className={({isActive}) => (isActive ? "dash-link link dash-active" : "dash-link link")}
        >Add</NavLink>
      <div className="dummy-div"/>
      <div className="dummy-div"/>
    </nav>
  )
}

export default DashboardNavbar
