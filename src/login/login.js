import React, {useState} from 'react'
import "./login.css"
import Logo from "../components/Financesio logo.png"
import axios from "axios"
import { useHistory } from 'react-router-dom'


const Login = () => {

  const history = useHistory()

  const [user,setUser] = useState({
    
    email:"",
    password:""
    
})

const handleChange = e =>{
  const {name, value} = e.target
  setUser({
    ...user,
    [name]:value
  })
}

const login = () => {
  axios.post("http://localhost:9002/login", user)
  .then(res => alert(res.data.message))
}
  return (
    <div className='login'>
      {console.log("User",user)}
      <img src={Logo} alt="Logo" />
      <h1 className='text-3xl m-2'>LOGIN</h1>
      <input type="text" placeholder='Enter your email' name='email' value={user.email} onChange={handleChange} /> <br />
      <input type="password" placeholder='Enter your password' name='password' value={user.password} onChange={handleChange} />
      <div className='button' onClick={login}>Login</div> 
      <div>OR</div>
      <div className="button" onClick={() => history.push("/register")}>Register</div>
    </div>
  )
}

export default Login
