import React from "react";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";

export default function Button({ btnLink, btnText, variant, icon }) {
  return (
    <Link
      href={btnLink}
      className={variant ? `cs-text_btn ${variant}` : "cs-text_btn"}
    >
      <>
        <span>{btnText}</span>
        {icon ? icon : <FaArrowRight />}
      </>
    </Link>
  );
}
