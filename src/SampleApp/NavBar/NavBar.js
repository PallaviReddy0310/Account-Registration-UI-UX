import React from 'react';
import './NavBar.css';
import { NavLink } from 'react-router-dom';
import 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import pic from '../Images/mewocLogo.png';

function NavBar() {
  // if link is active
  let activeLink={
    color:'#2b12a4',
    fontSize:'20px',
    fontWeight:'bold',
    fontFamily:'georgia',
    fontStyle: 'italic'
  }

  //if link is inactive
  let inactiveLink={
    color:'black',
    fontFamily:'arial',
    fontWeight:'bold',
    fontSize:'17px'
  }

  return(
  <nav class="navbar navbar-expand-lg navbar-light" id='navi'>
    <img src={pic} width='221px' height='101px' id='image'/>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <NavLink className='nav-link' to='/' style={({isActive})=>{
          return isActive? activeLink : inactiveLink;
        }}>Home</NavLink>
      </li>
      <li class="nav-item">
        <NavLink className='nav-link mx-5' to='/signin' style={({isActive})=>{
          return isActive?activeLink:inactiveLink;
        }}>Sign in</NavLink>
      </li>
      <li class="nav-item">
      <NavLink className='nav-link' to='/register' style={({isActive})=>{
          return isActive?activeLink:inactiveLink;
        }}>Register</NavLink>
      </li>
    </ul>
  </div>
</nav>
)
}

export default NavBar;