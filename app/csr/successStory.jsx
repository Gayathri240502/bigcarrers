"use client";

import dynamic from "next/dynamic";

const PricingTableList = dynamic(
  () => import("../ui/PricingTable/SuccessStory"),
  {
    ssr: false,
  }
);

export default function SuccessStory() {
  return <PricingTableList />;
}
