import Image from "next/image";
import Div from "../../../ui/Div";
import PageHeading from "../../../ui/PageHeading";
import SectionHeading from "../../../ui/SectionHeading";
import Spacing from "../../../ui/Spacing";
import ContactFooter from "/app/ui/contactpg";

export const metadata = {
  title: "CRM Solutions | Big Careers Technology solutions",
  description:
    "Big Careers Technology solutions provides advanced CRM solutions to help businesses manage customer relationships, streamline sales processes, and enhance customer satisfaction with customizable and scalable systems.",
  keywords: [
    "CRM",
    "Customer Relationship Management",
    "Sales Management",
    "CRM Software",
    "Customer Engagement",
    "Sales Automation",
    "Marketing Automation",
    "CRM Integration",
    "Customer Support",
    "Lead Management",
    "Customer Retention",
  ],
  robots: "index, follow",
  openGraph: {
    title: "CRM Solutions | Big Careers Technology solutions",
    description:
      "Big Careers Technology solutions’s CRM solutions help businesses optimize customer interactions, improve sales processes, and enhance customer satisfaction with integrated and customizable systems.",
    url: "https://bigcareers.solutions/crm",
    type: "website",
    image: "/logo.jpg",
  },
  twitter: {
    card: "summary_large_image",
    title: "CRM Solutions | Big Careers Technology solutions",
    description:
      "Transform your customer relationships with Big Careers Technology solutions’s CRM solutions, featuring sales automation, customer support, and marketing integration.",
    image: "/logo.jpg",
  },
};

export default function CRMSystemsPage() {
  return (
    <>
      {/* Start Page Heading Section */}
      <PageHeading
        title="CRM Systems"
        bgSrc="/services/softwareenterprise/s6.jpg"
        pageLinkText="CRM Systems"
      />
      {/* End Page Heading Section */}

      {/* Start About Section */}
      <Spacing lg="150" md="80" />
      <Div className="container">
        <Div className="row align-items-center">
          <h3 className="text-primary mb-4">
            Boost Customer Relationships with Our CRM Solutions
          </h3>

          {/* Left Column with Text */}
          <Div className="col-lg-6 col-md-12 mb-4 mb-lg-0">
            <p className="fs-6 mb-4">
              Big Careers Technology solutions offers CRM solutions designed to
              enhance customer engagement and streamline your sales processes.
              Our CRM systems help businesses nurture customer relationships and
              deliver exceptional personalized experiences, driving customer
              satisfaction and loyalty.
            </p>
            <p className="mb-5">
              Our CRM services include integration, customization, and ongoing
              support, helping you manage customer data, track interactions, and
              optimize marketing efforts.
            </p>
          </Div>

          {/* Right Column with Image */}
          <Div className="col-lg-6 col-md-12 text-center">
            <Image
              src="/services/softwareenterprise/s4.jpg"
              className="img-fluid cs-radius_15 shadow-lg"
              alt="CRM Systems"
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
                  src="/services/softwareenterprise/s5.jpg"
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
              subtitle="Tailored CRM Solutions to Drive Your Business"
            >
              <Spacing lg="30" md="20" />
              <ul className="cs-m0">
                <li>Centralized customer data management</li>
                <li>Automated lead management and nurturing</li>
                <li>Real-time sales and marketing insights</li>
                <li>Customer segmentation and targeting</li>
                <li>Seamless integration with other enterprise systems</li>
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
                  src="/services/softwareenterprise/s6.jpg"
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
              subtitle="Empowering Your Business with CRM Systems"
            >
              <Spacing lg="30" md="20" />
              <p className="cs-m0">
                Our CRM solutions are designed to help you grow and manage
                relationships with customers effectively. We offer customizable
                and scalable CRM systems that align with your business needs,
                driving better customer engagement, improved sales, and
                increased retention.
              </p>
              <Spacing lg="15" md="15" />
              <p className="cs-m0">
                Choose Big Careers Technology solutions for CRM systems that
                transform how you connect with your customers and optimize your
                business processes.
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
