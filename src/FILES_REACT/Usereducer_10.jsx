import React, { useReducer, useState } from 'react'

const Usereducer_10 = () => {
    let[count,dispatch]=useReducer(reduce,0)
    let[color,setcolor]=useState()

    function fun1(){
        dispatch({type:'incre'})
    
    }
    function fun2(){
        dispatch({type:'decre'})
    
    }

    function fun3(){
        setcolor('pink')
    }

    function reduce(count,action){
        if(action.type==='incre'){
            return count+=1;
        }
        else if(action.type==='decre'){
            return count-=1;
        }
    }
  return (
    <div style={{backgroundColor:{color}}}>
      <h1>Use reducer</h1>
      <h3>{count}</h3>
      <button onClick={fun1}> Increment</button>
      <button onClick={fun2}> Decrement</button>
      <button onClick={fun3}>change color</button>


{/* Props drilling ??? */}






    </div>
  )
}

export default Usereducer_10
