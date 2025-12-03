import Image from "next/image";
import Div from "/app/ui/Div";
import PageHeading from "/app/ui/PageHeading";
import SectionHeading from "/app/ui/SectionHeading";
import Spacing from "/app/ui/Spacing";
import ContactFooter from "/app/ui/contactpg";

export const metadata = {
  title: "Enterprise AI Engineering | Big Careers Technology solutions",
  description:
    "Big Careers Technology solutions offers enterprise AI engineering services to help organizations integrate AI solutions into their operations, enhancing efficiency, scalability, and decision-making with cutting-edge AI technologies.",
  keywords: [
    "Enterprise AI",
    "AI Engineering",
    "AI Integration",
    "Artificial Intelligence Solutions",
    "AI for Business",
    "Enterprise AI Systems",
    "Scalable AI Solutions",
    "AI Automation",
    "Data Science",
    "AI Algorithms",
    "AI Deployment",
  ],
  robots: "index, follow",
  openGraph: {
    title: "Enterprise AI Engineering | Big Careers Technology solutions",
    description:
      "Big Careers Technology solutions’s enterprise AI engineering services help businesses integrate AI-driven technologies to optimize operations, improve productivity, and enhance decision-making at scale.",
    url: "https://bigcareers.solutions/enterprise-ai-engineering",
    type: "website",
    image: "/logo.jpg",
  },
  twitter: {
    card: "summary_large_image",
    title: "Enterprise AI Engineering | Big Careers Technology solutions",
    description:
      "Transform your enterprise with Big Careers Technology solutions’s AI engineering services, providing scalable, efficient, and automated AI solutions for smarter business operations.",
    image: "/logo.jpg",
  },
};

export default function EnterpriseAIPage() {
  return (
    <>
      {/* Start Page Heading Section */}
      <PageHeading
        title="Enterprise AI Engineering"
        bgSrc="/services/ai-ml/enterp.jpg"
        pageLinkText="Enterprise AI Engineering"
      />
      {/* End Page Heading Section */}

      {/* Start About Section */}
      <Spacing lg="150" md="80" />
      <Div className="container">
        <Div className="row align-items-center">
          <h3 className="text-primary mb-4">
            Revolutionizing Enterprises with Advanced AI Engineering
          </h3>
          {/* Left Column with Text */}
          <Div className="col-lg-6 col-md-12 mb-4 mb-lg-0">
            <p className="fs-6 mb-4">
              At <strong>Big Careers Technology solutions</strong>, our
              Enterprise AI Engineering services are designed to help
              organizations scale and optimize their operations using
              cutting-edge artificial intelligence technologies. From automating
              workflows to providing intelligent insights, we empower
              enterprises to achieve greater efficiency and innovation.
            </p>
            <p className="mb-5">
              Our team specializes in building scalable AI solutions tailored to
              enterprise needs, ensuring seamless integration and impactful
              outcomes. We work across multiple industries, delivering AI
              solutions that redefine how businesses operate.
            </p>
          </Div>

          {/* Right Column with Image */}
          <Div className="col-lg-6 col-md-12 text-center">
            <Image
              src="/services/ai-ml/ai4.jpg"
              className="img-fluid cs-radius_15 shadow-lg"
              alt="Enterprise AI Engineering"
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
                  src="/services/ai-ml/ai5.jpg"
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
              subtitle="Enterprise-Grade AI Solutions"
            >
              <Spacing lg="30" md="20" />
              <ul className="cs-m0">
                <li>Custom AI frameworks for unique business challenges</li>
                <li>Intelligent automation for workflows and operations</li>
                <li>Advanced analytics for real-time decision-making</li>
                <li>Integration with enterprise systems like ERP and CRM</li>
                <li>AI-powered insights for strategic planning</li>
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
                  src="/services/ai-ml/ai3.jpg"
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
              subtitle="AI Excellence for Enterprises"
            >
              <Spacing lg="30" md="20" />
              <p className="cs-m0">
                At Big Careers Technology solutions, we bring unparalleled
                expertise in enterprise AI engineering. Our solutions are
                designed to meet the demands of large-scale operations,
                providing innovation and efficiency at every level.
              </p>
              <Spacing lg="15" md="15" />
              <p className="cs-m0">
                Whether you're modernizing your systems or creating new
                capabilities, we ensure seamless integration, robust
                performance, and transformative outcomes for your business.
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
