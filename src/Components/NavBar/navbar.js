import React, { useState } from 'react'
import './navbar.css';
import logo from '../../Assets/Portfoliologo.jpg'
import { Link } from 'react-scroll';
import contactImg  from '../../Assets/contact.png'
import menu from '../../Assets/menu.png'
const Navbar = () => {
  const [showMenu,setShowMenu] = useState(false);
  return (
   <nav className="navbar">
    <Link
        to="intro"
        spy={true}
        smooth={true}
        offset={-50}
        duration={500}
        className="logo-link"
      >
        <img src={logo} alt="logo" className="logo" />
      </Link>
     <div className="deskTopMenu">
       <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-50} duration={500}  className="DeskTopMenuListItem">Home</Link>
       <Link activeClass='active' to='skills'spy={true} smooth={true} offset={-50} duration={500} className="DeskTopMenuListItem">Skills</Link>
       <Link activeClass='active' to='works'spy={true} smooth={true} offset={-50} duration={500} className="DeskTopMenuListItem">Projects</Link>
       <Link activeClass='active' to='education'spy={true} smooth={true} offset={-50} duration={500} className="DeskTopMenuListItem">Education</Link>
     </div>
     <button className="deskTopMenuBtn" onClick={() =>{
      document.getElementById("contact").scrollIntoView({behavior:'smooth',});
     }}>
        <img src={contactImg} alt="logo" className="deskTopMenuImg" />Contact Me</button>

        <img src={menu} alt="Menu" className='mobMenu'onClick={() =>setShowMenu(!showMenu)}/>
     <div className="navMenu" style={{display: showMenu? 'flex' : 'none'}}>
       <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-50} duration={500}  className="ListItem" onClick={()=>setShowMenu(false)}>Home</Link>
       <Link activeClass='active' to='skills'spy={true} smooth={true} offset={-50} duration={500} className="ListItem"  onClick={()=>setShowMenu(false)}>Skills</Link>
       <Link activeClass='active' to='works'spy={true} smooth={true} offset={-50} duration={500} className="ListItem"  onClick={()=>setShowMenu(false)}>Projects</Link>
       <Link activeClass='active' to='education'spy={true} smooth={true} offset={-50} duration={500} className="ListItem" onClick={()=>setShowMenu(false)}>Education</Link>
       <Link activeClass='active' to='contact'spy={true} smooth={true} offset={-50} duration={500} className="ListItem" onClick={()=>setShowMenu(false)}>Contact</Link>
     </div>
   </nav>
  )
}

export default Navbar