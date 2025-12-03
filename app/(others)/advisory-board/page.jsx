import React from "react";
import Div from "/app/ui/Div";
import SectionHeading from "../../ui/SectionHeading";
import TeamSlider from "../../ui/Slider/TeamSlider";
import Spacing from "../../ui/Spacing";
import PageHeading from "../../ui/PageHeading";
import ContactFooter from "../../ui/contactpg";
export const metadata = {
  title: "Advisory Board | Big Careers Technology solutions",
  description:
    "Meet the Advisory Board of Big Careers Technology solutions, a leading provider of AI & ML, Cyber Security, IoT, Blockchain Management, SAP, DevOps, Cloud, Salesforce, Consulting, Data Engineering & Analytics, Workforce Management, and Custom Embedded Solutions.",
  keywords: [
    "Big Careers Technology solutions Advisory Board",
    "AI & ML",
    "Cyber Security",
    "IoT",
    "Blockchain Management",
    "SAP",
    "DevOps",
    "Cloud Solutions",
    "Salesforce Consulting",
    "Data Engineering",
    "Workforce Management",
    "Embedded Solutions",
    "Enterprise Technology",
    "Business Strategy",
  ],
  robots: "index, follow",
  openGraph: {
    title: "Advisory Board | Big Careers Technology solutions",
    description:
      "Discover the expertise of Big Careers Technology solutions's Advisory Board, guiding innovation in AI, Cyber Security, IoT, Blockchain, SAP, Cloud, and more.",
    url: "https://bigcareers.solutions/advisory-board",
    type: "website",
    image: "/logo.jpg", // Replace with actual image URL
  },
  twitter: {
    card: "summary_large_image",
    title: "Advisory Board | Big Careers Technology solutions",
    description:
      "Big Careers Technology solutions's Advisory Board brings together experts in AI, Cyber Security, IoT, Blockchain, SAP, and more to drive innovation.",
    image: "/logo.jpg", // Replace with actual image URL
  },
};

export default function page() {
  return (
    <div>
      <PageHeading
        title="Our Board of Advisory"
        bgSrc="/Advisory/a.jpg"
        pageLinkText="Advisory Board"
      />
      {/* End Page Heading Section */}
      {/* Start About Section */}

      <Spacing lg="145" md="80" />
      <Div className="container">
        <SectionHeading
          title="Our Board of Advisory"
          subtitle="Our Team"
          variant="cs-style1"
        />
        <Spacing lg="85" md="45" />
        <TeamSlider />
        <Spacing lg="150" md="80" />
        <ContactFooter />
      </Div>
    </div>
  );
}
