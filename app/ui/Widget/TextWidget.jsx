import React from "react";
import Div from "../Div";
import Image from "next/image";

export default function TextWidget({ logoSrc, logoAlt, text }) {
  return (
    <Div className="cs-text_widget">
      <Image src={logoSrc} alt={logoAlt} width={100} height={100} />
      <h6 className="mt-4">{text}</h6>
    </Div>
  );
}
