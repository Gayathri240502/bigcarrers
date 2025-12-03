import Button from "/app/ui/Button";
import Div from "/app/ui/Div";
import IconBox from "/app/ui/IconBox";
import PageHeading from "/app/ui/PageHeading";
import SectionHeading from "/app/ui/SectionHeading";
import Spacing from "/app/ui/Spacing";
import Image from "next/image";

import ContactFooter from "/app/ui/contactpg";

export const metadata = {
  title: "Custom Embedded Solutions | KolVal",
  description:
    "Explore KolVal's custom embedded solutions, leveraging IoT, AI, and Data Analytics to design and develop tailored systems for enhancing performance, scalability, and reliability in embedded applications.",
  keywords: [
    "Custom Embedded Solutions",
    "Embedded Systems",
    "IoT Embedded Solutions",
    "AI Embedded Systems",
    "Embedded Application Development",
    "IoT Solutions",
    "AI in Embedded Systems",
    "Embedded System Integration",
    "Custom Electronics Design",
    "Embedded Technology",
  ],
  robots: "index, follow",
  openGraph: {
    title: "Custom Embedded Solutions | KolVal",
    description:
      "KolVal offers innovative custom embedded solutions powered by IoT and AI to enhance performance, scalability, and functionality in embedded applications across industries.",
    url: "https://www.kolval.com/custom-embedded-solutions",
    type: "website",
    image: "/logo.jpg",
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Embedded Solutions | KolVal",
    description:
      "KolVal delivers tailored embedded solutions powered by IoT, AI, and Data Analytics, designed to improve performance and scalability of embedded systems.",
    image: "/logo.jpg",
  },
};

const solutions = [
  {
    icon: "/images/icons/service_icon_1.svg",
    title: "IoT Device Integration",
    subtitle:
      "Seamlessly connect and integrate IoT devices to create smarter systems. Enhance performance with our robust integration solutions.",
  },
  {
    icon: "/images/icons/service_icon_2.svg",
    title: "Firmware Development",
    subtitle:
      "Tailored firmware solutions for embedded devices, ensuring optimal performance and compatibility across hardware platforms.",
  },
  {
    icon: "/images/icons/service_icon_3.svg",
    title: "Custom PCB Design",
    subtitle:
      "Innovative and efficient PCB designs tailored for your embedded systems, ensuring reliability and scalability.",
  },
];

export default function EmbeddedDetailsPage() {
  return (
    <>
      {/* Page Heading */}
      <PageHeading
        title="Custom Embedded Solutions"
        bgSrc="/services//embedded/2.jpg"
        pageLinkText="Embedded Solutions"
      />
      <Spacing lg="145" md="80" />

      {/* About Section */}
      <Div className="container">
        <SectionHeading
          title="Custom Embedded Solutions"
          subtitle="Revolutionize your operations with our tailored embedded solutions. From IoT integration to custom firmware development, we provide innovative solutions to meet your unique business needs."
          variant="cs-style1 text-center"
        />
        <Spacing lg="90" md="45" />
        <Div className="row">
          {solutions.map((solution, index) => (
            <Div className="col-lg-4" key={index}>
              <IconBox
                icon={solution.icon}
                title={solution.title}
                subtitle={solution.subtitle}
              />
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
                src="/services/embedded/3.jpg"
                alt="Embedded Service"
                width={600}
                height={600}
                className="cs-radius_15 "
              />
            </Div>
            <Spacing lg="0" md="40" />
          </Div>
          <Div className="col-lg-6 offset-xl-1">
            <h2 className="cs-font_50 cs-m0">
              Driving Innovation with Embedded Solutions
            </h2>
            <Spacing lg="50" md="30" />
            <p>
              At <strong>Kolval</strong>, we specialize in creating cutting-edge
              embedded systems tailored to your business requirements. Our
              solutions range from IoT device integration to custom PCB design,
              enabling your business to stay competitive in a rapidly evolving
              technological landscape.
            </p>
          </Div>
        </Div>
      </Div>

      <Spacing lg="120" md="50" />

      {/* Key Benefits Section */}
      <Div className="container">
        <SectionHeading
          title="Key Benefits of Our Embedded Solutions"
          subtitle="Why Choose KolVal for Embedded Solutions?"
        >
          <Spacing lg="30" md="20" />
          <Div className="row">
            {/* Left Column with Text */}
            <Div className="col-lg-6 col-md-12">
              <ul className="cs-m0">
                <li>Custom solutions tailored to your unique needs.</li>
                <li>Seamless IoT device integration for smarter operations.</li>
                <li>
                  Reliable firmware development ensuring high performance.
                </li>
                <li>Advanced PCB design for efficient and scalable systems.</li>
                <li>Enhanced connectivity and operational efficiency.</li>
                <li>
                  Support and maintenance provided by experienced engineers.
                </li>
              </ul>
            </Div>
            {/* Right Column with Image */}
            <Div className="col-lg-6 col-md-12 text-center">
              <Image
                src="/services/embedded/1.jpg"
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
              subtitle="Expert Solutions for Embedded Systems"
            >
              <Spacing lg="30" md="20" />
              <p className="cs-m0">
                At <strong>Kolval</strong>, we understand the intricacies of
                embedded systems and deliver solutions that drive innovation and
                efficiency. Our expert engineers collaborate with you to design,
                develop, and deploy systems that match your unique requirements.
              </p>
              <Spacing lg="15" md="15" />
              <p className="cs-m0">
                Backed by a track record of success and a commitment to
                excellence, we ensure your systems are future-ready and
                optimized for maximum impact.
              </p>
            </SectionHeading>
          </Div>
          {/* Right Column with Image */}
          <Div className="col-xl-5 offset-xl-1 col-lg-6">
            <Div className="cs-image_layer cs-style1">
              <Div className="cs-image_layer_in">
                <Image
                  src="/services/embedded/4.jpg"
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
