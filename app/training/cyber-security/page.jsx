import {
  FaShieldAlt,
  FaUserSecret,
  FaLock,
  FaBug,
  FaNetworkWired,
  FaLaptopCode,
} from "react-icons/fa";
import Div from "../../ui/Div";
import PageHeading from "../../ui/PageHeading";
import SectionHeading from "../../ui/SectionHeading";
import Spacing from "../../ui/Spacing";
import Image from "next/image";
import ContactFooter from "/app/ui/contactpg";

export const metadata = {
  title: "Cyber Security Training | Big Careers Technology Solutions",
  description:
    "Learn Cyber Security from fundamentals to advanced topics including ethical hacking, network security, malware analysis, cloud security, and security operations.",
  keywords: [
    "Cyber Security Training",
    "Ethical Hacking",
    "Network Security",
    "Cyber Forensics",
    "Malware Analysis",
    "Cloud Security",
    "Cyber Security Course",
    "Information Security",
  ],
  robots: "index, follow",
  openGraph: {
    title: "Cyber Security Training | Big Careers Technology Solutions",
    description:
      "Master Cyber Security with hands-on training, practical labs, ethical hacking, incident response, and security tools.",
    url: "https://bigcareers.solutions/training/cyber-security",
    type: "website",
    image: "/logo.jpg",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cyber Security Training | Big Careers Technology Solutions",
    description:
      "Become a cyber security professional with our practical and job-ready training program.",
    image: "/logo.jpg",
  },
};

const services = [
  {
    icon: <FaShieldAlt className="mb-4" style={{ fontSize: "4rem" }} />,
    title: "Cyber Security Fundamentals",
    subtitle:
      "Understand cyber threats, security layers, attack vectors, and foundational security principles.",
  },
  {
    icon: <FaUserSecret className="mb-4" style={{ fontSize: "4rem" }} />,
    title: "Ethical Hacking & Pen Testing",
    subtitle:
      "Learn reconnaissance, vulnerability scanning, exploitation techniques, and reporting.",
  },
  {
    icon: <FaLock className="mb-4" style={{ fontSize: "4rem" }} />,
    title: "Secure Network Operations",
    subtitle:
      "Master firewalls, IDS/IPS, VPNs, encryption, and secure network architecture.",
  },
  {
    icon: <FaBug className="mb-4" style={{ fontSize: "4rem" }} />,
    title: "Malware Detection & Defense",
    subtitle:
      "Analyze, detect, and mitigate malware attacks using real-world tools and techniques.",
  },
  {
    icon: <FaNetworkWired className="mb-4" style={{ fontSize: "4rem" }} />,
    title: "Cloud & Application Security",
    subtitle:
      "Learn cloud security concepts, IAM, secure coding, OWASP vulnerabilities, and risk assessment.",
  },
  {
    icon: <FaLaptopCode className="mb-4" style={{ fontSize: "4rem" }} />,
    title: "Security Operations & Monitoring",
    subtitle:
      "Hands-on training with SIEM tools, log monitoring, threat detection, and incident response.",
  },
];

export default function CyberSecurityDetailsPage() {
  return (
    <>
      <PageHeading
        title="Cyber Security Training Program"
        bgSrc="/products/cyber2.png"
        pageLinkText="Cyber Security Training"
      />
      <Spacing lg="145" md="80" />

      <Div className="container">
        <Div className="row">
          <Div className="col-xl-5 col-lg-6">
            <SectionHeading
              title="Cyber Security Training"
              subtitle="Become an Expert in Protecting Digital Systems"
            >
              <Spacing lg="30" md="20" />
              <p className="cs-m0">
                This course is ideal for beginners and professionals aiming to
                build or enhance their career in cyber security and ethical
                hacking.
              </p>
              <Spacing lg="15" md="15" />
              <p className="cs-m0">
                You will learn using <b>real-world simulations</b> and
                <b>industry-grade tools</b>, preparing you for high-demand
                security roles.
              </p>
            </SectionHeading>
            <Spacing lg="30" md="20" />
            <a href="/contact" className="btn btn-primary">
              Enroll Now
            </a>
          </Div>

          <Div className="col-xl-5 offset-xl-1 col-lg-6">
            <Image
              src="/products/cyb.png"
              alt="Cyber Security Logo"
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
                src="/products/cyber.png"
                alt="Cyber Security Operations"
                width={600}
                height={600}
                className="cs-radius_15"
              />
            </Div>
            <Spacing lg="0" md="40" />
          </Div>

          <Div className="col-lg-6 offset-xl-1">
            <h2 className="cs-font_50 cs-m0">
              Defend, Detect & Respond to Cyber Attacks
            </h2>
            <Spacing lg="50" md="30" />
            <p>
              By the end of this course, you will be able to{" "}
              <b>identify vulnerabilities, analyze threats, respond to incidents</b>,
              and implement strong security defenses.
            </p>
            <p>
              You’ll gain hands-on experience with <b>ethical hacking, forensic
              investigations, malware analysis, SIEM systems</b> and more.
            </p>
          </Div>
        </Div>
      </Div>

      <Spacing lg="120" md="50" />

      <Div className="container">
        <SectionHeading
          title="What You'll Learn: Key Modules"
          subtitle="Complete Cyber Security Training Curriculum"
        >
          <Spacing lg="30" md="20" />
          <Div className="row">
            <Div className="col-lg-6 col-md-12">
              <ul className="cs-m0 cs-list_style_1">
                <li>
                  <b>Cyber Security Basics:</b> Threats, vulnerabilities, security layers.
                </li>
                <li>
                  <b>Network Security:</b> Firewalls, IDS/IPS, VPNs, encryption methods.
                </li>
                <li>
                  <b>Ethical Hacking:</b> Recon, scanning, exploitation, reporting.
                </li>
                <li>
                  <b>Malware Analysis:</b> Behavior analysis, detection, mitigation.
                </li>
                <li>
                  <b>Cloud Security:</b> IAM, cloud threats, secure deployment strategies.
                </li>
                <li>
                  <b>Incident Response:</b> Logs, forensics, SIEM, threat hunting.
                </li>
              </ul>
            </Div>

            <Div className="col-lg-6 col-md-12 text-center">
              <Image
                src="/products/cybe2.png"
                alt="Cyber Security Diagram"
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
          title="Master Cyber Security with Hands-On Training"
          subtitle="Explore all the essential modules included in the program"
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
