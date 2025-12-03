import Image from "next/image";
import Div from "/app/ui/Div";
import PageHeading from "/app/ui/PageHeading";
import SectionHeading from "/app/ui/SectionHeading";
import Spacing from "/app/ui/Spacing";
import ContactFooter from "/app/ui/contactpg";

export const metadata = {
  title: "Advanced ML Solutions | Big Careers Technology solutions",
  description:
    "Big Careers Technology solutions offers advanced machine learning solutions to help businesses solve complex problems, enhance automation, and create predictive models that drive smarter decision-making and innovation.",
  keywords: [
    "Advanced Machine Learning",
    "Machine Learning Solutions",
    "Predictive Models",
    "ML Algorithms",
    "AI Automation",
    "Data Science",
    "Deep Learning",
    "Supervised Learning",
    "Unsupervised Learning",
    "Reinforcement Learning",
    "ML for Business",
  ],
  robots: "index, follow",
  openGraph: {
    title: "Advanced ML Solutions | Big Careers Technology solutions",
    description:
      "Big Careers Technology solutions’s advanced ML services empower businesses to leverage cutting-edge algorithms and techniques, creating powerful models for data-driven decision-making and innovation.",
    url: "https://bigcareers.solutions/advanced-ml",
    type: "website",
    image: "/logo.jpg",
  },
  twitter: {
    card: "summary_large_image",
    title: "Advanced ML Solutions | Big Careers Technology solutions",
    description:
      "Unlock the power of advanced machine learning with Big Careers Technology solutions’s solutions, including predictive modeling, data science, and AI automation to accelerate business growth.",
    image: "/logo.jpg",
  },
};

export default function AdvanceMLPage() {
  return (
    <>
      {/* Start Page Heading Section */}
      <PageHeading
        title="Advance ML"
        bgSrc="/services/ai-ml/advml.jpg"
        pageLinkText="Advance Machine Learning"
      />
      {/* End Page Heading Section */}

      {/* Start About Section */}
      <Spacing lg="150" md="80" />
      <Div className="container">
        <Div className="row align-items-center">
          <h3 className="text-primary mb-4">
            Empowering Businesses with Advanced Machine Learning
          </h3>
          {/* Left Column with Text */}
          <Div className="col-lg-6 col-md-12 mb-4 mb-lg-0">
            <p className="fs-6 mb-4">
              At <strong>Big Careers Technology solutions</strong>, our Advance
              Machine Learning solutions empower organizations to make smarter
              decisions and automate complex processes. From predictive modeling
              to natural language processing and computer vision, we deliver
              state-of-the-art ML capabilities tailored to your needs.
            </p>
            <p className="mb-5">
              Our expertise spans diverse domains like healthcare, finance,
              retail, and manufacturing, ensuring scalable and high-impact
              solutions. Partner with us to unlock the potential of AI-driven
              insights and innovation.
            </p>
          </Div>

          {/* Right Column with Image */}
          <Div className="col-lg-6 col-md-12 text-center">
            <Image
              src="/About/ai1.png"
              className="img-fluid cs-radius_15 shadow-lg"
              alt="Advance ML"
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
                  src="/services/ai-ml/ai2.jpg"
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
              subtitle="Innovative Machine Learning Solutions"
            >
              <Spacing lg="30" md="20" />
              <ul className="cs-m0">
                <li>Predictive Modeling for trend and behavior analysis</li>
                <li>Natural Language Processing for text insights</li>
                <li>Computer Vision for image and video analysis</li>
                <li>Reinforcement Learning for dynamic environments</li>
                <li>Deep Learning for advanced neural network applications</li>
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
              subtitle="Expert Solutions for Your Business"
            >
              <Spacing lg="30" md="20" />
              <p className="cs-m0">
                At Big Careers Technology solutions, we excel in delivering
                tailored solutions that drive business growth, efficiency, and
                security. Our proven expertise, scalability, and focus on
                seamless integration make us your ideal partner for advanced
                machine learning services.
              </p>
              <Spacing lg="15" md="15" />
              <p className="cs-m0">
                With strong industry partnerships and dedicated support, we
                ensure your business stays ahead in today’s competitive
                landscape.
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
