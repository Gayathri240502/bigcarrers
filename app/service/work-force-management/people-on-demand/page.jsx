import Image from "next/image";
import Div from "../../../ui/Div";
import PageHeading from "../../../ui/PageHeading";
import SectionHeading from "../../../ui/SectionHeading";
import Spacing from "../../../ui/Spacing";
import ContactFooter from "/app/ui/contactpg";

export const metadata = {
  title: "People on Demand Services | Big Careers Technology solutions",
  description:
    "Big Careers Technology solutions offers people on demand services to help businesses quickly access skilled talent for short-term projects, seasonal workloads, and urgent staffing needs, providing flexible and efficient workforce solutions.",
  keywords: [
    "People on Demand",
    "On-Demand Staffing",
    "Temporary Staffing",
    "Freelance Talent",
    "Short-Term Staffing",
    "Flexible Workforce",
    "Staffing Solutions",
    "Recruitment Services",
    "Skilled Talent",
    "Workforce Solutions",
    "Contract Staffing",
    "Urgent Staffing",
  ],
  robots: "index, follow",
  openGraph: {
    title: "People on Demand Services | Big Careers Technology solutions",
    description:
      "Big Careers Technology solutions’s people on demand services provide businesses with flexible access to skilled talent for short-term projects, urgent staffing needs, and seasonal workloads, ensuring efficiency and scalability.",
    url: "https://bigcareers.solutions/people-on-demand",
    type: "website",
    image: "/logo.jpg",
  },
  twitter: {
    card: "summary_large_image",
    title: "People on Demand Services | Big Careers Technology solutions",
    description:
      "Access skilled talent on demand with Big Careers Technology solutions’s flexible staffing solutions for short-term projects, urgent needs, and seasonal workloads, boosting business efficiency.",
    image: "/logo.jpg",
  },
};

export default function PeopleOnDemandPage() {
  return (
    <>
      {/* Start Page Heading Section */}
      <PageHeading
        title="People On Demand"
        bgSrc="/services/workforce/ppl.jpg"
        pageLinkText="People On Demand"
      />
      {/* End Page Heading Section */}

      {/* Start About Section */}
      <Spacing lg="150" md="80" />
      <Div className="container">
        <Div className="row align-items-center">
          <h3 className="text-primary mb-4">
            On-Demand Workforce Solutions for Every Business Need
          </h3>

          {/* Left Column with Text */}
          <Div className="col-lg-6 col-md-12 mb-4 mb-lg-0">
            <p className="fs-6 mb-4">
              Big Careers Technology solutions offers people-on-demand solutions
              that allow businesses to quickly scale their workforce to meet
              dynamic needs. Whether it's a short-term project or a long-term
              contract, we provide access to a pool of skilled professionals who
              can step in when you need them most.
            </p>
            <p className="mb-5">
              Our platform simplifies workforce management, enabling businesses
              to stay flexible, reduce hiring time, and keep projects on track
              without compromising on quality.
            </p>
          </Div>

          {/* Right Column with Image */}
          <Div className="col-lg-6 col-md-12 text-center">
            <Image
              src="/services/workforce/s16.jpg"
              className="img-fluid cs-radius_15 shadow-lg"
              alt="People On Demand"
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
                  src="/services/workforce/s13.jpg"
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
              subtitle="On-Demand Workforce to Scale Your Business"
            >
              <Spacing lg="30" md="20" />
              <ul className="cs-m0">
                <li>Access to a wide range of skilled professionals</li>
                <li>Quick deployment for urgent projects</li>
                <li>Flexible contract terms and workforce scaling</li>
                <li>Cost-effective workforce management</li>
                <li>Easy integration with existing teams and projects</li>
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
                  src="/services/workforce/s7.jpg"
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
              subtitle="Efficient and Flexible Workforce Solutions"
            >
              <Spacing lg="30" md="20" />
              <p className="cs-m0">
                Big Careers Technology solutions provides access to an agile and
                experienced workforce, ready to meet the demands of your
                business. Whether you need temporary staff or long-term
                contractors, our platform ensures you can quickly scale your
                workforce to meet operational requirements.
              </p>
              <Spacing lg="15" md="15" />
              <p className="cs-m0">
                We give you the flexibility to focus on your core business while
                we manage the workforce that drives success.
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
