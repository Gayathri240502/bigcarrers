import Button from "/app/ui/Button";
import Div from "/app/ui/Div";
import IconBox from "/app/ui/IconBox";
import PageHeading from "/app/ui/PageHeading";
import SectionHeading from "/app/ui/SectionHeading";
import Spacing from "/app/ui/Spacing";
import Image from "next/image";

import { FaCloud, FaTools, FaConnectdevelop } from "react-icons/fa";
import ContactFooter from "/app/ui/contactpg";

export const metadata = {
  title: "Salesforce Services | Big Careers Technology solutions",
  description:
    "Big Careers Technology solutions offers Salesforce services to help businesses optimize their customer relationship management (CRM), streamline sales processes, and drive growth with advanced Salesforce solutions tailored to your needs.",
  keywords: [
    "Salesforce Services",
    "Salesforce CRM",
    "Customer Relationship Management",
    "Salesforce Integration",
    "Salesforce Customization",
    "Salesforce Solutions",
    "Salesforce Development",
    "Salesforce Implementation",
    "Salesforce Automation",
    "Salesforce Cloud",
    "Salesforce Consulting",
    "CRM Solutions",
  ],
  robots: "index, follow",
  openGraph: {
    title: "Salesforce Services | Big Careers Technology solutions",
    description:
      "Optimize your CRM with Big Careers Technology solutions’s Salesforce services, offering advanced integration, customization, and automation to streamline sales processes and drive business growth.",
    url: "https://bigcareers.solutions/salesforce-services",
    type: "website",
    image: "/logo.jpg",
  },
  twitter: {
    card: "summary_large_image",
    title: "Salesforce Services | Big Careers Technology solutions",
    description:
      "Maximize your sales and customer relationships with Big Careers Technology solutions’s Salesforce services, offering tailored solutions for Salesforce integration, automation, and CRM optimization.",
    image: "/logo.jpg",
  },
};

const services = [
  {
    icon: <FaCloud className="mb-4" style={{ fontSize: "4rem" }} />,
    title: "Salesforce Implementation",
    subtitle:
      "Leverage Salesforce to enhance your sales, marketing, and customer service with tailored CRM solutions.",
  },
  {
    icon: <FaTools className="mb-4" style={{ fontSize: "4rem" }} />,
    title: "Salesforce Customization",
    subtitle:
      "Customize your Salesforce platform to meet your unique business needs and drive efficiency with automation.",
  },
  {
    icon: <FaConnectdevelop className="mb-4" style={{ fontSize: "4rem" }} />,
    title: "Salesforce Integration",
    subtitle:
      "Integrate Salesforce seamlessly with your existing systems to streamline processes and improve data accessibility.",
  },
];

export default function SalesforceDetailsPage() {
  return (
    <>
      {/* Page Heading */}
      <PageHeading
        title="Salesforce Services"
        bgSrc="/services/salesforce/salesforce.jpg"
        pageLinkText="Salesforce Solutions"
      />
      <Spacing lg="145" md="80" />

      {/* About Section */}
      <Div className="container">
        <SectionHeading
          title="Salesforce Solutions"
          subtitle="Transform your business operations with Salesforce, a leading CRM platform. Our services help you optimize customer relationships, automate tasks, and drive growth."
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
                src="/services/salesforce/salesforce.jpg"
                alt="Salesforce Services"
                width={600}
                height={600}
                className="cs-radius_15 "
              />
            </Div>
            <Spacing lg="0" md="40" />
          </Div>
          <Div className="col-lg-6 offset-xl-1">
            <h2 className="cs-font_50 cs-m0">
              Empowering Businesses with Salesforce
            </h2>
            <Spacing lg="50" md="30" />
            <p>
              At <strong>Big Careers Technology solutions</strong>, we
              specialize in helping businesses unlock the full potential of
              Salesforce to enhance customer relationships, automate workflows,
              and drive growth. Our tailored Salesforce solutions help you
              streamline your sales, marketing, and customer service processes.
            </p>
          </Div>
        </Div>
      </Div>

      <Spacing lg="120" md="50" />

      {/* Key Benefits Section */}
      <Div className="container">
        <SectionHeading
          title="Key Benefits of Our Salesforce Services"
          subtitle="Why Choose Big Careers Technology solutions for Salesforce?"
        >
          <Spacing lg="30" md="20" />
          <Div className="row">
            {/* Left Column with Text */}
            <Div className="col-lg-6 col-md-12">
              <ul className="cs-m0">
                <li>Enhanced customer insights with centralized CRM data.</li>
                <li>Automated workflows and tasks to improve efficiency.</li>
                <li>
                  Improved customer engagement with personalized communication.
                </li>
                <li>
                  Seamless integration with third-party tools and applications.
                </li>
                <li>Scalable solutions to support business growth.</li>
                <li>24/7 support for maintaining optimal performance.</li>
              </ul>
            </Div>
            {/* Right Column with Image */}
            <Div className="col-lg-6 col-md-12 text-center">
              <Image
                src="/services/salesforce/3.jpg"
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
              subtitle="Transforming Your Business with Salesforce Expertise"
            >
              <Spacing lg="30" md="20" />
              <p className="cs-m0">
                At <strong>Big Careers Technology solutions</strong>, we deliver
                Salesforce services that are aligned with your business needs.
                Our team of certified Salesforce experts ensures seamless
                implementation, customization, and optimization to give you a
                competitive edge.
              </p>
              <Spacing lg="15" md="15" />
              <p className="cs-m0">
                With years of experience in working with Salesforce, we help
                businesses achieve a 360-degree view of their customers,
                automate critical processes, and improve decision-making.
              </p>
            </SectionHeading>
          </Div>
          {/* Right Column with Image */}
          <Div className="col-xl-5 offset-xl-1 col-lg-6">
            <Div className="cs-image_layer cs-style1">
              <Div className="cs-image_layer_in">
                <Image
                  src="/services/salesforce/2.jpg"
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
