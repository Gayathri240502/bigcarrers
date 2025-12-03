import Button from "/app/ui/Button";
import Div from "/app/ui/Div";
import IconBox from "/app/ui/IconBox";
import PageHeading from "/app/ui/PageHeading";
import SectionHeading from "/app/ui/SectionHeading";
import Spacing from "/app/ui/Spacing";
import Image from "next/image";
import { FaChartLine, FaLightbulb, FaCogs } from "react-icons/fa";
import ContactFooter from "/app/ui/contactpg";

export const metadata = {
  title: "Consulting Services | Big Careers Technology solutions",
  description:
    "Discover Big Careers Technology solutions's consulting services, leveraging expertise in AI, Blockchain, Cyber Security, Cloud, Data Analytics, and more to provide strategic guidance and digital transformation solutions for your business.",
  keywords: [
    "Consulting Services",
    "AI Consulting",
    "Blockchain Consulting",
    "Cyber Security Consulting",
    "Cloud Consulting",
    "Data Analytics Consulting",
    "Digital Transformation",
    "Technology Strategy",
    "Business Process Optimization",
    "Innovation Consulting",
    "Enterprise Consulting",
  ],
  robots: "index, follow",
  openGraph: {
    title: "Consulting Services | Big Careers Technology solutions",
    description:
      "Big Careers Technology solutions offers expert consulting services across AI, Blockchain, Cyber Security, Cloud, and Data Analytics, guiding your business through digital transformation and innovation.",
    url: "https://bigcareers.solutions/consulting-services",
    type: "website",
    image: "/logo.jpg",
  },
  twitter: {
    card: "summary_large_image",
    title: "Consulting Services | Big Careers Technology solutions",
    description:
      "Big Careers Technology solutions provides strategic consulting services in AI, Blockchain, Cyber Security, and more to drive your business's digital transformation and innovation.",
    image: "/logo.jpg",
  },
};

const services = [
  {
    icon: <FaChartLine className="mb-4" style={{ fontSize: "4rem" }} />,
    title: "Business Strategy Consulting",
    subtitle:
      "Develop actionable strategies to achieve your business goals and stay ahead in a competitive market.",
  },
  {
    icon: <FaLightbulb className="mb-4" style={{ fontSize: "4rem" }} />,
    title: "Technology Advisory",
    subtitle:
      "Leverage the latest technologies to optimize your operations and drive innovation across your organization.",
  },
  {
    icon: <FaCogs className="mb-4" style={{ fontSize: "4rem" }} />,
    title: "Operational Excellence",
    subtitle:
      "Enhance efficiency and productivity with our tailored operational consulting solutions.",
  },
];

export default function ConsultingDetailsPage() {
  return (
    <>
      {/* Page Heading */}
      <PageHeading
        title="Consulting Services"
        bgSrc="/services/consulting/consultt.jpg"
        pageLinkText="Consulting Solutions"
      />
      <Spacing lg="145" md="80" />

      {/* About Section */}
      <Div className="container">
        <SectionHeading
          title="Consulting Solutions"
          subtitle="Empower your business with expert consulting services tailored to your unique challenges. We combine industry expertise with innovative solutions to help you achieve sustainable growth."
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
                src="/services/consulting/2.jpg"
                alt="Consulting Services"
                width={600}
                height={600}
                className="cs-radius_15 "
              />
            </Div>
            <Spacing lg="0" md="40" />
          </Div>
          <Div className="col-lg-6 offset-xl-1">
            <h2 className="cs-font_50 cs-m0">
              Unlock Your Potential with Expert Guidance
            </h2>
            <Spacing lg="50" md="30" />
            <p>
              At <strong>Big Careers Technology solutions</strong>, we
              specialize in delivering insights that drive results. Whether it's
              enhancing operational efficiency or crafting a forward-thinking
              business strategy, our consulting services empower your business
              to excel in today's dynamic environment.
            </p>
          </Div>
        </Div>
      </Div>

      <Spacing lg="120" md="50" />

      {/* Key Benefits Section */}
      <Div className="container">
        <SectionHeading
          title="Key Benefits of Our Consulting Services"
          subtitle="Why Choose Big Careers Technology solutions for Consulting?"
        >
          <Spacing lg="30" md="20" />
          <Div className="row">
            {/* Left Column with Text */}
            <Div className="col-lg-6 col-md-12">
              <ul className="cs-m0">
                <li>Tailored solutions to meet your business needs.</li>
                <li>Data-driven insights for smarter decision-making.</li>
                <li>Expert guidance to navigate industry challenges.</li>
                <li>Innovative strategies to drive growth and success.</li>
                <li>
                  Comprehensive support throughout the transformation journey.
                </li>
                <li>
                  A dedicated team of consultants with a proven track record.
                </li>
              </ul>
            </Div>
            {/* Right Column with Image */}
            <Div className="col-lg-6 col-md-12 text-center">
              <Image
                src="/services/consulting/3.jpg"
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
              subtitle="Your Trusted Consulting Partner"
            >
              <Spacing lg="30" md="20" />
              <p className="cs-m0">
                At <strong>Big Careers Technology solutions</strong>, we combine
                years of experience with a deep understanding of diverse
                industries to deliver practical and innovative solutions. Our
                team is committed to helping you achieve your business
                objectives and build a sustainable future.
              </p>
              <Spacing lg="15" md="15" />
              <p className="cs-m0">
                Partner with us to unlock new opportunities, overcome
                challenges, and achieve lasting success.
              </p>
            </SectionHeading>
          </Div>
          {/* Right Column with Image */}
          <Div className="col-xl-5 offset-xl-1 col-lg-6">
            <Div className="cs-image_layer cs-style1">
              <Div className="cs-image_layer_in">
                <Image
                  src="/services/consulting/1.jpg"
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
