import React from "react";
import "./style.css";

const Portfolio = () => {
  return (
    <section id="Working-Projects" className="Working-Projects">
      <h2>Working Projects</h2>
      <div className="row">
        <div className="col-lg-6">
          <div className="article">
            <p>ADA Refactoring Project</p>
            <a href="https://philippwinston.github.io/ADA-Refactoring/">
              <img
                src="./assets/images/ADA-Refactoring.png"
                alt="ADA Refactoring Project Link"
                className="img-fluid"
              />
            </a>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="article">
            <p>Study Guide Project</p>
            <a href="https://philippwinston.github.io/school-prework-guide/">
              <img
                src="./assets/images/prework-study-guide.png"
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
