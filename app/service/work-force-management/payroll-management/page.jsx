import Image from "next/image";
import Div from "../../../ui/Div";
import PageHeading from "../../../ui/PageHeading";
import SectionHeading from "../../../ui/SectionHeading";
import Spacing from "../../../ui/Spacing";
import ContactFooter from "/app/ui/contactpg";

export const metadata = {
  title: "Payroll Management Services | Big Careers Technology solutions",
  description:
    "Big Careers Technology solutions offers payroll management services to streamline salary processing, tax compliance, and benefits management, helping businesses improve efficiency, accuracy, and employee satisfaction.",
  keywords: [
    "Payroll Management",
    "Salary Processing",
    "Tax Compliance",
    "Benefits Management",
    "Payroll Automation",
    "Employee Payments",
    "Payroll Solutions",
    "Payroll Services",
    "Tax Filing Services",
    "Payroll Accuracy",
    "Payroll Software",
    "Employee Compensation",
  ],
  robots: "index, follow",
  openGraph: {
    title: "Payroll Management Services | Big Careers Technology solutions",
    description:
      "Big Careers Technology solutions’s payroll management services streamline salary processing, tax compliance, and benefits administration, ensuring accuracy and timely payments for your employees.",
    url: "https://bigcareers.solutions/payroll-management",
    type: "website",
    image: "/logo.jpg",
  },
  twitter: {
    card: "summary_large_image",
    title: "Payroll Management Services | Big Careers Technology solutions",
    description:
      "Simplify your payroll with Big Careers Technology solutions’s payroll management services, ensuring accurate and timely payments, tax compliance, and benefits management for your employees.",
    image: "/logo.jpg",
  },
};

export default function PayrollManagementPage() {
  return (
    <>
      {/* Start Page Heading Section */}
      <PageHeading
        title="Payroll Management"
        bgSrc="/services/workforce/pay.jpg"
        pageLinkText="Payroll Management"
      />
      {/* End Page Heading Section */}

      {/* Start About Section */}
      <Spacing lg="150" md="80" />
      <Div className="container">
        <Div className="row align-items-center">
          <h3 className="text-primary mb-4">
            Comprehensive Payroll Management Solutions
          </h3>

          {/* Left Column with Text */}
          <Div className="col-lg-6 col-md-12 mb-4 mb-lg-0">
            <p className="fs-6 mb-4">
              Big Careers Technology solutions offers advanced payroll
              management solutions that streamline and automate the payroll
              process, saving time and reducing errors. Our system ensures
              accurate, timely, and compliant payroll processing tailored to
              meet your specific requirements.
            </p>
            <p className="mb-5">
              With our payroll management solution, you can focus on growing
              your business while we handle the complexities of payroll
              calculations, deductions, and payments.
            </p>
          </Div>

          {/* Right Column with Image */}
          <Div className="col-lg-6 col-md-12 text-center">
            <Image
              src="/services/workforce/s4.jpg"
              className="img-fluid cs-radius_15 shadow-lg"
              alt="Payroll Management"
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
                  src="/services/workforce/s6.jpg"
                  alt="Key Features"
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
              title="Key Features"
              subtitle="Streamline Payroll Processes with Advanced Solutions"
            >
              <Spacing lg="30" md="20" />
              <ul className="cs-m0">
                <li>Automated payroll calculations</li>
                <li>Real-time payroll processing and tracking</li>
                <li>Compliance with tax regulations and labor laws</li>
                <li>Customizable payroll policies and integrations</li>
                <li>Secure and timely payments</li>
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
                  src="/services/workforce/s5.jpg"
                  alt="Why Choose Us"
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
              subtitle="Simplify Payroll Management for Your Business"
            >
              <Spacing lg="30" md="20" />
              <p className="cs-m0">
                Our payroll management solutions are designed to simplify the
                complexities of payroll processing, ensuring timely payments and
                compliance. We help you reduce administrative burden, improve
                accuracy, and focus more on growing your business.
              </p>
              <Spacing lg="15" md="15" />
              <p className="cs-m0">
                Choose Big Careers Technology solutions for payroll management
                that saves you time and effort, with accurate results every
                time.
              </p>
              <Spacing lg="30" md="30" />
              <Div className="cs-separator cs-accent_bg"></Div>
              <Spacing lg="25" md="0" />
            </SectionHeading>
          </Div>
        </Div>
      </Div>
      {/* End Why Choose Us Section */}

      <Spacing lg="150" md="80" />
      <ContactFooter />
    </>
  );
}
