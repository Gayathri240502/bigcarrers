import Image from "next/image";
import Div from "/app/ui/Div";
import PageHeading from "/app/ui/PageHeading";
import SectionHeading from "/app/ui/SectionHeading";
import Spacing from "/app/ui/Spacing";
import ContactFooter from "/app/ui/contactpg";

export const metadata = {
  title:
    "Multi-Model Generative AI Solutions | Big Careers Technology solutions",
  description:
    "Big Careers Technology solutions offers multi-model generative AI solutions to help businesses generate creative, data-driven content across various modalities like text, images, audio, and video, enhancing innovation and customer engagement.",
  keywords: [
    "Multi-Model Generative AI",
    "Generative AI Solutions",
    "AI for Content Creation",
    "Text Generation",
    "Image Generation",
    "Audio Generation",
    "Video Generation",
    "AI Creativity",
    "Data-Driven Content",
    "Artificial Intelligence Models",
    "Generative AI Models",
  ],
  robots: "index, follow",
  openGraph: {
    title:
      "Multi-Model Generative AI Solutions | Big Careers Technology solutions",
    description:
      "Big Careers Technology solutions’s multi-model generative AI services empower businesses to create dynamic content across different formats such as text, images, audio, and video using cutting-edge AI technology.",
    url: "https://bigcareers.solutions/multi-model-generative-ai",
    type: "website",
    image: "/logo.jpg",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Multi-Model Generative AI Solutions | Big Careers Technology solutions",
    description:
      "Leverage multi-model generative AI to create unique and engaging content across various media formats with Big Careers Technology solutions’s AI-driven solutions.",
    image: "/logo.jpg",
  },
};

export default function MultiModelGenerativeAIPage() {
  return (
    <>
      {/* Start Page Heading Section */}
      <PageHeading
        title="Multi-Model Generative AI"
        bgSrc="/services/ai-ml/multi.jpg"
        pageLinkText="Multi-Model Generative AI"
      />
      {/* End Page Heading Section */}

      {/* Start About Section */}
      <Spacing lg="150" md="80" />
      <Div className="container">
        <Div className="row align-items-center">
          <h3 className="text-primary mb-4">
            Unlocking Creativity with Multi-Model Generative AI
          </h3>
          {/* Left Column with Text */}
          <Div className="col-lg-6 col-md-12 mb-4 mb-lg-0">
            <p className="fs-6 mb-4">
              At <strong>Big Careers Technology solutions</strong>, our
              Multi-Model Generative AI solutions combine advanced neural
              networks to generate images, text, audio, and more. This approach
              enables businesses to create innovative, content-rich experiences
              that engage and captivate audiences.
            </p>
            <p className="mb-5">
              We specialize in multi-modal AI systems that integrate various
              data types, delivering powerful tools for marketing, design,
              simulation, and beyond. Explore new possibilities in creativity
              and automation with us.
            </p>
          </Div>

          {/* Right Column with Image */}
          <Div className="col-lg-6 col-md-12 text-center">
            <Image
              src="/services/ai-ml/ai10.jpg"
              className="img-fluid cs-radius_15 shadow-lg"
              alt="Multi-Model Generative AI"
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
                  src="/services/ai-ml/ai11.jpg"
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
              subtitle="Innovative Multi-Modal AI Solutions"
            >
              <Spacing lg="30" md="20" />
              <ul className="cs-m0">
                <li>Integration of text, image, and audio data</li>
                <li>Creative content generation and simulation</li>
                <li>Advanced neural network architectures</li>
                <li>Real-time multi-modal interactions</li>
                <li>Personalized and scalable AI models</li>
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
                  src="/services/ai-ml/ai2.jpg"
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
              subtitle="Innovators in Generative AI"
            >
              <Spacing lg="30" md="20" />
              <p className="cs-m0">
                Big Careers Technology solutions leads the way in generative AI
                innovation. Our tailored multi-modal solutions are designed to
                empower your business with creativity, efficiency, and
                cutting-edge technology.
              </p>
              <Spacing lg="15" md="15" />
              <p className="cs-m0">
                Whether you're exploring content generation or simulation, our
                expertise ensures seamless integration and impactful outcomes
                for your business.
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
