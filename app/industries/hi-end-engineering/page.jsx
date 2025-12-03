import Div from "../../ui/Div";
import PageHeading from "../../ui/PageHeading";
import SectionHeading from "../../ui/SectionHeading";
import Spacing from "../../ui/Spacing";
import Image from "next/image";
import ContactFooter from "/app/ui/contactpg";

export const metadata = {
  title: "High-End Engineering Services | Big Careers Technology solutions",
  description:
    "Explore Big Careers Technology solutions's High-End Engineering Services, offering cutting-edge solutions in AI & ML, Cyber Security, IoT, Blockchain, Data Engineering, Cloud, and more to drive innovation in engineering projects.",
  keywords: [
    "High-End Engineering",
    "Engineering Solutions",
    "AI in Engineering",
    "Cyber Security for Engineering",
    "IoT Engineering",
    "Blockchain Engineering",
    "Data Engineering Services",
    "Cloud Engineering",
    "Advanced Engineering Technologies",
    "Innovation in Engineering",
  ],
  robots: "index, follow",
  openGraph: {
    title: "High-End Engineering Services | Big Careers Technology solutions",
    description:
      "Big Careers Technology solutions provides advanced engineering solutions across AI, Cyber Security, IoT, Blockchain, and Data Engineering for high-end industrial and technological applications.",
    url: "https://bigcareers.solutions/high-end-engineering-services",
    type: "website",
    image: "/logo.jpg",
  },
  twitter: {
    card: "summary_large_image",
    title: "High-End Engineering Services | Big Careers Technology solutions",
    description:
      "Big Careers Technology solutions offers advanced engineering solutions, incorporating AI, Cyber Security, IoT, Blockchain, and more for high-end projects.",
    image: "/logo.jpg",
  },
};

export default function IndustryDetailsPage() {
  return (
    <>
      <PageHeading
        title="Hi-End Engineering"
        bgSrc="/industry/hi-end.jpg"
        pageLinkText="Hi-End Engineering Solutions"
      />
      <Spacing lg="145" md="80" />
      <Div className="container">
        <SectionHeading
          title="Hi-End Engineering"
          subtitle="Leveraging AI, machine learning, and automation for enhanced precision and efficiency in the engineering sector."
          variant="cs-style1 text-center"
        />
        <Spacing lg="90" md="45" />
        <Div className="row">
          <Div className="col-lg-12">
            <p>
              Big Careers Technology solutions empowers the engineering industry
              with advanced AI and ML solutions designed to optimize workflows,
              enhance product design, and drive innovation. Our solutions help
              companies deliver high-quality products while reducing
              time-to-market and increasing productivity.
            </p>
            <p>
              We enable engineering firms to leverage AI for predictive
              maintenance, advanced simulations, and streamlined manufacturing
              processes. Our solutions are aimed at improving operational
              efficiency, reducing costs, and ensuring precision in every
              project.
            </p>
            <Spacing lg="30" md="30" />
            <h3 className="cs-font_30 cs-mb-30 text-center">
              Why Choose Our Solutions?
            </h3>
            <Div className="row">
              {[
                {
                  title: "Predictive Maintenance",
                  description:
                    "Use AI to predict equipment failures and reduce downtime.",
                  icon: "🔧",
                },
                {
                  title: "Advanced Simulations",
                  description:
                    "Simulate engineering designs and processes for better planning and decision-making.",
                  icon: "⚙️",
                },
                {
                  title: "Automation of Manufacturing",
                  description:
                    "Improve manufacturing processes and reduce human errors with automated solutions.",
                  icon: "🛠️",
                },
                {
                  title: "Optimized Product Development",
                  description:
                    "Leverage AI to design high-quality products faster and more efficiently.",
                  icon: "📈",
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
                src="/industry/t.jpg"
                alt="Hi-End Engineering"
                className="cs-radius_15 w-100"
                width={500}
                height={500}
              />
            </Div>
          </Div>
          <Div className="col-lg-6 offset-xl-1">
            <h2 className="cs-font_50 cs-m0">
              Innovating Engineering for the Future
            </h2>
            <Spacing lg="30" md="20" />
            <p className="cs-font_18">
              We bring cutting-edge AI and machine learning technologies to the
              engineering industry to streamline operations, improve product
              quality, and maximize efficiency. Our solutions enable businesses
              to stay competitive and drive innovation in a rapidly changing
              market.
            </p>
          </Div>
        </Div>
      </Div>
      <Spacing lg="150" md="80" />
      <ContactFooter />
    </>
  );
}
