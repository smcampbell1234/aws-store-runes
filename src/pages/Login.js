import React, {useState} from 'react'
import { useNavigate } from "react-router-dom";
import FormLine from "../components/FormLine";

function Login({setUser}) {
  const [auth,setAuth] = useState({name: "", email: ""});
  const [error,setError] = useState({status: false, message: ""})
  const navigate = useNavigate();

  const handleChange = (e) => {
    setAuth({...auth,[e.target.name]: e.target.value})
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!!auth.name && auth.name==="runes" && !!auth.email && auth.email === "runes") {
      setUser(auth)
      navigate("/dashboard")
    } else {
      setError({status:true, message: "Complete name and email fields."})
    }
  }
 
  return (
    <div className="login-wrapper">
      <div className="login-logo">
        <img src="https://img.freepik.com/premium-vector/bearded-viking-warrior-head_9645-1418.jpg?w=2000" alt="viking" />
      </div>
      <form className="login-form" onSubmit={handleSubmit}>
        <FormLine 
            changeValue={handleChange}
            field={"name"}
            description=""
            value={auth}
            required="not-req"
        />
        <FormLine 
            changeValue={handleChange}
            field={"email"}
            description=""
            value={auth}
            required="not-req"
        />
        <button className="login-button" type="submit">Enter At Your Own Risk</button>
      </form>
      {
        error.status &&
        <p className="login-err-msg">{error.message}</p>
      }
    </div>
  )
}

export default Login
