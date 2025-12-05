import Image from "next/image";
import Div from "/app/ui/Div";
import PageHeading from "/app/ui/PageHeading";
import SectionHeading from "/app/ui/SectionHeading";
import Spacing from "/app/ui/Spacing";
import ContactFooter from "/app/ui/contactpg";

export const metadata = {
  title: "Data Monitoring Services | Big Careers Technology solutions",
  description:
    "Big Careers Technology solutions provides advanced data monitoring services to track, analyze, and optimize your data in real-time, ensuring the integrity, security, and efficiency of your business operations.",
  keywords: [
    "Data Monitoring",
    "Real-Time Data Monitoring",
    "Data Analytics",
    "Data Optimization",
    "Business Data Monitoring",
    "Data Integrity",
    "Data Security",
    "IoT Data Monitoring",
    "Cloud Data Monitoring",
    "Data Performance",
    "Data Insights",
    "Data Monitoring Solutions",
  ],
  robots: "index, follow",
  openGraph: {
    title: "Data Monitoring Services | Big Careers Technology solutions",
    description:
      "Big Careers Technology solutions’s data monitoring services offer real-time tracking, analysis, and optimization of your data, ensuring the efficiency, security, and integrity of your business data for better decision-making.",
    url: "https://bigcareers.solutions/data-monitoring",
    type: "website",
    image: "/logo.jpg",
  },
  twitter: {
    card: "summary_large_image",
    title: "Data Monitoring Services | Big Careers Technology solutions",
    description:
      "Ensure the integrity and security of your data with Big Careers Technology solutions’s data monitoring services, providing real-time tracking, analysis, and optimization for enhanced business operations.",
    image: "/logo.jpg",
  },
};

export default function DataMonitoringPage() {
  return (
    <>
      {/* Start Page Heading Section */}
      <PageHeading
        title="Data Monitoring"
        bgSrc="/services/iot/di.jpg.jpeg"
        pageLinkText="Data Monitoring"
      />
      {/* End Page Heading Section */}

      {/* Start About Section */}
      <Spacing lg="150" md="80" />
      <Div className="container">
        <Div className="row align-items-center">
          <h3 className="text-primary mb-4">
            Real-time Data Monitoring for Enhanced Decision-Making
          </h3>

          {/* Left Column with Text */}
          <Div className="col-lg-6 col-md-12 mb-4 mb-lg-0">
            <p className="fs-6 mb-4">
              At Big Careers solutions, we provide advanced data
              monitoring solutions that allow businesses to track and analyze
              data in real time. Our monitoring systems give you instant
              insights into your operations, improving efficiency and enabling
              better decision-making.
            </p>
            <p className="mb-5">
              With our data monitoring solutions, your business can respond
              quickly to changing conditions, optimize performance, and
              proactively address issues before they affect operations.
            </p>
          </Div>

          {/* Right Column with Image */}
          <Div className="col-lg-6 col-md-12 text-center">
            <Image
              src="/services/iot/i13.jpg"
              className="img-fluid cs-radius_15 shadow-lg"
              alt="Data Monitoring"
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
                  src="/services/iot/i7.jpg"
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
              subtitle="Real-time Data Insights for Better Decision Making"
            >
              <Spacing lg="30" md="20" />
              <ul className="cs-m0">
                <li>Real-time monitoring and alerts</li>
                <li>Customizable dashboards for better insights</li>
                <li>Automated data collection and reporting</li>
                <li>Actionable insights for quick decision-making</li>
                <li>Seamless integration with existing systems</li>
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
                  src="/services/iot/i8.jpg"
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
              subtitle="Empowering Your Business with Real-Time Data Monitoring"
            >
              <Spacing lg="30" md="20" />
              <p className="cs-m0">
                Big Careers Technology solutions provides data monitoring
                solutions that ensure you never miss critical changes in your
                environment. Our advanced monitoring tools provide continuous,
                real-time data, which helps your business make informed
                decisions and optimize operations efficiently.
              </p>
              <Spacing lg="15" md="15" />
              <p className="cs-m0">
                Our solutions are customizable, scalable, and provide immediate
                value to your business, ensuring you stay ahead of the
                competition.
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
