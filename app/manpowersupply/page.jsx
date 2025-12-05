import Div from "/app/ui/Div";
import PageHeading from "/app/ui/PageHeading";
import SectionHeading from "/app/ui/SectionHeading";
import Spacing from "/app/ui/Spacing";
import ContactFooter from "/app/ui/contactpg";
import Image from "next/image";

export const metadata = {
  title: "Manpower Supply Services | Big Careers Solutions",
  description:
    "Big Careers Solutions provides skilled, semi-skilled, and unskilled manpower supply to support businesses across industries with flexible, reliable workforce solutions.",
  keywords: [
    "Manpower Supply",
    "Workforce Solutions",
    "Temporary Staffing",
    "Skilled Manpower",
    "Contract Staffing",
    "Project-Based Workforce",
    "Recruitment Services",
    "Business Workforce Support",
  ],
  robots: "index, follow",
  openGraph: {
    title: "Manpower Supply Services | Big Careers Solutions",
    description:
      "Reliable manpower supply solutions including temporary staffing, project-based workforce, and employer-on-record services for all industries.",
    url: "https://bigcareers.solutions/services/corporate/manpower",
    type: "website",
    image: "/logo.jpg",
  },
  twitter: {
    card: "summary_large_image",
    title: "Manpower Supply Services | Big Careers Solutions",
    description:
      "Providing end-to-end manpower supply and workforce outsourcing solutions to modern businesses.",
    image: "/logo.jpg",
  },
};

export default function CorporateTradingPage() {
  return (
    <>
      {/* Start Page Heading Section */}
      <PageHeading
        title="Manpower Supply Services"
        bgSrc="/images/manpower.jpeg"
        pageLinkText="Manpower Supply"
      />
      {/* End Page Heading Section */}

      {/* Start About Section */}
      <Spacing lg="150" md="80" />
      <Div className="container">
        <Div className="row align-items-center">
          <h3 className="text-primary mb-4">
            Empowering Businesses with Skilled Manpower Supply Solutions
          </h3>

          {/* Left Column */}
          <Div className="col-lg-6 col-md-12 mb-4 mb-lg-0">
            <p className="fs-6 mb-4">
              At Big Careers Solutions, we provide reliable manpower supply
              services designed to help organizations meet workforce demands
              quickly and efficiently. Whether you need temporary staffing,
              project-based teams, or long-term workforce support, we connect
              you with talented individuals who match your business needs.
            </p>
            <p className="mb-5">
              Our manpower solutions ensure your operations run smoothly by
              delivering the right talent at the right time — enhancing
              productivity, agility, and business continuity.
            </p>
          </Div>

          {/* Right Column */}
          <Div className="col-lg-6 col-md-12 text-center">
            <Image
              src="/images/hgg.jpeg"
              className="img-fluid cs-radius_15 shadow-lg"
              alt="Manpower Supply Services"
              width={700}
              height={700}
            />
          </Div>
        </Div>

        <Spacing lg="50" md="40" />
      </Div>
      {/* End About Section */}

      {/* Start Key Services Section */}
      <Spacing lg="100" md="80" />
      <Div className="container">
        <Div className="row">
          <Div className="col-xl-5 col-lg-6">
            <Div className="cs-image_layer cs-style1">
              <Div className="cs-image_layer_in">
                <Image
                  src="/images/man3.png"
                  alt="Key Manpower Services"
                  className="w-100 cs-radius_15"
                  width={500}
                  height={500}
                />
              </Div>
            </Div>
            <Spacing lg="0" md="40" />
          </Div>
          <Div className="col-xl-5 offset-xl-1 col-lg-6">
            <SectionHeading
              title="Our Key Manpower Services"
              subtitle="Connecting You With the Workforce You Need"
            >
              <Spacing lg="30" md="20" />
              <ul className="cs-m0">
                <li>Skilled, semi-skilled, and unskilled manpower supply</li>
                <li>Temporary, contract, and on-demand staffing</li>
                <li>Workforce outsourcing & employer-on-record solutions</li>
                <li>Project-based workforce deployment</li>
                <li>Screening, onboarding & compliance management</li>
              </ul>
              <Spacing lg="30" md="30" />
              <Div className="cs-separator cs-accent_bg"></Div>
              <Spacing lg="25" md="0" />
            </SectionHeading>
          </Div>
        </Div>
      </Div>
      {/* End Key Services Section */}

      {/* Start Why Choose Us Section */}
      <Spacing lg="100" md="80" />
      <Div className="container">
        <Div className="row">
          <Div className="col-xl-5 col-lg-6">
            <Div className="cs-image_layer cs-style1">
              <Div className="cs-image_layer_in">
                {/* <Image
                  src="/services/corporate/trading3.jpg"
                  alt="Why Choose Our Manpower Supply"
                  className="w-100 cs-radius_15"
                  width={500}
                  height={500}
                /> */}
              </Div>
            </Div>
            <Spacing lg="0" md="40" />
          </Div>
          <Div className="col-xl-5 offset-xl-1 col-lg-6">
            {/* <SectionHeading
              title="Why Choose Us"
              subtitle="Your Trusted Partner in Workforce Solutions"
            >
              <Spacing lg="30" md="20" />
              <p className="cs-m0">
                Big Careers Solutions is committed to providing dependable and
                scalable manpower supply services that empower businesses across
                industries. We ensure every candidate is screened, verified, and
                aligned with your operational requirements.
              </p>

              <Spacing lg="15" md="15" />

              <p className="cs-m0">
                With our extensive talent pool, fast deployment capabilities, and
                commitment to workforce excellence, we help you maintain
                uninterrupted operations and achieve optimal performance.
              </p>

              <Spacing lg="30" md="30" />
              <Div className="cs-separator cs-accent_bg"></Div>
              <Spacing lg="25" md="0" />
            </SectionHeading> */}
          </Div>
        </Div>
      </Div>

      <Spacing lg="150" md="80" />
      <ContactFooter />
    </>
  );
}
