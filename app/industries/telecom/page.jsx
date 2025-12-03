import Div from "../../ui/Div";
import PageHeading from "../../ui/PageHeading";
import SectionHeading from "../../ui/SectionHeading";
import Spacing from "../../ui/Spacing";
import Image from "next/image";
import ContactFooter from "/app/ui/contactpg";

export const metadata = {
  title: "Telecom Solutions | KolVal",
  description:
    "Explore KolVal's innovative Telecom solutions, leveraging AI & ML, Cyber Security, IoT, Blockchain, Data Analytics, and Cloud technologies to enhance connectivity, network management, and customer experience in the telecommunications industry.",
  keywords: [
    "Telecom Solutions",
    "AI in Telecom",
    "Cyber Security for Telecom",
    "IoT in Telecom",
    "Blockchain in Telecom",
    "Telecommunications Technology",
    "Network Management",
    "Data Analytics in Telecom",
    "Cloud Telecom Solutions",
    "5G Technology",
    "Telecom Innovations",
  ],
  robots: "index, follow",
  openGraph: {
    title: "Telecom Solutions | KolVal",
    description:
      "KolVal offers AI, Cyber Security, IoT, Blockchain, and Cloud-based solutions for the Telecom industry to improve network efficiency and customer experience.",
    url: "https://www.kolval.com/telecom-solutions",
    type: "website",
    image: "/logo.jpg",
  },
  twitter: {
    card: "summary_large_image",
    title: "Telecom Solutions | KolVal",
    description:
      "KolVal provides innovative AI, Cyber Security, and Cloud solutions to enhance network performance and customer experience in Telecom.",
    image: "/logo.jpg",
  },
};

export default function IndustryDetailsPage() {
  return (
    <>
      <PageHeading
        title="Telecom"
        bgSrc="/industry/telecom.jpg"
        pageLinkText="Telecom Solutions"
      />
      <Spacing lg="145" md="80" />
      <Div className="container">
        <SectionHeading
          title="Telecom"
          subtitle="Enhancing network operations, customer experiences, and data management with AI, ML, and IoT solutions."
          variant="cs-style1 text-center"
        />
        <Spacing lg="90" md="45" />
        <Div className="row">
          <Div className="col-lg-12">
            <p>
              Kolval offers innovative solutions for the telecom industry using
              AI, machine learning, and IoT to optimize network operations,
              enhance customer experiences, and improve service delivery. Our
              cutting-edge technologies help telecom companies manage complex
              networks and customer data with greater ease and efficiency.
            </p>
            <p>
              From predictive maintenance and automated network management to
              personalized customer experiences, our solutions enable telecom
              companies to meet the increasing demand for high-quality,
              reliable, and secure services.
            </p>
            <Spacing lg="30" md="30" />
            <h3 className="cs-font_30 cs-mb-30 text-center">
              Why Choose Our Solutions?
            </h3>
            <Div className="row">
              {[
                {
                  title: "AI-Powered Network Optimization",
                  description:
                    "Optimize network performance and reduce downtime using AI and ML algorithms.",
                  icon: "📶",
                },
                {
                  title: "Predictive Maintenance",
                  description:
                    "Leverage AI to predict and prevent network failures before they occur.",
                  icon: "🔧",
                },
                {
                  title: "Customer Experience Enhancement",
                  description:
                    "Provide personalized experiences and customer support through AI-driven chatbots and analytics.",
                  icon: "📱",
                },
                {
                  title: "IoT for Smart Connectivity",
                  description:
                    "Enable IoT devices to enhance connectivity and create new revenue streams.",
                  icon: "🌐",
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
                src="/industry/tele.jpg"
                alt="Telecom Solutions"
                className="cs-radius_15 w-100"
                width={500}
                height={500}
              />
            </Div>
          </Div>
          <Div className="col-lg-6 offset-xl-1">
            <h2 className="cs-font_50 cs-m0">
              Transforming Telecom with AI & IoT
            </h2>
            <Spacing lg="30" md="20" />
            <p className="cs-font_18">
              We help telecom companies deliver superior services by integrating
              AI, machine learning, and IoT technologies to enhance operations,
              improve customer experience, and increase network efficiency.
            </p>
          </Div>
        </Div>
      </Div>
      <Spacing lg="150" md="80" />
      <ContactFooter />
    </>
  );
}
