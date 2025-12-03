import {
  FaUserMd,
  FaFileMedical,
  FaHeartbeat,
  FaShoppingCart,
  FaStethoscope,
  FaChartBar,
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
  title: "HIMS Solutions | Big Careers Technology solutions",
  description:
    "Explore Big Careers Technology solutions's Health Information Management System (HIMS) solutions, leveraging AI, Cloud, Cyber Security, Data Analytics, and IoT technologies to enhance healthcare data management, patient care, and operational efficiency.",
  keywords: [
    "HIMS Solutions",
    "Health Information Management",
    "AI in Healthcare",
    "Cloud HIMS Solutions",
    "Data Analytics for Healthcare",
    "Cyber Security for Healthcare",
    "IoT in Healthcare",
    "Electronic Health Records",
    "Patient Data Management",
    "Healthcare Technology",
    "Digital Health Services",
  ],
  robots: "index, follow",
  openGraph: {
    title: "HIMS Solutions | Big Careers Technology solutions",
    description:
      "Big Careers Technology solutions offers advanced HIMS solutions using AI, Cloud, Cyber Security, and Data Analytics to enhance healthcare data management and improve patient care.",
    url: "https://bigcareers.solutions/hims-solutions",
    type: "website",
    image: "/logo.jpg",
  },
  twitter: {
    card: "summary_large_image",
    title: "HIMS Solutions | Big Careers Technology solutions",
    description:
      "Big Careers Technology solutions provides innovative HIMS solutions that leverage AI, Cloud, Cyber Security, and Data Analytics to enhance healthcare services and data management.",
    image: "/logo.jpg",
  },
};

const services = [
  {
    icon: <FaUserMd className="mb-4" style={{ fontSize: "4rem" }} />, // Larger Icon (using inline style)
    title: "Patient Registration & Scheduling",
    subtitle:
      "Streamline patient registration and appointment scheduling with an intuitive interface, ensuring seamless coordination and reduced waiting times.",
  },
  {
    icon: <FaFileMedical className="mb-4" style={{ fontSize: "4rem" }} />, // Larger Icon (using inline style)
    title: "Electronic Medical Records (EMR)",
    subtitle:
      "Maintain comprehensive, secure, and accessible electronic medical records for patients, enabling accurate diagnosis and improved continuity of care.",
  },
  {
    icon: <FaHeartbeat className="mb-4" style={{ fontSize: "4rem" }} />, // Larger Icon (using inline style)
    title: "Billing & Insurance Management",
    subtitle:
      "Simplify billing processes and insurance claim management with automated workflows, reducing errors and ensuring timely reimbursements.",
  },
  {
    icon: <FaShoppingCart className="mb-4" style={{ fontSize: "4rem" }} />, // Larger Icon (using inline style)
    title: "Pharmacy Management",
    subtitle:
      "Manage pharmacy inventory, prescriptions, and dispensing seamlessly while ensuring compliance with regulations and minimizing errors.",
  },
  {
    icon: <FaStethoscope className="mb-4" style={{ fontSize: "4rem" }} />, // Larger Icon (using inline style)
    title: "Laboratory & Diagnostics Integration",
    subtitle:
      "Integrate diagnostic services and lab workflows for efficient report generation, tracking, and result analysis.",
  },
  {
    icon: <FaChartBar className="mb-4" style={{ fontSize: "4rem" }} />, // Larger Icon (using inline style)
    title: "Hospital Administration & Reporting",
    subtitle:
      "Optimize hospital administration with real-time reporting and analytics to support data-driven decision-making and resource management.",
  },
];

export default function HMSDetailsPage() {
  return (
    <>
      {/* Page Heading */}
      <PageHeading
        title="Hospital Information Management System"
        bgSrc="/products/hms4.jpg"
        pageLinkText="HIMS Solutions"
      />
      <Spacing lg="145" md="80" />

      {/* About Section */}
      <Div className="container">
        <SectionHeading
          title="Hospital Information Management System"
          subtitle="Transform healthcare delivery with our comprehensive hospital management system, designed to streamline operations, enhance patient care, and improve efficiency."
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
                src="/products/hms.jpg"
                alt="Hospital Management System"
                width={600}
                height={600}
                className="cs-radius_15"
              />
            </Div>
            <Spacing lg="0" md="40" />
          </Div>
          <Div className="col-lg-6 offset-xl-1">
            <h2 className="cs-font_50 cs-m0">
              Revolutionizing Healthcare Management
            </h2>
            <Spacing lg="50" md="30" />
            <p>
              Our hospital management system is designed to simplify complex
              healthcare operations, improve patient satisfaction, and optimize
              resource utilization. From patient registration to reporting,
              we've got you covered.
            </p>
          </Div>
        </Div>
      </Div>

      <Spacing lg="120" md="50" />

      {/* Key Benefits Section */}
      <Div className="container">
        <SectionHeading
          title="Key Benefits of Our HMS Solutions"
          subtitle="Why Choose Our Hospital Management System?"
        >
          <Spacing lg="30" md="20" />
          <Div className="row">
            {/* Left Column with Text */}
            <Div className="col-lg-6 col-md-12">
              <ul className="cs-m0">
                <li>
                  Streamlined hospital operations for improved efficiency.
                </li>
                <li>Enhanced patient care with accurate data management.</li>
                <li>Real-time insights for effective decision-making.</li>
                <li>
                  Integration of diagnostics, pharmacy, and lab workflows.
                </li>
                <li>
                  Improved billing accuracy and faster insurance processing.
                </li>
                <li>Compliance with healthcare standards and regulations.</li>
              </ul>
            </Div>
            {/* Right Column with Image */}
            <Div className="col-lg-6 col-md-12 text-center">
              <Image
                src="/products/hms1.jpg"
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

      <Div className="container">
        <Div className="row">
          <Div className="col-xl-5 col-lg-6">
            <SectionHeading
              title="HIMS"
              subtitle="Experience the Future of Healthcare Management"
            >
              <Spacing lg="30" md="20" />
              <p className="cs-m0">
                Explore our Digital Hospital Management System, designed to
                simplify and enhance healthcare operations.
              </p>
              <Spacing lg="15" md="15" />
              <p className="cs-m0">
                See how HIMS streamlines hospital workflows, automates patient
                data management, and ensures seamless coordination between
                departments.
              </p>
              <Spacing lg="15" md="15" />

              <Spacing lg="15" md="15" />
              <p className="cs-m0">
                Experience the power of digital healthcare with real-time
                insights, enhanced patient engagement, and efficient hospital
                resource management.
              </p>
            </SectionHeading>
            <Spacing lg="30" md="20" />
            <a
              href="https://himsapp.ai/"
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
              src="/products/hims-logo.png"
              alt="Hims-logo"
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
