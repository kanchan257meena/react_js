import React, { useState } from 'react'

const Form_9 = () => {

let [input,setinput]=useState({ name:"", email:"", password:""});


function fun1(e){
let { name ,value}=e.target;
setinput({...input,[name]:value})
// setinput(e.target.value)
// console.log(input);

}
function done(e){
    e.preventDefault()
    console.log('heheheh',input);
    
  }

  return (
    <div>
        <fieldset >
        <legend>Form</legend>
      <form  onSubmit={done}>
      {/* <h1>{input}</h1> */}
            
            <input name='name'value={input.name}  onChange={fun1}  type="text"  placeholder='enter your name' /> <br /> <br />
            <input name='email' value={input.email}  onChange={fun1}type="email" placeholder='enter your email' /> <br /> <br />
            <input  name='password' value={input.password} onChange={fun1} type="password"  placeholder='enter your password'/> <br />
            <button  type='submit'> save</button>
      </form>
      </fieldset>
    </div>
  )
}

export default Form_9
