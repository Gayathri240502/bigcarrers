import {
  FaServer,
  FaTools,
  FaCloud,
  FaNetworkWired,
  FaDocker,
  FaSyncAlt,
} from "react-icons/fa";
import Div from "../../ui/Div";
import PageHeading from "../../ui/PageHeading";
import SectionHeading from "../../ui/SectionHeading";
import Spacing from "../../ui/Spacing";
import Image from "next/image";
import ContactFooter from "/app/ui/contactpg";

export const metadata = {
  title: "DevOps Training | Big Careers Technology Solutions",
  description:
    "Master CI/CD, containerization, cloud deployment, automation, and monitoring with our hands-on DevOps Training Program.",
  keywords: [
    "DevOps Training",
    "CI/CD",
    "Containers",
    "Docker",
    "Kubernetes",
    "Cloud Deployment",
    "Automation",
    "DevOps Tools",
  ],
  robots: "index, follow",
  openGraph: {
    title: "DevOps Training | Big Careers Technology Solutions",
    description:
      "Become an industry-ready DevOps Engineer with hands-on labs in CI/CD, cloud, automation, and infrastructure management.",
    url: "https://bigcareers.solutions/training/devops",
    type: "website",
    image: "/logo.jpg",
  },
  twitter: {
    card: "summary_large_image",
    title: "DevOps Training | Big Careers Technology Solutions",
    description:
      "Hands-on DevOps training covering pipelines, automation, cloud services, monitoring, and infrastructure as code.",
    image: "/logo.jpg",
  },
};

const services = [
  {
    icon: <FaServer className="mb-4" style={{ fontSize: "4rem" }} />,
    title: "DevOps Foundations",
    subtitle:
      "Learn core DevOps principles, workflows, and breaking the gap between development & operations.",
  },
  {
    icon: <FaTools className="mb-4" style={{ fontSize: "4rem" }} />,
    title: "CI/CD Pipelines",
    subtitle:
      "Build automated pipelines using Git, GitHub Actions, Jenkins, and other industry tools.",
  },
  {
    icon: <FaCloud className="mb-4" style={{ fontSize: "4rem" }} />,
    title: "Cloud Deployment",
    subtitle:
      "Deploy and manage applications on AWS, Azure, or GCP using cloud-native services.",
  },
  {
    icon: <FaNetworkWired className="mb-4" style={{ fontSize: "4rem" }} />,
    title: "Infrastructure as Configuration",
    subtitle:
      "Master IaC tools like Terraform and Ansible for automated infrastructure provisioning.",
  },
  {
    icon: <FaDocker className="mb-4" style={{ fontSize: "4rem" }} />,
    title: "Containerization & Docker",
    subtitle:
      "Learn Docker, container management, image optimization, and microservice deployment.",
  },
  {
    icon: <FaSyncAlt className="mb-4" style={{ fontSize: "4rem" }} />,
    title: "Monitoring & Automation",
    subtitle:
      "Implement monitoring, logging, and automation using Prometheus, Grafana, and DevOps tools.",
  },
];

export default function DevOpsDetailsPage() {
  return (
    <>
      <PageHeading
        title="DevOps Training Program"
        bgSrc="/products/dev1.png"
        pageLinkText="DevOps Training"
      />
      <Spacing lg="145" md="80" />

      <Div className="container">
        <Div className="row">
          <Div className="col-xl-5 col-lg-6">
            <SectionHeading
              title="DevOps Training"
              subtitle="Become an Industry-Ready DevOps Engineer"
            >
              <Spacing lg="30" md="20" />
              <p className="cs-m0">
                This program is perfect for IT professionals, developers, and
                system administrators aiming to master modern DevOps practices.
              </p>
              <Spacing lg="15" md="15" />
              <p className="cs-m0">
                Learn how to automate deployments, manage cloud infrastructure,
                and build CI/CD pipelines for real-world applications.
              </p>
            </SectionHeading>
            <Spacing lg="30" md="20" />
            <a href="#" className="btn btn-primary">
              Enroll Now
            </a>
          </Div>

          <Div className="col-xl-5 offset-xl-1 col-lg-6">
            <Image
              src="/products/dep1.png"
              alt="DevOps Logo"
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
                src="/products/dep.png"
                alt="DevOps Engineering"
                width={600}
                height={600}
                className="cs-radius_15"
              />
            </Div>
            <Spacing lg="0" md="40" />
          </Div>

          <Div className="col-lg-6 offset-xl-1">
            <h2 className="cs-font_50 cs-m0">
              Build, Automate & Deploy DevOps Workflows
            </h2>
            <Spacing lg="50" md="30" />
            <p>
              Gain real-world experience in <b>automation, cloud deployment,</b>{" "}
              and <b>CI/CD pipelines</b> used by top companies.
            </p>
            <p>
              Learn to manage modern infrastructure using <b>Docker, Git,
              Terraform, Kubernetes,</b> and monitoring tools.
            </p>
          </Div>
        </Div>
      </Div>

      <Spacing lg="120" md="50" />

      <Div className="container">
        <SectionHeading
          title="What You'll Learn: Key Modules"
          subtitle="Complete DevOps Training Curriculum"
        >
          <Spacing lg="30" md="20" />
          <Div className="row">
            <Div className="col-lg-6 col-md-12">
              <ul className="cs-m0 cs-list_style_1">
                <li>
                  <b>DevOps Fundamentals:</b> Lifecycle, culture & best
                  practices.
                </li>
                <li>
                  <b>Version Control:</b> Git, GitHub, branching strategies.
                </li>
                <li>
                  <b>CI/CD Pipelines:</b> Automation with Jenkins & GitHub
                  Actions.
                </li>
                <li>
                  <b>Cloud Technologies:</b> Deploy apps on AWS/Azure/GCP.
                </li>
                <li>
                  <b>Containerization:</b> Docker, Images, Containers.
                </li>
                <li>
                  <b>Infrastructure as  Code:</b> Terraform, Ansible, automation.
                </li>
              </ul>
            </Div>
            

            <Div className="col-lg-6 col-md-12 text-center">
              <Image
                src="/products/dev.png"
                alt="DevOps Workflow Diagram"
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
          title="Master DevOps Engineering"
          subtitle="All Key Skills Included in the Program"
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
