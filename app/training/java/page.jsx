import {
  FaRobot,
  FaDatabase,
  FaBrain,
  FaChartLine,
  FaCode,
  FaCogs,
} from "react-icons/fa";
import Div from "../../ui/Div";
import PageHeading from "../../ui/PageHeading";
import SectionHeading from "../../ui/SectionHeading";
import Spacing from "../../ui/Spacing";
import Image from "next/image";
import ContactFooter from "/app/ui/contactpg";

export const metadata = {
  title: "Java Full Stack Training | Big Careers Technology Solutions",
  description:
    "Master Java Full Stack Development with hands-on training in Core Java, Advanced Java, Spring Boot, REST APIs, Database Management, and Frontend Technologies.",
  keywords: [
    "Java Training",
    "Java Full Stack Course",
    "Spring Boot Training",
    "JDBC",
    "Hibernate",
    "REST API Development",
    "Backend Development",
    "Frontend with React",
  ],
  robots: "index, follow",
  openGraph: {
    title: "Java Full Stack Training | Big Careers Technology Solutions",
    description:
      "Become a job-ready Java Full Stack Developer with real-world projects covering Java, Spring Boot, REST APIs, MySQL, and React.",
    url: "https://bigcareers.solutions/training/java",
    type: "website",
    image: "/logo.jpg",
  },
  twitter: {
    card: "summary_large_image",
    title: "Java Full Stack Training | Big Careers Technology Solutions",
    description:
      "Learn Java programming, backend development, databases, and frontend technologies in our Java Full Stack Training Program.",
    image: "/logo.jpg",
  },
};

const services = [
  {
    icon: <FaRobot className="mb-4" style={{ fontSize: "4rem" }} />,
    title: "Core Java Programming",
    subtitle:
      "Master OOPs, classes, objects, collections, exception handling, and core programming logic.",
  },
  {
    icon: <FaDatabase className="mb-4" style={{ fontSize: "4rem" }} />,
    title: "Database & JDBC",
    subtitle:
      "Learn MySQL, PostgreSQL, SQL queries, and how to connect Java applications using JDBC.",
  },
  {
    icon: <FaBrain className="mb-4" style={{ fontSize: "4rem" }} />,
    title: "Advanced Java (JSP & Servlets)",
    subtitle:
      "Understand how to build dynamic web applications using JSP, Servlets, and MVC architecture.",
  },
  {
    icon: <FaChartLine className="mb-4" style={{ fontSize: "4rem" }} />,
    title: "Spring Boot Framework",
    subtitle:
      "Learn REST API development, dependency injection, Spring MVC, security, and microservices basics.",
  },
  {
    icon: <FaCode className="mb-4" style={{ fontSize: "4rem" }} />,
    title: "Frontend Development",
    subtitle:
      "Master HTML, CSS, JavaScript, and modern frontend frameworks like React for the UI layer.",
  },
  {
    icon: <FaCogs className="mb-4" style={{ fontSize: "4rem" }} />,
    title: "Project Deployment",
    subtitle:
      "Learn how to deploy Java applications using Git, CI/CD, Docker, and cloud platforms.",
  },
];

export default function AIMLDetailsPage() {
  return (
    <>
      <PageHeading
        title="Java Full Stack Training Program"
        bgSrc="/products/image.png"
        pageLinkText="Java Full Stack Training"
      />
      <Spacing lg="145" md="80" />

      <Div className="container">
        <Div className="row">
          <Div className="col-xl-5 col-lg-6">
            <SectionHeading
              title="Java Full Stack Training"
              subtitle="Build Your Career in Software Development"
            >
              <Spacing lg="30" md="20" />
              <p className="cs-m0">
                This course is ideal for students, graduates, and professionals
                who want to become full-stack developers using modern Java
                technologies.
              </p>
              <Spacing lg="15" md="15" />
              <p className="cs-m0">
                We focus on <b>hands-on coding</b>, real-time projects, and
                end-to-end development skills required by top IT companies.
              </p>
            </SectionHeading>
            <Spacing lg="30" md="20" />
            <a href="#" className="btn btn-primary">
              Enroll Now
            </a>
          </Div>

          <Div className="col-xl-5 offset-xl-1 col-lg-6">
            <Image
              src="/products/java-logo.png"
              alt="Java Logo"
              className="w-100 cs-radius_15"
              width={300}
              height={300}
            />
          </Div>

          <Spacing lg="0" md="40" />
        </Div>
      </Div>

      <Spacing lg="120" md="50" />

      <Div className="container">
        <Div className="row align-items-center">
          <Div className="col-xl-5 col-lg-6">
            <Div className="cs-radius_15 cs-shine_hover_1">
              <Image
                src="/products/java-coding.jpg"
                alt="Java Coding"
                width={600}
                height={600}
                className="cs-radius_15"
              />
            </Div>
            <Spacing lg="0" md="40" />
          </Div>

          <Div className="col-lg-6 offset-xl-1">
            <h2 className="cs-font_50 cs-m0">
              Build Real Java Applications End-to-End
            </h2>
            <Spacing lg="50" md="30" />
            <p>
              By the end of the course, you will be able to <b>develop,
              integrate, and deploy full stack applications</b> using Java,
              Spring Boot, MySQL, and React.
            </p>
            <p>
              Gain experience with <b>real-world enterprise-level projects</b>{" "}
              similar to what companies expect from full stack developers.
            </p>
          </Div>
        </Div>
      </Div>

      <Spacing lg="120" md="50" />

      <Div className="container">
        <SectionHeading
          title="What You'll Learn: Key Modules"
          subtitle="Complete Java Full Stack Developer Roadmap"
        >
          <Spacing lg="30" md="20" />
          <Div className="row">
            <Div className="col-lg-6 col-md-12">
              <ul className="cs-m0 cs-list_style_1">
                <li>
                  <b>Core Java:</b> OOPs, Collections, Multithreading.
                </li>
                <li>
                  <b>JDBC & SQL:</b> MySQL database integration.
                </li>
                <li>
                  <b>Advanced Java:</b> JSP, Servlets, MVC.
                </li>
                <li>
                  <b>Spring Boot:</b> REST APIs, security, deployment.
                </li>
                <li>
                  <b>Frontend:</b> HTML, CSS, JavaScript, React basics.
                </li>
                <li>
                  <b>Projects:</b> Build full stack applications with real
                  databases.
                </li>
              </ul>
            </Div>

            <Div className="col-lg-6 col-md-12 text-center">
              <Image
                src="/products/java-diagram.jpg"
                alt="Java Full Stack Diagram"
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
        <SectionHeading
          title="Master Java Full Stack Development"
          subtitle="Explore all modules included in the program"
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

      <Spacing lg="150" md="80" />

      <ContactFooter />
    </>
  );
}
