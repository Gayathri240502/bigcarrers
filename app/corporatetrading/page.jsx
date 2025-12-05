import Div from "/app/ui/Div";
import PageHeading from "/app/ui/PageHeading";
import SectionHeading from "/app/ui/SectionHeading";
import Spacing from "/app/ui/Spacing";
import ContactFooter from "/app/ui/contactpg";
import Image from "next/image";


export const metadata = {
  title: "Corporate Trading & Support Services | Big Careers Solutions",
  description:
    "Discover Big Careers Solutions' corporate trading, supply support, procurement assistance, and end-to-end business trading solutions designed for organizations of all sizes.",
  keywords: [
    "Corporate Trading",
    "Business Trading Solutions",
    "Procurement Support",
    "Supply Chain Assistance",
    "Corporate Support Services",
    "Trading Services",
    "Business Operations Support",
    "Logistics Coordination",
  ],
  robots: "index, follow",
  openGraph: {
    title: "Corporate Trading & Support Services | Big Careers Solutions",
    description:
      "Big Careers Solutions provides professional corporate trading and support services including procurement, supply chain assistance, and commercial operations support.",
    url: "https://bigcareers.solutions/services/corporate/trading",
    type: "website",
    image: "/logo.jpg",
  },
  twitter: {
    card: "summary_large_image",
    title: "Corporate Trading & Support Services | Big Careers Solutions",
    description:
      "Big Careers Solutions delivers end-to-end corporate trading and commercial support services tailored for modern business operations.",
    image: "/logo.jpg",
  },
};

export default function CorporateTradingPage() {
  return (
    <>
      {/* Start Page Heading Section */}
      <PageHeading
        title="Corporate Trading & Support Services"
        bgSrc="/services/corporate/trading-bg.jpg"
        pageLinkText="Corporate Trading"
      />
      {/* End Page Heading Section */}

      {/* Start About Section */}
      <Spacing lg="150" md="80" />
      <Div className="container">
        <Div className="row align-items-center">
          <h3 className="text-primary mb-4">
            Enabling Businesses with Reliable Corporate Trading Solutions
          </h3>

          {/* Left Column with Text */}
          <Div className="col-lg-6 col-md-12 mb-4 mb-lg-0">
            <p className="fs-6 mb-4">
              At Big Careers Solutions, we specialize in providing efficient and
              transparent corporate trading solutions. We support your business
              with procurement assistance, vendor coordination, and supply chain
              facilitation—ensuring smooth and uninterrupted operations.
            </p>
            <p className="mb-5">
              Whether you are sourcing materials, managing vendors, or handling
              commercial trading tasks, our team ensures accuracy, compliance,
              and reliability in every transaction.
            </p>
          </Div>

          {/* Right Column with Image */}
          <Div className="col-lg-6 col-md-12 text-center">
            <Image
              src="/services/corporate/trading1.jpg"
              className="img-fluid cs-radius_15 shadow-lg"
              alt="Corporate Trading"
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
              title="Key Services"
              subtitle="Supporting Your End-to-End Corporate Trading Needs"
            >
              <Spacing lg="30" md="20" />
              <ul className="cs-m0">
                <li>Vendor sourcing & procurement support</li>
                <li>Business trading & commercial coordination</li>
                <li>Supply chain tracking and facilitation</li>
                <li>Product sourcing and distribution support</li>
                <li>Documentation, verification & compliance assistance</li>
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
              subtitle="Reliable Corporate Trading Support You Can Trust"
            >
              <Spacing lg="30" md="20" />
              <p className="cs-m0">
                Big Careers Solutions ensures seamless and reliable trading
                support for businesses across different industries. Our team
                manages procurement, vendor relations, and supply operations
                with professionalism and attention to detail.
              </p>
              <Spacing lg="15" md="15" />
              <p className="cs-m0">
                We deliver accurate, timely, and transparent trading services
                that help organizations focus on their core operations while we
                handle the rest.
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
