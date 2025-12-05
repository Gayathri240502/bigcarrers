import Image from "next/image";
import Div from "/app/ui/Div";
import PageHeading from "/app/ui/PageHeading";
import SectionHeading from "/app/ui/SectionHeading";
import Spacing from "/app/ui/Spacing";
import ContactFooter from "/app/ui/contactpg";

export const metadata = {
  title: "Robotic Process Automation (RPA) | Big Careers Technology solutions",
  description:
    "Big Careers Technology solutions offers cutting-edge RPA solutions to automate repetitive tasks, improve efficiency, and optimize business workflows through intelligent automation.",
  keywords: [
    "Robotic Process Automation",
    "RPA Solutions",
    "Automation Services",
    "Business Process Automation",
    "AI-Driven Automation",
    "Workflow Optimization",
    "Intelligent Bots",
    "RPA for Enterprises",
    "Process Efficiency",
    "AI-Powered RPA",
  ],
  robots: "index, follow",
  openGraph: {
    title:
      "Robotic Process Automation (RPA) | Big Careers Technology solutions",
    description:
      "Big Careers Technology solutions’s RPA solutions help businesses automate routine processes, boost productivity, and reduce manual efforts through AI-driven automation.",
    url: "https://bigcareers.solutions/service/technology/ai-&-ml/rpa",
    type: "website",
    image: "/logo.jpg",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Robotic Process Automation (RPA) | Big Careers Technology solutions",
    description:
      "Optimize business processes with Big Careers Technology solutions’s RPA solutions, automating repetitive tasks to enhance efficiency and scalability.",
    image: "/logo.jpg",
  },
};

export default function RpaPage() {
  return (
    <>
      {/* Start Page Heading Section */}
      <PageHeading
        title="Robotic Process Automation (RPA)"
        bgSrc="/services/ai-ml/robo.jpg"
        pageLinkText="Robotic Process Automation"
      />
      {/* End Page Heading Section */}

      {/* Start About Section */}
      <Spacing lg="150" md="80" />
      <Div className="container">
        <Div className="row align-items-center">
          <h3 className="text-primary mb-4">
            Transforming Enterprises with Intelligent Automation
          </h3>
          {/* Left Column with Text */}
          <Div className="col-lg-6 col-md-12 mb-4 mb-lg-0">
            <p className="fs-6 mb-4">
              At <strong>Big Careers Technology solutions</strong>, we empower
              organizations with **Robotic Process Automation (RPA)** to
              automate repetitive, manual, and rule-based tasks. Our AI-powered
              bots enhance accuracy, reduce costs, and optimize business
              workflows for maximum efficiency.
            </p>
            <p className="mb-5">
              From **data entry and invoice processing to customer support
              automation**, our RPA solutions work across various industries,
              enabling seamless digital transformation.
            </p>
          </Div>

          {/* Right Column with Image */}
          <Div className="col-lg-6 col-md-12 text-center">
            <Image
              src="/services/ai-ml/rpa2.jpg"
              className="img-fluid cs-radius_15 shadow-lg"
              alt="Robotic Process Automation"
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
                  src="/services/ai-ml/rpa3.jpg"
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
              subtitle="Powerful RPA Solutions"
            >
              <Spacing lg="30" md="20" />
              <ul className="cs-m0">
                <li>Automated data extraction and processing</li>
                <li>End-to-end workflow automation</li>
                <li>Seamless integration with enterprise applications</li>
                <li>AI-driven decision-making capabilities</li>
                <li>Scalable bots for repetitive task automation</li>
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
                  src="/services/ai-ml/rpa4.jpg"
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
              title="Why Choose Big Careers Technology solutions for RPA?"
              subtitle="Industry-Leading Automation Expertise"
            >
              <Spacing lg="30" md="20" />
              <p className="cs-m0">
                At Big Careers solutions, we specialize in
                **enterprise-grade RPA solutions**, ensuring seamless
                integration, high performance, and tangible business benefits.
              </p>
              <Spacing lg="15" md="15" />
              <p className="cs-m0">
                Our AI-driven automation streamlines business operations,
                **reducing manual effort, improving accuracy, and accelerating
                digital transformation**.
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
