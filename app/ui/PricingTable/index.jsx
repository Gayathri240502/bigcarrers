import React from "react";
import Div from "../Div";

export default function PricingTable({
  title,

  features,
}) {
  return (
    <Div className="cs-pricing_table cs-style1">
      <h4 className="mt-4">{title}</h4>

      <p className="cs-pricing_feature cs-mp0">{features}</p>
    </Div>
  );
}
