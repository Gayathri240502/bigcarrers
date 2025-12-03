import Image from "next/image";
import Div from "/app/ui/Div";
import PageHeading from "/app/ui/PageHeading";
import SectionHeading from "/app/ui/SectionHeading";
import Spacing from "/app/ui/Spacing";
import ContactFooter from "/app/ui/contactpg";

export const metadata = {
  title: "IoT Security Services | Big Careers Technology solutions",
  description:
    "Big Careers Technology solutions offers IoT security services to protect connected devices and networks from cyber threats, ensuring the integrity and safety of your IoT systems with advanced security protocols and real-time monitoring.",
  keywords: [
    "IoT Security",
    "Internet of Things Security",
    "IoT Protection",
    "Connected Devices Security",
    "IoT Network Security",
    "Cybersecurity for IoT",
    "IoT Threat Prevention",
    "IoT Security Solutions",
    "IoT Data Protection",
    "Secure IoT Devices",
    "Network Security for IoT",
    "IoT Vulnerability Management",
  ],
  robots: "index, follow",
  openGraph: {
    title: "IoT Security Services | Big Careers Technology solutions",
    description:
      "Big Careers Technology solutions’s IoT security services safeguard connected devices, networks, and systems from cyber threats with robust security protocols, vulnerability management, and real-time monitoring.",
    url: "https://bigcareers.solutions/iot-security",
    type: "website",
    image: "/logo.jpg",
  },
  twitter: {
    card: "summary_large_image",
    title: "IoT Security Services | Big Careers Technology solutions",
    description:
      "Ensure the security of your IoT systems with Big Careers Technology solutions’s IoT security services, protecting your connected devices and networks from cyber threats with real-time monitoring and advanced protocols.",
    image: "/logo.jpg",
  },
};

export default function IoTSecurityPage() {
  return (
    <>
      {/* Start Page Heading Section */}
      <PageHeading
        title="IoT Security"
        bgSrc="/services/iot/iotsec.jpeg"
        pageLinkText="IoT Security"
      />
      {/* End Page Heading Section */}

      {/* Start About Section */}
      <Spacing lg="150" md="80" />
      <Div className="container">
        <Div className="row align-items-center">
          <h3 className="text-primary mb-4">
            Ensuring Robust IoT Security to Protect Your Devices and Data
          </h3>

          {/* Left Column with Text */}
          <Div className="col-lg-6 col-md-12 mb-4 mb-lg-0">
            <p className="fs-6 mb-4">
              At Big Careers Technology solutions, we provide comprehensive IoT
              security solutions designed to safeguard your devices, networks,
              and data from potential threats. We ensure that your IoT
              infrastructure is protected from cyber risks, ensuring seamless
              operations and secure data handling.
            </p>
            <p className="mb-5">
              Our IoT security solutions include encryption, secure
              authentication, and threat detection to ensure the integrity and
              confidentiality of your data and connected devices.
            </p>
          </Div>

          {/* Right Column with Image */}
          <Div className="col-lg-6 col-md-12 text-center">
            <Image
              src="/services/iot/i11.jpg"
              className="img-fluid cs-radius_15 shadow-lg"
              alt="IoT Security"
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
                  src="/services/iot/i10.jpg"
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
              subtitle="Comprehensive IoT Security Solutions"
            >
              <Spacing lg="30" md="20" />
              <ul className="cs-m0">
                <li>Advanced encryption for device and data security</li>
                <li>Real-time threat detection and monitoring</li>
                <li>Secure authentication and access controls</li>
                <li>Proactive risk management and vulnerability assessments</li>
                <li>Compliance with IoT security standards and regulations</li>
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
                  src="/services/iot/i9.jpg"
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
              subtitle="Safeguarding Your Devices with Robust IoT Security"
            >
              <Spacing lg="30" md="20" />
              <p className="cs-m0">
                Big Careers Technology solutions offers industry-leading IoT
                security solutions to protect your devices and data. Our robust
                security framework ensures that your connected infrastructure is
                always safe from vulnerabilities and attacks.
              </p>
              <Spacing lg="15" md="15" />
              <p className="cs-m0">
                With our proactive approach to IoT security, we help you
                mitigate risks and maintain a secure and reliable IoT
                environment.
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
