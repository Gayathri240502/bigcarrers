import Div from "../../ui/Div";
import PageHeading from "../../ui/PageHeading";
import SectionHeading from "../../ui/SectionHeading";
import Spacing from "../../ui/Spacing";
import Image from "next/image";
import ContactFooter from "/app/ui/contactpg";

export const metadata = {
  title: "Robotics Solutions | KolVal",
  description:
    "Explore KolVal's advanced Robotics solutions powered by AI & ML, IoT, Cyber Security, Blockchain, and Cloud technologies to enhance automation, precision, and operational efficiency across industries.",
  keywords: [
    "Robotics Solutions",
    "AI in Robotics",
    "Cyber Security for Robotics",
    "IoT in Robotics",
    "Blockchain in Robotics",
    "Robotics Automation",
    "Industrial Robotics",
    "Robotics Technology",
    "Cloud Robotics",
    "Advanced Robotics Solutions",
  ],
  robots: "index, follow",
  openGraph: {
    title: "Robotics Solutions | KolVal",
    description:
      "KolVal offers AI, IoT, Cyber Security, Blockchain, and Cloud-based Robotics solutions to automate processes and enhance efficiency in industries.",
    url: "https://www.kolval.com/robotics-solutions",
    type: "website",
    image: "/logo.jpg",
  },
  twitter: {
    card: "summary_large_image",
    title: "Robotics Solutions | KolVal",
    description:
      "KolVal provides AI, IoT, Cyber Security, Blockchain, and Cloud Robotics solutions to drive automation and efficiency.",
    image: "/logo.jpg",
  },
};

export default function IndustryDetailsPage() {
  return (
    <>
      <PageHeading
        title="Robotics"
        bgSrc="/industry/robo.jpg"
        pageLinkText="Robotic Solutions"
      />
      <Spacing lg="145" md="80" />
      <Div className="container">
        <SectionHeading
          title="Robotics"
          subtitle="Pioneering robotics solutions with AI and ML to enhance automation, efficiency, and safety in industries."
          variant="cs-style1 text-center"
        />
        <Spacing lg="90" md="45" />
        <Div className="row">
          <Div className="col-lg-12">
            <p>
              At Kolval, we drive innovation in the robotics industry with AI
              and ML-powered solutions that enhance automation and improve
              operational efficiency. Our solutions help industries such as
              manufacturing, healthcare, and logistics integrate robotics for
              smarter processes and higher safety standards.
            </p>
            <p>
              From autonomous robots to automated production lines, our
              AI-driven robotics solutions provide cutting-edge technology that
              helps businesses optimize their operations, reduce costs, and
              improve overall safety and productivity.
            </p>
            <Spacing lg="30" md="30" />
            <h3 className="cs-font_30 cs-mb-30 text-center">
              Why Choose Our Solutions?
            </h3>
            <Div className="row">
              {[
                {
                  title: "AI-Driven Robotics",
                  description:
                    "Enhance automation with robots powered by machine learning and artificial intelligence.",
                  icon: "🤖",
                },
                {
                  title: "Optimized Manufacturing",
                  description:
                    "Streamline production processes and reduce downtime with robotics solutions.",
                  icon: "⚙️",
                },
                {
                  title: "Safe Medical Robotics",
                  description:
                    "Deploy robots in healthcare for safer surgeries and improved patient care.",
                  icon: "🏥",
                },
                {
                  title: "Logistics Automation",
                  description:
                    "Implement autonomous robots for efficient material handling and transportation.",
                  icon: "🚚",
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
                src="/industry/r.jpg"
                alt="Robotics Solutions"
                className="cs-radius_15 w-100"
                width={500}
                height={500}
              />
            </Div>
          </Div>
          <Div className="col-lg-6 offset-xl-1">
            <h2 className="cs-font_50 cs-m0">
              Innovative Robotics for Tomorrow
            </h2>
            <Spacing lg="30" md="20" />
            <p className="cs-font_18">
              We integrate advanced robotics solutions to streamline operations,
              enhance safety, and improve efficiency. With our AI-driven robots,
              industries can experience the next level of automation.
            </p>
          </Div>
        </Div>
      </Div>
      <Spacing lg="150" md="80" />
      <ContactFooter />
    </>
  );
}
