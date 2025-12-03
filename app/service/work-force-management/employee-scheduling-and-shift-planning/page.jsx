import Image from "next/image";
import Div from "../../../ui/Div";
import PageHeading from "../../../ui/PageHeading";
import SectionHeading from "../../../ui/SectionHeading";
import Spacing from "../../../ui/Spacing";
import ContactFooter from "/app/ui/contactpg";

export const metadata = {
  title:
    "Employee Scheduling and Shift Planning Services | Big Careers Technology solutions",
  description:
    "Big Careers Technology solutions offers employee scheduling and shift planning services to optimize workforce management, reduce scheduling conflicts, and improve operational efficiency with automated scheduling solutions tailored to your business needs.",
  keywords: [
    "Employee Scheduling",
    "Shift Planning",
    "Workforce Management",
    "Staff Scheduling",
    "Automated Scheduling",
    "Shift Management",
    "Labor Optimization",
    "Employee Shift Planning",
    "Workforce Optimization",
    "Scheduling Software",
    "Employee Productivity",
    "Staff Management Solutions",
  ],
  robots: "index, follow",
  openGraph: {
    title:
      "Employee Scheduling and Shift Planning Services | Big Careers Technology solutions",
    description:
      "Optimize your workforce with Big Careers Technology solutions’s employee scheduling and shift planning services, offering automated solutions to reduce conflicts and enhance operational efficiency.",
    url: "https://bigcareers.solutions/employee-scheduling-shift-planning",
    type: "website",
    image: "/logo.jpg",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Employee Scheduling and Shift Planning Services | Big Careers Technology solutions",
    description:
      "Improve workforce management with Big Careers Technology solutions’s employee scheduling and shift planning services, reducing conflicts and optimizing shifts for better operational efficiency.",
    image: "/logo.jpg",
  },
};

export default function EmployeeSchedulingAndShiftPlanningPage() {
  return (
    <>
      {/* Start Page Heading Section */}
      <PageHeading
        title="Employee Scheduling and Shift Planning"
        bgSrc="/services/workforce/emp.jpg"
        pageLinkText="Employee Scheduling and Shift Planning"
      />
      {/* End Page Heading Section */}

      {/* Start About Section */}
      <Spacing lg="150" md="80" />
      <Div className="container">
        <Div className="row align-items-center">
          <h3 className="text-primary mb-4">
            Efficient Employee Scheduling and Shift Planning Solutions
          </h3>

          {/* Left Column with Text */}
          <Div className="col-lg-6 col-md-12 mb-4 mb-lg-0">
            <p className="fs-6 mb-4">
              Big Careers Technology solutions offers advanced solutions for
              employee scheduling and shift planning, making it easier for
              businesses to manage employee time, reduce labor costs, and
              optimize productivity. Our system ensures a seamless and efficient
              scheduling process, tailored to your unique operational needs.
            </p>
            <p className="mb-5">
              With our tool, you can easily plan shifts, allocate resources, and
              improve scheduling transparency across your organization.
            </p>
          </Div>

          {/* Right Column with Image */}
          <Div className="col-lg-6 col-md-12 text-center">
            <Image
              src="/services/workforce/s3.jpg"
              className="img-fluid cs-radius_15 shadow-lg"
              alt="Employee Scheduling and Shift Planning"
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
                  src="/services/workforce/s14.jpg"
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
              subtitle="Optimizing Shift Planning and Employee Scheduling"
            >
              <Spacing lg="30" md="20" />
              <ul className="cs-m0">
                <li>Real-time scheduling and shift management</li>
                <li>Automatic shift planning based on availability</li>
                <li>Enhanced collaboration and scheduling transparency</li>
                <li>Integration with time-tracking tools</li>
                <li>Easy adjustments and updates to schedules</li>
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
                  src="/services/workforce/s7.jpg"
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
              subtitle="Making Shift Planning and Employee Management Simple"
            >
              <Spacing lg="30" md="20" />
              <p className="cs-m0">
                Big Careers Technology solutions simplifies employee scheduling
                and shift planning, helping businesses maintain transparency,
                reduce labor costs, and boost productivity. Our solutions
                provide tools for effective planning, automatic scheduling, and
                real-time adjustments.
              </p>
              <Spacing lg="15" md="15" />
              <p className="cs-m0">
                With our expertise, you can manage shift assignments and ensure
                a smooth and organized work environment.
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
