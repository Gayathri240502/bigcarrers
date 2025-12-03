import React from "react";
import Link from "next/link";
import Div from "../Div";

export default function PageHeading({ title, bgSrc, pageLinkText }) {
  return (
    <Div
      className="cs-page_heading cs-style1 cs-center text-center cs-bg"
      style={{ backgroundImage: `url(${bgSrc})` }}
    >
      <Div className="container">
        <Div className="cs-page_heading_in">
          <h1
            className="cs-page_title cs-font_50 glowing-text"
            style={{
              padding: "4px",
              color: "Black", // Black text
               textShadow:
              "0 0 5px rgba(255, 255, 255, 0.6), 0 0 10px rgba(255, 255, 255, 0.5), 0 0 15px rgba(255, 255, 255, 0.4)", // White glow
            }}
          >
            {title}
          </h1>

          <ol className="breadcrumb text-uppercase"></ol>
        </Div>
      </Div>
    </Div>
  );
}
