import Button from "../../../ui/Button";
import Div from "../../../ui/Div";
import IconBox from "../../../ui/IconBox";
import PageHeading from "../../../ui/PageHeading";
import SectionHeading from "../../../ui/SectionHeading";
import Spacing from "../../../ui/Spacing";

import Image from "next/image";
import { FaDatabase, FaSync, FaShieldAlt } from "react-icons/fa";

export const metadata = {
  title: "Snowflake Services | Big Careers Technology solutions",
  description:
    "Big Careers Technology solutions offers Snowflake services to help businesses harness the power of cloud data warehousing, enabling scalable, secure, and cost-effective data storage, analytics, and processing for smarter decision-making.",
  keywords: [
    "Snowflake Services",
    "Snowflake Cloud Data Warehouse",
    "Cloud Data Warehousing",
    "Data Analytics",
    "Data Processing",
    "Cloud Solutions",
    "Snowflake Integration",
    "Data Storage Solutions",
    "Snowflake Consulting",
    "Snowflake Optimization",
    "Data Scalability",
    "Business Intelligence",
  ],
  robots: "index, follow",
  openGraph: {
    title: "Snowflake Services | Big Careers Technology solutions",
    description:
      "Unlock the full potential of your data with Big Careers Technology solutions’s Snowflake services, offering cloud data warehousing solutions that provide secure, scalable, and cost-effective data storage, processing, and analytics.",
    url: "https://bigcareers.solutions/service/technology/snowflake",
    type: "website",
    image: "/logo.jpg",
  },
  twitter: {
    card: "summary_large_image",
    title: "Snowflake Services | Big Careers Technology solutions",
    description:
      "Optimize your data management and analytics with Big Careers Technology solutions’s Snowflake services, offering secure and scalable cloud data warehousing solutions for improved decision-making.",
    image: "/logo.jpg",
  },
};

const services = [
  {
    icon: <FaDatabase className="mb-4" style={{ fontSize: "4rem" }} />,
    title: "Data Warehousing",
    subtitle:
      "Leverage Snowflake's scalable data warehousing capabilities for seamless data storage and retrieval.",
  },
  {
    icon: <FaSync className="mb-4" style={{ fontSize: "4rem" }} />,
    title: "Data Integration",
    subtitle:
      "Simplify data ingestion and integration from various sources with Snowflake's built-in tools.",
  },
  {
    icon: <FaShieldAlt className="mb-4" style={{ fontSize: "4rem" }} />,
    title: "Security & Compliance",
    subtitle:
      "Ensure top-notch security and compliance for your data with Snowflake’s industry-leading security measures.",
  },
];

export default function SnowflakeCloudPage() {
  return (
    <>
      {/* Page Heading */}
      <PageHeading
        title="Snowflake Cloud Platform"
        bgSrc="/services/cloud/cloud.jpg"
        pageLinkText="Snowflake Solutions"
      />
      <Spacing lg="145" md="80" />

      {/* About Section */}
      <Div className="container">
        <SectionHeading
          title="Snowflake Cloud Solutions"
          subtitle="Unlock the power of cloud-based data management with Snowflake. From efficient warehousing to seamless integration and top-tier security, we help you harness Snowflake for business intelligence and analytics."
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

      {/* Why Choose Snowflake */}
      <Div className="container">
        <SectionHeading
          title="Why Choose Snowflake?"
          subtitle="Key Benefits of Snowflake Cloud Solutions"
        >
          <Spacing lg="30" md="20" />
          <Div className="row">
            {/* Left Column with Text */}
            <Div className="col-lg-6 col-md-12">
              <ul className="cs-m0">
                <li>Scalable, pay-as-you-go pricing for cost efficiency.</li>
                <li>Automatic performance tuning and optimization.</li>
                <li>Seamless data sharing and collaboration capabilities.</li>
                <li>Advanced security and compliance standards.</li>
                <li>Multi-cloud support with easy deployment.</li>
                <li>AI and analytics-ready infrastructure.</li>
              </ul>
            </Div>
            {/* Right Column with Image */}
            <Div className="col-lg-6 col-md-12 text-center">
              <Image
                src="/services/cloud/3.jpg"
                alt="Key Benefits"
                className="img-fluid cs-radius_15 shadow-lg"
                width={500}
                height={500}
              />
            </Div>
          </Div>
        </SectionHeading>
      </Div>

      <Spacing lg="120" md="50" />

      {/* Snowflake Expertise Section */}
      <Div className="container">
        <Div className="row">
          <Div className="col-xl-5 col-lg-6">
            <SectionHeading
              title="Our Expertise in Snowflake"
              subtitle="Maximizing the Value of Your Data"
            >
              <Spacing lg="30" md="20" />
              <p className="cs-m0">
                At <strong>Big Careers Technology solutions</strong>, we help
                businesses implement and optimize Snowflake solutions for
                enhanced data management, analytics, and decision-making.
              </p>
              <Spacing lg="15" md="15" />
              <p className="cs-m0">
                Our expert team ensures your Snowflake setup is secure,
                scalable, and integrated seamlessly with your existing
                infrastructure.
              </p>
            </SectionHeading>
          </Div>
          {/* Right Column with Image */}
          <Div className="col-xl-5 offset-xl-1 col-lg-6">
            <Div className="cs-image_layer cs-style1">
              <Div className="cs-image_layer_in">
                <Image
                  src="/services/cloud/1.jpg"
                  alt="Why Choose Us"
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
