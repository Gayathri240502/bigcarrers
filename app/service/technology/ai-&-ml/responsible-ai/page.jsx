import Image from "next/image";
import Div from "/app/ui/Div";
import PageHeading from "/app/ui/PageHeading";
import SectionHeading from "/app/ui/SectionHeading";
import Spacing from "/app/ui/Spacing";
import ContactFooter from "/app/ui/contactpg";

export const metadata = {
  title: "Responsible AI Solutions | Big Careers Technology solutions",
  description:
    "Big Careers Technology solutions offers responsible AI solutions to ensure that artificial intelligence technologies are developed, deployed, and used ethically, transparently, and in a way that promotes fairness, accountability, and inclusivity.",
  keywords: [
    "Responsible AI",
    "Ethical AI",
    "AI Ethics",
    "AI Fairness",
    "AI Transparency",
    "AI Accountability",
    "Ethical AI Development",
    "Inclusive AI",
    "AI Governance",
    "AI Regulation",
    "Responsible AI Deployment",
  ],
  robots: "index, follow",
  openGraph: {
    title: "Responsible AI Solutions | Big Careers Technology solutions",
    description:
      "Big Careers Technology solutions’s responsible AI services ensure that AI technologies are used ethically, promoting fairness, transparency, and accountability in business operations and decision-making.",
    url: "https://bigcareers.solutions/responsible-ai",
    type: "website",
    image: "/logo.jpg",
  },
  twitter: {
    card: "summary_large_image",
    title: "Responsible AI Solutions | Big Careers Technology solutions",
    description:
      "Build ethical, transparent, and accountable AI systems with Big Careers Technology solutions’s responsible AI solutions, designed to enhance trust and fairness in your AI models.",
    image: "/logo.jpg",
  },
};

export default function ResponsibleAIPage() {
  return (
    <>
      {/* Start Page Heading Section */}
      <PageHeading
        title="Responsible AI"
        bgSrc="/services/ai-ml/resai.jpg"
        pageLinkText="Responsible AI"
      />
      {/* End Page Heading Section */}

      {/* Start About Section */}
      <Spacing lg="150" md="80" />
      <Div className="container">
        <Div className="row align-items-center">
          <h3 className="text-primary mb-4">
            Driving Ethical Innovation with Responsible AI
          </h3>
          {/* Left Column with Text */}
          <Div className="col-lg-6 col-md-12 mb-4 mb-lg-0">
            <p className="fs-6 mb-4">
              At <strong>Big Careers Technology solutions</strong>, we
              prioritize ethical AI development and deployment to ensure trust,
              fairness, and transparency in every solution we create. Our
              Responsible AI practices align with global standards to safeguard
              users, data, and businesses.
            </p>
            <p className="mb-5">
              From mitigating biases to ensuring explainability and compliance,
              we deliver AI solutions that empower businesses to innovate
              responsibly while building trust with their customers.
            </p>
          </Div>

          {/* Right Column with Image */}
          <Div className="col-lg-6 col-md-12 text-center">
            <Image
              src="/services/ai-ml/ai7.jpg"
              className="img-fluid cs-radius_15 shadow-lg"
              alt="Responsible AI"
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
                  src="/services/ai-ml/ai8.jpg"
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
              subtitle="Ethical AI Practices for Sustainable Growth"
            >
              <Spacing lg="30" md="20" />
              <ul className="cs-m0">
                <li>Bias detection and mitigation frameworks</li>
                <li>Explainable AI for transparent decision-making</li>
                <li>Data privacy and compliance adherence</li>
                <li>Robust ethical guidelines for AI development</li>
                <li>Human-centric AI solutions for trust and safety</li>
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
                  src="/services/ai-ml/ai9.jpg"
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
              subtitle="Pioneering Responsible AI Solutions"
            >
              <Spacing lg="30" md="20" />
              <p className="cs-m0">
                At Big Careers Technology solutions, we are committed to
                ensuring that AI technologies are designed, developed, and
                deployed in a responsible and ethical manner. Our Responsible AI
                solutions offer transparency, fairness, and accountability,
                helping businesses build trust with their customers.
              </p>
              <Spacing lg="15" md="15" />
              <p className="cs-m0">
                With a focus on governance, compliance, and continuous
                monitoring, we ensure that your AI systems not only meet
                regulatory requirements but also align with your organization’s
                ethical standards and values.
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
