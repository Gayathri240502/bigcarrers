import Button from "/app/ui/Button";
import Div from "/app/ui/Div";
import IconBox from "/app/ui/IconBox";
import PageHeading from "/app/ui/PageHeading";
import SectionHeading from "/app/ui/SectionHeading";
import Spacing from "/app/ui/Spacing";
import Image from "next/image";
import { FaCogs, FaCodeBranch, FaCloud } from "react-icons/fa";
import ContactFooter from "/app/ui/contactpg";

export const metadata = {
  title: "DevOps Solutions | Big Careers Technology solutions",
  description:
    "Explore Big Careers Technology solutions's DevOps solutions to streamline your software development lifecycle, enhance collaboration between development and operations teams, and deliver faster, more reliable releases with automation and CI/CD practices.",
  keywords: [
    "DevOps Solutions",
    "Continuous Integration",
    "Continuous Deployment",
    "CI/CD Practices",
    "Automation in DevOps",
    "DevOps Automation",
    "Software Development Lifecycle",
    "DevOps Pipeline",
    "Infrastructure as Code",
    "Cloud DevOps",
    "DevOps Consulting",
  ],
  robots: "index, follow",
  openGraph: {
    title: "DevOps Solutions | Big Careers Technology solutions",
    description:
      "Big Careers Technology solutions provides end-to-end DevOps solutions, automating processes and enhancing collaboration to deliver faster and more reliable software deployments.",
    url: "https://bigcareers.solutions/devops-solutions",
    type: "website",
    image: "/logo.jpg",
  },
  twitter: {
    card: "summary_large_image",
    title: "DevOps Solutions | Big Careers Technology solutions",
    description:
      "Big Careers Technology solutions's DevOps solutions enable faster and more reliable software deployments with automation, CI/CD practices, and enhanced collaboration between teams.",
    image: "/logo.jpg",
  },
};

const services = [
  {
    icon: <FaCodeBranch className="mb-4" style={{ fontSize: "4rem" }} />,
    title: "CI/CD Pipeline Implementation",
    subtitle:
      "Automate your software delivery processes for faster and more reliable deployments with a robust CI/CD pipeline.",
  },
  {
    icon: <FaCogs className="mb-4" style={{ fontSize: "4rem" }} />,
    title: "Infrastructure as Code (IaC)",
    subtitle:
      "Achieve consistency and scalability by managing your infrastructure through code with tools like Terraform and Ansible.",
  },
  {
    icon: <FaCloud className="mb-4" style={{ fontSize: "4rem" }} />,
    title: "Cloud Migration & Management",
    subtitle:
      "Seamlessly migrate to the cloud and ensure optimal performance with our expert cloud management services.",
  },
];

export default function DevOpsDetailsPage() {
  return (
    <>
      {/* Page Heading */}
      <PageHeading
        title="DevOps Services"
        bgSrc="/services/devops/devops.jpg"
        pageLinkText="DevOps Solutions"
      />
      <Spacing lg="145" md="80" />

      {/* About Section */}
      <Div className="container">
        <SectionHeading
          title="DevOps Solutions"
          subtitle="Revolutionize your development lifecycle with our comprehensive DevOps services. From continuous integration to cloud management, we empower your business to innovate faster and more efficiently."
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
                src="/services/devops/3.jpg"
                alt="DevOps Services"
                width={600}
                height={600}
                className="cs-radius_15 "
              />
            </Div>
            <Spacing lg="0" md="40" />
          </Div>
          <Div className="col-lg-6 offset-xl-1">
            <h2 className="cs-font_50 cs-m0">
              Empowering Development with DevOps
            </h2>
            <Spacing lg="50" md="30" />
            <p>
              At <strong>Big Careers Technology solutions</strong>, we enable
              businesses to embrace DevOps culture and practices, enhancing
              collaboration, efficiency, and speed. Our solutions ensure
              seamless integration across your development and operations teams,
              driving consistent innovation and scalability.
            </p>
          </Div>
        </Div>
      </Div>

      <Spacing lg="120" md="50" />

      {/* Key Benefits Section */}
      <Div className="container">
        <SectionHeading
          title="Key Benefits of Our DevOps Services"
          subtitle="Why Choose Big Careers Technology solutions for DevOps?"
        >
          <Spacing lg="30" md="20" />
          <Div className="row">
            {/* Left Column with Text */}
            <Div className="col-lg-6 col-md-12">
              <ul className="cs-m0">
                <li>Accelerated delivery cycles with CI/CD pipelines.</li>
                <li>Streamlined infrastructure through IaC practices.</li>
                <li>Enhanced system reliability with proactive monitoring.</li>
                <li>Optimized cloud resources for cost efficiency.</li>
                <li>
                  Improved collaboration between development and operations
                  teams.
                </li>
                <li>
                  24/7 support to ensure seamless operations and rapid
                  resolution of issues.
                </li>
              </ul>
            </Div>
            {/* Right Column with Image */}
            <Div className="col-lg-6 col-md-12 text-center">
              <Image
                src="/services/devops/1.jpg"
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
              subtitle="Transforming Your Operations with Expertise"
            >
              <Spacing lg="30" md="20" />
              <p className="cs-m0">
                At <strong>Big Careers Technology solutions</strong>, we
                specialize in delivering comprehensive DevOps solutions tailored
                to your unique requirements. From pipeline creation to cloud
                optimization, we ensure your systems are efficient, reliable,
                and scalable.
              </p>
              <Spacing lg="15" md="15" />
              <p className="cs-m0">
                With a focus on automation, collaboration, and cutting-edge
                tools, we help businesses achieve faster deployments and
                improved system reliability. Let us transform your development
                lifecycle for a competitive edge.
              </p>
            </SectionHeading>
          </Div>
          {/* Right Column with Image */}
          <Div className="col-xl-5 offset-xl-1 col-lg-6">
            <Div className="cs-image_layer cs-style1">
              <Div className="cs-image_layer_in">
                <Image
                  src="/services/devops/2.jpg"
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
