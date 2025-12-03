import React from "react";
import Image from "next/image";
import PageHeading from "../../ui/PageHeading";
import {
  PackageCheck,
  TimerReset,
  Truck,
  LocateFixed,
  FileText,
  ShieldCheck,
  Mail,
  AlertTriangle,
  RefreshCcw,
} from "lucide-react";

const policyCards = [
  {
    title: "Delivery Coverage",
    desc: "Where we ship our products",
    icon: LocateFixed,
    path: "#coverage",
  },
  {
    title: "Processing Time",
    desc: "When we dispatch orders",
    icon: TimerReset,
    path: "#processing",
  },
  {
    title: "Shipping Methods",
    desc: "Standard & express options",
    icon: Truck,
    path: "#methods",
  },
  {
    title: "Order Tracking",
    desc: "Track your shipment status",
    icon: PackageCheck,
    path: "#tracking",
  },
  {
    title: "Shipping Charges",
    desc: "Cost of delivery",
    icon: FileText,
    path: "#charges",
  },
  {
    title: "Delays & Issues",
    desc: "What causes delays",
    icon: AlertTriangle,
    path: "#delays",
  },
  {
    title: "Exchange Policy",
    desc: "Eligibility & process",
    icon: RefreshCcw,
    path: "#exchange",
  },
  {
    title: "Customer Support",
    desc: "Reach us for help",
    icon: Mail,
    path: "#support",
  },
  {
    title: "Policy Updates",
    desc: "Latest changes",
    icon: ShieldCheck,
    path: "#updates",
  },
];

export const metadata = {
  title: "Shipping and Exchange | Big Careers Technology solutions",
  description:
    "Read Big Careers Technology solutions Shipping and Exchange Policy. Learn about delivery coverage, processing time, shipping methods, charges, delays, exchanges, and customer support.",
  keywords: [
    "Big Careers Technology solutions Shipping Policy",
    "Big Careers Technology solutions Exchange Policy",
    "Delivery Coverage",
    "Order Tracking",
    "Shipping Charges",
    "Returns and Exchange",
    "Customer Support",
  ],
  robots: "index, follow",
  openGraph: {
    title: "Shipping and Exchange | Big Careers Technology solutions",
    description:
      "Understand Big Careers Technology solutions's shipping coverage, processing timelines, courier partners, charges, and simple exchange process.",
    url: "https://www.bigcareers.solutions/shipping-and-exchange",
    type: "website",
    image: "/logo.jpg",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shipping and Exchange | Big Careers Technology solutions",
    description:
      "Get details about Big Careers Technology solutions's shipping timelines, delivery coverage, charges, and exchange policy.",
    image: "/logo.jpg",
  },
};

export default function Page() {
  return (
    <>
      {/* Page Header */}
      <PageHeading
        title="Shipping and Exchange"
        bgSrc="/images/service_hero_bg.jpeg"
        pageLinkText="Shipping and Exchange"
      />

      <div
        className="m-20 flex flex-col items-center justify-center px-4 text-left"
        style={{ marginTop: "20px" }}
      >
        {/* Main Title */}
        <h2 className="text-center font-bold text-3xl mt-20 mb-8">
          Shipping and Exchange
        </h2>

        {/* Description */}
        <p className="leading-7 text-center mb-8">
          Our policies ensure safe and timely delivery while also providing a
          simple exchange process if required. Here’s everything you need to
          know.
        </p>
      </div>

      {/* Policy Cards */}
      <section className="policy_section mb-5 mt-8">
        <div className="container">
          <div className="row">
            {policyCards.map(({ title, desc, icon: Icon, path }, idx) => (
              <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={idx}>
                <a href={path} className="text-decoration-none">
                  <div className="iconbox_block text-center h-100">
                    <div className="iconbox_icon mx-auto mb-3">
                      <Icon size={40} strokeWidth={1.5} />
                    </div>
                    <div className="iconbox_content">
                      <h3 className="iconbox_title">{title}</h3>
                      <p className="mb-0">{desc}</p>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Policy Details */}
      <section className="service_details_section section_space">
        <div className="container">
          <h4 id="coverage" className="details_item_title">
            Delivery Coverage
          </h4>
          <p>
            We currently ship across all serviceable pin codes in India. Remote
            or out-of-service areas may have longer delivery times or extra
            charges. International shipping is available on request.
          </p>

          <h4 id="processing" className="details_item_title">
            Processing Time
          </h4>
          <p>
            Orders are usually packed within <strong>1–2 business days</strong>.
            A buffer of up to <strong>5 additional business days</strong> may be
            required during peak periods or for custom orders.
          </p>

          <h4 id="methods" className="details_item_title">
            Shipping Methods
          </h4>
          <p>
            <strong>Standard:</strong> 3–5 business days + up to 5 days buffer.
            <br />
            <strong>Express:</strong> 1–2 business days + up to 5 days buffer.
            <br />
            Partner couriers include Delhivery, Blue Dart, and India Post.
          </p>

          <h4 id="tracking" className="details_item_title">
            Order Tracking
          </h4>
          <p>
            Once dispatched, tracking details will be shared by email and SMS.
            Use the link provided to track your package in real time.
          </p>

          <h4 id="charges" className="details_item_title">
            Shipping Charges
          </h4>
          <p>
            Charges are based on delivery address and product weight/volume.
            Free shipping may be offered for promotional orders above certain
            values.
          </p>

          <h4 id="delays" className="details_item_title">
            Delays & Issues
          </h4>
          <p>
            While we target on-time delivery, external factors such as weather,
            public holidays, and courier delays may affect timelines. All
            timelines should be considered with a <strong>5-day buffer</strong>.
          </p>

          <h4 id="exchange" className="details_item_title">
            Exchange Policy
          </h4>
          <p>
            If you receive a product that is defective, damaged, or not as
            described, you may request an exchange.
          </p>
          <ul>
            <li>Request must be raised within 7 days of delivery.</li>
            <li>
              Product must be unused, in original packaging, and with tags
              intact.
            </li>
            <li>
              Non-exchangeable: discounted items, personal care, intimate, or
              custom-made products.
            </li>
          </ul>
          <p>
            To request an exchange, contact support at{" "}
            <strong>sales@bigcareers.solutions</strong> or call{" "}
            <strong>+91-8062177256</strong> with your order details. Our team
            will guide you. If the return is due to a defective/incorrect
            product, shipping is free. For preference-based exchanges (size,
            color), customers may need to bear return shipping costs.
          </p>

          <h4 id="support" className="details_item_title">
            Customer Support
          </h4>
          <p>
            For any queries, reach us at <strong>sales@bigcareers.solutions</strong> or
            call <strong>+91-8062177256</strong> (Mon–Fri, 9 AM–6 PM IST).
          </p>

          <h4 id="updates" className="details_item_title">
            Policy Updates
          </h4>
          <p>
            This policy was last updated on <em>June 27, 2025</em>. Changes will
            be posted on this page.
          </p>
        </div>
      </section>
    </>
  );
}
