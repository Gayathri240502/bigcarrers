import Button from "../../ui/Button";
import Div from "../../ui/Div";
import IconBox from "../../ui/IconBox";
import PageHeading from "../../ui/PageHeading";
import SectionHeading from "../../ui/SectionHeading";
import Spacing from "../../ui/Spacing";
import Image from "next/image";
import ContactFooter from "/app/ui/contactpg";

export const metadata = {
  title: "Software Enterprise Solutions | Big Careers Technology solutions",
  description:
    "Big Careers Technology solutions provides comprehensive software enterprise solutions, including custom applications, ERP integration, cloud systems, and CRM to optimize business operations and enhance productivity.",
  keywords: [
    "Software Enterprise",
    "Custom Software Development",
    "Enterprise Solutions",
    "ERP Integration",
    "CRM Systems",
    "Cloud Systems",
    "Business Optimization",
    "Custom Applications",
    "Software Solutions",
    "Enterprise Resource Planning",
    "Cloud Software",
  ],
  robots: "index, follow",
  openGraph: {
    title: "Software Enterprise Solutions | Big Careers Technology solutions",
    description:
      "Big Careers Technology solutions’s software enterprise solutions help businesses streamline operations with custom software, ERP, CRM, and cloud integration to enhance efficiency.",
    url: "https://bigcareers.solutions/service/software-enterprise",
    type: "website",
    image: "/logo.jpg",
  },
  twitter: {
    card: "summary_large_image",
    title: "Software Enterprise Solutions | Big Careers Technology solutions",
    description:
      "Optimize your business processes with Big Careers Technology solutions’s enterprise software solutions, including ERP, CRM, and custom software applications.",
    image: "/logo.jpg",
  },
};

const services = [
  {
    icon: "/images/icons/service_icon_1.svg",
    title: "cloud-integration",
    subtitle:
      "Integrate cloud solutions seamlessly to enhance collaboration and scalability.",
  },
  {
    icon: "/images/icons/service_icon_2.svg",
    title: "crm-systems",
    subtitle:
      "Streamline customer relationship management with tailored CRM systems.",
  },

  {
    icon: "/images/icons/service_icon_4.svg",
    title: "erp-solutions",
    subtitle:
      "Implement robust ERP solutions to optimize and automate operations.",
  },
];

const relatedServices = [
  {
    link: "/service/software-enterprise/cloud-integration",
    text: "cloud-integration",
  },
  { link: "/service/software-enterprise/crm-systems", text: "crm-systems" },
  {
    link: "/service/software-enterprise/custom-application",
    text: "custom-application",
  },
  { link: "/service/software-enterprise/erp-solutions", text: "erp-solutions" },
];

export default function ServiceDetailsPage() {
  return (
    <>
      <PageHeading
        title="Software Enterprise"
        bgSrc="/services/softwareenterprise/enterprisesoftware.jpg"
        pageLinkText="Software Enterprise Solutions"
      />
      <Spacing lg="145" md="80" />
      <Div className="container">
        <SectionHeading
          title="Software Enterprise"
          subtitle="Empower your business with cutting-edge software enterprise solutions tailored to your needs."
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
                src="/services/softwareenterprise/s1.jpg"
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
      <ContactFooter />
      <Spacing lg="150" md="80" />
    </>
  );
}
