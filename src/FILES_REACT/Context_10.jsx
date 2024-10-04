 import React from 'react'
import { useContext } from 'react'
import Context from '../Context'
 
 const Context_10 = () => {
  
  let data=useContext(Context)
    return (
     <div>
       <h3>{data}</h3>
     </div>
   )
 }
 
 export default Context_10
 