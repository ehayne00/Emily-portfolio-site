import React from "react";
import map from "../media/north-london-map.png";
import linkedin from "../media/Linkedin-icon.png";
import medium from "../media/Medium-icon.png";
import github from "../media/Github-icon.png";

const Contact = () => {
  return (
    <div>
      <h2 className="Header text-5">CONTACT</h2>
      <div className="contact-page1">
        <div className="contact-page2">
          <a href="https://linkedin.com/in/emily-violet-haynes-519279182">
            <img className="icon-size squarish" alt="oh no!" src={linkedin} />
          </a>
          <a href="https://medium.com/@ehayne00">
            <img className="icon-size rounded" alt="oh no!" src={medium} />
          </a>
          <a href="https://github.com/ehayne00">
            <img className="icon-size rounded" alt="oh no!" src={github} />
          </a>
        </div>
        <img className="map-size" alt="oh no!" src={map} />
      </div>
      <div className="contact-text">
        <h3 className="text-2 title-backing">ehayne00@hotmail.com</h3>
        <p className="text-1 text-backing">
          <b>
            Born and raised in the London borough of Haringey, North-London. I
            drive as well as utilising public transport.
          </b>
        </p>
      </div>
    </div>
  );
};

export default Contact;
