import Button from "../../ui/Button";
import Div from "../../ui/Div";
import IconBox from "../../ui/IconBox";
import PageHeading from "../../ui/PageHeading";
import SectionHeading from "../../ui/SectionHeading";
import Spacing from "../../ui/Spacing";
import Image from "next/image";
import {
  FaBrain,
  FaDatabase,
  FaLock,
  FaNetworkWired,
  FaShieldAlt,
  FaCogs,
  FaSnowflake,
  FaCloud,
} from "react-icons/fa";
import ContactFooter from "/app/ui/contactpg";
export const metadata = {
  title:
    "Technology Expertise | Big Careers Technology solutions - AI, Blockchain, IoT & Cybersecurity",
  description:
    "Discover Big Careers Technology solutions's expertise in AI, Blockchain, IoT, Cybersecurity, SAP, and Custom Embedded Solutions. Innovate and scale your business with our advanced tech solutions.",
  keywords: [
    "AI",
    "Machine Learning",
    "Blockchain",
    "IoT",
    "Cybersecurity",
    "SAP",
    "Embedded Solutions",
    "Big Careers Technology solutions",
    "Technology Solutions",
    "IT Services",
  ],
  authors: [
    {
      name: "Big Careers Technology solutions",
      url: "https://bigcareers.solutions/",
    },
  ],
  robots: "index, follow",
  openGraph: {
    title:
      "Technology Expertise | Big Careers Technology solutions - AI, Blockchain, IoT & Cybersecurity",
    description:
      "Explore Big Careers Technology solutions's expertise in AI, Blockchain, IoT, Cybersecurity, SAP, and Custom Embedded Solutions to drive innovation in your business.",
    url: "https://bigcareers.solutions/service/technology",
    siteName: "Big Careers Technology solutions",
    images: [
      {
        url: "./logo.jpg", // Using relative path as per your request
        width: 1200,
        height: 630,
        alt: "Big Careers Technology solutions Logo",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Technology Expertise | Big Careers Technology solutions",
    description:
      "Big Careers Technology solutions provides cutting-edge technology solutions in AI, Blockchain, IoT, Cybersecurity, and more.",
    images: ["./logo.jpg"], // Using relative path as per your request
  },
  alternates: {
    canonical: "https://bigcareers.solutions/service/technology",
  },
};

const services = [
  {
    icon: <FaBrain className="mb-4" style={{ fontSize: "4rem" }} />,
    title: "AI & ML",
    subtitle:
      "Advanced AI, Machine Learning, and Generative AI solutions for enterprises.",
  },
  {
    icon: <FaDatabase className="mb-4" style={{ fontSize: "4rem" }} />,
    title: "Big Data",
    subtitle: "Scalable data solutions for analytics, storage, and processing.",
  },

  {
    icon: <FaNetworkWired className="mb-4" style={{ fontSize: "4rem" }} />,
    title: "IoT",
    subtitle:
      "Seamless device integration, monitoring, and security for IoT ecosystems.",
  },
  {
    icon: <FaCloud className="mb-4" style={{ fontSize: "4rem" }} />,
    title: "Salesforce",
    subtitle:
      "Optimize customer relationships with advanced Salesforce solutions.",
  },
  {
    icon: <FaCogs className="mb-4" style={{ fontSize: "4rem" }} />,
    title: "SAP",
    subtitle:
      "Streamline enterprise operations with SAP implementation and support.",
  },
  {
    icon: <FaSnowflake className="mb-4" style={{ fontSize: "4rem" }} />,
    title: "Snowflake",
    subtitle: "Cloud data warehousing for scalable and secure data analytics.",
  },
];

const relatedTechnologies = [
  { link: "/service/technology/ai-&-ml", text: "AI & ML" },
  { link: "/service/technology/big-data", text: "Big Data Solutions" },

  { link: "/service/technology/iot", text: "IoT" },

  { link: "/service/technology/sap", text: "SAP" },
  {
    link: "/service/technology/snowflake",
    text: "SnowFlake",
  },
  {
    link: "/service/technology/salesforce",
    text: "Salesforce",
  },
];

export default function TechnologyPage() {
  return (
    <>
      <PageHeading
        title="Our Technology Expertise"
        bgSrc="/services/softwareenterprise/technologia.jpg"
        pageLinkText="Explore Our Technologies"
      />
      <Spacing lg="145" md="80" />
      <Div className="container">
        <SectionHeading
          title="Our Technology Expertise"
          subtitle="Discover how our technology solutions drive innovation and efficiency in your business."
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
      <Div className="container">
        <Div className="row align-items-center">
          <Div className="col-xl-5 col-lg-6">
            <Div className="cs-radius_15 cs-shine_hover_1">
              <Image
                src="/services/ai-ml/ai5.jpg"
                alt="Technology Feature"
                width={500}
                height={500}
                className="cs-radius_15 w-100"
              />
            </Div>
            <Spacing lg="0" md="40" />
          </Div>
          <Div className="col-lg-6 offset-xl-1">
            <h2 className="cs-font_50 cs-m0">Related Technology Solutions</h2>
            <Spacing lg="50" md="30" />
            <Div className="row">
              {relatedTechnologies.map((tech, index) => (
                <Div className="col-lg-6" key={index}>
                  <Button
                    btnLink={tech.link}
                    btnText={tech.text}
                    variant="cs-type2"
                  />
                  <Spacing lg="20" md="10" />
                </Div>
              ))}
            </Div>
          </Div>
        </Div>
      </Div>
      <Spacing lg="150" md="80" />
      <ContactFooter />
    </>
  );
}
