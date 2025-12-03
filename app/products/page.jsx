import {
  FaHospital,
  FaUsersCog,
  FaWarehouse,
  FaChalkboardTeacher,
  FaRegIdCard,
  FaBitcoin,
} from "react-icons/fa";
import ContactFooter from "/app/ui/contactpg";

export const metadata = {
  title: "Products | Big Careers Technology solutions",
  description:
    "Discover Big Careers Technology solutions's innovative products powered by AI, Cloud, Data Analytics, and IoT technologies. Our products are designed to optimize business processes, enhance customer experience, and drive digital transformation.",
  keywords: [
    "Big Careers Technology solutions Products",
    "AI Products",
    "Cloud Products",
    "Data Analytics Products",
    "IoT Products",
    "Digital Transformation Products",
    "Business Optimization Products",
    "Innovation in Products",
    "Technology Solutions",
    "Enterprise Products",
  ],
  robots: "index, follow",
  openGraph: {
    title: "Products | Big Careers Technology solutions",
    description:
      "Explore Big Careers Technology solutions's cutting-edge products designed to accelerate business growth, enhance operations, and improve customer experiences through AI, Cloud, and Data Analytics.",
    url: "https://bigcareers.solutions/products",
    type: "website",
    image: "/logo.jpg",
  },
  twitter: {
    card: "summary_large_image",
    title: "Products | Big Careers Technology solutions",
    description:
      "Big Careers Technology solutions offers innovative products powered by AI, Cloud, IoT, and Data Analytics to drive business transformation and efficiency.",
    image: "/logo.jpg",
  },
};

import PageHeading from "../ui/PageHeading";
import Spacing from "../ui/Spacing";
import Div from "../ui/Div";

import Link from "next/link";

const services = [
  {
    title: "Hospital Information Management System (HIMS)",
    icon: <FaHospital style={{ fontSize: "4rem" }} />,
    link: "/products/hims",
  },
  {
    title: "Customer Relationship Management (CRM)",
    icon: <FaUsersCog style={{ fontSize: "4rem" }} />,
    link: "/products/crm",
  },
  {
    title: "Enterprise Resource Planning (ERP)",
    icon: <FaWarehouse style={{ fontSize: "4rem" }} />,
    link: "/products/erp",
  },
  {
    title: "Learning Management System (LMS)",
    icon: <FaChalkboardTeacher style={{ fontSize: "4rem" }} />,
    link: "/products/lms",
  },
  {
    title: "Human Resource Management System (HRMS)",
    icon: <FaRegIdCard style={{ fontSize: "4rem" }} />,
    link: "/products/hrms",
  },
  // {
  //   title: "Cryptocurrency Solutions",
  //   icon: <FaBitcoin style={{ fontSize: "4rem" }} />,
  //   link: "/products/crpto",
  // },
];

export default function ProjectsPage() {
  return (
    <>
      <PageHeading
        title="Our Projects"
        bgSrc="/products/products.jpg"
        pageLinkText="Projects"
      />
      {/* Start Projects Section */}

      <Div id="projects">
        <Div className="container">
          <h2 className="text-center">Explore Our Projects</h2>
          <Spacing lg="30" md="30" />
          <Div className="row">
            {services.map((service, index) => (
              <Div className="col-lg-4" key={index}>
                <Link href={service.link}>
                  <div className="text-center">
                    {service.icon}
                    <h3 className="text-xl font-bold mt-4">{service.title}</h3>
                    <p className="mt-2">{service.subtitle}</p>
                  </div>
                </Link>
                <Spacing lg="30" md="30" />
              </Div>
            ))}
          </Div>
        </Div>
      </Div>
      <ContactFooter />
      {/* End Projects Section */}
    </>
  );
}
