import Div from "../../ui/Div";
import PageHeading from "../../ui/PageHeading";
import SectionHeading from "../../ui/SectionHeading";
import Spacing from "../../ui/Spacing";
import Image from "next/image";
import ContactFooter from "/app/ui/contactpg";

export const metadata = {
  title: "Insurance Services | KolVal",
  description:
    "Explore KolVal's innovative solutions for the Insurance industry, powered by AI & ML, Cyber Security, Blockchain, Data Analytics, and Cloud technologies to optimize risk management, claims processing, and customer engagement.",
  keywords: [
    "Insurance Services",
    "AI in Insurance",
    "Cyber Security for Insurance",
    "Blockchain in Insurance",
    "Data Analytics for Insurance",
    "Claims Processing Automation",
    "Risk Management Solutions",
    "Insurance Technology",
    "Digital Insurance Services",
    "Customer Engagement in Insurance",
  ],
  robots: "index, follow",
  openGraph: {
    title: "Insurance Services | KolVal",
    description:
      "KolVal offers AI, Blockchain, Cyber Security, and Data Analytics solutions for the Insurance industry to optimize operations and enhance customer experience.",
    url: "https://www.kolval.com/insurance-services",
    type: "website",
    image: "/logo.jpg",
  },
  twitter: {
    card: "summary_large_image",
    title: "Insurance Services | KolVal",
    description:
      "KolVal provides advanced solutions in AI, Blockchain, and Cyber Security for the Insurance industry.",
    image: "/logo.jpg",
  },
};

export default function IndustryDetailsPage() {
  return (
    <>
      <PageHeading
        title="Insurance"
        bgSrc="/industry/insurance.jpg"
        pageLinkText="Insurance Solutions"
      />
      <Spacing lg="145" md="80" />
      <Div className="container">
        <SectionHeading
          title="Insurance"
          subtitle="Transforming the insurance industry with AI, ML, and blockchain technologies to enhance risk management and customer service."
          variant="cs-style1 text-center"
        />
        <Spacing lg="90" md="45" />
        <Div className="row">
          <Div className="col-lg-12">
            <p>
              Kolval helps insurance companies streamline operations, improve
              risk assessment, and enhance customer experience through the power
              of AI, machine learning, and blockchain. Our solutions are
              designed to help you manage claims, optimize pricing models, and
              reduce fraud, all while offering an improved customer experience.
            </p>
            <p>
              We assist insurance providers in automating underwriting
              processes, enhancing claims processing, and leveraging data
              analytics for more accurate risk evaluation and decision-making.
              With our innovative solutions, insurance companies can operate
              more efficiently and effectively.
            </p>
            <Spacing lg="30" md="30" />
            <h3 className="cs-font_30 cs-mb-30 text-center">
              Why Choose Our Solutions?
            </h3>
            <Div className="row">
              {[
                {
                  title: "AI-Driven Risk Assessment",
                  description:
                    "Assess risks more accurately with machine learning models.",
                  icon: "📊",
                },
                {
                  title: "Blockchain for Transparent Claims",
                  description:
                    "Ensure fraud-free, transparent claims processing with blockchain technology.",
                  icon: "⛓️",
                },
                {
                  title: "Automated Claims Management",
                  description:
                    "Streamline the entire claims process with AI automation.",
                  icon: "🔍",
                },
                {
                  title: "Smarter Pricing Models",
                  description:
                    "Use data analytics to build optimized pricing models that improve profitability.",
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
                src="/industry/i.jpg"
                alt="Banking and Financial Services"
                className="cs-radius_15 w-100"
                width={500}
                height={500}
              />
            </Div>
          </Div>
          <Div className="col-lg-6 offset-xl-1">
            <h2 className="cs-font_50 cs-m0">
              Modernizing Insurance Operations
            </h2>
            <Spacing lg="30" md="20" />
            <p className="cs-font_18">
              We are transforming the insurance landscape by integrating AI,
              machine learning, and blockchain to optimize risk management,
              improve customer service, and increase efficiency. Let us help you
              stay ahead of the curve and create better outcomes for your
              business and customers.
            </p>
          </Div>
        </Div>
      </Div>
      <Spacing lg="150" md="80" />
      <ContactFooter />
    </>
  );
}
