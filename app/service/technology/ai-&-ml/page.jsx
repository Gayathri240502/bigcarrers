import Button from "/app/ui/Button";
import Div from "/app/ui/Div";
import IconBox from "/app/ui/IconBox";
import PageHeading from "/app/ui/PageHeading";
import SectionHeading from "/app/ui/SectionHeading";
import Spacing from "/app/ui/Spacing";
import Image from "next/image";
import ContactFooter from "/app/ui/contactpg";

export const metadata = {
  title: "AI & ML Solutions | Big Careers Technology solutions",
  description:
    "Big Careers Technology solutions provides cutting-edge AI and ML solutions to help businesses harness the power of data, enhance automation, and drive intelligent decision-making for greater efficiency and growth.",
  keywords: [
    "AI",
    "Artificial Intelligence",
    "Machine Learning",
    "AI Solutions",
    "ML Solutions",
    "Data Science",
    "Predictive Analytics",
    "Deep Learning",
    "AI Automation",
    "Data-Driven Insights",
    "AI for Business",
  ],
  robots: "index, follow",
  openGraph: {
    title: "AI & ML Solutions | Big Careers Technology solutions",
    description:
      "Big Careers Technology solutions’s AI and ML solutions enable businesses to automate processes, enhance decision-making, and leverage data for predictive insights and intelligent growth.",
    url: "https://bigcareers.solutions/ai-ml",
    type: "website",
    image: "/logo.jpg",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI & ML Solutions | Big Careers Technology solutions",
    description:
      "Unlock the potential of AI and Machine Learning with Big Careers Technology solutions’s advanced solutions, designed to automate tasks, predict trends, and drive smarter business decisions.",
    image: "/logo.jpg",
  },
};

const services = [
  {
    icon: "/images/icons/service_icon_1.svg",
    title: "predictive-analytics",
    subtitle:
      "Use historical data to forecast trends, customer behavior, and sales performance.",
  },
  {
    icon: "/images/icons/service_icon_2.svg",
    title: "natural-language-processing",
    subtitle:
      "Power chatbots, virtual assistants, and sentiment analysis tools for improved communication.",
  },
  {
    icon: "/images/icons/service_icon_3.svg",
    title: "custom-ml-models",
    subtitle:
      "Develop bespoke machine learning solutions for fraud detection, personalized recommendations, and more.",
  },
];

const relatedServices = [
  {
    link: "/service/technology/ai-&-ml/automation",
    text: "AI-Driven Automation",
  },
  {
    link: "/service/technology/ai-&-ml/rpa",
    text: "Robotic Process Automation ",
  },

  { link: "/service/technology/ai-&-ml/advance-ml", text: "advance-ml" },
  {
    link: "/service/technology/ai-&-ml/enterprise-ai-engineering",
    text: "enterprise-ai-engineering",
  },
  {
    link: "/service/technology/ai-&-ml/multi-model-generative-ai",
    text: "multi-model-generative-ai",
  },
  {
    link: "/service/technology/ai-&-ml/responsible-ai",
    text: "responsible-ai",
  },
];

export default function ServiceDetailsPage() {
  return (
    <>
      <PageHeading
        title="AI & ML"
        bgSrc="/services/ai-ml/aimll.jpg"
        pageLinkText="Artificial Intelligence and Machine Learning"
      />
      <Spacing lg="145" md="80" />
      <Div className="container">
        <SectionHeading
          title="AI & ML"
          subtitle="Leverage the power of AI and ML to transform your business processes and make data-driven decisions. Our solutions are designed to automate workflows and provide valuable insights."
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
                src="/services/ai-ml/aiml1.jpg"
                alt="Service"
                width={600}
                height={600}
                className="cs-radius_15 "
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
