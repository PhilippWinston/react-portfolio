import React from "react";
// import "./style.css";

function Resume() {
  return (
    <div>
      <section id="welcome-section" className="download-intro">
        <div className="flex-row">
          <h2 className="section-title primary-border">My Resume</h2>
        </div>
        <div className="flex-row">
          <div className="download-info">
            <div className="download-text">
              <a href={process.env.PUBLIC_URL + '/assets/files/Philipp-Winston-Resume.pdf'} className="download-logo" download>
                download
              </a>
              <p>
                Please feel free to check out my list of Developer
                Proficiencies!
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="home-page-body" className="resume-body">
        <div className="row">
          <div className="col-md-4">
            <div className="card article">
              <div className="card-body">
                <h5 className="card-title">Front-end Tech</h5>
                <p className="card-text">
                  <ul>
                    <li>HTML5</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>APIs</li>
                    <li>Bootstrap</li>
                    <li>GIT</li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card article">
              <div className="card-body">
                <h5 className="card-title">Back-end Tech</h5>
                <p className="card-text">
                  <ul>
                    <li>Node.Js</li>
                    <li>Jest</li>
                    <li>Express.js</li>
                    <li>MySQL</li>
                    <li>Sequelize</li>
                    <li>Object-Relational Mapping(ORM)</li>
                    <li>Model-View-Controller (MVC)</li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card article">
              <div className="card-body">
                <h5 className="card-title">Performance Tech</h5>
                <p className="card-text">
                  <ul>
                    <li>NoSQL</li>
                    <li>Progressive Web Applications (PWA)</li>
                    <li>MongoDB</li>
                    <li>Mongoose</li>
                    <li>GraphQL</li>
                    <li>React</li>
                    <li>MERN</li>
                    <li>State</li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Resume;
