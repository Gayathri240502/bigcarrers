import React from "react";
import Div from "../Div";
import Cta from "../Cta";

const ContactFooter = () => {
  return (
    <Div className="container">
      <Cta
        title="Let’s collaborate and <br>create something <i>amazing</i> together."
        btnText="Apply For Meeting"
        btnLink="/contact"
        bgSrc="/images/cta_bg.jpeg"
      />
    </Div>
  );
};

export default ContactFooter;
