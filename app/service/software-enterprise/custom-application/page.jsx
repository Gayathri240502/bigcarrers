import Image from "next/image";
import Div from "../../../ui/Div";
import PageHeading from "../../../ui/PageHeading";
import SectionHeading from "../../../ui/SectionHeading";
import Spacing from "../../../ui/Spacing";
import ContactFooter from "/app/ui/contactpg";

export const metadata = {
  title: "Custom Application Development | Big Careers Technology solutions",
  description:
    "Big Careers Technology solutions provides custom application development services tailored to meet your business needs, ensuring scalable, secure, and high-performance applications built to streamline operations.",
  keywords: [
    "Custom Application Development",
    "Bespoke Applications",
    "App Development",
    "Custom Software",
    "Scalable Applications",
    "Secure Applications",
    "Mobile Application Development",
    "Web Application Development",
    "Enterprise Applications",
    "Custom App Solutions",
  ],
  robots: "index, follow",
  openGraph: {
    title: "Custom Application Development | Big Careers Technology solutions",
    description:
      "Big Careers Technology solutions’s custom application development services provide businesses with tailored solutions to enhance functionality, optimize processes, and drive growth with scalable and secure applications.",
    url: "https://bigcareers.solutions/custom-application",
    type: "website",
    image: "/logo.jpg",
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Application Development | Big Careers Technology solutions",
    description:
      "Unlock the potential of custom applications with Big Careers Technology solutions’s development services, delivering secure, scalable, and efficient solutions tailored to your business needs.",
    image: "/logo.jpg",
  },
};

export default function CustomApplicationPage() {
  return (
    <>
      {/* Start Page Heading Section */}
      <PageHeading
        title="Custom Application"
        bgSrc="/services/softwareenterprise/ca.jpg"
        pageLinkText="Custom Application"
      />
      {/* End Page Heading Section */}

      {/* Start About Section */}
      <Spacing lg="150" md="80" />
      <Div className="container">
        <Div className="row align-items-center">
          <h3 className="text-primary mb-4">
            Tailored Custom Applications for Your Business Needs
          </h3>

          {/* Left Column with Text */}
          <Div className="col-lg-6 col-md-12 mb-4 mb-lg-0">
            <p className="fs-6 mb-4">
              At Big Careers Technology solutions, we specialize in building
              custom applications that are designed specifically for your
              business needs. Our solutions are highly scalable, flexible, and
              can be integrated with your existing systems, ensuring seamless
              functionality and optimized performance.
            </p>
            <p className="mb-5">
              Whether you need a web, mobile, or desktop application, we offer
              end-to-end services, from planning and development to testing and
              deployment.
            </p>
          </Div>

          {/* Right Column with Image */}
          <Div className="col-lg-6 col-md-12 text-center">
            <Image
              src="/services/softwareenterprise/s10.jpg"
              className="img-fluid cs-radius_15 shadow-lg"
              alt="Custom Application"
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
                  src="/services/softwareenterprise/s13.jpg"
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
              subtitle="Custom Solutions for Your Unique Business Challenges"
            >
              <Spacing lg="30" md="20" />
              <ul className="cs-m0">
                <li>Tailored solutions for specific business processes</li>
                <li>Seamless integration with existing software</li>
                <li>Scalable and flexible designs</li>
                <li>
                  Robust security measures for safe and secure applications
                </li>
                <li>Continuous maintenance and support</li>
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
                  src="/services/softwareenterprise/s11.jpg"
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
              subtitle="Building Custom Applications for Better Business Solutions"
            >
              <Spacing lg="30" md="20" />
              <p className="cs-m0">
                We understand that every business has unique needs. Our custom
                applications are built to meet these needs, enhancing
                operational efficiency and delivering real value to your
                business. With our deep technical expertise and agile
                development methodologies, we ensure that your custom solution
                is delivered on time and on budget.
              </p>
              <Spacing lg="15" md="15" />
              <p className="cs-m0">
                Choose Big Careers Technology solutions for robust, scalable,
                and future-ready custom applications tailored to your business.
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
