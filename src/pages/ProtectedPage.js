import React from 'react'
import { Navigate } from "react-router-dom";

function ProtectedPage({ children, user }) {
  console.log("Protected page - user : ",user)
  if (!user.name || !user.email) {
    return <Navigate to="/error" />
  }
  return children;
}

export default ProtectedPage
