import Button from "/app/ui/Button";
import Div from "/app/ui/Div";
import IconBox from "/app/ui/IconBox";
import PageHeading from "/app/ui/PageHeading";
import SectionHeading from "/app/ui/SectionHeading";
import Spacing from "/app/ui/Spacing";
import Image from "next/image";
import ContactFooter from "/app/ui/contactpg";

export const metadata = {
  title: "IoT Services | Big Careers Technology solutions",
  description:
    "Big Careers Technology solutions provides IoT (Internet of Things) services to help businesses leverage smart devices, sensors, and networks to gather data, improve automation, and enhance efficiency across various industries.",
  keywords: [
    "IoT Services",
    "Internet of Things",
    "IoT Solutions",
    "Smart Devices",
    "IoT Automation",
    "IoT Sensors",
    "IoT Networks",
    "Connected Devices",
    "Industrial IoT",
    "Data Collection",
    "IoT Platforms",
    "IoT Integration",
  ],
  robots: "index, follow",
  openGraph: {
    title: "IoT Services | Big Careers Technology solutions",
    description:
      "Big Careers Technology solutions’s IoT services help businesses connect smart devices and sensors, enabling real-time data collection, automation, and enhanced operational efficiency for smarter decision-making.",
    url: "https://bigcareers.solutions/iot-services",
    type: "website",
    image: "/logo.jpg",
  },
  twitter: {
    card: "summary_large_image",
    title: "IoT Services | Big Careers Technology solutions",
    description:
      "Leverage the power of IoT with Big Careers Technology solutions’s services, connecting smart devices and sensors to collect data, automate processes, and improve efficiency across industries.",
    image: "/logo.jpg",
  },
};

const services = [
  {
    icon: "/images/icons/service_icon_1.svg",
    title: "data-monitoring",
    subtitle:
      "Monitor and analyze data from IoT devices for actionable insights and real-time decision-making.",
  },
  {
    icon: "/images/icons/service_icon_2.svg",
    title: "device-integration",
    subtitle:
      "Seamlessly integrate IoT devices to create a cohesive and efficient network.",
  },
  {
    icon: "/images/icons/service_icon_3.svg",
    title: "iot-security",
    subtitle:
      "Implement robust security measures to protect IoT devices and networks from threats.",
  },
];

const relatedServices = [
  { link: "/service/technology/iot/data-monitoring", text: "data-monitoring" },
  {
    link: "/service/technology/iot/device-integration",
    text: "device-integration",
  },
  { link: "/service/technology/iot/iot-security", text: "iot-security" },
  { link: "/service/technology/iot/sensor-networks", text: "sensor-networks" },
];

export default function ServiceDetailsPage() {
  return (
    <>
      <PageHeading
        title="IoT"
        bgSrc="/services/iot/iot.jpg"
        pageLinkText="Internet of Things (IoT)"
      />
      <Spacing lg="145" md="80" />
      <Div className="container">
        <SectionHeading
          title="IoT"
          subtitle="Harness the power of IoT to connect devices, collect data, and drive smarter decisions."
          variant="cs-style1 text-center"
        />
        <Spacing lg="90" md="45" />
        <Div className="row">
          {services.map((service, index) => (
            <Div className="col-lg-4" key={index}>
              <IconBox
                icon={service.icon}
                title={service.title}
                subtitle={service.subtitle}
              />
              <Spacing lg="30" md="30" />
            </Div>
          ))}
        </Div>
      </Div>
      <Spacing lg="120" md="50" />
      <Div className="container">
        <Div className="row align-items-center">
          <Div className="col-xl-5 col-lg-6">
            <Div className="cs-radius_15 cs-shine_hover_1">
              <Image
                src="/services/iot/iot.jpg"
                alt="Service"
                width={500}
                height={500}
                className="cs-radius_15 w-100"
              />
            </Div>
            <Spacing lg="0" md="40" />
          </Div>
          <Div className="col-lg-6 offset-xl-1">
            <h2 className="cs-font_50 cs-m0">
              Below our most related services
            </h2>
            <Spacing lg="50" md="30" />
            <Div className="row">
              {relatedServices.map((service, index) => (
                <Div className="col-lg-6" key={index}>
                  <Button
                    btnLink={service.link}
                    btnText={service.text}
                    variant="cs-type2"
                  />
                  <Spacing lg="20" md="10" />
                </Div>
              ))}
            </Div>
          </Div>
        </Div>
      </Div>
      <Spacing lg="150" md="80" />
      <ContactFooter />
    </>
  );
}
