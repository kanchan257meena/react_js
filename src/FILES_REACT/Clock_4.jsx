import React, { useState } from 'react'

const Clock_4 = () => {
    let[time,SetTime]=useState()
    let[date,setdate]=useState()
    
    setInterval(() => {
       let time=new Date().toLocaleTimeString() 
       let date=new Date().toLocaleDateString()
       setdate(date)
       SetTime(time)
    }, )



   let[data,Setdata]=useState(" ")
    function fun1(e){
       Setdata(e.target.value)

        
    }
//  let[data2,Setdata2]=useState(data)
 function fun3(){
    // Setdata(ok.target.value)
 }



let[bcolor,Setbcolor]=useState()

    function fun2(){
Setbcolor('pink')
    }


    return (
 <div style={{backgroundColor:bcolor,height:'100vh'}}>
     {time} <br />
     {date} <br />{data} <br/>

    <button style={{height:'40px'}} onClick={fun2}>click to change backgroundColor</button>    

<input style={{height:'30px' ,backgroundColor:'white' ,marginLeft:'20px'}} onChange={fun1}
 type="text"  placeholder='enter here'/>

<button onClick={fun3}> Click</button>



    </div>

  )
}

export default Clock_4
