import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const SignUp = () => {
  let [input, setinput] = useState({ email: "", password: "" });
 
  let navigate=useNavigate();
  function fun1(e) {
    let { name, value } = e.target;
    setinput({ ...input, [name]: value });
    // setinput(e.target.value)
    // console.log(input);
  }
  function done(e) {
    e.preventDefault();
    
    localStorage.setItem("userData", JSON.stringify(input));
    console.log("User data saved:", input);
    // console.log('',input);
    navigate('/input');
  }

  return (
    <div className="bg">
      <div class="card">
        <h6>Sign Up</h6>
        <br />
        <h6>Email</h6>
        <input
          name="email"
          onChange={fun1}
          value={input.email}
          type="email"
          placeholder="Enter you email"
        />{" "}
        <br />
        <h6>Password</h6>
        <input
          name="password"
          value={input.password}
          onChange={fun1}
          type="password"
          placeholder="Enter your password"
        />{" "}
        <br />
        {/* <span> <input type="checkbox" name="option1" value="1"/> Remember me ?</span> <br /> */}
        {/* <h7>Remember me</h7> */}
        <button onClick={done} style={{ height: "37px", borderRadius: "2" }}>
          Sign Up
        </button>
        <div className="line">
          <hr style={{ width: "100px", backgroundColor: "white" }} /> OR{" "}
          <hr style={{ width: "100px", backgroundColor: "white" }} />
        </div>
        <Link class="link" to="/input">
          Login
        </Link>
      </div>
    </div>
  );
};

export default SignUp;
