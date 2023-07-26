import React from "react";
import "./style.css";

const Portfolio = () => {
  return (
    <section id="Working-Projects" className="Working-Projects">
      <h2>Working Projects</h2>
      <div className="row">
        <div className="col-lg-6">
          <div className="article">
            <p>mySQL Employee tracker</p>
            <a href="https://github.com/PhilippWinston/mySQL-emp-tracker">
              <img
                src="./assets/images/mySQL-emp-tracker.png"
                alt="mySQL Employee tracker Link"
                className="img-fluid"
              />
            </a>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="article">
            <p>ecommerce API</p>
            <a href="https://github.com/PhilippWinston/online-ecommerce-api">
              <img
                src="./assets/images/ecommerce.png"
                alt="ecommerce API link"
                className="img-fluid"
              />
            </a>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6">
          <div className="article">
            <p>Group Project, Marvel Gif Engine</p>
            <a href="https://philippwinston.github.io/first-group-project/">
              <img
                src="./assets/images/Marvel-GIFHY-group copy.png"
                alt="Group Project, Marvel Gif Engine link"
                className="img-fluid"
              />
            </a>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="article">
            <p>Group Project, HWP_Meal-Planner</p>
            <a href="https://github.com/PhilippWinston/HWP_Meal-Planner">
              <img
                src="./assets/images/home.png"
                alt="Group Project, HWP_Meal-Planner"
                className="img-fluid"
              />
            </a>
          </div>
        </div>
      </div><div className="row">
        <div className="col-lg-6">
          <div className="article">
            <p>Weather Tracker</p>
            <a href="https://github.com/PhilippWinston/weather-tracker">
              <img
                src="./assets/images/weather-tracker.png"
                alt="Weather Tracker link"
                className="img-fluid"
              />
            </a>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="article">
            <p>SVG tool</p>
            <a href="https://github.com/PhilippWinston/SVG-logo-maker-tool">
              <img
                src="./assets/images/svg-logo-maker.png"
                alt="SVG tool link"
                className="img-fluid"
              />
            </a>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <div className="article">
            <p>More coming Soon!</p>
            <a href="https://philippwinston.github.io/Philipp-Winston-Portfolio/">
              <img
                src="./assets/images/coming-soon.jpeg"
                alt="More Projects Coming Soon"
                className="img-fluid"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
