import Div from "/app/ui/Div";

import PageHeading from "/app/ui/PageHeading";
import SectionHeading from "/app/ui/SectionHeading";
import Spacing from "/app/ui/Spacing";
import Image from "next/image";
import { BiNetworkChart, BiSync, BiPlug } from "react-icons/bi";
import ContactFooter from "/app/ui/contactpg";

export const metadata = {
  title: "Application Integration Solutions | Big Careers Technology solutions",
  description:
    "Explore Big Careers Technology solutions's application integration solutions, leveraging Cloud, AI, IoT, and Data Analytics to seamlessly connect and streamline business applications, enhance data flow, and improve operational efficiency.",
  keywords: [
    "Application Integration Solutions",
    "Enterprise Application Integration",
    "Cloud Integration",
    "AI in Application Integration",
    "IoT Application Integration",
    "Data Analytics Integration",
    "Business Application Integration",
    "ERP Integration",
    "CRM Integration",
    "Application Connectivity",
    "Seamless Data Flow",
  ],
  robots: "index, follow",
  openGraph: {
    title:
      "Application Integration Solutions | Big Careers Technology solutions",
    description:
      "Big Careers Technology solutions offers advanced application integration solutions powered by AI, Cloud, IoT, and Data Analytics to streamline data flow and improve application connectivity.",
    url: "https://bigcareers.solutions/application-integration-solutions",
    type: "website",
    image: "/logo.jpg",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Application Integration Solutions | Big Careers Technology solutions",
    description:
      "Big Careers Technology solutions provides innovative application integration solutions using AI, Cloud, IoT, and Data Analytics to optimize business processes and improve operational efficiency.",
    image: "/logo.jpg",
  },
};

const services = [
  {
    icon: <BiNetworkChart className="mb-4" style={{ fontSize: "4rem" }} />,
    title: "Seamless Application Connectivity",
    subtitle:
      "Integrate diverse software systems to ensure smooth communication across your business functions, from accounting to customer service.",
  },
  {
    icon: <BiSync className="mb-4" style={{ fontSize: "4rem" }} />,
    title: "Data Synchronization",
    subtitle:
      "Automate data flow between different applications to eliminate data discrepancies and ensure up-to-date, accurate information.",
  },
  {
    icon: <BiPlug className="mb-4" style={{ fontSize: "4rem" }} />,
    title: "Custom Add-ons & Plug-ins",
    subtitle:
      "Develop custom software add-ons to enhance existing systems, optimizing their functionality to meet your specific business needs.",
  },
];

export default function ApplicationIntegrationPage() {
  return (
    <>
      {/* Page Heading */}
      <PageHeading
        title="Application Integration"
        bgSrc="/services/app/apii.jpg"
        pageLinkText="Integration Solutions"
      />
      <Spacing lg="145" md="80" />

      {/* About Section */}
      <Div className="container">
        <SectionHeading
          title="Optimizing Your Operations with Application Integration"
          subtitle="Unify your disparate systems and eliminate data silos with our custom application integration services. We help you streamline processes and achieve seamless business operations."
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
                src="/services/app/a1.jpg"
                alt="Application Integration"
                width={600}
                height={600}
                className="cs-radius_15 "
              />
            </Div>
            <Spacing lg="0" md="40" />
          </Div>
          <Div className="col-lg-6 offset-xl-1">
            <h2 className="cs-font_50 cs-m0">
              Overcoming Integration Challenges
            </h2>
            <Spacing lg="50" md="30" />
            <p>
              At <strong>Origin Software</strong>, we understand the pain of
              managing multiple disjointed systems. Our application integration
              services bridge the gap between software suites, streamlining your
              processes and making your business more efficient. We handle
              everything from data synchronization to custom integrations,
              ensuring a smooth and unified operation.
            </p>
          </Div>
        </Div>
      </Div>

      <Spacing lg="120" md="50" />

      {/* Key Benefits Section */}
      <Div className="container">
        <SectionHeading
          title="Key Benefits of Our Application Integration Services"
          subtitle="Why Choose Origin Software for Integration?"
        >
          <Spacing lg="30" md="20" />
          <Div className="row">
            {/* Left Column with Text */}
            <Div className="col-lg-6 col-md-12">
              <ul className="cs-m0">
                <li>
                  Eliminate redundant manual processes and improve efficiency.
                </li>
                <li>
                  Ensure accurate and synchronized data across all systems.
                </li>
                <li>Reduce IT staff overload and manual intervention.</li>
                <li>Improve decision-making with real-time data insights.</li>
                <li>
                  Enhance operational transparency with unified reporting
                  systems.
                </li>
                <li>
                  Customized integration solutions to fit your specific needs.
                </li>
              </ul>
            </Div>
            {/* Right Column with Image */}
            <Div className="col-lg-6 col-md-12 text-center">
              <Image
                src="/services/app/a3.jpg"
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
              title="Why Choose Origin Software"
              subtitle="Simplify and Optimize Your Business Operations"
            >
              <Spacing lg="30" md="20" />
              <p className="cs-m0">
                At <strong>Origin Software</strong>, we specialize in
                integrating your business systems, so they work as one cohesive
                unit. Whether you're dealing with multiple software suites or
                siloed data, our application integration services will
                streamline your workflows, improve data accuracy, and boost
                productivity across departments.
              </p>
              <Spacing lg="15" md="15" />
              <p className="cs-m0">
                Our team works closely with yours to understand your unique
                requirements and deliver tailored integration solutions that
                bring measurable results, enhancing both your internal and
                external operations.
              </p>
            </SectionHeading>
          </Div>
          {/* Right Column with Image */}
          <Div className="col-xl-5 offset-xl-1 col-lg-6">
            <Div className="cs-image_layer cs-style1">
              <Div className="cs-image_layer_in">
                <Image
                  src="/services/app/app.jpg"
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
