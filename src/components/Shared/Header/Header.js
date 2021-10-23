import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';


import './Header.css'
const Header = () => {
  const {user,logOut}=useAuth();
    return (
        <div className="">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container">
  <NavLink className="navbar-brand" to="/">
      <img src="https://i.ibb.co/Pc7TyMw/Screenshot-137-removebg-preview.png" alt=""  className="d-inline-block align-text-top" />
    </NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/home">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="articles">Articels</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="gallery">Gallery</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/contect">Contect Us</NavLink>
        </li>
        <li className="">
          {user?.photoURL?
           <img className="px-2 py-2 user" src={user?.photoURL} alt="" />:
          <img className="px-2 py-2" src="http://amentotech.com/projects/doctreat/wp-content/themes/doctreat/images/user.png" alt="" />
          }
        </li>
        <li className="mt-2 me-5 user-name">{user?.displayName}</li>
        {user?.displayName?
        <li className="mx-4">
        <button className="custom-login-btn custom-btn-logout " onClick={logOut} >Logout</button>
      </li>:
          <li >
          <Link to="/login"><button className="custom-login-btn ">Login</button></Link>
        </li> 
        }
        
      </ul>
    </div>
  </div>
</nav>
        </div>
    );
};

export default Header;