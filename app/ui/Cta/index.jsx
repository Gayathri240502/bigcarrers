import React from "react";
import parse from "html-react-parser";
import Div from "../Div";
import Spacing from "../Spacing";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";
export default function Cta({ title, btnText, btnLink, bgSrc, variant }) {
  return (
    <Div
      className={`cs-cta cs-style1 cs-bg text-center cs-shape_wrap_1 cs-position_1 ${
        variant ? variant : ""
      }`}
      style={{ backgroundImage: `url(${bgSrc})` }}
    >
      <Div className="cs-shape_1" />
      <Div className="cs-shape_1" />
      <Div className="cs-shape_1" />
      <Div className="cs-cta_in">
        <h3 className="cs-cta_title cs-semi_bold cs-m0">{parse(title)}</h3>
        {btnText && (
          <>
            <Spacing lg="70" md="30" />

            <Div className="col-sm-12">
              <button className="cs-btn cs-style1">
                <Link
                  href={btnLink}
                  className={variant ? `cs-text_btn ${variant}` : "cs-text_btn"}
                >
                  <span>{btnText}</span>
                  <FaArrowRight style={{ marginLeft: "8px" }} />
                </Link>
              </button>
            </Div>
          </>
        )}
      </Div>
    </Div>
  );
}
