import Button from "../../ui/Button";
import Div from "../../ui/Div";
import IconBox from "../../ui/IconBox";
import PageHeading from "../../ui/PageHeading";
import SectionHeading from "../../ui/SectionHeading";
import Spacing from "../../ui/Spacing";
import Image from "next/image";
import ContactFooter from "/app/ui/contactpg";

export const metadata = {
  title: "HRMS Solutions | Big Careers Technology solutions",
  description:
    "Explore Big Careers Technology solutions's Human Resource Management System (HRMS) solutions, powered by AI, Cloud, Data Analytics, and Automation to streamline HR processes, enhance employee management, and optimize organizational efficiency.",
  keywords: [
    "HRMS Solutions",
    "Human Resource Management",
    "AI in HR",
    "Cloud HRMS Solutions",
    "Data Analytics for HR",
    "Employee Management",
    "HR Automation",
    "Workforce Optimization",
    "HR System Integration",
    "Digital HR Solutions",
  ],
  robots: "index, follow",
  openGraph: {
    title: "HRMS Solutions | Big Careers Technology solutions",
    description:
      "Big Careers Technology solutions offers advanced HRMS solutions leveraging AI, Cloud, and Data Analytics to enhance HR processes, employee management, and workforce optimization.",
    url: "https://bigcareers.solutions/hrms-solutions",
    type: "website",
    image: "/logo.jpg",
  },
  twitter: {
    card: "summary_large_image",
    title: "HRMS Solutions | Big Careers Technology solutions",
    description:
      "Big Careers Technology solutions provides innovative HRMS solutions using AI, Cloud, and Data Analytics to streamline HR processes and optimize workforce management.",
    image: "/logo.jpg",
  },
};

import {
  FaUsers,
  FaDollarSign,
  FaCalendarCheck,
  FaUserPlus,
  FaChartLine,
  FaUserCog,
} from "react-icons/fa";

const services = [
  {
    icon: <FaUsers className="mb-4" style={{ fontSize: "4rem" }} />,
    title: "Employee Management",
    subtitle:
      "Efficiently manage employee profiles, track personal information, and monitor performance within a centralized system.",
  },
  {
    icon: <FaDollarSign className="mb-4" style={{ fontSize: "4rem" }} />,
    title: "Payroll Management",
    subtitle:
      "Streamline payroll processing, calculate salaries, bonuses, taxes, and generate payslips automatically for your employees.",
  },
  {
    icon: <FaCalendarCheck className="mb-4" style={{ fontSize: "4rem" }} />,
    title: "Leave & Attendance Tracking",
    subtitle:
      "Track employee attendance, manage leave requests, and maintain accurate records for better workforce planning.",
  },
  {
    icon: <FaUserPlus className="mb-4" style={{ fontSize: "4rem" }} />,
    title: "Recruitment & Onboarding",
    subtitle:
      "Simplify recruitment and onboarding processes, from job postings to offer letters, and ensure a smooth transition for new hires.",
  },
  {
    icon: <FaChartLine className="mb-4" style={{ fontSize: "4rem" }} />,
    title: "Performance Management",
    subtitle:
      "Monitor and evaluate employee performance with customized appraisal systems, feedback, and goal setting to boost productivity.",
  },
  {
    icon: <FaUserCog className="mb-4" style={{ fontSize: "4rem" }} />,
    title: "Employee Self-Service",
    subtitle:
      "Empower employees with a self-service portal to access payslips, leave requests, benefits, and personal information updates.",
  },
];

export default function HRMSDetailsPage() {
  return (
    <>
      {/* Page Heading */}
      <PageHeading
        title="Human Resource Management System"
        bgSrc="/products/hrms2.jpg"
        pageLinkText="HRMS Solutions"
      />
      <Spacing lg="145" md="80" />

      {/* About Section */}
      <Div className="container">
        <SectionHeading
          title="Human Resource Management System"
          subtitle="Transform your HR operations with our comprehensive HRMS solutions. From employee management to performance tracking, streamline HR processes and improve efficiency."
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
                src="/products/hrms1.jpg"
                alt="HRMS Service"
                width={600}
                height={600}
                className="cs-radius_15"
              />
            </Div>
            <Spacing lg="0" md="40" />
          </Div>
          <Div className="col-lg-6 offset-xl-1">
            <h2 className="cs-font_50 cs-m0">
              Empowering HR Teams with HRMS Solutions
            </h2>
            <Spacing lg="50" md="30" />
            <p>
              At <strong>Big Careers Technology solutions</strong>, we provide a
              powerful Human Resource Management System (HRMS) that allows you
              to manage your workforce more effectively. Our solution helps you
              automate HR tasks, streamline employee records, and improve
              organizational efficiency.
            </p>
          </Div>
        </Div>
      </Div>

      <Spacing lg="120" md="50" />

      {/* Key Benefits Section */}
      <Div className="container">
        <SectionHeading
          title="Key Benefits of Our HRMS Solutions"
          subtitle="Why Choose Our HRMS Solutions?"
        >
          <Spacing lg="30" md="20" />
          <Div className="row">
            {/* Left Column with Text */}
            <Div className="col-lg-6 col-md-12">
              <ul className="cs-m0">
                <li>Centralized database for all employee records and data.</li>
                <li>Streamlined payroll and benefits management.</li>
                <li>
                  Seamless leave and attendance tracking for better workforce
                  planning.
                </li>
                <li>Improved recruitment process and faster onboarding.</li>
                <li>
                  Data-driven insights to enhance employee performance and
                  productivity.
                </li>
                <li>Comprehensive reporting tools for HR and management.</li>
                <li>
                  Employee self-service portal for enhanced accessibility and
                  transparency.
                </li>
                <li>
                  Improved compliance with labor laws and company policies.
                </li>
              </ul>
            </Div>
            {/* Right Column with Image */}
            <Div className="col-lg-6 col-md-12 text-center">
              <Image
                src="/products/hrms.jpg"
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
          {/* Left Column - Text Content */}
          <Div className="col-xl-5 col-lg-6">
            <SectionHeading
              title="HRMS Solutions"
              subtitle="Empower Your Workforce with Smart HRMS"
            >
              <Spacing lg="30" md="20" />
              <p className="cs-m0">
                Transform your human resource management with an advanced HRMS
                designed to automate processes, enhance employee experience, and
                optimize workforce efficiency.
              </p>
              <Spacing lg="15" md="15" />
              <p className="cs-m0">
                From recruitment and payroll to performance tracking and
                compliance management, our HRMS offers a complete solution for
                modern businesses.
              </p>
              <Spacing lg="15" md="15" />
              <p className="cs-m0">
                Manage employee records, streamline shift scheduling, automate
                payroll, and gain valuable insights with real-time analytics.
              </p>
            </SectionHeading>
            <Spacing lg="30" md="20" />
            <a
              href="https://hrmsapp.ai/"
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
              src="/products/hrms3.jpg"
              alt="HRMS-logo"
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
