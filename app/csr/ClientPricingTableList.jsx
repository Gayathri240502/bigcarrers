"use client";

import dynamic from "next/dynamic";

const PricingTableList = dynamic(
  () => import("../ui/PricingTable/PricingTableList"),
  {
    ssr: false,
  }
);

export default function ClientTableList() {
  return <PricingTableList />;
}
