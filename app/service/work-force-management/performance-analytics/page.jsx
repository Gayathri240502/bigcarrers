import Image from "next/image";
import Div from "../../../ui/Div";
import PageHeading from "../../../ui/PageHeading";
import SectionHeading from "../../../ui/SectionHeading";
import Spacing from "../../../ui/Spacing";
import ContactFooter from "/app/ui/contactpg";

export const metadata = {
  title: "Performance Analytics Services | Big Careers Technology solutions",
  description:
    "Big Careers Technology solutions offers performance analytics services to help businesses track key performance indicators (KPIs), assess operational efficiency, and drive data-driven decision-making for enhanced business outcomes.",
  keywords: [
    "Performance Analytics",
    "Business Analytics",
    "Key Performance Indicators (KPIs)",
    "Operational Efficiency",
    "Data-Driven Decision Making",
    "Business Performance",
    "Analytics Solutions",
    "Performance Monitoring",
    "Data Analytics",
    "Business Intelligence",
    "KPIs Monitoring",
    "Analytics for Business",
  ],
  robots: "index, follow",
  openGraph: {
    title: "Performance Analytics Services | Big Careers Technology solutions",
    description:
      "Unlock actionable insights with Big Careers Technology solutions’s performance analytics services, allowing businesses to monitor KPIs, track operational efficiency, and make data-driven decisions for business growth.",
    url: "https://bigcareers.solutions/performance-analytics",
    type: "website",
    image: "/logo.jpg",
  },
  twitter: {
    card: "summary_large_image",
    title: "Performance Analytics Services | Big Careers Technology solutions",
    description:
      "Enhance your business strategy with Big Careers Technology solutions’s performance analytics services, helping track KPIs, monitor operational efficiency, and make informed decisions.",
    image: "/logo.jpg",
  },
};

export default function PerformanceAnalyticsPage() {
  return (
    <>
      {/* Start Page Heading Section */}
      <PageHeading
        title="Performance Analytics"
        bgSrc="/services/workforce/perf.jpg"
        pageLinkText="Performance Analytics"
      />
      {/* End Page Heading Section */}

      {/* Start About Section */}
      <Spacing lg="150" md="80" />
      <Div className="container">
        <Div className="row align-items-center">
          <h3 className="text-primary mb-4">
            Unlock Insights with Advanced Performance Analytics
          </h3>

          {/* Left Column with Text */}
          <Div className="col-lg-6 col-md-12 mb-4 mb-lg-0">
            <p className="fs-6 mb-4">
              Big Careers Technology solutions provides performance analytics
              solutions designed to help businesses track key metrics, identify
              opportunities for improvement, and make data-driven decisions. Our
              solutions are customizable to fit the unique needs of your
              organization and help you drive performance across various
              departments.
            </p>
            <p className="mb-5">
              Our analytics tools enable you to optimize performance, monitor
              trends, and make real-time decisions that impact your business’s
              growth.
            </p>
          </Div>

          {/* Right Column with Image */}
          <Div className="col-lg-6 col-md-12 text-center">
            <Image
              src="/services/workforce/s9.jpg"
              className="img-fluid cs-radius_15 shadow-lg"
              alt="Performance Analytics"
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
                  src="/services/workforce/s2.jpg"
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
              subtitle="Optimizing Performance with Data-Driven Insights"
            >
              <Spacing lg="30" md="20" />
              <ul className="cs-m0">
                <li>Comprehensive performance tracking across departments</li>
                <li>Real-time monitoring of key business metrics</li>
                <li>Data-driven insights for optimization</li>
                <li>Customizable reports and dashboards</li>
                <li>Easy integration with existing tools and systems</li>
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
                  src="/services/workforce/s8.jpg"
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
              subtitle="Maximize Performance with Actionable Insights"
            >
              <Spacing lg="30" md="20" />
              <p className="cs-m0">
                Big Careers Technology solutions provides performance analytics
                tools that give you actionable insights into your business’s
                performance. We help you track key metrics, optimize business
                processes, and improve decision-making for long-term growth.
              </p>
              <Spacing lg="15" md="15" />
              <p className="cs-m0">
                By leveraging the power of data, we enable your business to
                monitor performance in real time and make adjustments that lead
                to success.
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
