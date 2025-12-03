import Button from "/app/ui/Button";
import Div from "/app/ui/Div";
import IconBox from "/app/ui/IconBox";
import PageHeading from "/app/ui/PageHeading";
import SectionHeading from "/app/ui/SectionHeading";
import Spacing from "/app/ui/Spacing";
import Image from "next/image";
import { FaCloud, FaCloudUploadAlt, FaShieldAlt } from "react-icons/fa";
import ContactFooter from "/app/ui/contactpg";

export const metadata = {
  title: "Cloud Solutions | Big Careers Technology solutions",
  description:
    "Explore Big Careers Technology solutions's Cloud solutions, powered by AI, IoT, Data Analytics, and Cyber Security, designed to enhance scalability, flexibility, and operational efficiency in the cloud.",
  keywords: [
    "Cloud Solutions",
    "Cloud Computing",
    "AI in Cloud",
    "IoT Cloud Solutions",
    "Cloud Integration",
    "Data Analytics in Cloud",
    "Cloud Migration",
    "Cloud Security",
    "Hybrid Cloud Solutions",
    "Scalable Cloud Infrastructure",
    "Cloud Optimization",
  ],
  robots: "index, follow",
  openGraph: {
    title: "Cloud Solutions | Big Careers Technology solutions",
    description:
      "Big Careers Technology solutions offers innovative Cloud solutions powered by AI, IoT, and Data Analytics, enabling businesses to scale, optimize, and secure their cloud infrastructure.",
    url: "https://bigcareers.solutions/cloud-solutions",
    type: "website",
    image: "/logo.jpg",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cloud Solutions | Big Careers Technology solutions",
    description:
      "Big Careers Technology solutions provides advanced Cloud solutions with AI, IoT, and Data Analytics to enhance scalability, security, and performance.",
    image: "/logo.jpg",
  },
};

const services = [
  {
    icon: <FaCloud className="mb-4" style={{ fontSize: "4rem" }} />,
    title: "Cloud Infrastructure Management",
    subtitle:
      "Optimize your cloud infrastructure for maximum efficiency, scalability, and security with our tailored solutions.",
  },
  {
    icon: <FaCloudUploadAlt className="mb-4" style={{ fontSize: "4rem" }} />,
    title: "Cloud Migration Services",
    subtitle:
      "Seamlessly migrate your applications and data to the cloud with minimal disruption to your business operations.",
  },
  {
    icon: <FaShieldAlt className="mb-4" style={{ fontSize: "4rem" }} />,
    title: "Cloud Security Solutions",
    subtitle:
      "Safeguard your cloud environment with advanced security protocols and 24/7 monitoring.",
  },
];

export default function CloudDetailsPage() {
  return (
    <>
      {/* Page Heading */}
      <PageHeading
        title="Cloud Services"
        bgSrc="/Home/cloud.jpg"
        pageLinkText="Cloud Solutions"
      />
      <Spacing lg="145" md="80" />

      {/* About Section */}
      <Div className="container">
        <SectionHeading
          title="Cloud Solutions"
          subtitle="Transform your business with cutting-edge cloud solutions. From infrastructure management to security and migration, our cloud expertise helps you achieve agility, scalability, and cost savings."
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

      {/* Image Section */}
      <Spacing lg="120" md="50" />
      <Div className="container">
        <Div className="row align-items-center">
          <Div className="col-xl-5 col-lg-6">
            <Div className="cs-radius_15 cs-shine_hover_1">
              <Image
                src="/services/cloud/2.jpg"
                alt="Cloud Services"
                width={600}
                height={600}
                className="cs-radius_15 "
              />
            </Div>
            <Spacing lg="0" md="40" />
          </Div>
          <Div className="col-lg-6 offset-xl-1">
            <h2 className="cs-font_50 cs-m0">
              Empowering Businesses with Cloud
            </h2>
            <Spacing lg="50" md="30" />
            <p>
              At <strong>Big Careers Technology solutions</strong>, we
              specialize in helping businesses leverage the full potential of
              the cloud. Whether you're looking to migrate, optimize, or secure
              your cloud environment, we have the expertise to ensure a seamless
              and successful transformation.
            </p>
          </Div>
        </Div>
      </Div>

      <Spacing lg="120" md="50" />

      {/* Key Benefits Section */}
      <Div className="container">
        <SectionHeading
          title="Key Benefits of Our Cloud Services"
          subtitle="Why Choose Big Careers Technology solutions for Cloud Solutions?"
        >
          <Spacing lg="30" md="20" />
          <Div className="row">
            {/* Left Column with Text */}
            <Div className="col-lg-6 col-md-12">
              <ul className="cs-m0">
                <li>Enhanced scalability with flexible cloud solutions.</li>
                <li>Cost savings through optimized resource management.</li>
                <li>Increased reliability and uptime with cloud resilience.</li>
                <li>Comprehensive security for your cloud environment.</li>
                <li>24/7 support and monitoring for seamless operations.</li>
                <li>
                  Tailored migration strategies for smooth cloud adoption.
                </li>
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

      {/* Why Choose Us Section */}
      <Div className="container">
        <Div className="row">
          <Div className="col-xl-5 col-lg-6">
            <SectionHeading
              title="Why Choose Us"
              subtitle="Driving Innovation with Cloud Expertise"
            >
              <Spacing lg="30" md="20" />
              <p className="cs-m0">
                At <strong>Big Careers Technology solutions</strong>, we bring
                years of experience in delivering cloud solutions tailored to
                your business needs. Our team ensures your cloud journey is
                seamless, secure, and designed for maximum efficiency.
              </p>
              <Spacing lg="15" md="15" />
              <p className="cs-m0">
                Partner with us to unlock the full potential of the cloud,
                improve operational efficiency, and stay ahead in the
                competitive market.
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
      <ContactFooter />
    </>
  );
}
