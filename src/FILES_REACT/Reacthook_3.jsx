//function is always static and class is dynamic but function is 
// easy to use , here react hook comes into picture
import React, { useState } from 'react'
// import { useState } from 'react'

// let[current value, changed value]=usestate(initial value)
const Reacthook_3 = () => {
    let [count,SetCount]=useState(0)
    let [color,SetColor]=useState('white')
    let [colori,SetColori]=useState('white')
    function fun1(){
        SetCount(count+1)
      
    }
    function fun2(){
        SetColor(' rgb(248, 216, 221)')
        SetColori('black')

    }
    let[font,Setfont]=useState('')
    function fun3(){
        Setfont('italic')
        // Setfont('oblique')

    }
    
  return (
    
    //**Setcount is used as a function to change the value of count

    <div style={{ alignContent:'center',color:colori, backgroundColor:color ,height:'100vh',width:'100vw',fontStyle:font}} > 

    {/* <div style={{color:color}} > this is used to change the text color only */}

        <h1 style={{color:colori}}>hey </h1>
      <p>{count}</p>
      <button style={{fontStyle:font}} onClick={fun1}>Click to increase</button>
      <button style={{fontStyle:font}} onClick={fun2}>Click to change color</button>
      <button style={{fontStyle:font}} onClick={fun3}>click to chang font style </button>
    </div>
  )
}

export default Reacthook_3
