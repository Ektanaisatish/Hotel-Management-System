import React from "react";
// import { useNavigate, Link } from "react-router-dom";
function Navbar() {
  // const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("currentUser"));
  
  //console.log("user", user);
  function handleLogout() {
    localStorage.removeItem("currentUser");
    console.log("currentUser");
    //window.location.href = "/home";
    // Clear user session, reset state, and redirect to login page
   
    // setIsLoggedIn(false);
    // navigate("/home");
    // setIsLoggedout(true);
   
  }
  return (
    <div>
      <nav class="navbar navbar-expand-lg ">
        <a class="navbar-brand" href="#">
          Quail Hotel
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav mr-auto">
          <li class="nav-item">
                  <a class="nav-link" href="/Menu">
                    Menu
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/Guest">
                    Guest
                  </a>
                </li>

            {user ? (
              <>
                <h1 style={{ color: "pink" }}> {user.name} </h1>
                <li class="nav-item">
                  {/* <a class="nav-link" onClick={handleLogout}>
                    Logout
                  </a> */}
                </li>
              </>
            ) : (
              <>
                <li class="nav-item active">
                  <a class="nav-link" href="/register">
                    Register <span class="sr-only"></span>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/Login">
                    Login
                  </a>
                </li>
              </>
            )}
             <li class="nav-item active">
          {/* <a class="nav-link" href="/register">Register <span class="sr-only"></span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/Login">Login</a> */}
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/" onClick={handleLogout}>Logout</a>
        </li>
       
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
