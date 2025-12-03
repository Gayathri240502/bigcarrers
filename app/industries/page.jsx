import {
  FaBuilding,
  FaHospital,
  FaCogs,
  FaDesktop,
  FaShieldAlt,
  FaRobot,
  FaPhoneAlt,
} from "react-icons/fa";

import PageHeading from "../ui/PageHeading";
import Spacing from "../ui/Spacing";
import Div from "../ui/Div";

import Link from "next/link";
import ContactFooter from "/app/ui/contactpg";

export const metadata = {
  title: "Industries | Big Careers Technology solutions",
  description:
    "Big Careers Technology solutions offers innovative solutions across various industries including AI & ML, Cyber Security, IoT, Blockchain Management, SAP, DevOps, Cloud, Salesforce, Consulting, Data Engineering & Analytics, Workforce Management, and Custom Embedded Solutions.",
  keywords: [
    "AI & ML Industry Solutions",
    "Cyber Security for Industries",
    "IoT Industry Applications",
    "Blockchain Management Solutions",
    "SAP and DevOps Solutions",
    "Cloud Solutions for Industries",
    "Salesforce Consulting",
    "Data Engineering & Analytics",
    "Workforce Management Solutions",
    "Custom Embedded Solutions",
    "Industry 4.0",
    "Digital Transformation",
    "Enterprise Technology Solutions",
  ],
  robots: "index, follow",
  openGraph: {
    title: "Industries | Big Careers Technology solutions",
    description:
      "Discover Big Careers Technology solutions's cutting-edge solutions tailored for various industries, from AI & ML to Cyber Security, IoT, Blockchain, Data Analytics, and more.",
    url: "https://bigcareers.solutions/industries",
    type: "website",
    image: "/logo.jpg",
  },
  twitter: {
    card: "summary_large_image",
    title: "Industries | Big Careers Technology solutions",
    description:
      "Explore Big Careers Technology solutions's solutions for industries like AI, Cyber Security, IoT, Blockchain, Cloud, Data Engineering, and more.",
    image: "/logo.jpg",
  },
};

const industries = [
  {
    label: "Banking and Financial Services",
    icon: <FaBuilding style={{ fontSize: "4rem" }} />,
    link: "/industries/banking-and-financial-services",
  },
  {
    label: "Health Care",
    icon: <FaHospital style={{ fontSize: "4rem" }} />,
    link: "/industries/health-care",
  },
  {
    label: "Hi-End Engineering",
    icon: <FaCogs style={{ fontSize: "4rem" }} />,
    link: "/industries/hi-end-engineering",
  },
  {
    label: "Media and Technology",
    icon: <FaDesktop style={{ fontSize: "4rem" }} />,
    link: "/industries/media-and-technology",
  },
  {
    label: "Insurance",
    icon: <FaShieldAlt style={{ fontSize: "4rem" }} />,
    link: "/industries/insurance",
 },
  {
    label: "Robotic",
   icon: <FaRobot style={{ fontSize: "4rem" }} />,
   link: "/industries/robotic",
  },
   {
    label: "Telecom",
    icon: <FaPhoneAlt style={{ fontSize: "4rem" }} />,
   link: "/industries/telecom",
  }, 
];

export default function IndustriesPage() {
  return (
    <>
      <PageHeading
        title="Our Industries"
        bgSrc="/industry/industriess.jpg"
        pageLinkText="Industries"
      />
      {/* Start Industries Section */}

      <Div id="industries">
        <Div className="container">
          <h2 className="text-center">Explore Our Industries</h2>
          <Spacing lg="30" md="30" />
          <Div className="row">
            {industries.map((industry, index) => (
              <Div className="col-lg-4" key={index}>
                <Link href={industry.link}>
                  <div className="text-center">
                    {industry.icon}
                    <h3 className="text-xl font-bold mt-4">{industry.label}</h3>
                  </div>
                </Link>
                <Spacing lg="30" md="30" />
              </Div>
            ))}
          </Div>
        </Div>
      </Div>
      <ContactFooter />
      {/* End Industries Section */}
    </>
  );
}
