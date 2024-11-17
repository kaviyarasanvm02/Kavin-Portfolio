import React from 'react';
import './skills.css';
import UIDesign from '../../../Assets/ui-design.png';
import WebDesign from '../../../Assets/website-design.png';
import AppDesign from '../../../Assets/app-design.png';

const Skills = () => {
  return (
    <section id='skills'>
        <span className="skillTitle">What I do</span>
        <spn className="skillDesc"> I’m passionate about applying modern web technologies and best coding practices to solve complex problems. Known for my commitment to continuous learning, I thrive in cross-functional teams where I contribute innovative solutions and drive high-quality results.
        </spn>
        <div className="skillBars">
            <div className="skillBar">
                <img src={UIDesign} alt="UIDesign" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>UI/UX Design</h2>
                    <p>As a UI/UX Designer, I specialize in crafting visually appealing and highly functional digital interfaces that prioritize user experience.</p>
                </div>
            </div>
            <div className="skillBar">
                <img src={WebDesign} alt="WebDesign" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>Web Design</h2>
                    <p>Web design is the process of  graphic design principles, user experience (UX) design, and coding to build sites that are not only aesthetically pleasing but also user-friendly and responsive on various devices.</p>
                </div>
            </div>
            <div className="skillBar">
                <img src={AppDesign} alt="AppDesign" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>App Design</h2>
                    <p>App design is the process of crafting a mobile or web application interface to be visually engaging, intuitive, and highly functional.</p>
                </div>
            </div>
        </div>
        </section>
  )
}

export default Skills