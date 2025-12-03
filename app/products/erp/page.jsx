import Button from "../../ui/Button";
import Div from "../../ui/Div";
import IconBox from "../../ui/IconBox";
import PageHeading from "../../ui/PageHeading";
import SectionHeading from "../../ui/SectionHeading";
import Spacing from "../../ui/Spacing";
import Image from "next/image";
import {
  FaCogs,
  FaTasks,
  FaPlug,
  FaWrench,
  FaChalkboardTeacher,
  FaChartBar,
} from "react-icons/fa"; // Importing new icons from react-icons
import ContactFooter from "/app/ui/contactpg";

export const metadata = {
  title: "ERP Solutions | Big Careers Technology solutions",
  description:
    "Discover Big Careers Technology solutions's ERP solutions, leveraging AI, Cloud, Data Analytics, and Automation to optimize business processes, improve resource management, and enhance organizational efficiency.",
  keywords: [
    "ERP Solutions",
    "Enterprise Resource Planning",
    "AI in ERP",
    "Cloud ERP Solutions",
    "ERP Automation",
    "ERP Integration",
    "Data Analytics for ERP",
    "Enterprise Software Solutions",
    "Business Process Optimization",
    "Resource Management",
  ],
  robots: "index, follow",
  openGraph: {
    title: "ERP Solutions | Big Careers Technology solutions",
    description:
      "Big Careers Technology solutions offers advanced ERP solutions powered by AI, Cloud, and Data Analytics to enhance business processes, resource planning, and organizational efficiency.",
    url: "https://bigcareers.solutions/erp-solutions",
    type: "website",
    image: "/logo.jpg",
  },
  twitter: {
    card: "summary_large_image",
    title: "ERP Solutions | Big Careers Technology solutions",
    description:
      "Big Careers Technology solutions provides innovative ERP solutions, optimizing business processes and resource management using AI, Cloud, and Data Analytics.",
    image: "/logo.jpg",
  },
};

const services = [
  {
    icon: <FaCogs className="mb-4" style={{ fontSize: "4rem" }} />,
    title: "ERP Implementation",
    subtitle:
      "Seamless implementation of ERP systems to streamline your business processes and enhance organizational efficiency.",
  },
  {
    icon: <FaTasks className="mb-4" style={{ fontSize: "4rem" }} />,
    title: "ERP Customization",
    subtitle:
      "Tailor ERP solutions to meet your specific business needs, ensuring maximum ROI and a perfect fit for your operations.",
  },
  {
    icon: <FaPlug className="mb-4" style={{ fontSize: "4rem" }} />,
    title: "ERP Integration",
    subtitle:
      "Integrate ERP systems with existing business tools to centralize data, automate workflows, and enhance decision-making.",
  },
  {
    icon: <FaWrench className="mb-4" style={{ fontSize: "4rem" }} />,
    title: "ERP Support & Maintenance",
    subtitle:
      "Benefit from ongoing ERP support and maintenance services to ensure smooth operations, software updates, and issue resolution.",
  },
  {
    icon: <FaChalkboardTeacher className="mb-4" style={{ fontSize: "4rem" }} />,
    title: "ERP Training",
    subtitle:
      "Equip your team with the skills they need to fully leverage your ERP system, ensuring a smooth transition and maximizing productivity.",
  },
  {
    icon: <FaChartBar className="mb-4" style={{ fontSize: "4rem" }} />,
    title: "ERP Analytics & Reporting",
    subtitle:
      "Utilize ERP analytics tools to gain insights into business performance, identify trends, and make data-driven decisions.",
  },
];

export default function ERPDetailsPage() {
  return (
    <>
      {/* Page Heading */}
      <PageHeading
        title="ERP Solutions"
        bgSrc="/products/erp.jpg"
        pageLinkText="ERP Solutions"
      />
      <Spacing lg="145" md="80" />

      {/* About Section */}
      <Div className="container">
        <SectionHeading
          title="ERP Solutions"
          subtitle="Transform your business with comprehensive ERP solutions that streamline operations, improve efficiency, and drive growth."
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
                src="/products/erp1.jpg"
                alt="ERP Service"
                width={600}
                height={600}
                className="cs-radius_15"
              />
            </Div>
            <Spacing lg="0" md="40" />
          </Div>
          <Div className="col-lg-6 offset-xl-1">
            <h2 className="cs-font_50 cs-m0">
              Empowering Businesses with ERP Solutions
            </h2>
            <Spacing lg="50" md="30" />
            <p>
              At <strong>Big Careers Technology solutions</strong>, we offer
              comprehensive ERP solutions to streamline your processes, enhance
              productivity, and foster growth. From implementation to training
              and support, our ERP systems integrate all aspects of your
              business to provide real-time insights and improve
              decision-making.
            </p>
          </Div>
        </Div>
      </Div>

      <Spacing lg="120" md="50" />

      {/* Key Benefits Section */}
      <Div className="container">
        <SectionHeading
          title="Key Benefits of Our ERP Solutions"
          subtitle="Why Choose Big Careers Technology solutions for ERP Solutions?"
        >
          <Spacing lg="30" md="20" />
          <Div className="row">
            {/* Left Column with Text */}
            <Div className="col-lg-6 col-md-12">
              <ul className="cs-m0">
                <li>
                  Centralized data for enhanced decision-making and visibility.
                </li>
                <li>
                  Improved operational efficiency with streamlined workflows.
                </li>
                <li>
                  Real-time analytics and reporting for better business
                  insights.
                </li>
                <li>
                  Customization to meet the specific needs of your business.
                </li>
                <li>Increased collaboration across departments and teams.</li>
                <li>
                  Scalable and adaptable to support business growth and change.
                </li>
                <li>
                  24/7 support and training to ensure smooth implementation.
                </li>
                <li>
                  Automation of manual tasks to reduce errors and save time.
                </li>
              </ul>
            </Div>
            {/* Right Column with Image */}
            <Div className="col-lg-6 col-md-12 text-center">
              <Image
                src="/products/erp2.jpg"
                alt="ERP Benefits"
                className="img-fluid cs-radius_15 shadow-lg"
                width={500}
                height={500}
              />
            </Div>
          </Div>
        </SectionHeading>
      </Div>

      <Spacing lg="120" md="50" />

      <Div className="container">
        <Div className="row">
          {/* Left Column - Text Content */}
          <Div className="col-xl-5 col-lg-6">
            <SectionHeading
              title="ERP Solutions"
              subtitle="Optimize Your Business with Smart ERP"
            >
              <Spacing lg="30" md="20" />
              <p className="cs-m0">
                Unlock the full potential of your business with our intelligent
                ERP system. Designed to streamline operations, enhance
                efficiency, and provide real-time insights.
              </p>

              <Spacing lg="15" md="15" />
              <p className="cs-m0">
                Gain complete control over your business processes with
                automation, data-driven decision-making, and secure role-based
                access for teams.
              </p>
              <Spacing lg="15" md="15" />
              <p className="cs-m0">
                Experience a next-generation ERP platform that simplifies
                workflows, optimizes resources, and drives business growth.
              </p>
            </SectionHeading>
            <Spacing lg="30" md="20" />
            <a
              href="https://erpapp.ai/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Try the Demo
            </a>
          </Div>

          {/* Right Column with Image */}
          <Div className="col-xl-5 offset-xl-1 col-lg-6">
            <Image
              src="/products/erp-logo.jpg"
              alt="ERP-logo"
              className="w-100 cs-radius_15"
              width={300}
              height={300}
            />
          </Div>

          <Spacing lg="0" md="40" />
        </Div>
      </Div>

      <Spacing lg="150" md="80" />
      <ContactFooter />
    </>
  );
}
