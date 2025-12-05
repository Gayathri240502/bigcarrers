import {
  FaUsersCog,
  FaProjectDiagram,
  FaPlug,
  FaCogs,
  FaChartLine,
  FaHeadset,
} from "react-icons/fa"; // Import React Icons
import Button from "../../ui/Button";
import Div from "../../ui/Div";
import IconBox from "../../ui/IconBox";
import PageHeading from "../../ui/PageHeading";
import SectionHeading from "../../ui/SectionHeading";
import Spacing from "../../ui/Spacing";
import Image from "next/image";
import ContactFooter from "/app/ui/contactpg";

export const metadata = {
  title: "CRM Solutions |  solutions",
  description:
    "Explore Big Career solutions's CRM solutions, powered by AI & ML, Cloud, and Data Analytics to enhance customer relationship management, streamline sales, and improve customer experience.",
  keywords: [
    "CRM Solutions",
    "Customer Relationship Management",
    "AI in CRM",
    "Cloud CRM Solutions",
    "Data Analytics for CRM",
    "Sales Optimization",
    "Customer Engagement",
    "Salesforce CRM",
    "CRM Automation",
    "CRM Integration",
  ],
  robots: "index, follow",
  openGraph: {
    title: "CRM Solutions | Big Careers Technology solutions",
    description:
      "Big Careers Technology solutions offers advanced CRM solutions leveraging AI, Cloud, and Data Analytics to improve customer management, sales processes, and customer satisfaction.",
    url: "https://bigcareers.solutions/crm-solutions",
    type: "website",
    image: "/logo.jpg",
  },
  twitter: {
    card: "summary_large_image",
    title: "CRM Solutions | Big Career solutions",
    description:
      "Big Career solutions provides innovative CRM solutions using AI, Cloud, and Data Analytics to optimize customer relationship management.",
    image: "/logo.jpg",
  },
};

const services = [
  {
    icon: <FaUsersCog className="mb-4" style={{ fontSize: "4rem" }} />, // CRM Implementation Icon
    title: "CRM Implementation",
    subtitle:
      "Enhance customer engagement with tailored CRM implementation for your business. Streamline processes and improve customer relationships effectively.",
  },
  {
    icon: <FaProjectDiagram className="mb-4" style={{ fontSize: "4rem" }} />, // CRM Migration Icon
    title: "CRM Migration",
    subtitle:
      "Seamless migration to modern CRM platforms for better performance and scalability. Empower your team with advanced tools to drive customer satisfaction.",
  },
  {
    icon: <FaPlug className="mb-4" style={{ fontSize: "4rem" }} />, // CRM Integration Icon
    title: "CRM Integration",
    subtitle:
      "Integrate CRM solutions with existing systems for unified workflows and data insights. Maximize efficiency and optimize customer management.",
  },
  {
    icon: <FaCogs className="mb-4" style={{ fontSize: "4rem" }} />, // CRM Customization Icon
    title: "CRM Customization",
    subtitle:
      "Tailor CRM functionalities to meet the specific needs of your business. Ensure that your CRM aligns with your workflow and enhances productivity.",
  },
  {
    icon: <FaChartLine className="mb-4" style={{ fontSize: "4rem" }} />, // CRM Analytics Icon
    title: "CRM Analytics",
    subtitle:
      "Leverage powerful analytics to gain insights into customer behavior, preferences, and trends. Make data-driven decisions to optimize your strategies.",
  },
  {
    icon: <FaHeadset className="mb-4" style={{ fontSize: "4rem" }} />, // CRM Training & Support Icon
    title: "CRM Training & Support",
    subtitle:
      "Equip your team with the knowledge and skills to use CRM tools effectively. Benefit from ongoing support to ensure smooth operations and maximize ROI.",
  },
];

export default function CRMDetailsPage() {
  return (
    <>
      {/* Page Heading */}
      <PageHeading
        title="CRM Solutions"
        bgSrc="/products/crm.jpg"
        pageLinkText="CRM Solutions"
      />
      <Spacing lg="145" md="80" />

      {/* About Section */}
      <Div className="container">
        <SectionHeading
          title="CRM Solutions"
          subtitle="Empower your business with cutting-edge CRM solutions designed to improve customer experiences and drive growth. Our expertise ensures seamless implementation and enhanced business outcomes."
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
                src="/products/crm1.jpg"
                alt="CRM Service"
                width={600}
                height={600}
                className="cs-radius_15"
              />
            </Div>
            <Spacing lg="0" md="40" />
          </Div>
          <Div className="col-lg-6 offset-xl-1">
            <h2 className="cs-font_50 cs-m0">
              Empowering Businesses with CRM Solutions
            </h2>
            <Spacing lg="50" md="30" />
            <p>
              At <strong>Big Careers Technology solutions</strong>, we provide
              comprehensive CRM solutions that enhance customer management,
              improve team collaboration, and drive business growth. From
              implementation to integration, we help businesses deliver superior
              customer experiences and streamline operations.
            </p>
          </Div>
        </Div>
      </Div>

      <Spacing lg="120" md="50" />

      {/* Key Benefits Section */}
      <Div className="container">
        <SectionHeading
          title="Key Benefits of Our CRM Solutions"
          subtitle="Why Choose Big Careers Technology solutions for CRM Solutions?"
        >
          <Spacing lg="30" md="20" />
          <Div className="row">
            {/* Left Column with Text */}
            <Div className="col-lg-6 col-md-12">
              <ul className="cs-m0">
                <li>
                  Streamlined customer management with advanced CRM tools.
                </li>
                <li>Increased efficiency with seamless CRM integration.</li>
                <li>Data-driven insights for improved decision-making.</li>
                <li>Scalability to meet evolving business needs.</li>
                <li>
                  Enhanced collaboration between sales, marketing, and service
                  teams.
                </li>
                <li>
                  24/7 support and maintenance from certified CRM experts.
                </li>
                <li>Improved sales forecasting and pipeline management.</li>
                <li>Enhanced personalization of customer interactions.</li>
                <li>
                  Faster response times with automated workflows and task
                  assignments.
                </li>
              </ul>
            </Div>
            {/* Right Column with Image */}
            <Div className="col-lg-6 col-md-12 text-center">
              <Image
                src="/products/crm2.jpg"
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
              subtitle="Expert CRM Solutions for Your Business"
            >
              <Spacing lg="30" md="20" />
              <p className="cs-m0">
                At <strong>Big Careers Technology solutions</strong>, we
                specialize in providing CRM solutions that empower businesses to
                deliver exceptional customer experiences. Our certified
                consultants understand your unique needs and craft solutions
                that align with your goals.
              </p>
              <Spacing lg="15" md="15" />
              <p className="cs-m0">
                With cutting-edge CRM technologies, strong industry expertise,
                and a proven track record, we ensure your business stays ahead
                in today’s competitive landscape.
              </p>
              <Spacing lg="15" md="15" />
              <p className="cs-m0">
                Whether you’re looking to enhance productivity, reduce manual
                tasks, or improve customer retention, our tailored CRM solutions
                ensure maximum ROI for your investment.
              </p>
            </SectionHeading>
          </Div>
          {/* Right Column with Image */}
          <Div className="col-xl-5 offset-xl-1 col-lg-6">
            <Div className="cs-image_layer cs-style1">
              <Div className="cs-image_layer_in">
                <Image
                  src="/products/crm3.jpg"
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
