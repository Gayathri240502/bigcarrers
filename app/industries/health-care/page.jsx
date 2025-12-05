import Div from "../../ui/Div";
import PageHeading from "../../ui/PageHeading";
import SectionHeading from "../../ui/SectionHeading";
import Spacing from "../../ui/Spacing";
import Image from "next/image";
import ContactFooter from "/app/ui/contactpg";

export const metadata = {
  title: "Healthcare Services | Big Careers  solutions",
  description:
    "Discover Big Careers  solutions's innovative Healthcare solutions, leveraging AI & ML, Cyber Security, IoT, Blockchain, Data Analytics, and Cloud technologies to enhance patient care, security, and operational efficiency.",
  keywords: [
    "Healthcare Solutions",
    "AI in Healthcare",
    "Cyber Security for Healthcare",
    "IoT in Healthcare",
    "Blockchain in Healthcare",
    "Data Analytics for Healthcare",
    "Cloud Solutions for Healthcare",
    "Medical Technology",
    "Patient Care Innovation",
    "Digital Healthcare Services",
  ],
  robots: "index, follow",
  openGraph: {
    title: "Healthcare Services | Big Careers  solutions",
    description:
      "Big Careers  solutions provides advanced solutions in AI, Cyber Security, Blockchain, IoT, and Data Analytics for the Healthcare sector.",
    url: "https://bigcareers.solutions/healthcare-services",
    type: "website",
    image: "/logo.jpg",
  },
  twitter: {
    card: "summary_large_image",
    title: "Healthcare Services | Big Careers  solutions",
    description:
      "Big Careers  solutions offers AI, Cyber Security, IoT, Blockchain, and Data Analytics solutions for the Healthcare industry.",
    image: "/logo.jpg",
  },
};

export default function HealthcareDetailsPage() {
  return (
    <>
      <PageHeading
        title="Healthcare Solutions"
        bgSrc="/industry/health.jpg"
        pageLinkText="AI in Healthcare"
      />
      <Spacing lg="145" md="80" />
      <Div className="container">
        <SectionHeading
          title="Healthcare Solutions"
          subtitle="Revolutionizing patient care with AI-driven diagnostics and operational efficiency."
          variant="cs-style1 text-center"
        />
        <Spacing lg="90" md="45" />
        <Div className="row">
          <Div className="col-lg-12">
            <p>
              Big Careers Technology solutions drives innovation in healthcare
              through AI solutions that improve diagnostics, personalize
              treatments, and optimize administrative processes.
            </p>
            <p>
              Our technologies enable real-time patient monitoring, predictive
              analytics, and automated workflows, empowering healthcare
              providers to deliver exceptional care.
            </p>
            <Spacing lg="30" md="30" />
            <h3 className="cs-font_30 cs-mb-30 text-center">
              Why Choose Our Solutions?
            </h3>
            <Div className="row">
              {[
                {
                  title: "AI Diagnostics",
                  description:
                    "Enhance diagnostic accuracy with AI-powered tools.",
                  icon: "🩺",
                },
                {
                  title: "Personalized Treatments",
                  description:
                    "Leverage patient data for tailored treatment plans.",
                  icon: "💊",
                },
                {
                  title: "Predictive Analytics",
                  description:
                    "Anticipate patient needs with data-driven insights.",
                  icon: "📈",
                },
                {
                  title: "Operational Automation",
                  description:
                    "Streamline workflows and reduce administrative burdens.",
                  icon: "⚙️",
                },
              ].map((item, index) => (
                <Div
                  key={index}
                  style={{
                    background: "#ffffff",
                    border: "1px solid #e0e0e0",
                    borderRadius: "12px",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                    padding: "20px",
                    margin: "15px",
                    textAlign: "center",
                    transition: "transform 0.3s ease",
                  }}
                >
                  <Div
                    style={{
                      fontSize: "36px",
                      color: "#007bff",
                      marginBottom: "15px",
                    }}
                  >
                    {item.icon}
                  </Div>
                  <h4
                    style={{
                      fontSize: "20px",
                      fontWeight: "bold",
                      marginBottom: "10px",
                      color: "#333333",
                    }}
                  >
                    {item.title}
                  </h4>
                  <p style={{ fontSize: "16px", color: "#555555" }}>
                    {item.description}
                  </p>
                </Div>
              ))}
            </Div>
          </Div>
        </Div>
      </Div>
      <Spacing lg="120" md="50" />
      <Div className="container">
        <Div className="row align-items-center">
          <Div className="col-xl-5 col-lg-6">
            <Div className="cs-radius_15 cs-shine_hover_1">
              <Image
                src="/industry/multi-discipline-icons.png"
                alt="Healthcare Solutions"
                className="cs-radius_15 w-100"
                width={500}
                height={500}
              />
            </Div>
          </Div>
          <Div className="col-lg-6 offset-xl-1">
            <h2 className="cs-font_50 cs-m0">
              Transforming Healthcare with AI
            </h2>
            <Spacing lg="30" md="20" />
            <p className="cs-font_18">
              Our AI solutions revolutionize healthcare by enhancing
              diagnostics, optimizing processes, and delivering personalized
              care. We help providers achieve better outcomes while reducing
              costs.
            </p>
          </Div>
        </Div>
      </Div>
      <Spacing lg="150" md="80" />
      <ContactFooter />
    </>
  );
}
