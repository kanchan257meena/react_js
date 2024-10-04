import React, { useEffect, useRef, useState } from 'react'

// Does Not Cause Re-renders: Unlike useState, .
// updating a useRef value does not cause the component to re-render.


const Userefrence_12 = () => {



// let [state,setstate]=useState('')

//    let data= useRef(0);

// useEffect(()=>{
//     data.current=data.current+1;
// },[state]);

let data= useRef();
console.log(data.current,"data");




  return (
    <div>
      
       {/* <input type="text" onChange={(e)=>setstate(e.target.value)}/>
       <p>{data.current}</p> */}


   <h1 ref={data}> ok</h1>

    </div>



  )
}

export default Userefrence_12
