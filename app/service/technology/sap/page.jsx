import Button from "/app/ui/Button";
import Div from "/app/ui/Div";
import IconBox from "/app/ui/IconBox";
import PageHeading from "/app/ui/PageHeading";
import SectionHeading from "/app/ui/SectionHeading";
import Spacing from "/app/ui/Spacing";
import Image from "next/image";
import ContactFooter from "/app/ui/contactpg";

export const metadata = {
  title: "SAP Services | Big Careers Technology solutions",
  description:
    "Big Careers Technology solutions offers SAP services to help businesses integrate, manage, and optimize their enterprise resource planning (ERP) systems, driving operational efficiency and improving business performance with advanced SAP solutions.",
  keywords: [
    "SAP Services",
    "SAP ERP",
    "SAP Integration",
    "Enterprise Resource Planning",
    "SAP Solutions",
    "SAP Customization",
    "SAP Cloud Solutions",
    "SAP Implementation",
    "SAP Development",
    "Business Process Optimization",
    "SAP Consulting",
    "ERP Solutions",
  ],
  robots: "index, follow",
  openGraph: {
    title: "SAP Services | Big Careers Technology solutions",
    description:
      "Leverage Big Careers Technology solutions’s SAP services to optimize your enterprise operations, streamline workflows, and boost business performance with customized SAP solutions and seamless integration.",
    url: "https://bigcareers.solutions/sap-services",
    type: "website",
    image: "/logo.jpg",
  },
  twitter: {
    card: "summary_large_image",
    title: "SAP Services | Big Careers Technology solutions",
    description:
      "Transform your business operations with Big Careers Technology solutions’s SAP services, offering tailored ERP solutions, seamless integrations, and consulting to improve overall efficiency.",
    image: "/logo.jpg",
  },
};

const services = [
  {
    icon: "/images/icons/service_icon_1.svg",
    title: "SAP Implementation",
    subtitle:
      "Streamline operations with tailored SAP implementation for your enterprise. Transform your workflows with SAP’s advanced tools and technologies.",
  },
  {
    icon: "/images/icons/service_icon_2.svg",
    title: "SAP S/4HANA Migration",
    subtitle:
      "Seamless transition to SAP S/4HANA for improved efficiency and scalability. Achieve the agility needed to stay ahead in the competitive market.",
  },
  {
    icon: "/images/icons/service_icon_3.svg",
    title: "SAP Cloud Integration",
    subtitle:
      "Leverage SAP Cloud for enhanced connectivity and operational flexibility. Our cloud integration solutions bring more agility and cost savings.",
  },
];

export default function SAPDetailsPage() {
  return (
    <>
      {/* Page Heading */}
      <PageHeading
        title="SAP Solutions"
        bgSrc="/services/sap/s5.jpg"
        pageLinkText="SAP Solutions"
      />
      <Spacing lg="145" md="80" />

      {/* About Section */}
      <Div className="container">
        <SectionHeading
          title="SAP Solutions"
          subtitle="Empower your business with robust SAP solutions designed to optimize operations and enhance decision-making. Our expertise in SAP technologies helps you achieve digital transformation effortlessly."
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

      {/* Image Section */}
      <Spacing lg="120" md="50" />
      <Div className="container">
        <Div className="row align-items-center">
          <Div className="col-xl-5 col-lg-6">
            <Div className="cs-radius_15 cs-shine_hover_1">
              <Image
                src="/services/sap/s5.jpg"
                alt="SAP Service"
                width={600}
                height={600}
                className="cs-radius_15 "
              />
            </Div>
            <Spacing lg="0" md="40" />
          </Div>
          <Div className="col-lg-6 offset-xl-1">
            <h2 className="cs-font_50 cs-m0">
              Empowering Businesses with SAP Solutions
            </h2>
            <Spacing lg="50" md="30" />
            <p>
              At <strong>Big Careers Technology solutions</strong>, we provide
              end-to-end SAP solutions that drive operational efficiency,
              enhance business agility, and ensure seamless digital
              transformation. From SAP S/4HANA migration to cloud integration,
              our expertise empowers businesses across industries to optimize
              processes and achieve superior performance.
            </p>
          </Div>
        </Div>
      </Div>

      <Spacing lg="120" md="50" />

      {/* Key Benefits Section */}
      <Div className="container">
        <SectionHeading
          title="Key Benefits of Our SAP Solutions"
          subtitle="Why Choose Big Careers Technology solutions for SAP Solutions?"
        >
          <Spacing lg="30" md="20" />
          <Div className="row">
            {/* Left Column with Text */}
            <Div className="col-lg-6 col-md-12">
              <ul className="cs-m0">
                <li>Optimized workflows with SAP’s powerful ERP tools.</li>
                <li>Agility and scalability with SAP Cloud Integration.</li>
                <li>Seamless migration to SAP S/4HANA, minimizing downtime.</li>
                <li>Enhanced decision-making through data-driven insights.</li>
                <li>Improved collaboration across departments and teams.</li>
                <li>
                  24/7 support and maintenance from certified SAP professionals.
                </li>
              </ul>
            </Div>
            {/* Right Column with Image */}
            <Div className="col-lg-6 col-md-12 text-center">
              <Image
                src="/services/sap/s2.jpg"
                alt="Key Benefits"
                className="img-fluid cs-radius_15 shadow-lg"
                width={500}
                height={500}
              />
            </Div>
          </Div>
        </SectionHeading>
      </Div>

      <Spacing lg="120" md="50" />

      {/* Why Choose Us Section */}
      <Div className="container">
        <Div className="row">
          <Div className="col-xl-5 col-lg-6">
            <SectionHeading
              title="Why Choose Us"
              subtitle="Expert Solutions for Your Business"
            >
              <Spacing lg="30" md="20" />
              <p className="cs-m0">
                At <strong>Big Careers Technology solutions</strong>, we excel
                in delivering tailored SAP solutions that drive business growth,
                enhance efficiency, and improve decision-making. Our certified
                SAP consultants work closely with you to understand your unique
                requirements and provide a solution that fits your business
                goals.
              </p>
              <Spacing lg="15" md="15" />
              <p className="cs-m0">
                With industry-leading SAP technologies, strong partnerships, and
                a track record of successful implementations, we ensure your
                business is prepared for the future.
              </p>
            </SectionHeading>
          </Div>
          {/* Right Column with Image */}
          <Div className="col-xl-5 offset-xl-1 col-lg-6">
            <Div className="cs-image_layer cs-style1">
              <Div className="cs-image_layer_in">
                <Image
                  src="/services/sap/s1.jpg"
                  alt="Why Choose Us"
                  className="w-100 cs-radius_15"
                  width={500}
                  height={500}
                />
              </Div>
            </Div>
            <Spacing lg="0" md="40" />
          </Div>
        </Div>
      </Div>

      <Spacing lg="150" md="80" />
      <ContactFooter />
    </>
  );
}
