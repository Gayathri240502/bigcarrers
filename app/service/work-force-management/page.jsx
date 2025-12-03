import Button from "../../ui/Button";
import Div from "../../ui/Div";
import IconBox from "../../ui/IconBox";
import PageHeading from "../../ui/PageHeading";
import SectionHeading from "../../ui/SectionHeading";
import Spacing from "../../ui/Spacing";
import Image from "next/image";
import ContactFooter from "/app/ui/contactpg";

export const metadata = {
  title: "Workforce Management Services | Big Careers Technology solutions",
  description:
    "Big Careers Technology solutions offers workforce management services to optimize employee scheduling, payroll, performance analytics, and recruitment, helping businesses improve operational efficiency and productivity.",
  keywords: [
    "Workforce Management",
    "Employee Scheduling",
    "Payroll Management",
    "Shift Planning",
    "Performance Analytics",
    "Staffing and Recruitment",
    "Employee Productivity",
    "Workforce Optimization",
    "Labor Management",
    "HR Solutions",
    "Workforce Analytics",
    "Employee Management Solutions",
  ],
  robots: "index, follow",
  openGraph: {
    title: "Workforce Management Services | Big Careers Technology solutions",
    description:
      "Big Careers Technology solutions’s workforce management services help businesses streamline scheduling, payroll, recruitment, and performance tracking to improve productivity and operational efficiency.",
    url: "https://bigcareers.solutions/workforce-management",
    type: "website",
    image: "/logo.jpg",
  },
  twitter: {
    card: "summary_large_image",
    title: "Workforce Management Services | Big Careers Technology solutions",
    description:
      "Enhance your business operations with Big Careers Technology solutions’s workforce management services, optimizing scheduling, payroll, performance tracking, and recruitment for better productivity and efficiency.",
    image: "/logo.jpg",
  },
};

const services = [
  {
    icon: "/images/icons/service_icon_1.svg",
    title: "employee-scheduling",
    subtitle:
      "Efficiently manage employee schedules and shift planning to optimize workforce utilization.",
  },
  {
    icon: "/images/icons/service_icon_2.svg",
    title: "payroll-management",
    subtitle:
      "Automate payroll processes to ensure timely and accurate compensation for employees.",
  },
  {
    icon: "/images/icons/service_icon_3.svg",
    title: "people-on-demand",
    subtitle:
      "Access a flexible workforce on demand to meet changing business needs.",
  },
  {
    icon: "/images/icons/service_icon_2.svg",
    title: "performance-analytics",
    subtitle:
      "Leverage data-driven insights to measure and enhance employee performance.",
  },
  {
    icon: "/images/icons/service_icon_1.svg",
    title: "staffing-recruitment",
    subtitle:
      "Streamline staffing and recruitment processes to find the right talent efficiently.",
  },
];

const relatedServices = [
  {
    link: "/service/work-force-management/employee-scheduling-and-shift-planning",
    text: "Employee Scheduling and Shift Planning",
  },
  {
    link: "/service/work-force-management/payroll-management",
    text: "Payroll Management",
  },
  {
    link: "/service/work-force-management/people-on-demand",
    text: "People On Demand",
  },
  {
    link: "/service/work-force-management/performance-analytics",
    text: "Performance Analytics",
  },
  {
    link: "/service/work-force-management/staffing-and-recruitment",
    text: "Staffing and Recruitment",
  },
];

export default function ServiceDetailsPage() {
  return (
    <>
      <PageHeading
        title="Workforce Management"
        bgSrc="/services/workforce/workforce.jpg"
        pageLinkText="Workforce Management Solutions"
      />
      <Spacing lg="145" md="80" />
      <Div className="container">
        <SectionHeading
          title="Workforce Management"
          subtitle="Empower your business with cutting-edge workforce management solutions tailored to optimize employee scheduling, performance, and recruitment."
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
                src="/services/workforce/s14.jpg"
                alt="Workforce Management"
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
