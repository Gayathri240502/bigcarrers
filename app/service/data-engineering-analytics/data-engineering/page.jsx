import Image from "next/image";
import Div from "../../../ui/Div";
import PageHeading from "../../../ui/PageHeading";
import SectionHeading from "../../../ui/SectionHeading";
import Spacing from "../../../ui/Spacing";
import ContactFooter from "/app/ui/contactpg";

export const metadata = {
  title: "Data Engineering Solutions | Big Careers Technology solutions",
  description:
    "Explore Big Careers Technology solutions's data engineering solutions powered by AI, Cloud, and Data Analytics to optimize data pipelines, enhance data management, and enable data-driven decision-making across organizations.",
  keywords: [
    "Data Engineering Solutions",
    "Data Pipeline Management",
    "AI in Data Engineering",
    "Cloud Data Engineering",
    "Data Architecture",
    "Big Data Solutions",
    "Data Integration",
    "Data Management",
    "Data Analytics Engineering",
    "Data Warehousing",
    "Data Engineering Services",
  ],
  robots: "index, follow",
  openGraph: {
    title: "Data Engineering Solutions | Big Careers Technology solutions",
    description:
      "Big Careers Technology solutions offers advanced data engineering solutions leveraging AI, Cloud, and Data Analytics to optimize data pipelines and enable efficient data management.",
    url: "https://bigcareers.solutions/data-engineering-solutions",
    type: "website",
    image: "/logo.jpg",
  },
  twitter: {
    card: "summary_large_image",
    title: "Data Engineering Solutions | Big Careers Technology solutions",
    description:
      "Big Careers Technology solutions provides innovative data engineering solutions using AI and Cloud technologies to enhance data pipelines and streamline data management.",
    image: "/logo.jpg",
  },
};

export default function DataEngineeringPage() {
  return (
    <>
      {/* Start Page Heading Section */}
      <PageHeading
        title="Data Engineering"
        bgSrc="/services/dataengineer/data.jpg"
        pageLinkText="Data Engineering"
      />
      {/* End Page Heading Section */}

      {/* Start About Section */}
      <Spacing lg="150" md="80" />
      <Div className="container">
        <Div className="row align-items-center">
          <h3 className="text-primary mb-4">
            Build and Manage Your Data Infrastructure with Expert Engineering
          </h3>

          {/* Left Column with Text */}
          <Div className="col-lg-6 col-md-12 mb-4 mb-lg-0">
            <p className="fs-6 mb-4">
              At Big Careers solutions, we specialize in providing
              data engineering solutions that enable businesses to harness the
              power of their data. Our services include the creation of data
              architectures, pipelines, and scalable systems designed to support
              large-scale data processing, analytics, and machine learning.
            </p>
            <p className="mb-5">
              With our data engineering solutions, you can optimize the flow and
              storage of data, ensure data integrity, and accelerate insights
              from your data assets.
            </p>
          </Div>

          {/* Right Column with Image */}
          <Div className="col-lg-6 col-md-12 text-center">
            <Image
              src="/services/dataengineer/d10.jpg"
              className="img-fluid cs-radius_15 shadow-lg"
              alt="Data Engineering"
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
                  src="/services/dataengineer/d9.jpg"
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
              subtitle="Revolutionizing Data Infrastructure"
            >
              <Spacing lg="30" md="20" />
              <ul className="cs-m0">
                <li>Design and build scalable data pipelines</li>
                <li>Optimize data flow and storage</li>
                <li>Ensure high data quality and integrity</li>
                <li>Support analytics and machine learning systems</li>
                <li>Automate data processing workflows</li>
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
                  src="/services/dataengineer/d1.jpg"
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
              subtitle="Optimizing Data for Smarter Business Decisions"
            >
              <Spacing lg="30" md="20" />
              <p className="cs-m0">
                Our team At Big Careers solutions provides robust and
                scalable data engineering solutions tailored to meet the needs
                of your business. We help build a solid data foundation that
                enables you to make faster, data-driven decisions.
              </p>
              <Spacing lg="15" md="15" />
              <p className="cs-m0">
                With our expertise, we ensure that your data infrastructure is
                optimized, secure, and able to support your growing data needs.
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
