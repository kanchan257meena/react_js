// import React from 'react'
import './App.css'
// import './FILES_REACT/Form_9_1.css'
import New_1 from "./FILES_REACT/New_1"
import Reacthook_3 from "./FILES_REACT/Reacthook_3";
import Clock_4 from "./FILES_REACT/clock_4";
import ToDoList_5 from "./FILES_REACT/ToDoList_5";
import UseEffect_6 from "./FILES_REACT/UseEffect_6";
import Routing_7 from "./FILES_REACT/Routing_7";
import{BrowserRouter,Route ,Routes } from 'react-router-dom'

// import Home from "./FILES_REACT/routingfiles/Home";
import About from "./FILES_REACT/routingfiles/About";
import Contact from "./FILES_REACT/routingfiles/Contact";
import Bootstrap from "./FILES_REACT/Bootstrap";

// import './FILES_REACT/Bootstrap.css'
import Form_9 from './FILES_REACT/Form_9';


import Form_9_1 from './FILES_REACT/form_9_1';
import Login from "./FILES_REACT/routingfiles/Login";
import SignUp from "./FILES_REACT/routingfiles/SignUp";
import Home from './FILES_REACT/routingfiles/Home';
import Usereducer_10 from './FILES_REACT/Usereducer_10';
import Context_10 from './FILES_REACT/Context_10';
import FetchAp_11 from './FILES_REACT/FetchAp_11';
import './FILES_REACT/FetchAp_11.css'
import Userefrence_12 from './FILES_REACT/Userefrence_12';
import Coustomhook_13 from './FILES_REACT/Coustomhook_13';

const App = () => {
  let arr=[1,2,3,4,5,6];
    let a=" { this is pass in 3 steps }";
  
  return (
    <div>
      {/* <h1>ok</h1> */}

      {/* ALL THE CSS WILL BE WRITTEN IN { } */}
  {
     arr.map((a)=>{
      return(<>
    
        {/* <li>{a}</li>  */}
        {/* DYNAMIC ALLOCATION WILL BE DONE IN {a} */}
        </>
      )
    })
  }




{/* {} means variable in data */}
  {/* <New_1 data={a} />       */}
  {/* <Reacthook_3/>                           */}
  {/* <Clock_4/> */}
  {/* <ToDoList_5/> */}
  {/* <UseEffect_6/> */}
  
  {/* <BrowserRouter>
  <Routing_7/>
  <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/About...' element={<About/>} />
        <Route path='/Contact' element={<Contact/>} />
      </Routes>
      </BrowserRouter> */}

{/* <Bootstrap/> */}
{/* <Form_9/> */}
 
 {/* <BrowserRouter>
 <Form_9_1/>
 <Routes>
  <Route path='/'element={<SignUp/>} />
  <Route path='/input'element={<Login/>} />
  <Route path='/home' element={<Home/>}/>
 </Routes>
 </BrowserRouter> */}

{/* <Usereducer_10/> */}
{/* <Context_10/> */}


{/* <FetchAp_11/> */}
{/* <Userefrence_12/> */}
<Coustomhook_13/>
    </div>

  )
}

export default App
