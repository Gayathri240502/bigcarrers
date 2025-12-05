import React from "react";
import Div from "../Div";
import ContactInfoWidget from "../Widget/ContactInfoWidget";
import SocialWidget from "../Widget/SocialWidget";
import TextWidget from "../Widget/TextWidget";
import Link from "next/link";
import Spacing from "../Spacing";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { it } from "node:test";

const services = [
  {
    label: "Services",
    link: "/service/",
    items: [
      {
        href: "/service/technology",
        label: "Technology",
      },
      {
        href: "/service/application-integration",
        label: "Application Integration",
      },
      { href: "/service/cloud", label: "Cloud" },
      { href: "/service/consulting", label: "Consulting" },
      {
        href: "/service/custom-software-development",
        label: "Custom Software Development",
      },
      { href: "/service/devops", label: "DevOps" },
      {
        href: "/service/data-engineering-analytics",
        label: "Data Engineering Analytics",
      },

      {
        href: "/service/it-infrastructure-and-networking",
        label: "IT Infrastructure & Networking",
      },
      { href: "/service/software-enterprise", label: "Enterprise Software" },

      { href: "/service/work-force-management", label: "Workforce Management" },
    ],
  },
  {
    label: "Training",
    link: "/training",
    items: [
      {
        href: "/training/ai-ml",
        label: "AI & ML Training",
      },
      {
        href: "/training/cyber-security",
        label: "Cyber Security Training",
      },
      {
        href: "/training/devops",
        label: "DevOps Training",
      },
      {
        href: "/training/java",
        label: "Java Training",
      },
      {
        href: "/training/python",
        label: "Python Training",
      },
    ],
  },
  // {
  //   label: "Our Products",
  //   link: "/products",
  //   items: [
  //     {
  //       href: "/products/hims",
  //       label: "Hospital Information Management System (HIMS)",
  //     },
  //     {
  //       href: "/products/crm",
  //       label: "Customer Relationship Management (CRM)",
  //     },
  //     { href: "/products/erp", label: "Enterprise Resource Planning (ERP)" },
  //     { href: "/products/lms", label: "Learning Management System (LMS)" },
  //     {
  //       href: "/products/hrms",
  //       label: "Human Resource Management System (HRMS)",
  //     },
  //     // { href: "/products/crpto", label: "Crypto Currency" },
  //   ],
  // },
  {
    label: "Technology",
    link: "/service/technology",
    items: [
      {
        href: "/service/technology/ai-&-ml",
        label: "AI & ML",
      },
      {
        href: "/service/technology/big-data",
        label: "Big Data",
      },

      {
        href: "/service/technology/iot",
        label: "IOT",
      },
      {
        href: "/service/technology/sap",
        label: "SAP",
      },
      {
        href: "/service/technology/salesforce",
        label: "Salesforce",
      },
      {
        href: "/service/technology/snowflake",
        label: "SnowFlake",
      },
    ],
  },

  {
    label: "Enterprise Software",
    link: "/service/software-enterprise",
    items: [
      {
        href: "/service/software-enterprise/erp-solutions",
        label: "ERP Solutions",
      },
      {
        href: "/service/software-enterprise/crm-systems",
        label: "CRM Systems",
      },
      {
        href: "/service/software-enterprise/cloud-integration",
        label: "Cloud Integration",
      },
      {
        href: "/service/software-enterprise/custom-application",
        label: "Custom Applications",
      },
    ],
  },
  {
    label: "Workforce Management",
    link: "/service/work-force-management",
    items: [
      {
        href: "/service/work-force-management/employee-scheduling-and-shift-planning",
        label: "Employee Scheduling and Shift Planning",
      },
      {
        href: "/service/work-force-management/payroll-management",
        label: "Payroll Management",
      },
      {
        href: "/service/work-force-management/people-on-demand",
        label: "People on Demand",
      },
      {
        href: "/service/work-force-management/performance-analytics",
        label: "Performance Analytics",
      },
      {
        href: "/service/work-force-management/staffing-and-recruitment",
        label: "Staffing and Recruitment",
      },
    ],
  },
  {
    label: "AI & ML Services",
    link: "/service/technology/ai-&-ml",
    items: [
      {
        href: "/service/technology/ai-&-ml/automation",
        label: "AI-driven Automation",
      },
      {
        href: "/service/technology/ai-&-ml/rpa",
        label: "Robotic Process Automation (RPA)",
      },
      {
        href: "/service/technology/ai-&-ml/enterprise-ai-engineering",
        label: "Enterprise AI Engineering",
      },
      {
        href: "/service/technology/ai-&-ml/responsible-ai",
        label: "Responsible AI",
      },
      {
        href: "/service/technology/ai-&-ml/multi-model-generative-ai",
        label: "Multi Model Generative AI",
      },
      { href: "/service/technology/ai-&-ml/advance-ml", label: "Advance ML" },
    ],
  },
   {
    link: "/",
    label: "What We Do",
    items: [
      {
        href: "/humanresources",
        label: "Human Resources Activity",
      },
      {
        href: "/corporatetrading",
        label: "Corporate Trading",
      },

      {
        href: "/manpowersupply",
        label: "Manpower Supply",
      },
    ],
  },
  // {
  //   label: "IoT Solutions",
  //   link: "/service/technology/iot",
  //   items: [
  //     {
  //       href: "/service/technology/iot/device-integration",
  //       label: "Device Integration",
  //     },
  //     {
  //       href: "/service/technology/iot/sensor-networks",
  //       label: "Sensor Networks",
  //     },
  //     {
  //       href: "/service/technology/iot/data-monitoring",
  //       label: "Data Monitoring",
  //     },
  //     { href: "/service/technology/iot/iot-security", label: "IoT Security" },
  //   ],
  // },

  {
    label: "Data Engineering Analytics",
    link: "/service/data-engineering-analytics",
    items: [
      {
        href: "/service/data-engineering-analytics/accelerated-generative-ai",
        label: "Accelerated Generative AI",
      },

      {
        href: "/service/data-engineering-analytics/data-engineering",
        label: "Data Engineering",
      },
      {
        href: "/service/data-engineering-analytics/responsible-ai-for-gen-ai",
        label: "Responsible AI for Gen AI",
      },
      {
        href: "/service/data-engineering-analytics/visualization-and-analytics",
        label: "Visualization and Analytics",
      },
    ],
  },
];

const date = new Date().getFullYear();

export default function Footer({ copyrightText, logoSrc, logoAlt, text }) {
  return (
    <>
      <Spacing lg="90" md="45" />
      <footer className="cs-footer mt-10">
        <Div className="cs-footer_top">
          <Div className="container">
            <Div className="row">
              {services.map((service, index) => (
                <Div key={index} className="col-lg-3 col-sm-6 my-10">
                  <Div className="cs-footer_item">
                    <h4>
                      <Link href={service.link}>{service.label}</Link>
                    </h4>
                    <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                      {service.items.map((item, idx) => (
                        <li key={idx} className="mt-2">
                          <Link href={item.href}>{item.label}</Link>
                        </li>
                      ))}
                    </ul>
                  </Div>
                </Div>
              ))}
            </Div>
          </Div>
        </Div>

        <Div className="cs-footer_main">
          <Div className="container">
            <Div className="row">
              <Div className="col-lg-3 col-sm-6">
                <Div className="cs-footer_item">
                  <TextWidget
                    logoSrc="/logo-bg.png"
                    logoAlt="Logo"
                    text="Big Careers Technology solutions Business"
                  />
                  <SocialWidget />
                </Div>
              </Div>
              <Div className="col-lg-3 col-sm-6">
                <Div className="cs-footer_item">
                  <h4>Useful Links</h4>
                  <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                    <li className="mt-2">
                      <Link href="/">Home</Link>
                    </li>
                    <li className="mt-2">
                      <Link href="/about">About</Link>
                    </li>
                    <li className="mt-2">
                      <Link href="/contact">Contact</Link>
                    </li>
                    
                    <li className="mt-2">
                      <Link href="/terms-and-conditions">
                        Terms and Conditions
                      </Link>
                    </li>
                    <li className="mt-2">
                      <Link href="/shipping-and-exchange">
                        Shipping and Exchange
                      </Link>
                    </li>
                    <li className="mt-2">
                      <Link href="/refund-policy">Refund Policy</Link>
                    </li>
                    <li className="mt-2">
                      <Link href="/privacy-policy">Privacy Policy</Link>
                    </li>
                    <li className="mt-2">
                      <Link href="/advisory-board">Advisory Board</Link>
                    </li>
                  </ul>
                </Div>
              </Div>
              <Div className="col-lg-3 col-sm-6">
                <Div className="cs-footer_item">
                  <h4>
                    <Link href="/industries/">Industries</Link>
                  </h4>
                  <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                    <li className="mt-2">
                      <Link href="/industries/banking-and-financial-services">
                        Banking and Financial Services
                      </Link>
                    </li>
                    <li className="mt-2">
                      <Link href="/industries/health-care">Health Care</Link>
                    </li>
                    <li className="mt-2">
                      <Link href="/industries/hi-end-engineering">
                        Hi-End Engineering
                      </Link>
                    </li>

                    <li className="mt-2">
                      <Link href="/industries/media-and-technology">
                        Media and Technology
                      </Link>
                    </li>
                  </ul>
                </Div>
              </Div>
              <Div className="col-lg-3 col-sm-6">
                <Div className="cs-footer_item">
                  <h4>Big Careers Technology solutions</h4>
                  <p className="gap-2">sales@bigcareers.solutions</p>
                  Survey No. 64, Building Number 9,Mindspace,13th Floor,
                  Madhapur, Hyderabad, Telangana 500081
                </Div>
              </Div>
            </Div>
          </Div>
        </Div>

        <Div className="cs-footer_bottom">
          <Div className="container">
            <Div className="cs-footer_bottom_center">
              <Div className="flex items-center justify-center">
                Copyright © {date} Big Careers Technology solutions. All rights
                reserved.
              </Div>
            </Div>
          </Div>
        </Div>
      </footer>
    </>
  );
}
