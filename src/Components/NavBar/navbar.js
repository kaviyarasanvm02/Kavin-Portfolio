import React from 'react'
import './navbar.css';
import logo from '../../Assets/logo.jpg'
import { Link } from 'react-scroll';
import contactImg  from '../../Assets/contact.png'
const navbar = () => {
  return (
   <nav className="navbar">
    <img src={logo} alt="logo" className='logo'/>
     <div className="deskTopMenu">
       <Link className="DeskTopMenuListItem">Home</Link>
       <Link className="DeskTopMenuListItem">About</Link>
       <Link className="DeskTopMenuListItem">Portfolio</Link>
       <Link className="DeskTopMenuListItem">Clients</Link>
     </div>
     <button className="deskTopMenuBtn">
        <img src={contactImg} alt="logo" className="deskTopMenuImg" />Contact Me</button>
   </nav>
  )
}

export default navbar