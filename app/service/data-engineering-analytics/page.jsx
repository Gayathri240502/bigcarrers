import Button from "../../ui/Button";
import Div from "../../ui/Div";
import IconBox from "../../ui/IconBox";
import PageHeading from "../../ui/PageHeading";
import SectionHeading from "../../ui/SectionHeading";
import Spacing from "../../ui/Spacing";
import Image from "next/image";
import ContactFooter from "/app/ui/contactpg";

export const metadata = {
  title: "Data Engineering & Analytics | Big Careers Technology solutions",
  description:
    "Explore Big Careers Technology solutions's data engineering and analytics solutions, powered by AI and Cloud, to streamline data processing, enhance insights, and enable data-driven decision-making across your organization.",
  keywords: [
    "Data Engineering",
    "Data Analytics",
    "AI Data Engineering",
    "Data Processing",
    "Data Integration",
    "Big Data Analytics",
    "Cloud Data Engineering",
    "Data-Driven Insights",
    "Business Analytics",
    "Advanced Data Analytics",
    "Data Transformation",
  ],
  robots: "index, follow",
  openGraph: {
    title: "Data Engineering & Analytics | Big Careers Technology solutions",
    description:
      "Big Careers Technology solutions offers innovative data engineering and analytics solutions using AI and Cloud technologies to help businesses optimize data processing and derive valuable insights.",
    url: "https://bigcareers.solutions/data-engineering-analytics",
    type: "website",
    image: "/logo.jpg",
  },
  twitter: {
    card: "summary_large_image",
    title: "Data Engineering & Analytics | Big Careers Technology solutions",
    description:
      "Big Careers Technology solutions provides data engineering and analytics solutions to optimize data processing, improve insights, and enable better decision-making using AI and Cloud technologies.",
    image: "/logo.jpg",
  },
};

const services = [
  {
    icon: "/images/icons/service_icon_1.svg",
    title: "accelerated-generative-ai",
    subtitle:
      "Implement cutting-edge generative AI solutions to accelerate innovation and improve processes.",
  },
  {
    icon: "/images/icons/service_icon_2.svg",
    title: "automation",
    subtitle:
      "Streamline operations with advanced automation techniques tailored to your business needs.",
  },
  {
    icon: "/images/icons/service_icon_3.svg",
    title: "data-engineering",
    subtitle:
      "Design and implement robust data pipelines to transform raw data into actionable insights.",
  },
  {
    icon: "/images/icons/service_icon_4.svg",
    title: "responsible-ai-for-gen-ai",
    subtitle:
      "Leverage responsible AI practices to ensure ethical and effective use of generative AI.",
  },
  {
    icon: "/images/icons/service_icon_5.svg",
    title: "visualization-and-analytics",
    subtitle:
      "Create dynamic visualizations and analytics tools to drive data-driven decision-making.",
  },
];

const relatedServices = [
  {
    link: "/service/data-engineering-analytics/accelerated-generative-ai",
    text: "accelerated-generative-ai",
  },

  {
    link: "/service/data-engineering-analytics/data-engineering",
    text: "data-engineering",
  },
  {
    link: "/service/data-engineering-analytics/responsible-ai-for-gen-ai",
    text: "responsible-ai-for-gen-ai",
  },
  {
    link: "/service/data-engineering-analytics/visualization-and-analytics",
    text: "visualization-and-analytics",
  },
];

export default function ServiceDetailsPage() {
  return (
    <>
      <PageHeading
        title="Data Engineering & Analytics"
        bgSrc="/services/dataengineer/dataengineering.jpg"
        pageLinkText="Data Engineering and Analytics"
      />
      <Spacing lg="145" md="80" />
      <Div className="container">
        <SectionHeading
          title="Data Engineering & Analytics"
          subtitle="Transform your data strategy with innovative engineering and analytics solutions to unlock new opportunities."
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
                src="/services/dataengineer/d4.jpg"
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
