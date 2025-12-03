import Image from "next/image";
import Div from "../../../ui/Div";
import PageHeading from "../../../ui/PageHeading";
import SectionHeading from "../../../ui/SectionHeading";
import Spacing from "../../../ui/Spacing";
import ContactFooter from "/app/ui/contactpg";

export const metadata = {
  title: "Cloud Integration Services | Big Careers Technology solutions",
  description:
    "Big Careers Technology solutions offers seamless cloud integration services to help businesses migrate, manage, and optimize cloud infrastructure, ensuring scalability, security, and efficiency.",
  keywords: [
    "Cloud Integration",
    "Cloud Services",
    "Cloud Migration",
    "Cloud Infrastructure",
    "Cloud Optimization",
    "Enterprise Cloud Solutions",
    "Cloud Security",
    "Scalable Cloud Solutions",
    "Multi-Cloud Integration",
    "Cloud Platforms",
    "Cloud Computing",
  ],
  robots: "index, follow",
  openGraph: {
    title: "Cloud Integration Services | Big Careers Technology solutions",
    description:
      "Big Careers Technology solutions’s cloud integration services ensure businesses can seamlessly migrate and integrate their systems with cloud platforms to enhance performance, scalability, and security.",
    url: "https://bigcareers.solutions/service/software-enterprise/cloud-integration",
    type: "website",
    image: "/logo.jpg",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cloud Integration Services | Big Careers Technology solutions",
    description:
      "Seamlessly integrate your business systems with cloud infrastructure through Big Careers Technology solutions’s cloud integration services, enhancing scalability and security.",
    image: "/logo.jpg",
  },
};

export default function CloudIntegrationPage() {
  return (
    <>
      {/* Start Page Heading Section */}
      <PageHeading
        title="Cloud Integration"
        bgSrc="/services/softwareenterprise/crm.jpg"
        pageLinkText="Cloud Integration"
      />
      {/* End Page Heading Section */}

      {/* Start About Section */}
      <Spacing lg="150" md="80" />
      <Div className="container">
        <Div className="row align-items-center">
          <h3 className="text-primary mb-4">
            Seamless Cloud Integration for Your Business Growth
          </h3>

          {/* Left Column with Text */}
          <Div className="col-lg-6 col-md-12 mb-4 mb-lg-0">
            <p className="fs-6 mb-4">
              At Big Careers Technology solutions, we offer end-to-end cloud
              integration services that empower your business with scalable,
              flexible, and cost-effective cloud solutions. Whether you need to
              migrate to the cloud or integrate existing systems, our team
              ensures smooth transitions and optimal cloud performance.
            </p>
            <p className="mb-5">
              Our cloud integration solutions enable businesses to stay ahead by
              enhancing collaboration, improving data accessibility, and
              boosting operational efficiency.
            </p>
          </Div>

          {/* Right Column with Image */}
          <Div className="col-lg-6 col-md-12 text-center">
            <Image
              src="/services/softwareenterprise/s2.jpg"
              className="img-fluid cs-radius_15 shadow-lg"
              alt="Cloud Integration"
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
                  src="/services/softwareenterprise/s3.jpg"
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
              subtitle="Optimized Cloud Integration Solutions"
            >
              <Spacing lg="30" md="20" />
              <ul className="cs-m0">
                <li>Cloud migration and integration expertise</li>
                <li>Data synchronization across systems</li>
                <li>Seamless connectivity and scalability</li>
                <li>Secure cloud solutions with robust security measures</li>
                <li>Optimized cost management with cloud resources</li>
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
                  src="/services/softwareenterprise/s1.jpg"
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
              subtitle="Transforming Your Business with Cloud Integration"
            >
              <Spacing lg="30" md="20" />
              <p className="cs-m0">
                Big Careers Technology solutions provides robust and reliable
                cloud integration services to accelerate your digital
                transformation. With deep expertise and industry-leading tools,
                we help you connect systems, streamline processes, and enhance
                productivity.
              </p>
              <Spacing lg="15" md="15" />
              <p className="cs-m0">
                Trust us to bring your infrastructure to the cloud securely and
                efficiently, while minimizing disruption and maximizing growth
                potential.
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
