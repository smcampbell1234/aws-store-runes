import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom";

function Error() {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate("/")
    },2800)
  })
  return (
    <div className="error-wrapper">
      <img src="https://img.freepik.com/premium-vector/bearded-viking-warrior-head_9645-1418.jpg?w=2000" alt="viking" />
      <h2>Error: 405 - Arrrr! You shouldn't be here.</h2>
      <h3 onClick={() => navigate(-1)}>Back</h3>
    </div>
  )
}

export default Error
