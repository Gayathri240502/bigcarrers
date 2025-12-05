import Div from "/app/ui/Div";
import PageHeading from "/app/ui/PageHeading";
import SectionHeading from "/app/ui/SectionHeading";
import Spacing from "/app/ui/Spacing";
import ContactFooter from "/app/ui/contactpg";
import Image from "next/image";

export const metadata = {
  title: "Business Support Services | Big Careers Solutions",
  description:
    "Big Careers Solutions delivers end-to-end support services including customer support, technical support, operational support, IT helpdesk, and service management for businesses of all sizes.",
  keywords: [
    "Support Services",
    "Customer Support",
    "Technical Support",
    "IT Support",
    "Business Support",
    "Helpdesk Services",
    "Operational Support",
    "Service Management",
  ],
  robots: "index, follow",
  openGraph: {
    title: "Business Support Services | Big Careers Solutions",
    description:
      "We provide professional customer support, technical support, IT helpdesk, and operations support tailored to business needs.",
    url: "https://bigcareers.solutions/services/support",
    type: "website",
    image: "/logo.jpg",
  },
  twitter: {
    card: "summary_large_image",
    title: " Support Services | Big Careers Solutions",
    description:
      "Reliable business support, IT support, customer service, and helpdesk assistance for smooth operations.",
    image: "/logo.jpg",
  },
};

export default function CorporateTradingPage() {
  return (
    <>
      {/* Start Page Heading Section */}
      <PageHeading
        title="Professional Business Support Services"
        bgSrc="/images/jjkkk.jpeg"
        pageLinkText="Support Services"
      />
      {/* End Page Heading Section */}

      {/* Start About Section */}
      <Spacing lg="150" md="80" />
      <Div className="container">
        <Div className="row align-items-center">
          <h3 className="text-primary mb-4">
            Reliable Support Services Designed for Modern Businesses
          </h3>

          {/* Left Column with Text */}
          <Div className="col-lg-6 col-md-12 mb-4 mb-lg-0">
            <p className="fs-6 mb-4">
              Big Careers Solutions delivers comprehensive support services that
              help organizations maintain smooth and uninterrupted operations.
              Our team ensures your business receives dependable customer
              service, technical assistance, and operational support at every
              level.
            </p>
            <p className="mb-5">
              From resolving service requests to managing IT support, we enable
              your workforce to operate efficiently while improving customer
              satisfaction and operational reliability.
            </p>
          </Div>

          {/* Right Column with Image */}
          <Div className="col-lg-6 col-md-12 text-center">
            <Image
              src="/images/wq.jpeg"
              className="img-fluid cs-radius_15 shadow-lg"
              alt="Support Services"
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
                  src="/services/image.png"
                  alt="Support Services"
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
              title="Our Support Services"
              subtitle="Reliable End-to-End Support for Your Business"
            >
              <Spacing lg="30" md="20" />
              <ul className="cs-m0">
                <li>Customer support & service assistance</li>
                <li>Technical support & troubleshooting</li>
                <li>IT helpdesk & remote support</li>
                <li>Operational support & workflow assistance</li>
                <li>Service request handling & escalation management</li>
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
              {/* <Div className="cs-image_layer_in">
                <Image
                  src="/services/corporate/trading3.jpg"
                  alt="Why Choose Our Support Services"
                  className="w-100 cs-radius_15"
                  width={500}
                  height={500}
                />
              </Div> */}
            </Div>
            <Spacing lg="0" md="40" />
          </Div>

          <Div className="col-xl-5 offset-xl-1 col-lg-6">
            {/* <SectionHeading
              title="Why Choose Us"
              subtitle="Professional Support Services You Can Trust"
            >
              <Spacing lg="30" md="20" />
              <p className="cs-m0">
                Our support specialists are trained to handle customer queries,
                technical incidents, and service requests with precision and
                professionalism. We ensure quick response times, proactive
                follow-up, and smooth resolution of issues.
              </p>

              <Spacing lg="15" md="15" />

              <p className="cs-m0">
                With reliable support operations, we help businesses reduce
                downtime, improve user satisfaction, and maintain operational
                continuity across all departments.
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
