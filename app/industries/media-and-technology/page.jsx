import Div from "../../ui/Div";
import PageHeading from "../../ui/PageHeading";
import SectionHeading from "../../ui/SectionHeading";
import Spacing from "../../ui/Spacing";
import ContactFooter from "/app/ui/contactpg";

export const metadata = {
  title: "Media and Technology Services | Big Careers Technology solutions",
  description:
    "Discover Big Careers Technology solutions's innovative solutions for the Media and Technology industries, powered by AI & ML, Cyber Security, Blockchain, Data Analytics, and Cloud to transform media production, content distribution, and technology infrastructure.",
  keywords: [
    "Media and Technology Solutions",
    "AI in Media",
    "Cyber Security for Technology",
    "Blockchain in Media",
    "Data Analytics in Media",
    "Cloud Solutions for Media",
    "Technology Transformation",
    "Media Production Innovation",
    "Content Distribution Technology",
    "Digital Media Services",
  ],
  robots: "index, follow",
  openGraph: {
    title: "Media and Technology Services | Big Careers Technology solutions",
    description:
      "Big Careers Technology solutions offers cutting-edge AI, Blockchain, Cyber Security, and Data Analytics solutions for the Media and Technology industries, enhancing content creation and tech infrastructure.",
    url: "https://bigcareers.solutions/media-and-technology-services",
    type: "website",
    image: "/logo.jpg",
  },
  twitter: {
    card: "summary_large_image",
    title: "Media and Technology Services | Big Careers Technology solutions",
    description:
      "Big Careers Technology solutions provides innovative solutions in AI, Cyber Security, Blockchain, and Data Analytics for the Media and Technology sectors.",
    image: "/logo.jpg",
  },
};

export default function MediaTechnologyDetailsPage() {
  return (
    <>
      <PageHeading
        title="Media & Technology Solutions"
        bgSrc="/industry/media.jpg"
        pageLinkText="Innovating Media & Technology"
      />
      <Spacing lg="145" md="80" />
      <Div className="container">
        <SectionHeading
          title="Media & Technology Solutions"
          subtitle="Empowering businesses with innovative solutions to stay ahead in the digital era."
          variant="cs-style1 text-center"
        />
        <Spacing lg="90" md="45" />
        <Div className="row">
          <Div className="col-lg-12">
            <p>
              The media and technology industries are undergoing rapid
              transformation, driven by advancements in digital technology,
              evolving consumer preferences, and innovative platforms.
            </p>
            <p>
              At Big Careers solutions, we provide tailored solutions
              to empower your business to thrive in this ever-evolving
              landscape.
            </p>
            <Spacing lg="30" md="30" />
            <h3 className="cs-font_30 cs-mb-30 text-center">
              Our Custom Solutions
            </h3>
            <Div className="row">
              {[
                {
                  title: "Content Management and Distribution",
                  description:
                    "Advanced CMS for seamless creation and multi-platform distribution.",
                  icon: "📦",
                },
                {
                  title: "Streaming Services",
                  description:
                    "Scalable solutions for live streaming, VOD, and pay-per-view services.",
                  icon: "📡",
                },
                {
                  title: "Personalized User Experience",
                  description:
                    "AI-powered engines for tailored content recommendations.",
                  icon: "🤖",
                },
                {
                  title: "Social Media Integration",
                  description:
                    "Engagement tracking and tools for community building.",
                  icon: "📲",
                },
              ].map((item, index) => (
                <Div
                  key={index}
                  style={{
                    background: "#ffffff",
                    border: "1px solid #e0e0e0",
                    borderRadius: "12px",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                    padding: "20px",
                    margin: "15px",
                    textAlign: "center",
                    transition: "transform 0.3s ease",
                  }}
                >
                  <Div
                    style={{
                      fontSize: "36px",
                      color: "#007bff",
                      marginBottom: "15px",
                    }}
                  >
                    {item.icon}
                  </Div>
                  <h4
                    style={{
                      fontSize: "20px",
                      fontWeight: "bold",
                      marginBottom: "10px",
                      color: "#333333",
                    }}
                  >
                    {item.title}
                  </h4>
                  <p style={{ fontSize: "16px", color: "#555555" }}>
                    {item.description}
                  </p>
                </Div>
              ))}
            </Div>
          </Div>
        </Div>
      </Div>
      <Spacing lg="120" md="50" />
      <Div className="container">
        <Div className="row align-items-center">
          <Div className="col-xl-5 col-lg-6">
            <Div className="cs-radius_15 cs-shine_hover_1">
              <img
                src="/industry/media1.jpg"
                alt="Media & Technology Solutions"
                className="cs-radius_15 w-100"
              />
            </Div>
          </Div>
          <Div className="col-lg-6 offset-xl-1">
            <h2 className="cs-font_50 cs-m0">Innovating Media & Technology</h2>
            <Spacing lg="30" md="20" />
            <p className="cs-font_18">
              From AR/VR solutions to AI-powered content creation, Big Careers
              Technology solutions helps media and technology businesses adapt
              to the evolving digital landscape and deliver exceptional
              experiences to their audiences.
            </p>
          </Div>
        </Div>
      </Div>
      <Spacing lg="150" md="80" />
      <ContactFooter />
    </>
  );
}
