import React from "react";
import underline from "../media/floral.svg";
import first from "../media/first.jpeg";

const AboutMe = () => {
  return (
    <div>
      <h2 className="Header text-5 animated fadeInDown">ABOUT ME</h2>
      <div className="text-backing2 about-me-padding text-1 animated fadeInUp delay-1s">
        <h2 className="about-me-padding new-text-size">
          'Impulsive Accomplisher'
        </h2>
        <div className="card-width2">
          <p>My friends often laugh when I tell them what next.</p>
          <p>
            {" "}
            Thankfully for me, software engineering couldn't be a wiser career
            choice. After over 10 years in the healthcare field, I made the
            decision in 2018 to change my career path to become a software
            engineer and haven't looked back! Switching to software engineering
            was a no-brainer for me. I previously did art and photography as
            A-level subjects at a performing arts sixth-form college and went on
            to do a foundation year in art and photography, before pursuing
            healthcare. Software engineering, for me, has re-ignited my
            creativity. It also challenges me mentally on a daily basis which is
            all could ask for from a life-long career.
          </p>
          <p>
            In my free time I enjoy being social. I also enjoy travelling solo,
            as I am very much a people person and enjoy the undivided
            opportunity of meeting new people from all walks of life and
            culture. I also use this as an opportunity to try and enhance my
            photography skills and try out different outdoor activities.
          </p>
          <p>
            In early March 2020, I completed the Software Engineering Immersive
            curriculum at Flatiron School London, whose curriculum largely
            revolved around React.js/JavaScript frontend, Ruby/Rails backend
            and versions of SQL, as well as RESTful API concepts, utilising full
            CRUD actions and use of hooks and Redux. Since, I have continued to
            enhance my skill set and began some contract work as a web developer
            with Engaging Tech, who’s stack involves React.js, node.js, mongoDB,
            Redux-sagas, Apollo graphQL.
          </p>
          <h3>Current and ever-growing tech skillset:</h3>
          <ul>
            <li>Ruby</li>
            <li>Ruby on Rails</li>
            <li>Sinatra</li>
            <li>Vanilla JavaScript</li>
            <li>ES6</li>
            <li>React.js</li>
            <li>Hooks</li>
            <li>Redux and Redux-Sagas</li>
            <li>Mongo DB</li>
            <li>SQL - SQLite3, mySQL, Postgresql, Apollo graphQL</li>
            <li>HTML/HTML5</li>
            <li>CSS/Media queries</li>
            <li>Jira, Confluence, Atlassian</li>
            <li>Kanban, Trello, Keynote</li>
          </ul>
          <h3>
            List of impulsive and less-impulsive achievements (in no particular
            order):
          </h3>
          <ul>
            <li>
              Flatiron School Software Engineering Immersive Certification
            </li>
            <li>Diploma in Dental Hygiene (UCL)</li>
            <li>National Certificate in Dental Nursing</li>
            <li>HGV license</li>
            <li>SUP licence </li>
            <li>PADI open water diver</li>
            <li>Non-pro surfer</li>
          </ul>
        </div>
        <div className="container">
          <img className="photo-size image" alt="oh no!" src={first} />

          <div class="middle">
            <div class="text text-2">First, Switzerland</div>
          </div>
        </div>
        <div className="end-div2">
          <p className="text-3 end-size2">THE END</p>
          <img className="underline-size2" alt="oh no!" src={underline} />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
