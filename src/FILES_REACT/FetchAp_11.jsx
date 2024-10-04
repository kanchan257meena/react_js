import React, { useEffect, useState } from 'react'
import axios from 'axios'


const FetchAp_11 = () => {
 
 let [data,setdata]=useState([])
 let [data3,setdata2]=useState([])
  

 async function apiCall()
  {
    let apiData= await axios('https://dummyjson.com/recipes')
    setdata (apiData.data.recipes)
  }

  useEffect(()=>{
    apiCall()
  },[])

 
  
function fun3(id){
let newData=data.filter((x,y)=>{
  return y!=id
});
setdata(newData);


}

function fun4(id2){
  let data2=data.filter((k,l)=>{
    return l===id2
  });
  setdata2([...data3,data2]);
}
  


  return (
<>

{/* <nav> <a href="">cart<li>{data3}</li></a></nav> */}

<nav>
        <a href="">Cart ({data3.length} items)</a>
      </nav>
     

      <div className='main'>{ 
    


     data.map(function(a,b){
         console.log(a);
        return(
          <>

          <div key={b} className="card">
         
          <img className='image'  src={a.image} alt="" />
          <h3 class='name' >{a.name}</h3>
          <div  className="buttons">
          <button onClick={() => fun3(b)}>delete</button>
        
<button onClick={()=>fun4(b)}>add to cart</button>
{/* <button> </button>  */}
          </div>
          </div>

          </>
        )
      
      }) 
    }

    
     </div> 
     
    
    </>
  )
  
}

export default FetchAp_11
