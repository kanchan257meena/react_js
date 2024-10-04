import React, { useEffect, useState } from 'react'
//what is component render!!!!
const UseEffect_6 = () => {
let[data,setdata]=useState(0)
function fun1(){
    setdata(data+1)
}

useEffect(()=>{
   
    console.log('hi');

},[]) //[] use karne par bas ek baar chalega;


  return (
    <div>
        <h1>{data}</h1>
      <button onClick={fun1}>click to increase </button>
    </div>
  )
}

export default UseEffect_6
