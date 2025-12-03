import Image from "next/image";
import Div from "../../../ui/Div";
import PageHeading from "../../../ui/PageHeading";
import SectionHeading from "../../../ui/SectionHeading";
import Spacing from "../../../ui/Spacing";
import ContactFooter from "/app/ui/contactpg";

export const metadata = {
  title: "ERP Solutions | Big Careers Technology solutions",
  description:
    "Big Careers Technology solutions provides comprehensive ERP solutions to help businesses streamline their operations, integrate processes, and improve efficiency across all departments with scalable and customizable systems.",
  keywords: [
    "ERP",
    "Enterprise Resource Planning",
    "ERP Solutions",
    "ERP Software",
    "Business Process Integration",
    "Supply Chain Management",
    "Financial Management",
    "Manufacturing ERP",
    "ERP Customization",
    "Cloud ERP",
    "ERP Implementation",
  ],
  robots: "index, follow",
  openGraph: {
    title: "ERP Solutions | Big Careers Technology solutions",
    description:
      "Big Careers Technology solutions’s ERP solutions provide businesses with a unified system to manage operations, reduce costs, and enhance productivity through seamless integration and automation.",
    url: "https://bigcareers.solutions/erp",
    type: "website",
    image: "/logo.jpg",
  },
  twitter: {
    card: "summary_large_image",
    title: "ERP Solutions | Big Careers Technology solutions",
    description:
      "Transform your business operations with Big Careers Technology solutions’s ERP solutions, offering process integration, automation, and real-time insights to drive growth and efficiency.",
    image: "/logo.jpg",
  },
};

export default function ERPSolutionsPage() {
  return (
    <>
      {/* Start Page Heading Section */}
      <PageHeading
        title="ERP Solutions"
        bgSrc="/services/softwareenterprise/erpsol.jpeg"
        pageLinkText="ERP Solutions"
      />
      {/* End Page Heading Section */}

      {/* Start About Section */}
      <Spacing lg="150" md="80" />
      <Div className="container">
        <Div className="row align-items-center">
          <h3 className="text-primary mb-4">
            Integrated ERP Solutions for Business Efficiency
          </h3>

          {/* Left Column with Text */}
          <Div className="col-lg-6 col-md-12 mb-4 mb-lg-0">
            <p className="fs-6 mb-4">
              Big Careers Technology solutions provides end-to-end ERP solutions
              that streamline your business processes and enable seamless
              integration across departments. Our ERP systems empower businesses
              with data-driven insights, better decision-making, and improved
              operational efficiency.
            </p>
            <p className="mb-5">
              With our expertise, we help your business implement, customize,
              and maintain ERP systems tailored to your specific needs.
            </p>
          </Div>

          {/* Right Column with Image */}
          <Div className="col-lg-6 col-md-12 text-center">
            <Image
              src="/services/softwareenterprise/s7.jpg"
              className="img-fluid cs-radius_15 shadow-lg"
              alt="ERP Solutions"
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
                  src="/services/softwareenterprise/s8.jpg"
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
              subtitle="Unlock Your Business Potential with ERP Solutions"
            >
              <Spacing lg="30" md="20" />
              <ul className="cs-m0">
                <li>End-to-end business process integration</li>
                <li>Real-time data analytics and reporting</li>
                <li>Customizable modules tailored to your needs</li>
                <li>Seamless integration with other business systems</li>
                <li>Improved collaboration and communication across teams</li>
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
                  src="/services/softwareenterprise/s9.jpg"
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
              subtitle="Empowering Your Business with ERP Solutions"
            >
              <Spacing lg="30" md="20" />
              <p className="cs-m0">
                Big Careers Technology solutions helps businesses optimize their
                operations and drive growth with robust ERP solutions. Our team
                ensures smooth implementation and customization based on your
                unique business requirements.
              </p>
              <Spacing lg="15" md="15" />
              <p className="cs-m0">
                Choose Big Careers Technology solutions for ERP solutions that
                streamline your processes, improve visibility, and drive better
                decision-making for long-term success.
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
