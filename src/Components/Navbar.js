import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'


const Navbar = () => {
    const navigate=useNavigate()
    const [isLogedIn,setIsLogedIn]=useState(false)
  
    useEffect(()=>{
        let isLogIn=localStorage.getItem("login")
        console.log(isLogIn)
                setIsLogedIn(isLogIn)
    }, [])
    const LogInLogOutFunc=()=>{
        if(isLogedIn=="true"){
            localStorage.clear()
        }
        navigate("login")

    }

  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand me-3" href="#"><i className='fa fa-book'>E-Gurukul</i></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link active me-3" aria-current="page" to={"/"}>Home</Link>
        </li>
        <li class="nav-item">
          <Link to={"/About"} class="nav-link me-3">About Us</Link>
        </li>
        <li class="nav-item">
          <Link to={"/courses"} class="nav-link active me-3">Courses</Link>
        </li>
        <li class="nav-item">
          <Link to={"/Getadmission"} class="nav-link active ">Get Admission</Link>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control " type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success me-2" type="submit">Search</button>
    <button className='btn btn-primary me-2' onClick={LogInLogOutFunc} >{isLogedIn=="true" ? "LogOut": "LogIn"}</button>
        
      </form>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
