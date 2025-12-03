import Button from "../../ui/Button";
import Div from "../../ui/Div";
import IconBox from "../../ui/IconBox";
import PageHeading from "../../ui/PageHeading";
import SectionHeading from "../../ui/SectionHeading";
import Spacing from "../../ui/Spacing";
import Image from "next/image";
import {
  FaBook,
  FaUsers,
  FaChartPie,
  FaMobileAlt,
  FaAward,
  FaPlug,
} from "react-icons/fa";
import ContactFooter from "/app/ui/contactpg";

export const metadata = {
  title: "LMS Solutions | Big Careers Technology solutions",
  description:
    "Explore Big Careers Technology solutions's Learning Management System (LMS) solutions, powered by AI, Cloud, Data Analytics, and Automation to enhance training, employee development, and learning experiences across organizations.",
  keywords: [
    "LMS Solutions",
    "Learning Management System",
    "AI in LMS",
    "Cloud LMS Solutions",
    "Employee Training Solutions",
    "Data Analytics for Learning",
    "E-Learning Solutions",
    "LMS Integration",
    "Training and Development",
    "Learning Platform Automation",
  ],
  robots: "index, follow",
  openGraph: {
    title: "LMS Solutions | Big Careers Technology solutions",
    description:
      "Big Careers Technology solutions offers advanced LMS solutions powered by AI, Cloud, and Data Analytics to improve training and learning processes within organizations.",
    url: "https://bigcareers.solutions/lms-solutions",
    type: "website",
    image: "/logo.jpg",
  },
  twitter: {
    card: "summary_large_image",
    title: "LMS Solutions | Big Careers Technology solutions",
    description:
      "Big Careers Technology solutions provides innovative LMS solutions using AI, Cloud, and Data Analytics to enhance employee learning and development.",
    image: "/logo.jpg",
  },
};

const services = [
  {
    icon: <FaBook className="mb-4" style={{ fontSize: "4rem" }} />,
    title: "Course Management",
    subtitle:
      "Easily create, manage, and organize courses with intuitive tools that enhance the learning experience for instructors and students.",
  },
  {
    icon: <FaUsers className="mb-4" style={{ fontSize: "4rem" }} />,
    title: "Student Engagement",
    subtitle:
      "Boost student participation with interactive content, discussion forums, quizzes, and real-time feedback.",
  },
  {
    icon: <FaChartPie className="mb-4" style={{ fontSize: "4rem" }} />,
    title: "Analytics & Reporting",
    subtitle:
      "Track student progress, course completion rates, and performance with detailed analytics and reporting tools.",
  },
  {
    icon: <FaMobileAlt className="mb-4" style={{ fontSize: "4rem" }} />,
    title: "Mobile Learning",
    subtitle:
      "Enable on-the-go learning with mobile-friendly interfaces and apps designed for seamless access across devices.",
  },
  {
    icon: <FaAward className="mb-4" style={{ fontSize: "4rem" }} />,
    title: "Certification & Assessment",
    subtitle:
      "Create customizable certifications and assessments to validate learning outcomes and enhance credibility.",
  },
  {
    icon: <FaPlug className="mb-4" style={{ fontSize: "4rem" }} />,
    title: "Integration Capabilities",
    subtitle:
      "Integrate the LMS with existing systems like CRM, ERP, or video conferencing tools for a unified learning experience.",
  },
];

export default function LMSDetailsPage() {
  return (
    <>
      {/* Page Heading */}
      <PageHeading
        title="Learning Management System (LMS)"
        bgSrc="/products/c3.jpg"
        pageLinkText="LMS Solutions"
      />
      <Spacing lg="145" md="80" />

      {/* About Section */}
      <Div className="container">
        <SectionHeading
          title="Learning Management System Solutions"
          subtitle="Empower educators and organizations with innovative LMS solutions designed to streamline education delivery and improve learning outcomes."
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
                src="/products/lms1.jpg"
                alt="LMS Solutions"
                width={600}
                height={600}
                className="cs-radius_15"
              />
            </Div>
            <Spacing lg="0" md="40" />
          </Div>
          <Div className="col-lg-6 offset-xl-1">
            <h2 className="cs-font_50 cs-m0">
              Transform Learning with Our LMS Solutions
            </h2>
            <Spacing lg="50" md="30" />
            <p>
              Our LMS solutions are designed to simplify the educational process
              for institutions, businesses, and educators. From course
              management to student engagement, we provide tools that create a
              more effective learning experience.
            </p>
          </Div>
        </Div>
      </Div>

      <Spacing lg="120" md="50" />

      {/* Key Benefits Section */}
      <Div className="container">
        <SectionHeading
          title="Key Benefits of Our LMS Solutions"
          subtitle="Why Choose Our LMS Solutions?"
        >
          <Spacing lg="30" md="20" />
          <Div className="row">
            {/* Left Column with Text */}
            <Div className="col-lg-6 col-md-12">
              <ul className="cs-m0">
                <li>Customizable courses tailored to your needs.</li>
                <li>Scalable platforms to accommodate growing users.</li>
                <li>Enhanced collaboration through integrated tools.</li>
                <li>Mobile-friendly access for flexible learning.</li>
                <li>Real-time performance tracking and analytics.</li>
                <li>Seamless integration with external systems.</li>
              </ul>
            </Div>
            {/* Right Column with Image */}
            <Div className="col-lg-6 col-md-12 text-center">
              <Image
                src="/products/lms2.jpg"
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
              subtitle="Innovative LMS Solutions for Modern Learning"
            >
              <Spacing lg="30" md="20" />
              <p className="cs-m0">
                Our LMS solutions empower organizations and educators to deliver
                impactful learning experiences. We focus on usability,
                scalability, and integration to ensure the best outcomes for
                learners and administrators.
              </p>
              <Spacing lg="15" md="15" />
              <p className="cs-m0">
                Whether you're an educational institution or a corporate
                training team, our LMS platforms are tailored to meet your
                unique needs and help achieve your learning goals.
              </p>
            </SectionHeading>
          </Div>
          {/* Right Column with Image */}
          <Div className="col-xl-5 offset-xl-1 col-lg-6">
            <Div className="cs-image_layer cs-style1">
              <Div className="cs-image_layer_in">
                <Image
                  src="/products/lms3.jpg"
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
