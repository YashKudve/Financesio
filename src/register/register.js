import React, { useState } from 'react'
import "./register.css"
import Logo from "../components/Financesio logo.png"
import axios from "axios"
import { useHistory } from 'react-router-dom'

const Register = () => {

  const history = useHistory()

  const [user,setUser] = useState({
        name:"",
        email:"",
        password:"",
        confirmPassword:""
    })

    const handleChange = e =>{
      const {name, value} = e.target
      setUser({
        ...user,  //OPerator to keep other values intact while other values are being changed
        [name]:value
      })
    
    }
      const regis = () => {
        const {name, email, password, confirmPassword} = user
        if(name && email && password && (password === confirmPassword)){
          
          axios.post("http://localhost:9002/register", user)
          .then( res => console.log(res))
        }
        else{
          alert("Invalid Input")
        }
        
      }

  return (
    <div className='register'>
      {console.log("User",user)}
        <img src={Logo} alt="Financesio Logo" />
        <h1 className='text-3xl m-2'>REGISTER</h1>
        
        <input type="text" name='name' value={user.name} placeholder='Enter your name' onChange={ handleChange } />
        <input type="text" name='email' value={user.email} placeholder='Enter your email' onChange={ handleChange } />
        <input type="password" name='password' value={user.password} placeholder='Enter your password' onChange={ handleChange } />
        <input type="password" name='confirmPassword' value={user.confirmPassword} placeholder='Confirm your password' onChange={ handleChange } />
        <div className='button' onClick={regis}>Register</div> 
        <div>OR</div>
        <div className="button" onClick={() => history.push("/login")}>Login</div>
      
    </div>
  )
}

export default Register
