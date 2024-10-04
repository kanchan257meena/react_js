import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
const Login = () => {
  let [input,setinput]=useState({  email:"", password:""});
  const navigate = useNavigate(); 

  function fun1(e){
  let { name ,value}=e.target;
  setinput({...input,[name]:value})
  // setinput(e.target.value)
  // console.log(input);

  }

  function done(e){
    e.preventDefault()
    console.log('',input);
    const storedUserData = JSON.parse(localStorage.getItem('userData'));
    if(storedUserData){
    // Check if the stored data matches the login input
    if (
      
      storedUserData.email === input.email &&
      storedUserData.password === input.password
    ) {
      alert("Login successful!");
      navigate('/home');
    } else {
      alert("Invalid email or password");
    }
    
  }
  else{
alert("user information not found !");
  }
  }
  return (
    <div>
 
       <div class="card">
        <h6>Login</h6>
        <br />
        <h6>Email</h6>
        <input name='email' value={input.email} onChange={fun1} type="email" placeholder='Enter you email' /> <br />
         <h6>Password</h6> 
         <input  name='password' value={input.password} onChange={fun1} type="password" placeholder='Enter your password' /> <br />
        <span> <input type="checkbox" name="option1" value="1"/> Remember me ?</span> <br />
         {/* <h7>Remember me</h7> */}
         <button onClick={done}>LOGIN</button>

         <div className='line'>
          <hr style={{width:'100px', backgroundColor:'white'}} /> OR  <hr style={{width:'100px', backgroundColor:'white'}} /> 

        </div>
         <Link class="link" to='/' >Sign Up</Link>
{/* </div> */}


    </div>
    </div>
  )
}

export default Login
