import React from 'react';
import './intro.css';
import bg from '../../../Assets/HeroImg.jpg';
import btnImg from '../../../Assets/hireme.png'
import { Link } from 'react-scroll';

const Intro = () => {
  return (
   <section id="intro">
    <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introText">I'm <span className="introName">Kaviyarasan</span><br />Frontend Developer</span>
        <p className="introPara">
        With a strong background in web design, I specialize in <br /> crafting visually captivating and highly functional websites<br /> that deliver seamless user experiences.
      </p>
        <Link><button className="btn"><img src={btnImg} alt="Hire Logo" className='btnImg' />Hire Me</button></Link>
    </div>
    <img src={bg} alt="profile" className="bg" />
   </section> 
  )
}

export default Intro