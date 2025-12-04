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
  title: "Python Full Stack Training | Big Careers Technology Solutions",
  description:
    "Master Python Full Stack Development with hands-on training in Python Basics, OOP, Django/Flask, REST APIs, Database Management, and Frontend Technologies.",
  keywords: [
    "Python Training",
    "Python Full Stack Course",
    "Django Training",
    "Flask Training",
    "REST API Development",
    "Backend Development",
    "Frontend with React",
    "Python Programming",
  ],
  robots: "index, follow",
  openGraph: {
    title: "Python Full Stack Training | Big Careers Technology Solutions",
    description:
      "Become a job-ready Python Full Stack Developer with real-world projects covering Python, Django, REST APIs, MySQL, and React.",
    url: "https://bigcareers.solutions/training/python",
    type: "website",
    image: "/logo.jpg",
  },
  twitter: {
    card: "summary_large_image",
    title: "Python Full Stack Training | Big Careers Technology Solutions",
    description:
      "Learn Python programming, backend development, databases, and frontend technologies in our Python Full Stack Training Program.",
    image: "/logo.jpg",
  },
};

const services = [
  {
    icon: <FaRobot className="mb-4" style={{ fontSize: "4rem" }} />,
    title: "Core Python Programming",
    subtitle:
      "Master variables, data types, loops, functions, OOPs, file handling, and core Python logic.",
  },
  {
    icon: <FaDatabase className="mb-4" style={{ fontSize: "4rem" }} />,
    title: "Database & ORM",
    subtitle:
      "Learn MySQL, PostgreSQL, SQL queries, and ORM frameworks like Django ORM or SQLAlchemy.",
  },
  {
    icon: <FaBrain className="mb-4" style={{ fontSize: "4rem" }} />,
    title: "Web Development (Django/Flask)",
    subtitle:
      "Understand backend development using Django or Flask, templates, routing, and MVC structure.",
  },
  {
    icon: <FaChartLine className="mb-4" style={{ fontSize: "4rem" }} />,
    title: "REST API Development",
    subtitle:
      "Build secure REST APIs using Django REST Framework or Flask API with authentication.",
  },
  {
    icon: <FaCode className="mb-4" style={{ fontSize: "4rem" }} />,
    title: "Frontend Development",
    subtitle:
      "Master HTML, CSS, JavaScript, and frontend frameworks like React for UI building.",
  },
  {
    icon: <FaCogs className="mb-4" style={{ fontSize: "4rem" }} />,
    title: "Project Deployment",
    subtitle:
      "Learn deployment using Git, Docker, Nginx, CI/CD pipelines, and cloud platforms.",
  },
];

export default function AIMLDetailsPage() {
  return (
    <>
      <PageHeading
        title="Python Full Stack Training Program"
        bgSrc="/products/python.jpeg"
        pageLinkText="Python Full Stack Training"
      />
      <Spacing lg="145" md="80" />

      <Div className="container">
        <Div className="row">
          <Div className="col-xl-5 col-lg-6">
            <SectionHeading
              title="Python Full Stack Training"
              subtitle="Build Your Career in Web & Software Development"
            >
              <Spacing lg="30" md="20" />
              <p className="cs-m0">
                This course is ideal for students, graduates, and professionals
                who want to become full-stack developers using modern Python
                frameworks like Django and Flask.
              </p>
              <Spacing lg="15" md="15" />
              <p className="cs-m0">
                We focus on <b>hands-on coding</b>, real-time projects, and
                in-demand backend + frontend skills required by top IT
                companies.
              </p>
            </SectionHeading>
            <Spacing lg="30" md="20" />
            <a href="#" className="btn btn-primary">
              Enroll Now
            </a>
          </Div>

          <Div className="col-xl-5 offset-xl-1 col-lg-6">
            <Image
              src="/products/plogo.jpeg"
              alt="Python Logo"
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
                src="/products/pcodind.jpeg"
                alt="Python Coding"
                width={600}
                height={600}
                className="cs-radius_15"
              />
            </Div>
            <Spacing lg="0" md="40" />
          </Div>

          <Div className="col-lg-6 offset-xl-1">
            <h2 className="cs-font_50 cs-m0">
              Build Real Python Applications End-to-End
            </h2>
            <Spacing lg="50" md="30" />
            <p>
              By the end of the course, you will be able to{" "}
              <b>develop, integrate, and deploy full stack applications</b>{" "}
              using Python, Django/Flask, MySQL, and React.
            </p>
            <p>
              Gain experience with{" "}
              <b>real-world enterprise-level applications</b> required in
              Python-based web development roles.
            </p>
          </Div>
        </Div>
      </Div>

      <Spacing lg="120" md="50" />

      <Div className="container">
        <SectionHeading
          title="What You'll Learn: Key Modules"
          subtitle="Complete Python Full Stack Developer Roadmap"
        >
          <Spacing lg="30" md="20" />
          <Div className="row">
            <Div className="col-lg-6 col-md-12">
              <ul className="cs-m0 cs-list_style_1">
                <li>
                  <b>Core Python:</b> Variables, loops, OOPs, file handling.
                </li>
                <li>
                  <b>Databases:</b> SQL, MySQL, PostgreSQL, ORM.
                </li>
                <li>
                  <b>Django/Flask:</b> Routing, templates, authentication.
                </li>
                <li>
                  <b>REST APIs:</b> CRUD operations, JWT, DRF/Flask API.
                </li>
                <li>
                  <b>Frontend:</b> HTML, CSS, JavaScript, React basics.
                </li>
                <li>
                  <b>Projects:</b> Build complete full stack apps.
                </li>
              </ul>
            </Div>

            <Div className="col-lg-6 col-md-12 text-center">
              <Image
                src="/products/pdiagram.jpeg"
                alt="Python Full Stack Diagram"
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
          title="Master Python Full Stack Development"
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

    


    