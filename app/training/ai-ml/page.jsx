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
  title: "AI & ML Training | Big Careers Technology solutions",
  description:
    "Dive into our comprehensive AI & ML Training program. Learn data preprocessing, feature engineering, supervised/unsupervised learning, deep learning basics, and build models using Python and popular ML libraries.",
  keywords: [
    "AI Training",
    "ML Training",
    "Machine Learning Course",
    "Deep Learning Basics",
    "Python for ML",
    "Data Science Training",
    "Supervised Learning",
    "Unsupervised Learning",
  ],
  robots: "index, follow",
  openGraph: {
    title: "AI & ML Training | Big Careers Technology solutions",
    description:
      "Master Artificial Intelligence and Machine Learning fundamentals with hands-on training using Python and real-world data.",
    url: "https://bigcareers.solutions/training/ai-ml",
    type: "website",
    image: "/logo.jpg",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI & ML Training | Big Careers Technology solutions",
    description:
      "Accelerate your career with our AI & ML training, covering data processing, model building, deep learning, and practical applications.",
    image: "/logo.jpg",
  },
};

const services = [
  {
    icon: <FaRobot className="mb-4" style={{ fontSize: "4rem" }} />,
    title: "Introduction to ML Concepts",
    subtitle:
      "Understand core concepts, types of learning (supervised/unsupervised), and the ML workflow.",
  },
  {
    icon: <FaDatabase className="mb-4" style={{ fontSize: "4rem" }} />,
    title: "Data Preprocessing & Features",
    subtitle:
      "Master data cleaning, feature engineering, and preparing datasets for robust model training.",
  },
  {
    icon: <FaBrain className="mb-4" style={{ fontSize: "4rem" }} />,
    title: "Supervised Learning Algorithms",
    subtitle:
      "In-depth coverage of algorithms for regression, classification, and predictive modeling.",
  },
  {
    icon: <FaChartLine className="mb-4" style={{ fontSize: "4rem" }} />,
    title: "Unsupervised Learning & Clustering",
    subtitle:
      "Explore techniques like clustering and dimensionality reduction for pattern discovery.",
  },
  {
    icon: <FaCode className="mb-4" style={{ fontSize: "4rem" }} />,
    title: "Deep Learning & Neural Networks",
    subtitle:
      "Introduction to the basics of Deep Learning, Neural Networks, and foundational DL workflows.",
  },
  {
    icon: <FaCogs className="mb-4" style={{ fontSize: "4rem" }} />,
    title: "Model Evaluation & Tuning",
    subtitle:
      "Learn best practices for evaluating model performance, tuning hyperparameters, and deploying systems.",
  },
];

export default function AIMLDetailsPage() {
  return (
    <>
     
      <PageHeading
        title="AI & ML Training Program"
        bgSrc="/products/image1.png"
        pageLinkText="AI & ML Training"
      />
      <Spacing lg="145" md="80" />

     
      <Div className="container">
        <Div className="row">
          <Div className="col-xl-5 col-lg-6">
            <SectionHeading
              title="AI & ML Training"
              subtitle="Accelerate Your Career in Data Science and Automation"
            >
              <Spacing lg="30" md="20" />
              <p className="cs-m0">
                This course is perfect for developers, analysts, and tech
                enthusiasts looking to pivot into data science, machine
                learning, or artificial intelligence.
              </p>
              <Spacing lg="15" md="15" />
              <p className="cs-m0">
                We focus on <b>hands-on implementation</b> using
                industry-standard tools, ensuring you leave with practical
                skills ready for the job market.
              </p>
            </SectionHeading>
            <Spacing lg="30" md="20" />
            <a href="#" className="btn btn-primary">
              Enroll Now
            </a>
          </Div>

          <Div className="col-xl-5 offset-xl-1 col-lg-6">
            <Image
              src="/products/ai-ml-logo.png"
              alt="AI and ML Logo"
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
                src="/products/ai-ml-coding.jpg"
                alt="AI and Machine Learning Coding"
                width={600}
                height={600}
                className="cs-radius_15"
              />
            </Div>
            <Spacing lg="0" md="40" />
          </Div>

          <Div className="col-lg-6 offset-xl-1">
            <h2 className="cs-font_50 cs-m0">
              Build, Train and Evaluate ML Models
            </h2>
            <Spacing lg="50" md="30" />
            <p>
              By the end of this comprehensive course, you will be able to{" "}
              <b>build, train, and evaluate ML models</b> confidently using{" "}
              <b>Python</b> and popular libraries like Scikit-learn,
              TensorFlow, or PyTorch.
            </p>
            <p>
              Gain hands-on experience applying <b>AI techniques</b> to
              real-world problems such as prediction systems, advanced
              analytics, and automation tasks.
            </p>
          </Div>
        </Div>
      </Div>

      <Spacing lg="120" md="50" />

     
      <Div className="container">
        <SectionHeading
          title="What You'll Learn: Key Modules"
          subtitle="Comprehensive coverage of essential AI & ML topics"
        >
          <Spacing lg="30" md="20" />
          <Div className="row">
            <Div className="col-lg-6 col-md-12">
              <ul className="cs-m0 cs-list_style_1">
                <li>
                  <b>Introduction to ML:</b> Concepts, types (supervised &
                  unsupervised).
                </li>
                <li>
                  <b>Data Preprocessing:</b> Cleaning, feature engineering, and
                  preparation.
                </li>
                <li>
                  <b>Supervised Learning:</b> Regression & Classification
                  methods.
                </li>
                <li>
                  <b>Unsupervised Learning:</b> Clustering & dimensionality
                  reduction.
                </li>
                <li>
                  <b>Deep Learning Basics:</b> Neural network fundamentals.
                </li>
                <li>
                  <b>Model Evaluation:</b> Metrics, tuning, and real-world
                  deployment.
                </li>
              </ul>
            </Div>

            <Div className="col-lg-6 col-md-12 text-center">
              <Image
                src="/products/ai-ml-diagram.jpg"
                alt="Key ML Workflow Diagram"
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
          title="Master Artificial Intelligence & Machine Learning"
          subtitle="Explore all the core modules included in the training program"
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
