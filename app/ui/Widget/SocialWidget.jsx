import React from "react";
import { FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";
import { SiGooglemaps } from "react-icons/si";
import { FaThreads } from "react-icons/fa6";

import Div from "../Div";

export default function SocialWidget() {
  return (
    <Div className="cs-social_btns cs-style1">
      <a
        href="https://www.linkedin.com/company/bigcareerstechnologies/"
        className="cs-center"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin />
      </a>
      <a
        href="https://www.facebook.com/bigcareerstechnologies"
        className="cs-center"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaFacebook />
      </a>
      <a
        href="https://www.google.com/maps/place/Big+Careers+Technologies/@17.4412633,78.3808811,627m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3bcb91db7c0af0c5:0xe38b68ebd0e5d51!8m2!3d17.4412633!4d78.3808811!16s%2Fg%2F11ltsk0hfn?entry=ttu&g_ep=EgoyMDI1MDgxMS4wIKXMDSoASAFQAw%3D%3D"
        className="cs-center"
        target="_blank"
        rel="noopener noreferrer"
      >
        <SiGooglemaps />
      </a>
      {/* <a
        href="https://www.threads.net/@Big Careers Technology solutionsbusiness"
        className="cs-center"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaThreads />
      </a> */}
      <a
        href="https://www.instagram.com/bigcareerstechnologies/"
        className="cs-center"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaInstagram />
      </a>
    </Div>
  );
}
