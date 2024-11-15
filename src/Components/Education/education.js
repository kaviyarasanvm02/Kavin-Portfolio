import React from 'react';
import './education.css';
import NSMVPS from '../../Assets/NSMVPS.png';
import Alagappa from '../../Assets/Alagappa_Logo.png';
import Jspiders from '../../Assets/jspiders_logo.jpeg';

const education = () => {
  return (
    <section id='education'>
        <span className="educationTitle">Education</span>
        <spn className="educationDesc"> In my educational expedition, I've journeyed through a realm of <br /> self-exploration and continuous personal evolution. Here, I present <br /> the intricacies of my educational background.
        </spn>
        <div className="educationBars">
            <div className="educationBar">
                <img src={Jspiders} alt="Jspiders" className="educationBarImg" />
                <div className="educationBarText">
                    <h2>Jspider Software training institute</h2>
                    <p>Full Stack Developement Course</p>
                    <p>October 2022 - July 2023 | Full stack developer certificate</p>
                    <p>Successfully obtained a Bachelor of Technology degree specializing in Information Technology from Jspiders Training Institute from Bangalore.</p>
                </div>
            </div>
            <div className="educationBar">
                <img src={Alagappa} alt="Alagappa" className="educationBarImg" />
                <div className="educationBarText">
                    <h2>Alagappa University</h2>
                    <p>Bachelor Of Science - Physics</p>
                    <p>June 2019 - June 2022 | Grade:7.1</p>
                    <p>I completed my college education at Alagappa Arts and Science college from Karaikudi.</p>
                </div>
            </div>
            <div className="educationBar">
                <img src={NSMVPS} alt="NSMVPS" className="educationBarImg" />
                <div className="educationBarText">
                    <h2>Nsmvps Higher Secondary School</h2>
                    <p>Xll</p>
                    <p>June 2018 - April 2019 | Grade:6.4</p>
                    <p>I completed my school education at Nsmvps higher secondary school from Devakottai.</p>
                </div>
            </div>
        </div>
        </section>
  )
}

export default education;