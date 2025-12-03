import Button from "../../ui/Button";
import Div from "../../ui/Div";
import IconBox from "../../ui/IconBox";
import PageHeading from "../../ui/PageHeading";
import SectionHeading from "../../ui/SectionHeading";
import Spacing from "../../ui/Spacing";

import Image from "next/image";
import {
  FaServer,
  FaNetworkWired,
  FaShieldAlt,
  FaCloud,
  FaCogs,
  FaLock,
} from "react-icons/fa";

const services = [
  {
    icon: <FaServer className="mb-4" style={{ fontSize: "4rem" }} />,
    title: "Server Management",
    subtitle:
      "Optimize and manage your on-premise and cloud servers for peak performance and security.",
  },
  {
    icon: <FaNetworkWired className="mb-4" style={{ fontSize: "4rem" }} />,
    title: "Network Architecture",
    subtitle:
      "Design and implement robust network solutions to ensure seamless connectivity and efficiency.",
  },
  {
    icon: <FaShieldAlt className="mb-4" style={{ fontSize: "4rem" }} />,
    title: "Cybersecurity Solutions",
    subtitle:
      "Secure your IT infrastructure with advanced threat detection and mitigation strategies.",
  },
  {
    icon: <FaCloud className="mb-4" style={{ fontSize: "4rem" }} />,
    title: "Cloud Solutions",
    subtitle:
      "Leverage cloud technology for scalability, flexibility, and enhanced data management.",
  },
  {
    icon: <FaCogs className="mb-4" style={{ fontSize: "4rem" }} />,
    title: "IT Automation",
    subtitle:
      "Automate IT processes to improve efficiency and reduce manual intervention in operations.",
  },
  {
    icon: <FaLock className="mb-4" style={{ fontSize: "4rem" }} />,
    title: "Data Protection",
    subtitle:
      "Ensure your critical business data is protected with top-tier backup and recovery solutions.",
  },
];

export default function ITInfrastructureNetworkingPage() {
  return (
    <>
      {/* Page Heading */}
      <PageHeading
        title="IT Infrastructure & Networking"
        bgSrc="/services/itnet.jpg"
        pageLinkText="Infrastructure Solutions"
      />
      <Spacing lg="145" md="80" />

      {/* About Section */}
      <Div className="container">
        <SectionHeading
          title="Comprehensive IT Infrastructure & Networking Solutions"
          subtitle="From network architecture to server management, cybersecurity, and cloud solutions, we ensure your IT infrastructure is robust, scalable, and secure."
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

      {/* Why Choose Our Solutions */}
      <Div className="container">
        <SectionHeading
          title="Why Choose Our IT Solutions?"
          subtitle="Key Benefits of Our IT Infrastructure & Networking Services"
        >
          <Spacing lg="30" md="20" />
          <Div className="row">
            {/* Left Column with Text */}
            <Div className="col-lg-6 col-md-12">
              <ul className="cs-m0">
                <li>Scalable and future-proof IT infrastructure.</li>
                <li>Enhanced cybersecurity for data protection.</li>
                <li>Seamless cloud integration and automation.</li>
                <li>Optimized network and server performance.</li>
                <li>Comprehensive support and maintenance services.</li>
                <li>Industry-leading expertise in IT solutions.</li>
              </ul>
            </Div>
            {/* Right Column with Image */}
            <Div className="col-lg-6 col-md-12 text-center">
              <Image
                src="/services/it1.jpg"
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

      {/* IT Expertise Section */}
      <Div className="container">
        <Div className="row">
          <Div className="col-xl-5 col-lg-6">
            <SectionHeading
              title="Our Expertise in IT Infrastructure"
              subtitle="Optimizing Your Business IT Ecosystem"
            >
              <Spacing lg="30" md="20" />
              <p className="cs-m0">
                At <strong>Big Careers Technology solutions</strong>, we design
                and implement IT infrastructure solutions tailored to your
                business needs, ensuring seamless operations and enhanced
                security.
              </p>
              <Spacing lg="15" md="15" />
              <p className="cs-m0">
                Our expert team delivers cutting-edge networking, server
                management, and cloud solutions to help your organization stay
                ahead in the digital era.
              </p>
            </SectionHeading>
          </Div>
          {/* Right Column with Image */}
          <Div className="col-xl-5 offset-xl-1 col-lg-6">
            <Div className="cs-image_layer cs-style1">
              <Div className="cs-image_layer_in">
                <Image
                  src="/services/it2.jpg"
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
