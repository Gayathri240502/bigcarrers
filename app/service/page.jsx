import SectionHeading from "../ui/SectionHeading";
import PageHeading from "../ui/PageHeading";
import PricingTableList from "../ui/PricingTable/PricingTableList";
import Card from "../ui/Card";

import Spacing from "../ui/Spacing";
import Div from "../ui/Div";
import ContactFooter from "/app/ui/contactpg";

export const metadata = {
  title: "Services | Big Careers Technology solutions",
  description:
    "Big Careers Technology solutions offers a wide range of services in AI & ML, blockchain, cybersecurity, data engineering, IoT, workforce management, and more, helping businesses drive innovation and achieve their goals through tailored solutions.",
  keywords: [
    "Services",
    "AI & ML",
    "Blockchain",
    "Cybersecurity",
    "Data Engineering",
    "IoT",
    "Workforce Management",
    "Cloud Solutions",
    "Custom Software Development",
    "Consulting Services",
    "Technology Solutions",
    "Business Innovation",
    "Enterprise Solutions",
    "Digital Transformation",
  ],
  robots: "index, follow",
  openGraph: {
    title: "Services | Big Careers Technology solutions",
    description:
      "Discover the wide range of services offered by Big Careers Technology solutions, including AI & ML, blockchain, cybersecurity, data engineering, IoT, and workforce management, designed to help businesses innovate and grow.",
    url: "https://bigcareers.solutions/services",
    type: "website",
    image: "/logo.jpg",
  },
  twitter: {
    card: "summary_large_image",
    title: "Services | Big Careers Technology solutions",
    description:
      "Explore Big Careers Technology solutions’s services, including AI, blockchain, cybersecurity, data engineering, and more, designed to help businesses thrive through innovation and tailored solutions.",
    image: "/logo.jpg",
  },
};

const services = [
  {
    title: "Technology",
    image: "/Home/tech.png",
    link: "/service/technology",
  },
  {
    title: "Application Integration",
    image: "/Home/app.png",
    link: "/service/application-integration",
  },
  {
    title: "Cloud",
    image: "/Home/cloud.png",
    link: "/service/cloud",
  },
  {
    title: "DevOps",
    image: "/Home/cyber.png",
    link: "/service/devops",
  },
  {
    title: "Data Engineering Analytics",
    image: "/Home/data.png",
    link: "/service/data-engineering-analytics",
  },
  {
    title: "Consulting",
    image: "/Home/consulting.png",
    link: "/service/consulting",
  },
  {
    title: "Software Enterprise",
    image: "/Home/es.png",
    link: "/service/software-enterprise",
  },

  {
    title: "Workforce Management",
    image: "/Home/work.png",
    link: "/service/work-force-management",
  },
  {
    title: "Custom Software Development",
    image: "/Home/custom.png",
    link: "/service/custom-software-development",
  },
  {
    title: "Custom Embedded Solutions",
    image: "/Home/tech.png",
    link: "/service/custom-embedded-solutions",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHeading
        title="Services"
        bgSrc="/Home/servicelogo.jpg"
        pageLinkText="Services"
      />
      {/* Start Service Section */}
      <Spacing lg="150" md="80" />
      <Div id="service">
        <Div className="container">
          <Div className="row">
            <Div className="col-xl-4">
              <SectionHeading
                title="Services we can help you with"
                subtitle="What Can We Do"
              />
              <Spacing lg="90" md="45" />
            </Div>
            <Div className="col-xl-8">
              <Div className="row ">
                {services.map((service, index) => (
                  <Div key={index} className="col-lg-3 col-sm-6">
                    {" "}
                    <Card
                      title={service.title}
                      link={service.link}
                      src={service.image}
                      alt="Service"
                    />
                    <Spacing lg="0" md="30" />
                  </Div>
                ))}
              </Div>
            </Div>
          </Div>
        </Div>
      </Div>
      {/* End Service Section */}

      {/* Additional Content */}
      <Spacing lg="150" md="80" />
      <Div className="container">
        <SectionHeading
          title="Providing best solutions for clients"
          subtitle=""
        />

        <PricingTableList />
      </Div>

      {/* <Spacing lg="125" md="55" />
      <TestimonialSlider />
      <Spacing lg="150" md="80" /> */}
      <ContactFooter />
    </>
  );
}
