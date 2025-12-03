import Image from "next/image";
import Div from "../../../../ui/Div";
import PageHeading from "../../../../ui/PageHeading";
import SectionHeading from "../../../../ui/SectionHeading";
import Spacing from "../../../../ui/Spacing";
import ContactFooter from "/app/ui/contactpg";

export const metadata = {
  title: "Automation Solutions | Big Careers Technology solutions",
  description:
    "Explore Big Careers Technology solutions's automation solutions powered by AI, Cloud, and Data Analytics to streamline business processes, improve operational efficiency, and drive digital transformation.",
  keywords: [
    "Automation Solutions",
    "AI Automation",
    "Business Process Automation",
    "Cloud Automation",
    "Data Analytics Automation",
    "Intelligent Automation",
    "Robotic Process Automation (RPA)",
    "Digital Transformation",
    "Workflow Automation",
    "Operational Efficiency",
    "Automation Software",
  ],
  robots: "index, follow",
  openGraph: {
    title: "Automation Solutions | Big Careers Technology solutions",
    description:
      "Big Careers Technology solutions offers intelligent automation solutions leveraging AI, Cloud, and Data Analytics to streamline processes and enhance efficiency across industries.",
    url: "https://bigcareers.solutions/services/technology/ai-ml/automation",
    type: "website",
    image: "/logo.jpg",
  },
  twitter: {
    card: "summary_large_image",
    title: "Automation Solutions | Big Careers Technology solutions",
    description:
      "Big Careers Technology solutions delivers automation solutions powered by AI, Cloud, and Data Analytics to improve business operations and boost efficiency.",
    image: "/logo.jpg",
  },
};

export default function AutomationPage() {
  return (
    <>
      {/* Start Page Heading Section */}
      <PageHeading
        title="AI driven Automation"
        bgSrc="/services/dataengineer/aidrive.jpg"
        pageLinkText="Automation"
      />
      {/* End Page Heading Section */}

      {/* Start About Section */}
      <Spacing lg="150" md="80" />
      <Div className="container">
        <Div className="row align-items-center">
          <h3 className="text-primary mb-4">
            Streamlining Your Processes with AI-Powered Automation
          </h3>

          {/* Left Column with Text */}
          <Div className="col-lg-6 col-md-12 mb-4 mb-lg-0">
            <p className="fs-6 mb-4">
              At Big Careers Technology solutions, we provide AI-powered
              automation solutions to help you streamline your business
              processes, reduce manual tasks, and improve overall efficiency.
              Our automation tools empower your teams to focus on higher-value
              tasks while we take care of repetitive processes.
            </p>
            <p className="mb-5">
              With automation, you can achieve faster decision-making, improved
              customer experiences, and significant cost savings.
            </p>
          </Div>

          {/* Right Column with Image */}
          <Div className="col-lg-6 col-md-12 text-center">
            <Image
              src="/services/dataengineer/d5.jpg"
              className="img-fluid cs-radius_15 shadow-lg"
              alt="Automation"
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
                  src="/services/dataengineer/d6.jpg"
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
              subtitle="Boosting Productivity with Intelligent Automation"
            >
              <Spacing lg="30" md="20" />
              <ul className="cs-m0">
                <li>Automating repetitive business processes</li>
                <li>Reducing operational costs</li>
                <li>Enhancing accuracy and efficiency</li>
                <li>Enabling real-time decision-making</li>
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
                  src="/services/dataengineer/d7.jpg"
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
              subtitle="Maximizing Efficiency with Automation"
            >
              <Spacing lg="30" md="20" />
              <p className="cs-m0">
                Big Careers Technology solutions offers intelligent automation
                solutions that help streamline operations, reduce manual errors,
                and boost overall efficiency. We ensure that your business can
                operate at maximum capacity, delivering faster results and
                improved performance.
              </p>
              <Spacing lg="15" md="15" />
              <p className="cs-m0">
                Let us help you achieve seamless automation tailored to your
                business needs.
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
