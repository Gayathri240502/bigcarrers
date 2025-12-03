import Image from "next/image";
import Div from "../../../ui/Div";
import PageHeading from "../../../ui/PageHeading";
import SectionHeading from "../../../ui/SectionHeading";
import Spacing from "../../../ui/Spacing";
import ContactFooter from "/app/ui/contactpg";

export const metadata = {
  title: "Staffing and Recruitment Services | Big Careers Technology solutions",
  description:
    "Big Careers Technology solutions offers staffing and recruitment services to help businesses find and hire top talent for full-time, part-time, and temporary positions, ensuring a seamless recruitment process and long-term success.",
  keywords: [
    "Staffing and Recruitment",
    "Talent Acquisition",
    "Recruitment Services",
    "Hiring Solutions",
    "Employee Recruitment",
    "Staffing Solutions",
    "Permanent Staffing",
    "Temporary Staffing",
    "Executive Search",
    "Recruitment Process Outsourcing",
    "Job Placement",
    "Talent Management",
  ],
  robots: "index, follow",
  openGraph: {
    title:
      "Staffing and Recruitment Services | Big Careers Technology solutions",
    description:
      "Streamline your hiring process with Big Careers Technology solutions’s staffing and recruitment services, offering talent acquisition solutions for full-time, part-time, and temporary positions to meet your business needs.",
    url: "https://bigcareers.solutions/staffing-recruitment",
    type: "website",
    image: "/logo.jpg",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Staffing and Recruitment Services | Big Careers Technology solutions",
    description:
      "Find top talent for your business with Big Careers Technology solutions’s staffing and recruitment services, offering full-time, part-time, and temporary staffing solutions to match your needs.",
    image: "/logo.jpg",
  },
};

export default function StaffingAndRecruitmentPage() {
  return (
    <>
      {/* Start Page Heading Section */}
      <PageHeading
        title="Staffing and Recruitment"
        bgSrc="/services/workforce/rec.jpg"
        pageLinkText="Staffing and Recruitment"
      />
      {/* End Page Heading Section */}

      {/* Start About Section */}
      <Spacing lg="150" md="80" />
      <Div className="container">
        <Div className="row align-items-center">
          <h3 className="text-primary mb-4">
            Efficient Staffing and Recruitment Solutions
          </h3>

          {/* Left Column with Text */}
          <Div className="col-lg-6 col-md-12 mb-4 mb-lg-0">
            <p className="fs-6 mb-4">
              Big Careers Technology solutions offers comprehensive staffing and
              recruitment services, ensuring that your business has access to
              the right talent at the right time. We streamline the hiring
              process, matching qualified candidates with the specific needs of
              your organization.
            </p>
            <p className="mb-5">
              With our expertise, we help you fill critical roles efficiently
              and effectively, minimizing downtime and maximizing productivity.
            </p>
          </Div>

          {/* Right Column with Image */}
          <Div className="col-lg-6 col-md-12 text-center">
            <Image
              src="/services/workforce/s12.jpg"
              className="img-fluid cs-radius_15 shadow-lg"
              alt="Staffing and Recruitment"
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
                  src="/services/workforce/s11.jpg"
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
              subtitle="Streamlining Your Recruitment Process"
            >
              <Spacing lg="30" md="20" />
              <ul className="cs-m0">
                <li>Access to a wide talent pool</li>
                <li>Efficient recruitment and screening process</li>
                <li>Temporary and permanent staffing solutions</li>
                <li>
                  Tailored recruitment strategies for different industries
                </li>
                <li>On-demand staffing for immediate needs</li>
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
                  src="/services/workforce/s13.jpg"
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
              subtitle="Your Partner in Talent Acquisition"
            >
              <Spacing lg="30" md="20" />
              <p className="cs-m0">
                Big Careers Technology solutions streamlines your staffing and
                recruitment process by matching the best candidates to your
                organization’s needs. Whether you need to fill full-time roles
                or temporary positions, we provide flexible and fast solutions
                to meet your requirements.
              </p>
              <Spacing lg="15" md="15" />
              <p className="cs-m0">
                Our recruitment experts work closely with you to understand your
                culture and needs, ensuring the perfect fit for your team.
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
