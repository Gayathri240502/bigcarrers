import Image from "next/image";
import Div from "../ui/Div";
import FunFact from "../ui/FunFact";
import PageHeading from "../ui/PageHeading";
import SectionHeading from "../ui/SectionHeading";
import TeamSlider from "../ui/Slider/TeamSlider";
import Spacing from "../ui/Spacing";
import ContactFooter from "../ui/contactpg";

export const metadata = {
  title: "About Us | Big Careers Technology solutions",
  description:
    "Learn more about Big Careers Technology solutions, a leading provider of AI & ML, Cyber Security, IoT, Blockchain Management, SAP, DevOps, Cloud, Salesforce, Consulting, Data Engineering & Analytics, Workforce Management, and Custom Embedded Solutions.",
  keywords: [
    "About Big Careers Technology solutions",
    "Big Careers Technology solutions Company",
    "AI & ML Experts",
    "Cyber Security Solutions",
    "IoT Innovations",
    "Blockchain Development",
    "Cloud and SAP Services",
    "DevOps Consulting",
    "Salesforce Experts",
    "Data Engineering and Analytics",
    "Enterprise Technology",
    "Workforce Management",
    "Custom Embedded Solutions",
  ],
  robots: "index, follow",
  openGraph: {
    title: "About Us | Big Careers Technology solutions",
    description:
      "Big Careers Technology solutions is a technology-driven company specializing in AI, Cyber Security, IoT, Blockchain, SAP, Cloud, and more. Learn about our mission and expertise.",
    url: "https://bigcareers.solutions/about",
    type: "website",
    image: "/logo.jpg",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | Big Careers Technology solutions",
    description:
      "Discover Big Careers Technology solutions's mission, vision, and expertise in AI, Cyber Security, Cloud, and other technology services.",
    image: "/logo.jpg",
  },
};

const funfaceData = [
  {
    title: "Global Happy Clients",
    factNumber: "40",
  },
  {
    title: "Project Completed",
    factNumber: "20",
  },
  {
    title: "Team Members",
    factNumber: "63",
  },
  {
    title: "Digital products",
    factNumber: "120",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Start Page Heading Section */}
      <PageHeading
        title="About Us"
        bgSrc="/About/ab.jpg"
        pageLinkText="About Us"
      />
      {/* End Page Heading Section */}
      {/* Start About Section */}
      <Spacing lg="150" md="80" />
      <Div className="container">
        <Div className="row align-items-center">
          <h3 className="text-primary mb-4">
            Empowering Businesses with Cutting-Edge Technology Solutions
          </h3>
          {/* Left Column with Text */}
          <Div className="col-lg-6 col-md-12 mb-4 mb-lg-0">
            <p className=" fs-6 mb-4">
              At <strong>Big Careers Technology solutions</strong>, we
              specialize in transforming businesses with cutting-edge
              technologies such as Artificial Intelligence (AI), Machine
              Learning (ML), and more. We work closely with startups,
              enterprises, and organizations to deliver tailored solutions
              across multiple domains, including Blockchain Management, Cyber
              Security, Data Engineering & Analytics, IoT, and Software
              Enterprise.
            </p>
            <p className="mb-5">
              Our diverse service offerings empower businesses to thrive in an
              ever-evolving technological landscape. We focus on delivering
              high-impact, scalable solutions that drive growth, enhance
              efficiency, and foster innovation.
            </p>
          </Div>

          {/* Right Column with Image */}
          <Div className="col-lg-6 col-md-12 text-center">
            <Image
              src="/About/ai1.png"
              className="img-fluid cs-radius_15 shadow-lg"
              alt="About"
              width={700}
              height={700}
            />
          </Div>
        </Div>

        <Spacing lg="50" md="40" />

        {/* Service List Section */}
        <Div className="row text-center">
          <Div className="col-md-4 mb-4">
            <Div className="card text-white bg-dark shadow-lg border-0 service-card">
              <div className="card-body">
                <p className="card-text">
                  We develop advanced AI and ML models that enable smarter
                  decision-making, process automation, and predictive insights,
                  helping businesses stay ahead of the competition.
                </p>
              </div>
            </Div>
          </Div>
          <Div className="col-md-4 mb-4">
            <Div className="card text-white bg-dark shadow-lg border-0 service-card">
              <div className="card-body">
                <p className="card-text">
                  Our blockchain solutions ensure transparency, security, and
                  efficiency in data management, enabling secure transactions
                  and decentralization for your business operations.
                </p>
              </div>
            </Div>
          </Div>
          <Div className="col-md-4 mb-4">
            <Div className="card text-white bg-dark shadow-lg border-0 service-card">
              <div className="card-body">
                <p className="card-text">
                  We protect your business from cyber threats with robust
                  security measures, risk assessments, and continuous
                  monitoring, ensuring your data and systems remain safe and
                  secure.
                </p>
              </div>
            </Div>
          </Div>
        </Div>

        <Div className="row text-center">
          <Div className="col-md-4 mb-4">
            <Div className="card text-white bg-dark shadow-lg border-0 service-card">
              <div className="card-body">
                <p className="card-text">
                  Our data engineering services help businesses optimize their
                  data pipelines, while our analytics solutions uncover
                  actionable insights that drive informed decisions.
                </p>
              </div>
            </Div>
          </Div>
          <Div className="col-md-4 mb-4">
            <Div className="card text-white bg-dark shadow-lg border-0 service-card">
              <div className="card-body">
                <p className="card-text">
                  We connect devices, systems, and data to create smarter, more
                  efficient solutions that enhance business operations and
                  improve customer experiences.
                </p>
              </div>
            </Div>
          </Div>
          <Div className="col-md-4 mb-4">
            <Div className="card text-white bg-dark shadow-lg border-0 service-card">
              <div className="card-body">
                <p className="card-text">
                  From custom software development to enterprise solutions, we
                  build robust applications that streamline workflows, enhance
                  productivity, and scale with your business.
                </p>
              </div>
            </Div>
          </Div>
        </Div>

        <Spacing lg="75" md="55" />
      </Div>
      {/* End About Section */}

      {/* Start Fun Fact Section */}
      <Div className="container">
        <FunFact
          title="Achievements"
          subtitle="At Big Careers solutions, we revolutionize industries with cutting-edge solutions, empowering businesses through innovation and scalability."
          data={funfaceData}
        />
      </Div>
      {/* End Fun Fact Section */}

      {/* Start Why Choose Section */}
      <Spacing lg="100" md="80" />
      <Div className="container">
        <Div className="row">
          <Div className="col-xl-5 col-lg-6">
            <Div className="cs-image_layer cs-style1">
              <Div className="cs-image_layer_in">
                <Image
                  src="/About/a1.jpg"
                  alt="About"
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
              subtitle="Highly Experienced People with Us"
            >
              <Spacing lg="30" md="20" />
              <p className="cs-m0">
                At Big Careers solutions, we specialize in delivering
                innovative AI, ML, Blockchain, and IoT solutions that drive
                efficiency, security, and business growth. Our team has a proven
                track record in transforming businesses with advanced
                technologies and end-to-end services.
              </p>
              <Spacing lg="15" md="15" />
              <p className="cs-m0">
                With strong industry partnerships, dedicated support, and a
                focus on scalability, we ensure seamless integration and optimal
                performance of all our solutions. Our approach is tailored to
                meet your unique needs, empowering your business to stay ahead
                of the curve.
              </p>
              <Spacing lg="30" md="30" />
              <Div className="cs-separator cs-accent_bg"></Div>
              <Spacing lg="25" md="0" />
            </SectionHeading>
          </Div>
        </Div>
      </Div>
      {/* End Why Choose Section */}

      {/* Start Team Section 
      <Spacing lg="145" md="80" />
      <Div className="container">
        <SectionHeading
          title="Awesome team <br/>members"
          subtitle="Our Team"
          variant="cs-style1"
        />
        <Spacing lg="85" md="45" />
        <TeamSlider />
      </Div>
      End Team Section */}

      {/* Start CTA Section */}
      <Spacing lg="150" md="80" />

      <ContactFooter />
    </>
  );
}
