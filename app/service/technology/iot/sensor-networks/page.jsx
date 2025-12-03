import Image from "next/image";
import Div from "/app/ui/Div";
import PageHeading from "/app/ui/PageHeading";
import SectionHeading from "/app/ui/SectionHeading";
import Spacing from "/app/ui/Spacing";
import ContactFooter from "/app/ui/contactpg";

export const metadata = {
  title: "Sensor Networks Services | Big Careers Technology solutions",
  description:
    "Big Careers Technology solutions provides sensor network services to enable seamless data collection, monitoring, and analysis across various industries, ensuring real-time insights and enhanced decision-making capabilities.",
  keywords: [
    "Sensor Networks",
    "IoT Sensor Networks",
    "Wireless Sensor Networks",
    "Real-Time Data Collection",
    "Sensor Integration",
    "Environmental Monitoring",
    "Data Analysis",
    "Smart Sensor Networks",
    "IoT Solutions",
    "Sensor Network Design",
    "Industrial Sensor Networks",
    "Remote Monitoring Systems",
  ],
  robots: "index, follow",
  openGraph: {
    title: "Sensor Networks Services | Big Careers Technology solutions",
    description:
      "Big Careers Technology solutions’s sensor network services offer advanced solutions for real-time data collection, monitoring, and analysis, empowering businesses to make data-driven decisions with smart sensor integration.",
    url: "https://bigcareers.solutions/sensor-networks",
    type: "website",
    image: "/logo.jpg",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sensor Networks Services | Big Careers Technology solutions",
    description:
      "Transform your business operations with Big Careers Technology solutions’s sensor network services, enabling real-time data collection and enhanced decision-making with advanced sensor technologies.",
    image: "/logo.jpg",
  },
};

export default function SensorNetworksPage() {
  return (
    <>
      {/* Start Page Heading Section */}
      <PageHeading
        title="Sensor Networks"
        bgSrc="/services/iot/sn.jpg.jpeg"
        pageLinkText="Sensor Networks"
      />
      {/* End Page Heading Section */}

      {/* Start About Section */}
      <Spacing lg="150" md="80" />
      <Div className="container">
        <Div className="row align-items-center">
          <h3 className="text-primary mb-4">
            Enhance Your Operations with Smart Sensor Networks
          </h3>

          {/* Left Column with Text */}
          <Div className="col-lg-6 col-md-12 mb-4 mb-lg-0">
            <p className="fs-6 mb-4">
              Big Careers Technology solutions offers cutting-edge sensor
              network solutions that enable real-time data collection and
              analysis. Our sensor networks are designed to optimize your
              business operations, improve asset management, and increase
              operational efficiency.
            </p>
            <p className="mb-5">
              With our sensor network solutions, you can gain valuable insights
              into environmental conditions, equipment performance, and
              operational status, helping you make data-driven decisions.
            </p>
          </Div>

          {/* Right Column with Image */}
          <Div className="col-lg-6 col-md-12 text-center">
            <Image
              src="/services/iot/i6.jpg"
              className="img-fluid cs-radius_15 shadow-lg"
              alt="Sensor Networks"
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
                  src="/services/iot/i4.jpg"
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
              subtitle="Advanced Sensor Networks for Real-time Data Collection"
            >
              <Spacing lg="30" md="20" />
              <ul className="cs-m0">
                <li>Real-time monitoring with instant alerts</li>
                <li>Integration with other IoT systems</li>
                <li>High accuracy and reliability in data collection</li>
                <li>Scalable network for various applications</li>
                <li>Energy-efficient sensors for long-term use</li>
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
              subtitle="Optimizing Operations with Advanced Sensor Networks"
            >
              <Spacing lg="30" md="20" />
              <p className="cs-m0">
                Our sensor network solutions empower businesses to optimize
                their operations and improve performance by providing reliable,
                real-time data. With advanced sensors and intelligent network
                systems, we offer a comprehensive solution for a wide range of
                use cases.
              </p>
              <Spacing lg="15" md="15" />
              <p className="cs-m0">
                Choose Big Careers Technology solutions for scalable,
                energy-efficient, and reliable sensor networks that enhance your
                data-driven decision-making.
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
