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
    if (!!auth.name && !!auth.email) {
      setUser(auth)
      navigate("/dashboard")
    } else {
      setError({status:true, message: "Complete name and email fields."})
    }
  }
 
  return (
    <div className="login-wrapper">
      <h2>Login</h2>
      <div className="login-logo">
        <img src="https://png.pngitem.com/pimgs/s/169-1691628_oojs-ui-icon-key-ltr-key-icon-png.png" />
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
        <button className="login-button" type="submit">Enter Site</button>
      </form>
      {
        error.status &&
        <p>{error.message}</p>
      }
    </div>
  )
}

export default Login
