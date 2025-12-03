import Div from "/app/ui/Div";
import PageHeading from "/app/ui/PageHeading";
import SectionHeading from "/app/ui/SectionHeading";
import Spacing from "/app/ui/Spacing";
import Image from "next/image";
import { FaDesktop, FaSuitcase, FaMobileAlt } from "react-icons/fa";
import ContactFooter from "/app/ui/contactpg";

export const metadata = {
  title: "Custom Software Development | Big Careers Technology solutions",
  description:
    "Discover Big Careers Technology solutions's custom software development services, offering tailored solutions powered by AI, Cloud, Data Analytics, and IoT to meet your unique business needs and drive digital transformation.",
  keywords: [
    "Custom Software Development",
    "Bespoke Software Solutions",
    "AI-powered Software",
    "Cloud-based Software Development",
    "Data Analytics Software",
    "IoT Software Solutions",
    "Enterprise Software Development",
    "Custom Applications",
    "Software Development Services",
    "Software Integration",
    "Digital Transformation",
  ],
  robots: "index, follow",
  openGraph: {
    title: "Custom Software Development | Big Careers Technology solutions",
    description:
      "Big Careers Technology solutions offers custom software development services tailored to your business needs, leveraging AI, Cloud, and Data Analytics to deliver innovative and scalable solutions.",
    url: "https://bigcareers.solutions/custom-software-development",
    type: "website",
    image: "/logo.jpg",
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Software Development | Big Careers Technology solutions",
    description:
      "Big Careers Technology solutions delivers custom software solutions tailored to your business, powered by AI, Cloud, and Data Analytics for enhanced performance and scalability.",
    image: "/logo.jpg",
  },
};

const services = [
  {
    icon: <FaDesktop className="mb-4" style={{ fontSize: "4rem" }} />,
    title: "Desktop Applications",
    subtitle:
      "Custom client/server applications and PC software tailored to your business needs.",
  },
  {
    icon: <FaSuitcase className="mb-4" style={{ fontSize: "4rem" }} />,
    title: "Business Solutions",
    subtitle:
      "Comprehensive software solutions for managing resources, functions, and customer relationships.",
  },
  {
    icon: <FaMobileAlt className="mb-4" style={{ fontSize: "4rem" }} />,
    title: "Mobile Applications",
    subtitle:
      "Mobile apps for tablets and phones to extend your services and marketing efforts.",
  },
];

export default function CustomSoftwareDevelopmentPage() {
  return (
    <>
      {/* Page Heading */}
      <PageHeading
        title="Custom Software Development"
        bgSrc="/services/custom/cust.jpg"
        pageLinkText="Software Solutions"
      />
      <Spacing lg="145" md="80" />

      {/* About Section */}
      <Div className="container">
        <SectionHeading
          title="Custom Software Solutions"
          subtitle="Create software that fits your business like a glove. Our custom development services range from desktop applications to mobile solutions, tailored to your unique needs."
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
                src="/services/custom/2.jpg"
                alt="Custom Software Development"
                width={600}
                height={600}
                className="cs-radius_15 "
              />
            </Div>
            <Spacing lg="0" md="40" />
          </Div>
          <Div className="col-lg-6 offset-xl-1">
            <h2 className="cs-font_50 cs-m0">
              Tailored Software for Your Business
            </h2>
            <Spacing lg="50" md="30" />
            <p>
              At <strong>Origin Software</strong>, we specialize in developing
              custom software solutions that are specifically built to address
              the unique challenges of your business. Whether you need a desktop
              application, mobile solution, or web platform, our expert team
              ensures your software is crafted for optimal performance and
              scalability.
            </p>
          </Div>
        </Div>
      </Div>

      <Spacing lg="120" md="50" />

      {/* Key Benefits Section */}
      <Div className="container">
        <SectionHeading
          title="Key Benefits of Our Custom Software Solutions"
          subtitle="Why Choose Origin Software for Custom Development?"
        >
          <Spacing lg="30" md="20" />
          <Div className="row">
            {/* Left Column with Text */}
            <Div className="col-lg-6 col-md-12">
              <ul className="cs-m0">
                <li>Tailored software solutions for your specific needs.</li>
                <li>
                  Integration with existing systems for seamless operations.
                </li>
                <li>
                  Highly scalable software designed to grow with your business.
                </li>
                <li>
                  Cross-platform support for desktop, mobile, and web apps.
                </li>
                <li>Reliable ongoing support and maintenance services.</li>
                <li>Customizable features to enhance business processes.</li>
              </ul>
            </Div>
            {/* Right Column with Image */}
            <Div className="col-lg-6 col-md-12 text-center">
              <Image
                src="/services/custom/3.jpg"
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
              subtitle="Transform Your Business with Tailored Software Solutions"
            >
              <Spacing lg="30" md="20" />
              <p className="cs-m0">
                At <strong>Origin Software</strong>, we believe in the power of
                custom solutions that align perfectly with your business goals.
                From desktop applications to cloud-based software, our team
                ensures that every product we create is optimized for
                performance and tailored to your vision.
              </p>
              <Spacing lg="15" md="15" />
              <p className="cs-m0">
                Our solutions are not just software; they are tools designed to
                drive innovation and growth, backed by continuous support and
                development.
              </p>
            </SectionHeading>
          </Div>
          {/* Right Column with Image */}
          <Div className="col-xl-5 offset-xl-1 col-lg-6">
            <Div className="cs-image_layer cs-style1">
              <Div className="cs-image_layer_in">
                <Image
                  src="/services/custom/1.jpg"
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
