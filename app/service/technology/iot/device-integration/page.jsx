import Image from "next/image";
import Div from "/app/ui/Div";
import PageHeading from "/app/ui/PageHeading";
import SectionHeading from "/app/ui/SectionHeading";
import Spacing from "/app/ui/Spacing";
import ContactFooter from "/app/ui/contactpg";

export const metadata = {
  title: "Device Integration Services | Big Careers Technology solutions",
  description:
    "Big Careers Technology solutions offers device integration services to seamlessly connect and manage devices, enabling enhanced automation, real-time data exchange, and improved efficiency across various industries.",
  keywords: [
    "Device Integration",
    "IoT Device Integration",
    "Connected Devices",
    "Device Management",
    "Automation Solutions",
    "Real-Time Data Exchange",
    "Device Connectivity",
    "IoT Integration",
    "Smart Device Integration",
    "Industrial IoT",
    "Connected Systems",
    "IoT Solutions",
  ],
  robots: "index, follow",
  openGraph: {
    title: "Device Integration Services | Big Careers Technology solutions",
    description:
      "Big Careers Technology solutions’s device integration services enable businesses to seamlessly connect smart devices, ensuring real-time data exchange and improved automation for better operational efficiency.",
    url: "https://bigcareers.solutions/device-integration",
    type: "website",
    image: "/logo.jpg",
  },
  twitter: {
    card: "summary_large_image",
    title: "Device Integration Services | Big Careers Technology solutions",
    description:
      "Enhance automation and operational efficiency with Big Careers Technology solutions’s device integration services, connecting smart devices and enabling real-time data exchange for better decision-making.",
    image: "/logo.jpg",
  },
};

export default function DeviceIntegrationPage() {
  return (
    <>
      {/* Start Page Heading Section */}
      <PageHeading
        title="Device Integration"
        bgSrc="/services/iot/di.jpg.jpeg"
        pageLinkText="Device Integration"
      />
      {/* End Page Heading Section */}

      {/* Start About Section */}
      <Spacing lg="150" md="80" />
      <Div className="container">
        <Div className="row align-items-center">
          <h3 className="text-primary mb-4">
            Seamless Device Integration for a Smarter Business
          </h3>

          {/* Left Column with Text */}
          <Div className="col-lg-6 col-md-12 mb-4 mb-lg-0">
            <p className="fs-6 mb-4">
              At Big Careers solutions, we specialize in seamless
              device integration solutions that connect your devices and systems
              to enhance operational efficiency. Our integration solutions allow
              your devices to communicate, exchange data, and work together,
              driving automation and improving your business processes.
            </p>
            <p className="mb-5">
              Our team ensures that all devices, whether in the field or in your
              infrastructure, work harmoniously to deliver accurate data and
              real-time insights for better decision-making.
            </p>
          </Div>

          {/* Right Column with Image */}
          <Div className="col-lg-6 col-md-12 text-center">
            <Image
              src="/services/iot/i3.jpg"
              className="img-fluid cs-radius_15 shadow-lg"
              alt="Device Integration"
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
                  src="/services/iot/i2.jpg"
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
              subtitle="Integrating Devices for Seamless Business Operations"
            >
              <Spacing lg="30" md="20" />
              <ul className="cs-m0">
                <li>Efficient and seamless device connectivity</li>
                <li>Real-time data synchronization across devices</li>
                <li>Scalable integration with multiple device types</li>
                <li>Improved system efficiency and data accuracy</li>
                <li>Automated data flow for enhanced productivity</li>
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
                  src="/services/iot/i5.jpg"
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
              subtitle="Empowering Businesses with Device Integration"
            >
              <Spacing lg="30" md="20" />
              <p className="cs-m0">
                Big Careers Technology solutions provides seamless device
                integration solutions that help businesses achieve operational
                efficiency and automation. Our expertise in connecting diverse
                devices ensures your systems work in harmony, resulting in
                smoother operations and improved data accuracy.
              </p>
              <Spacing lg="15" md="15" />
              <p className="cs-m0">
                We ensure that your devices are not only integrated but
                optimized for maximum performance, helping your business stay
                competitive and agile.
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
