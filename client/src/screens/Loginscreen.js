// import React,{useState} from 'react'
// import axios from "axios";

// function Loginscreen() {

//     const[email,setEmail]= useState('')
//     const[password,setPassword]= useState('')

// async function login(){

//     const user={
//         email,
//         password
//     }
//     try {
//       const result = await axios.post('http://localhost:5000/register/login',user).data
//   } catch (error) {
//       console.log(error)
//   }
//   console.log(user)
// }
//     return (
//     <div className="row justify-content-center mt-5">
//       <div className="col-md-5">
//         <div>
//             <h2>login</h2>
//               <input type="email" className="form-control" placeholder="Email"
//              value= {email} onChange= {(e)=>{setEmail(e.target.value)}}/>
//               <input type="password" className="form-control" placeholder="Password"
//              value= {password} onChange= {(e)=>{setPassword(e.target.value)}}/>
//              <button className='btn btn-primary'  onClick={login}>Login</button>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Loginscreen
// import React, { useState } from 'react';
// import axios from "axios";
// import { useNavigate } from 'react-router-dom';

// function Loginscreen() {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const navigate = useNavigate(); // Import and use the useNavigate hook

//     async function login() {
//         const user = {
//             email,
//             password
//         };
//         try {
//             const result = await axios.post('http://localhost:5000/register/login', user);
//             console.log(result.data); // Assuming your server responds with user data upon successful login
//             // Redirect to home page upon successful login
//             navigate('/home');
//         } catch (error) {
//             console.log(error);
//         }
//     }

//     return (
//         <div className="row justify-content-center mt-5">
//             <div className="col-md-5">
//                 <div>
//                     <h2>login</h2>
//                     <input type="email" className="form-control" placeholder="Email"
//                         value={email} onChange={(e) => { setEmail(e.target.value) }} />
//                     <input type="password" className="form-control" placeholder="Password"
//                         value={password} onChange={(e) => { setPassword(e.target.value) }} />
//                     <button className='btn btn-primary' onClick={login}>Login</button>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Loginscreen;

import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import Loader from "../component/Loader";
import Error from "../component/Error";

function Loginscreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [IsLoggedout,setIsLoggedout] = useState(true);
  const navigate = useNavigate(); // Import and use the useNavigate hook
  
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState();

  async function login() {
    const user = {
      email,
      password,
    };
    try {
      setloading(true);
      const result = await axios.post(
        "http://localhost:5000/register/login",
        user
      );
      setloading(false);
      console.log(result.data); // Assuming your server responds with user data upon successful login
      // Set isLoggedIn to true upon successful login
      setIsLoggedIn(true);
      // Redirect to home page upon successful login
      navigate("/hotel");
      localStorage.setItem("currentUser", JSON.stringify(result.data));
            // Retrieve user name from user data and display it
          //  const userData = result.data.name; // Assuming the user object has a 'name' property
           // document.getElementById("name").innerText = userData;
    } catch (error) {
      console.log(error);
      setloading(false);
      seterror(true)
    }
    //console.log(user)
  }

//   function logout() {
//     // Clear user session, reset state, and redirect to login page
// localStorage.removeItem("currentUser")
//     setIsLoggedIn(false);
//     navigate("/home");
// setIsLoggedout(true);
// window.location.href='/hotel'
//   }

  return (
    <div>
      {loading && <Loader />}
     
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
        {error && <Error message='invalid credentials'/>}
         
          <div className="collapse navbar-collapse" id="navbarNav">
            {/* <ul className="navbar-nav">
              {isLoggedIn ? (
                <li className="nav-item">
                  <button className="btn btn-link" onClick={logout}>
                    Logout
                  </button>
                </li>
//window.location.href='/hotel'

              ) : null}
            </ul> */}
          </div>
        </div>
      </nav>
      <div className="row justify-content-center mt-5">
        <div className="col-md-5">
          <div>
            <h2>Login</h2>
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <button className="btn btn-primary" onClick={login}>
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Loginscreen;
