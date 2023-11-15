import React from "react";
import { BsInstagram } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a
          href="https://www.linkedin.com/in/yohanespratamanaibaho/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedinIn />
        </a>
      </div>
      <div>
        <a
          href="https://github.com/yohanesnaibaho303"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
      </div>
      <div>
        <a
          href="https://www.instagram.com/ypdangg"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsInstagram />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
