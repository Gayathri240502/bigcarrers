import ContactFooter from "/app/ui/contactpg";
import Div from "../../ui/Div";
import PageHeading from "../../ui/PageHeading";
import SectionHeading from "../../ui/SectionHeading";
import Spacing from "../../ui/Spacing";
export const metadata = {
  title: "Banking and Financial Services | Big Careers  solutions",
  description:
    "Explore Big Careers  solutions's innovative solutions for Banking and Financial Services, leveraging AI & ML, Cyber Security, Blockchain, Cloud, Data Analytics, and more to enhance financial operations and security.",
  keywords: [
    "Banking and Financial Services",
    "Financial Technology",
    "AI in Finance",
    "Cyber Security for Banks",
    "Blockchain in Finance",
    "Cloud Solutions for Banking",
    "Data Analytics in Finance",
    "Fraud Detection",
    "Risk Management",
    "Digital Banking Solutions",
    "FinTech Solutions",
  ],
  robots: "index, follow",
  openGraph: {
    title: "Banking and Financial Services | Big Careers solutions",
    description:
      "Big Careers solutions provides AI, Cyber Security, Blockchain, and Data Analytics solutions for Banking and Financial Services to enhance security and efficiency.",
    url: "https://bigcareers.solutions/banking-and-financial-services",
    type: "website",
    image: "/logo.jpg",
  },
  twitter: {
    card: "summary_large_image",
    title: "Banking and Financial Services | Big Careers solutions",
    description:
      "Big Careers solutions offers cutting-edge AI, Blockchain, and Cyber Security solutions for Banking and Financial Services.",
    image: "/logo.jpg",
  },
};

export default function BankingFinanceDetailsPage() {
  return (
    <>
      <PageHeading
        title="Banking & Finance Services"
        bgSrc="/industry/banking.jpg"
        pageLinkText="Banking & Finance"
      />
      <Spacing lg="145" md="80" />
      <Div className="container">
        <SectionHeading
          title="Banking & Financial Services"
          subtitle="Remain Connected in a No-Boundaries World"
          variant="cs-style1 text-center"
        />
        <Spacing lg="90" md="45" />
        <Div className="row">
          <Div className="col-lg-12">
            <p>
              Banks need to control costs, manage risk, and combat volatility to
              stay afloat. On the other hand, the biggest challenge they face is
              engaging customers who demand wealth creation ideas, savings tips,
              and 24/7 access.
            </p>
            <p>
              At Big Careers solutions, we offer tailored solutions
              like smart mobile banking and consulting services to help banks
              address these challenges while improving operational efficiency
              and enhancing customer engagement.
            </p>
            <Spacing lg="30" md="30" />
            <h3 className="cs-font_30 cs-mb-30 text-center">Our Solutions</h3>
            <Div className="row">
              {[
                {
                  title: "Cards and Payments",
                  description:
                    "Advanced safety features and data management optimization for secure transactions.",
                  icon: "💳",
                },
                {
                  title: "Investment Banking",
                  description:
                    "Automated BI solutions for risk management, compliance, and governance.",
                  icon: "📊",
                },
                {
                  title: "Account Opening Software",
                  description:
                    "Streamlined processes to help banks onboard customers efficiently.",
                  icon: "📝",
                },
                {
                  title: "Predictive Analytics",
                  description:
                    "Enhance decision-making and improve customer value with advanced analytics.",
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
              <img
                src="/industry/b.jpg"
                alt="Banking Solutions"
                className="cs-radius_15 w-100"
              />
            </Div>
          </Div>
          <Div className="col-lg-6 offset-xl-1">
            <h2 className="cs-font_50 cs-m0">Transforming Banking & Finance</h2>
            <Spacing lg="30" md="20" />
            <p className="cs-font_18">
              Big Careers Technology solutions's IT-enabled solutions help the
              banking sector tackle challenges like cybersecurity, compliance,
              and data management. Our tailored strategies ensure customer
              satisfaction, security, and business growth.
            </p>
          </Div>
        </Div>
      </Div>
      <Spacing lg="150" md="80" />
      <ContactFooter />
    </>
  );
}
