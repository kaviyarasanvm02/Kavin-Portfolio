import React from 'react'
import './project.css';
import pysWeb from '../../Assets/PysWeb.png';
import airbuzz from '../../Assets/Airbuzz.png';
import pysAdmin from '../../Assets/PysAdmin.png';
import adabla from '../../Assets/Adabla.png';
import kavinPortfolio from '../../Assets/KavinPortfolio.png';
const Project = () => {
  return (
    <section id='works'>
        <h2 className="workTitle">My Projects</h2>
        <span className="workDesc">I have worked on a wide range of projects. From web apps to <br /> android apps. Here are some of my projects.</span>
        <div className="worksImgs">
            <img src={pysWeb} alt="pysWeb" className="workImg" height={200} width={300}/>
            <img src={airbuzz} alt="airbuzz" className="workImg" height={300} width={300} />
            <img src={pysAdmin} alt="pysAdmin" className="workImg" height={300} width={300}/>
            <img src={adabla} alt="adabla" className="workImg" height={300} width={300}/>
            <img src={kavinPortfolio} alt="kavinPortfolio" className="workImg" height={300} width={300} />
        </div>
        <button className="workBtn">See More</button>
    </section>
  )
}

export default Project