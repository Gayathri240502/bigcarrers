import Button from "../../../ui/Button";
import Div from "../../../ui/Div";
import IconBox from "../../../ui/IconBox";
import PageHeading from "../../../ui/PageHeading";
import SectionHeading from "../../../ui/SectionHeading";
import Spacing from "../../../ui/Spacing";

import Image from "next/image";
import { FaChartBar, FaServer, FaCogs } from "react-icons/fa";

export const metadata = {
  title: "Big Data Solutions | Big Careers Technology solutions",
  description:
    "Big Careers Technology solutions offers advanced Big Data solutions, enabling businesses to efficiently manage, process, and analyze massive data volumes for actionable insights and improved decision-making.",
  keywords: [
    "Big Data Solutions",
    "Data Analytics",
    "Scalable Data Processing",
    "AI-Powered Analytics",
    "Enterprise Big Data",
    "Data Warehousing",
    "Cloud Data Management",
    "Data Pipeline Automation",
    "Real-Time Data Processing",
    "Data Security and Compliance",
  ],
  robots: "index, follow",
  openGraph: {
    title: "Big Data Solutions | Big Careers Technology solutions",
    description:
      "Harness the power of Big Data with Big Careers Technology solutions’s expert solutions for data analytics, cloud storage, and real-time data processing, driving business growth and innovation.",
    url: "https://bigcareers.solutions/service/technology/big-data",
    type: "website",
    image: "/logo.jpg",
  },
  twitter: {
    card: "summary_large_image",
    title: "Big Data Solutions | Big Careers Technology solutions",
    description:
      "Big Careers Technology solutions delivers enterprise-grade Big Data solutions, enabling businesses to process vast datasets efficiently, ensuring real-time insights and smarter decision-making.",
    image: "/logo.jpg",
  },
};

const services = [
  {
    icon: <FaChartBar className="mb-4" style={{ fontSize: "4rem" }} />,
    title: "Data Analytics & Insights",
    subtitle:
      "Leverage big data analytics to uncover trends, optimize operations, and drive business intelligence.",
  },
  {
    icon: <FaServer className="mb-4" style={{ fontSize: "4rem" }} />,
    title: "Scalable Data Processing",
    subtitle:
      "Handle massive datasets efficiently with cloud-based and distributed computing architectures.",
  },
  {
    icon: <FaCogs className="mb-4" style={{ fontSize: "4rem" }} />,
    title: "AI & Machine Learning Integration",
    subtitle:
      "Enhance data-driven decision-making with AI-powered analytics and predictive modeling.",
  },
];

export default function BigDataSolutionsPage() {
  return (
    <>
      {/* Page Heading */}
      <PageHeading
        title="Big Data Solutions"
        bgSrc="/services/bigd.jpg"
        pageLinkText="Big Data Solutions"
      />
      <Spacing lg="145" md="80" />

      {/* About Section */}
      <Div className="container">
        <SectionHeading
          title="Advanced Big Data Solutions"
          subtitle="Empower your business with Big Careers Technology solutions’s cutting-edge Big Data services, offering seamless data processing, AI-driven analytics, and scalable storage solutions."
          variant="cs-style1 text-center"
        />
        <Spacing lg="90" md="45" />
        <Div className="row">
          {services.map((service, index) => (
            <Div className="col-lg-4" key={index}>
              <div className="text-center">
                {service.icon}
                <h3 className="text-xl font-bold mt-4">{service.title}</h3>
                <p className="mt-2">{service.subtitle}</p>
              </div>
              <Spacing lg="30" md="30" />
            </Div>
          ))}
        </Div>
      </Div>

      <Spacing lg="120" md="50" />

      {/* Why Choose Big Data Solutions? */}
      <Div className="container">
        <SectionHeading
          title="Why Choose Our Big Data Solutions?"
          subtitle="Unleashing the Full Potential of Your Data"
        >
          <Spacing lg="30" md="20" />
          <Div className="row">
            {/* Left Column with Text */}
            <Div className="col-lg-6 col-md-12">
              <ul className="cs-m0">
                <li>Real-time data processing for instant insights.</li>
                <li>Scalable cloud-based storage solutions.</li>
                <li>AI-driven analytics for predictive intelligence.</li>
                <li>Automated data pipeline and workflow management.</li>
                <li>Comprehensive security and compliance measures.</li>
                <li>Seamless integration with enterprise applications.</li>
              </ul>
            </Div>
            {/* Right Column with Image */}
            <Div className="col-lg-6 col-md-12 text-center">
              <Image
                src="/services/big2.jpg"
                alt="Big Data Benefits"
                className="img-fluid cs-radius_15 shadow-lg"
                width={500}
                height={500}
              />
            </Div>
          </Div>
        </SectionHeading>
      </Div>

      <Spacing lg="120" md="50" />

      {/* Big Data Expertise Section */}
      <Div className="container">
        <Div className="row">
          <Div className="col-xl-5 col-lg-6">
            <SectionHeading
              title="Our Expertise in Big Data"
              subtitle="Delivering Scalable, AI-Powered Data Solutions"
            >
              <Spacing lg="30" md="20" />
              <p className="cs-m0">
                At <strong>Big Careers Technology solutions</strong>, we help
                businesses harness the power of Big Data for optimized
                decision-making, operational efficiency, and AI-driven insights.
              </p>
              <Spacing lg="15" md="15" />
              <p className="cs-m0">
                Our experts ensure seamless data integration, security, and
                scalability for modern data-driven enterprises.
              </p>
            </SectionHeading>
          </Div>
          {/* Right Column with Image */}
          <Div className="col-xl-5 offset-xl-1 col-lg-6">
            <Div className="cs-image_layer cs-style1">
              <Div className="cs-image_layer_in">
                <Image
                  src="/services/big-3.jpg"
                  alt="Big Data Expertise"
                  className="w-100 cs-radius_15"
                  width={500}
                  height={500}
                />
              </Div>
            </Div>
            <Spacing lg="0" md="40" />
          </Div>
        </Div>
      </Div>

      <Spacing lg="150" md="80" />
    </>
  );
}
