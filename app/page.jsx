import Div from "./ui/Div";
import LogoList from "./ui/LogoList";
import MovingText from "./ui/MovingText";
import SectionHeading from "./ui/SectionHeading";
import Spacing from "./ui/Spacing";
import ClientTableList from "./csr/ClientPricingTableList";
import ServicesSection from "./csr/ServicesSection";
import Button from "./ui/Button";
import SuccessStory from "./csr/successStory";
import ContactFooter from "./ui/contactpg";
export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <div
        style={{
          position: "relative",
          backgroundImage: "url('/Home/bclogo1.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "95vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "80px 40px",
        }}
      >
        {/* Overlay for readability */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            // Dark overlay for better readability
            zIndex: 1,
          }}
        ></div>

        <div
          style={{
            width: "100%",
            maxWidth: "1200px",
            margin: "0 auto",
            position: "relative",
            zIndex: 10,
          }}
        >
          {/* Heading */}
          <h1
            style={{
              fontSize: "3rem",
              fontWeight: "bold",
              marginBottom: "16px",
              color: "white",
              textAlign: "left",
              width: "80%",
            }}
          >
            Transforming Businesses With Smarter Digital Innovation
          </h1>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "25px",
              width: "100%",
            }}
          >
            <p
              style={{
                color: "white",
                fontSize: "1.125rem",
                lineHeight: "1.6",
                margin: 0,
                padding: "20px 0",
              }}
            >
              – AI & ML, IoT ,Software Enterprise, SAP, DevOps, Cloud,
              Salesforce, Consulting, Technology, Data Engineering & Analytics,
              Workforce Management, Custom Software Development, Application
              Integration, IT Infrastructure and Networking,
            </p>
            <div style={{ display: "flex", justifyContent: "start" }}>
              <Button
                style={{ maxWidth: "600px", width: "100%" }}
                btnLink="/contact"
                btnText="Talk to an Expert"
                variant="cs-type2"
              />
            </div>
          </div>

          {/* Subtitle & Button - Responsive Layout */}
        </div>
      </div>

      {/* Other Sections */}
      <Spacing lg="85" md="40" />
      <Div className="container">
        <SectionHeading
          title="At Big Careers Technology solutions"
          subtitle="We partner with startups and enterprises to provide AI, IoT, cybersecurity, blockchain, workforce management, Data analytics solutions, customized to drive your business success."
        />
      </Div>

      <Div className="container">
        <ClientTableList />
      </Div>

      <div id="service">
        <ServicesSection />
      </div>

      {/* Moving Text Section */}
      <Spacing lg="125" md="70" />
      {/* <MovingText text="Our reputed Clients" /> */}
      <Spacing lg="105" md="70" />

      {/* Logo List Section */}
      <Div className="container">
        {/* <LogoList /> */}
      </Div>
      {/* <Spacing lg="80" md="60" />
      <SuccessStory /> */}
      <Spacing lg="80" md="60" />
      <ContactFooter />

      {/* Responsive Styles using Media Queries */}
      <style>
        {`
          @media (min-width: 1024px) {
            div[style*="flex-direction: column-reverse"] {
              flex-direction: row !important;
              align-items: center !important;
            }
          }
        `}
      </style>
    </>
  );
}
