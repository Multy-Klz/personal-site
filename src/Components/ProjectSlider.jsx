import React, { Component } from "react";
import Slider from "react-slick";
import ProjectCard from "./ProjectCard";
import projects from "../../public/projects.json"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";





function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <IoIosArrowBack
      className={className}
      style={{ ...style, display: "block", color: "#353434", scale: "2", fontSize: "2rem" }}
      onClick={onClick}
    />
  );
}

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <IoIosArrowForward
      className={className}
      style={{ ...style, display: "block", color: "#353434", scale: "2", fontSize: "2rem" }}
      onClick={onClick}
    />
  );
}

function ProjectSlider() {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "0px",
    slidesToShow: 2,
    speed: 500,
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,
  };

  return (
    <div className="flex flex-col text-center justify-center overflow-visible">
      <Slider {...settings}>
        {projects.map((project, index) => {
          return <ProjectCard key={index} name={project.name} description={project.description} source={ project.source} />
        }) }
      </Slider>
    </div>
  );
}

export default ProjectSlider;
