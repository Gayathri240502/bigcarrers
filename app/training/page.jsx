import {
  FaCode, 
  FaShieldAlt, 
  FaCogs, 
  FaRobot, 
  FaLaptopCode,
} from "react-icons/fa";
import ContactFooter from "/app/ui/contactpg";

export const metadata = {
  title: "Training Programs | Big Careers  solutions",
  description:
   "Upgrade your workforce or career with industry-backed training programs in emerging technologies including AI, Cloud, DevOps, Salesforce, Data Engineering, and Full Stack.",
    keywords: [
    "AI & ML Training",
    "Cyber Security Training",
    "DevOps Training",
    "Java Training",
    "Python Training",
    "IT Training",
    "Technology Courses",
    "Big Careers  solutions Training",
  ],
  robots: "index, follow",
  openGraph: {
    title: "Training Programs | Big Careers  solutions| Talent & Training Partner for the Future",
    description:
      "Upgrade your workforce or career with industry-backed training programs in emerging technologies including AI, Cloud, DevOps, Salesforce, Data Engineering, and Full Stack.",
      url: "https://bigcareers.solutions/training",
    type: "website",
    image: "/logo.jpg",
  },
  twitter: {
    card: "summary_large_image",
    title: "Training Programs | Big Careers  solutions",
    description:
      "Upgrade your workforce or career with industry-backed training programs in emerging technologies including AI, Cloud, DevOps, Salesforce, Data Engineering, and Full Stack.",
      image: "/logo.jpg",
  },
};

import PageHeading from "../ui/PageHeading";
import Spacing from "../ui/Spacing";
import Div from "../ui/Div";

import Link from "next/link";

const services = [
  {
    title: "AI & ML Training",
    icon: <FaRobot style={{ fontSize: "4rem" }} />,
    link: "/training/ai-ml",
    subtitle: "Dive into the world of Artificial Intelligence and Machine Learning.",
  },
  {
    title: "Cyber Security Training",
    icon: <FaShieldAlt style={{ fontSize: "4rem" }} />,
    link: "/training/cyber-security",
    subtitle: "Build a strong foundation in cybersecurity fundamentals and secure coding practices.",
  },
  {
    title: "DevOps Training",
    icon: <FaCogs style={{ fontSize: "4rem" }} />,
    link: "/training/devops",
    subtitle: "Learn modern software delivery practices — from version control to CI/CD.",
  },
  {
    title: "Java Training",
    icon: <FaCode style={{ fontSize: "4rem" }} />,
    link: "/training/java",
    subtitle: "Build a strong foundation in Java, one of the most widely used programming languages.",
  },
  {
    title: "Python Training",
    icon: <FaLaptopCode style={{ fontSize: "4rem" }} />,
    link: "/training/python",
    subtitle: "Learn Python from the ground up — a versatile, beginner-friendly language.",
  },
];

export default function TrainingProgramsPage() {
  return (
    <>
      <PageHeading
        title="Our Training Programs"
        bgSrc="/products/tr1.png"
        pageLinkText="Training"
      />

      <Div id="training-programs">
        <Div className="container">
          <h2 className="text-center">Explore Our Training Programs</h2>
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
    </>
  );
}