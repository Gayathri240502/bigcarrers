import {
  FaCode, // General code/Python/Java
  FaShieldAlt, // Cyber Security
  FaCogs, // DevOps
  FaRobot, // AI & ML
  FaLaptopCode, // Placeholder for another specific topic
} from "react-icons/fa";
import ContactFooter from "/app/ui/contactpg";

export const metadata = {
  title: "Training Programs | Big Careers Technology solutions",
  description:
    "Explore Big Careers Technology solutions's professional training programs in AI & ML, Cyber Security, DevOps, Java, and Python. Upskill with cutting-edge content and hands-on learning.",
  keywords: [
    "AI & ML Training",
    "Cyber Security Training",
    "DevOps Training",
    "Java Training",
    "Python Training",
    "IT Training",
    "Technology Courses",
    "Big Careers Technology solutions Training",
  ],
  robots: "index, follow",
  openGraph: {
    title: "Training Programs | Big Careers Technology solutions",
    description:
      "Explore Big Careers Technology solutions's professional training programs in AI & ML, Cyber Security, DevOps, Java, and Python.",
    url: "https://bigcareers.solutions/training",
    type: "website",
    image: "/logo.jpg",
  },
  twitter: {
    card: "summary_large_image",
    title: "Training Programs | Big Careers Technology solutions",
    description:
      "Big Careers Technology solutions offers expert training in AI, Cyber Security, DevOps, Java, and Python.",
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
        bgSrc="/products/products.jpg"
        pageLinkText="Training"
      />
      {/* Start Training Programs Section */}

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
                    {/* Added subtitle for better visual appeal on the main page */}
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
      {/* End Training Programs Section */}
    </>
  );
}