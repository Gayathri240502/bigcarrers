import Image from "next/image";
import Div from "../../../ui/Div";
import PageHeading from "../../../ui/PageHeading";
import SectionHeading from "../../../ui/SectionHeading";
import Spacing from "../../../ui/Spacing";
import ContactFooter from "/app/ui/contactpg";

export const metadata = {
  title: "Visualization and Analytics | Big Careers Technology solutions",
  description:
    "Explore Big Careers Technology solutions's visualization and analytics solutions powered by AI and Data Analytics to provide actionable insights, enhance decision-making, and drive business performance through data-driven visualizations.",
  keywords: [
    "Data Visualization",
    "Business Analytics",
    "AI Analytics",
    "Data Insights",
    "Data Visualization Tools",
    "Data Analytics Solutions",
    "Data-Driven Decisions",
    "Business Intelligence",
    "Visualization Solutions",
    "AI in Data Analytics",
    "Advanced Analytics",
  ],
  robots: "index, follow",
  openGraph: {
    title: "Visualization and Analytics | Big Careers Technology solutions",
    description:
      "Big Careers Technology solutions offers advanced visualization and analytics solutions to help businesses gain insights from data and improve decision-making with AI-driven tools.",
    url: "https://bigcareers.solutions/visualization-and-analytics",
    type: "website",
    image: "/logo.jpg",
  },
  twitter: {
    card: "summary_large_image",
    title: "Visualization and Analytics | Big Careers Technology solutions",
    description:
      "Big Careers Technology solutions provides visualization and analytics solutions to turn complex data into actionable insights for better business decisions and performance.",
    image: "/logo.jpg",
  },
};

export default function VisualizationAndAnalyticsPage() {
  return (
    <>
      {/* Start Page Heading Section */}
      <PageHeading
        title="Visualization and Analytics"
        bgSrc="/services/dataengineer/vis.jpg"
        pageLinkText="Visualization and Analytics"
      />
      {/* End Page Heading Section */}

      {/* Start About Section */}
      <Spacing lg="150" md="80" />
      <Div className="container">
        <Div className="row align-items-center">
          <h3 className="text-primary mb-4">
            Unlock the Power of Data through Visualization and Insights
          </h3>

          {/* Left Column with Text */}
          <Div className="col-lg-6 col-md-12 mb-4 mb-lg-0">
            <p className="fs-6 mb-4">
              At Big Careers solutions, we empower businesses to make
              data-driven decisions through advanced data visualization and
              analytics. Our services include interactive dashboards, custom
              reports, and real-time data visualizations that provide deep
              insights into business operations and performance.
            </p>
            <p className="mb-5">
              With our expertise in data visualization and analytics, we help
              transform complex data into clear, actionable insights, enabling
              you to make informed decisions that drive growth and operational
              efficiency.
            </p>
          </Div>

          {/* Right Column with Image */}
          <Div className="col-lg-6 col-md-12 text-center">
            <Image
              src="/services/dataengineer/d8.jpg"
              className="img-fluid cs-radius_15 shadow-lg"
              alt="Visualization and Analytics"
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
                  src="/services/dataengineer/d10.jpg"
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
              subtitle="Bringing Data to Life with Insightful Visuals"
            >
              <Spacing lg="30" md="20" />
              <ul className="cs-m0">
                <li>Interactive dashboards with real-time data</li>
                <li>Custom reports for detailed business insights</li>
                <li>Data visualization for decision-making support</li>
                <li>
                  Advanced analytics for predictive and prescriptive insights
                </li>
                <li>Seamless integration with business intelligence tools</li>
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
                  src="/services/dataengineer/d2.jpg"
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
              subtitle="Turning Complex Data into Clear Insights"
            >
              <Spacing lg="30" md="20" />
              <p className="cs-m0">
                With Big Careers Technology solutions, you gain access to
                powerful data visualization and analytics solutions that
                simplify complex data sets. We provide intuitive tools that
                empower your team to explore, analyze, and visualize data with
                ease.
              </p>
              <Spacing lg="15" md="15" />
              <p className="cs-m0">
                Our solutions are designed to deliver actionable insights
                quickly, enhancing decision-making capabilities and helping you
                stay ahead of the competition.
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
