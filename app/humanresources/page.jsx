import Div from "/app/ui/Div";
import PageHeading from "/app/ui/PageHeading";
import SectionHeading from "/app/ui/SectionHeading";
import Spacing from "/app/ui/Spacing";
import ContactFooter from "/app/ui/contactpg";
import Image from "next/image";

export const metadata = {
  title: "Human Resources Management Services | Big Careers Solutions",
  description:
    "Big Careers Solutions provides end-to-end HR services including talent acquisition, workforce management, employee onboarding, HR outsourcing, and compliance support.",
  keywords: [
    "Human Resources",
    "HR Services",
    "Talent Acquisition",
    "Workforce Management",
    "HR Outsourcing",
    "Employee Onboarding",
    "HR Consulting",
    "Human Capital Management",
  ],
  robots: "index, follow",
  openGraph: {
    title: "Human Resources Management Services | Big Careers Solutions",
    description:
      "Professional HR solutions including recruitment, staffing, HR outsourcing, payroll support, and employee management for organizations.",
    url: "https://bigcareers.solutions/services/hr",
    type: "website",
    image: "/logo.jpg",
  },
  twitter: {
    card: "summary_large_image",
    title: "Human Resources Management Services | Big Careers Solutions",
    description:
      "Providing business-ready HR solutions that empower workforce efficiency, productivity, and compliance.",
    image: "/logo.jpg",
  },
};

export default function CorporateTradingPage() {
  return (
    <>
      {/* Start Page Heading Section */}
      <PageHeading
        title="Human Resources Management Services"
        bgSrc="/services/corporate/trading-bg.jpg"
        pageLinkText="Human Resources"
      />
      {/* End Page Heading Section */}

      {/* Start About Section */}
      <Spacing lg="150" md="80" />
      <Div className="container">
        <Div className="row align-items-center">
          <h3 className="text-primary mb-4">
            Reliable Human Resource Solutions for Every Business
          </h3>

          {/* Left Column with Text */}
          <Div className="col-lg-6 col-md-12 mb-4 mb-lg-0">
            <p className="fs-6 mb-4">
              Big Careers Solutions provides comprehensive Human Resource
              services designed to support organizations in managing their most
              valuable asset — people. We help companies streamline HR
              operations, improve employee engagement, and implement workforce
              strategies that drive long-term success.
            </p>
            <p className="mb-5">
              From recruitment and onboarding to HR outsourcing and workforce
              compliance, our team ensures your organization receives
              professional and reliable HR support tailored to your business
              needs.
            </p>
          </Div>

          {/* Right Column with Image */}
          <Div className="col-lg-6 col-md-12 text-center">
            <Image
              src="/services/corporate/trading1.jpg"
              className="img-fluid cs-radius_15 shadow-lg"
              alt="Human Resources Solutions"
              width={700}
              height={700}
            />
          </Div>
        </Div>

        <Spacing lg="50" md="40" />
      </Div>
      {/* End About Section */}

      {/* Start Key Features Section */}
      <Spacing lg="100" md="80" />
      <Div className="container">
        <Div className="row">
          <Div className="col-xl-5 col-lg-6">
            <Div className="cs-image_layer cs-style1">
              <Div className="cs-image_layer_in">
                <Image
                  src="/services/corporate/trading2.jpg"
                  alt="HR Services"
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
              title="Our HR Services"
              subtitle="End-to-End Human Resource Management for Your Organization"
            >
              <Spacing lg="30" md="20" />
              <ul className="cs-m0">
                <li>Talent acquisition & recruitment</li>
                <li>Employee onboarding & orientation</li>
                <li>HR outsourcing & workforce management</li>
                <li>Payroll processing & attendance management</li>
                <li>HR policies, documentation & compliance support</li>
              </ul>
              <Spacing lg="30" md="30" />
              <Div className="cs-separator cs-accent_bg"></Div>
              <Spacing lg="25" md="0" />
            </SectionHeading>
          </Div>
        </Div>
      </Div>
      {/* End Key Features Section */}

      {/* Start Why Choose Us Section */}
      <Spacing lg="100" md="80" />
      <Div className="container">
        <Div className="row">
          <Div className="col-xl-5 col-lg-6">
            <Div className="cs-image_layer cs-style1">
              <Div className="cs-image_layer_in">
                <Image
                  src="/services/corporate/trading3.jpg"
                  alt="Why Choose Our HR Services"
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
              title="Why Choose Us"
              subtitle="Professional & Efficient HR Support You Can Rely On"
            >
              <Spacing lg="30" md="20" />
              <p className="cs-m0">
                Our HR team brings expertise, accuracy, and professionalism to
                every process — from hiring talent to managing employee
                relations. We help businesses reduce operational workload while
                improving employee satisfaction and workplace efficiency.
              </p>

              <Spacing lg="15" md="15" />

              <p className="cs-m0">
                By combining modern HR practices with industry-specific
                strategies, we ensure your workforce remains motivated,
                compliant, and aligned with your organizational goals.
              </p>

              <Spacing lg="30" md="30" />
              <Div className="cs-separator cs-accent_bg"></Div>
              <Spacing lg="25" md="0" />
            </SectionHeading>
          </Div>
        </Div>
      </Div>

      <Spacing lg="150" md="80" />
      <ContactFooter />
    </>
  );
}
