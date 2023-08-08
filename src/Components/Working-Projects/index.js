import React from "react";
import "./style.css";

const Portfolio = () => {
  return (
    <section id="Working-Projects" className="Working-Projects">
      <h2>Working Projects</h2>
      <div className="row">
        <div className="col-lg-6">
          <div className="article">
            <p>SVG Logo Tool</p>
            <a href="https://github.com/PhilippWinston/SVG-logo-maker-tool">
              <img
                src={process.env.PUBLIC_URL + "/assets/images/SVG.png"}
                alt="ADA Refactoring Project Link"
                className="img-fluid"
              />
            </a>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="article">
            <p>mySQL Employee tracker</p>
            <a href="https://github.com/PhilippWinston/mySQL-emp-tracker">
              <img
                src={process.env.PUBLIC_URL + "/assets/images/mySQL.png"}
                alt="Study Guide Project link"
                className="img-fluid"
              />
            </a>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6">
          <div className="article">
            <p>Ecommerce API</p>
            <a href="https://github.com/PhilippWinston/online-ecommerce-api">
              <img
                src={process.env.PUBLIC_URL + "/assets/images/ecommerce-api.png"}
                alt="Group Project, Marvel Gif Engine link"
                className="img-fluid"
              />
            </a>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="article">
            <p>Weather Tracker</p>
            <a href="https://github.com/PhilippWinston/weather-tracker">
              <img
                src={process.env.PUBLIC_URL + "/assets/images/weather-tracker.png"}
                alt="Group Project, HWP_Meal-Planner"
                className="img-fluid"
              />
            </a>
          </div>
        </div>
      </div><div className="row">
        <div className="col-lg-6">
          <div className="article">
            <p>Group Project, Marvel Gif Engine</p>
            <a href="https://philippwinston.github.io/first-group-project/">
              <img
                src={process.env.PUBLIC_URL + "/assets/images/Marvel-GIFHY-group copy.png"}
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
                src={process.env.PUBLIC_URL + "/assets/images/home.png"}
                alt="Group Project, HWP_Meal-Planner"
                className="img-fluid"
              />
            </a>
          </div>
        </div>
      </div><div className="row">
        <div className="col-lg-12">
          <div className="article">
            <p>Adrenaline, you Workout Hub!</p>
            <a href="https://adrenaline-project3-6992473446fd.herokuapp.com/">
              <img
                src={process.env.PUBLIC_URL + "/assets/images/workout.png"}
                alt="img of Adrenaline, you Workout Hub"
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
                src={process.env.PUBLIC_URL + "/assets/images/coming-soon.jpeg"}
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
