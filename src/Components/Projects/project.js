import React from 'react';
import './project.css';
import pysWeb from '../../Assets/PysWeb.png';
import airbuzz from '../../Assets/Airbuzz.png';
import pysAdmin from '../../Assets/PysAdmin.png';
import adabla from '../../Assets/Adabla.png';
import kavinPortfolio from '../../Assets/KavinPortfolio.png';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Project = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  return (
    <section id='works'>
      <h2 className="workTitle">My Projects</h2>
      <span className="workDesc">
        I have worked on a wide range of projects. From web apps to <br /> android apps. Here are some of my projects.
      </span>
      <Slider {...settings} className="worksImgs">
        <div>
          <img src={pysWeb} alt="pysWeb" className="workImg" />
        </div>
        <div>
          <img src={airbuzz} alt="airbuzz" className="workImg" />
        </div>
        <div>
          <img src={pysAdmin} alt="pysAdmin" className="workImg" />
        </div>
        <div>
          <img src={adabla} alt="adabla" className="workImg" />
        </div>
        <div>
          <img src={kavinPortfolio} alt="kavinPortfolio" className="workImg" />
        </div>
      </Slider>
      <button className="workBtn">See More</button>
    </section>
  );
};

export default Project;
