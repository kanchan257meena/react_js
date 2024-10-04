import React, { useState } from 'react'

const Coustomhook_13 = () => {
    let[count,setcount]=useState(0)
    let[color,setcolor]=useState(false)
   let [data,setdata]=useState('color')
    // let[count1,setcount1]=useState(0)
    const increment=()=> setcount(count+1);
    const decrement=()=> setcount(count-1);
//     function colr(){
// setcount1(count1+1)
//         if(count1%2 !=0){
//             setcolor('green')
//         }
//         else if(count1%2 ==0){
//             setcolor('red')
//         }

//     }
let[value,setvalue]=useState(0)



let changecolor=(e)=>{
   setdata(e.target.value)
}

let changecolor2=(e)=>{
    setdata(e.target.value)
   
}
let arr=[1]
function arrayy(b){
    let input=b.target.value
    const intValue = Number(input);
setvalue(intValue);

for(let i=0;i<value;i++){
arr.push(i)
}


}

  return (
    <div>
      <h1>Coustom hook</h1>
    <h3>Count : {count} </h3>  
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>

    
{/* ternary operator */}
<button  style={color? {backgroundColor:'red'}:{backgroundColor:'green'} } onClick={changecolor} >green/red</button>
<input  style={{backgroundColor:data}} onChange={changecolor2}  type="text" placeholder='type color'/>
 {/* <button style={{backgroundColor:color}} onClick={colr}> green/red  </button> */}
 <input type="text" onChange={arrayy}/>

 {
    arr.map((a,b)=>{
return(
    <></>
)
    })
 }

{/* <h3>{value}</h3> */}
    </div>
  )
}

export default Coustomhook_13
