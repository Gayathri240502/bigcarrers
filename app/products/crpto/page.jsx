import {
  FaBitcoin,
  FaWallet,
  FaChartLine,
  FaRegHandshake,
  FaLock,
  FaExchangeAlt,
} from "react-icons/fa"; // Importing new icons from react-icons
import Button from "../../ui/Button";
import Div from "../../ui/Div";
import IconBox from "../../ui/IconBox";
import PageHeading from "../../ui/PageHeading";
import SectionHeading from "../../ui/SectionHeading";
import Spacing from "../../ui/Spacing";
import Image from "next/image";
import ContactFooter from "/app/ui/contactpg";

export const metadata = {
  title: "Cryptocurrency Solutions | Big Careers  solutions",
  description:
    "Explore s solutions's Cryptocurrency solutions, powered by Blockchain, AI & ML, Cyber Security, and Cloud technologies to enhance trading, security, and blockchain integration in the digital currency space.",
  keywords: [
    "Cryptocurrency Solutions",
    "Blockchain in Cryptocurrency",
    "AI for Cryptocurrency",
    "Crypto Security",
    "Cryptocurrency Trading",
    "Blockchain Integration",
    "Crypto Wallet Solutions",
    "Blockchain Development",
    "Digital Currency",
    "Cryptocurrency Technology",
    "Crypto Asset Management",
  ],
  robots: "index, follow",
  openGraph: {
    title: "Cryptocurrency Solutions | Big Careers solutions",
    description:
      "Big Careers solutions offers cutting-edge solutions for the Cryptocurrency industry, leveraging Blockchain, AI, and Cyber Security to enhance trading platforms and digital currency services.",
    url: "https://bigcareers.solutions/cryptocurrency-solutions",
    type: "website",
    image: "/logo.jpg",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cryptocurrency Solutions | Big Careers solutions",
    description:
      "Big Careers solutions provides innovative Cryptocurrency solutions using Blockchain, AI, and Cyber Security to drive secure and efficient digital currency services.",
    image: "/logo.jpg",
  },
};

const services = [
  {
    icon: <FaBitcoin className="mb-4" style={{ fontSize: "4rem" }} />,
    title: "Crypto Trading",
    subtitle:
      "Buy, sell, and trade a variety of cryptocurrencies with real-time market data, fast transactions, and secure storage.",
  },
  {
    icon: <FaWallet className="mb-4" style={{ fontSize: "4rem" }} />,
    title: "Crypto Wallets",
    subtitle:
      "Manage your crypto assets securely with our advanced wallets. Store, send, and receive cryptocurrencies in a safe environment.",
  },
  {
    icon: <FaChartLine className="mb-4" style={{ fontSize: "4rem" }} />,
    title: "Market Insights & Analytics",
    subtitle:
      "Get real-time market analysis, price tracking, and trends to make informed decisions in the fast-moving crypto space.",
  },
  {
    icon: <FaRegHandshake className="mb-4" style={{ fontSize: "4rem" }} />,
    title: "Crypto Staking",
    subtitle:
      "Earn rewards by staking your crypto assets. Take advantage of staking opportunities and grow your portfolio passively.",
  },
  {
    icon: <FaLock className="mb-4" style={{ fontSize: "4rem" }} />,
    title: "Crypto Security",
    subtitle:
      "Protect your crypto assets with state-of-the-art security measures, including multi-factor authentication and end-to-end encryption.",
  },
  {
    icon: <FaExchangeAlt className="mb-4" style={{ fontSize: "4rem" }} />,
    title: "Fiat-to-Crypto Conversion",
    subtitle:
      "Easily convert your fiat currency into cryptocurrency and vice versa with smooth and fast conversion processes.",
  },
];

export default function CryptoDetailsPage() {
  return (
    <>
      {/* Page Heading */}
      <PageHeading
        title="Crypto Currency"
        bgSrc="/products/c1.jpg"
        pageLinkText="Crypto Solutions"
      />
      <Spacing lg="145" md="80" />

      {/* About Section */}
      <Div className="container">
        <SectionHeading
          title="Cryptocurrency Solutions"
          subtitle="Explore the world of cryptocurrencies with our innovative solutions. From trading to secure storage, we offer a complete platform to manage your digital assets."
          variant="cs-style1 text-center"
        />
        <Spacing lg="90" md="45" />
        <Div className="row">
          {services.map((service, index) => (
            <Div className="col-lg-4" key={index}>
              <div className="text-center">
                {service.icon}
                <h3 className="text-xl font-bold mt-4">{service.title}</h3>
                <p className="mt-2">{service.subtitle}</p>
              </div>
              <Spacing lg="30" md="30" />
            </Div>
          ))}
        </Div>
      </Div>

      {/* Image Section */}
      <Spacing lg="120" md="50" />
      <Div className="container">
        <Div className="row align-items-center">
          <Div className="col-xl-5 col-lg-6">
            <Div className="cs-radius_15 cs-shine_hover_1">
              <Image
                src="/products/c2.jpg"
                alt="Crypto Service"
                width={600}
                height={600}
                className="cs-radius_15"
              />
            </Div>
            <Spacing lg="0" md="40" />
          </Div>
          <Div className="col-lg-6 offset-xl-1">
            <h2 className="cs-font_50 cs-m0">Empowering Your Crypto Journey</h2>
            <Spacing lg="50" md="30" />
            <p>
              At <strong>Big Careers Technology solutions</strong>, we provide
              comprehensive cryptocurrency management solutions, enabling you to
              trade, store, and stake digital assets safely and securely. Our
              platform offers powerful tools for crypto enthusiasts and
              professionals alike.
            </p>
          </Div>
        </Div>
      </Div>

      <Spacing lg="120" md="50" />

      {/* Key Benefits Section */}
      <Div className="container">
        <SectionHeading
          title="Key Benefits of Our Crypto Solutions"
          subtitle="Why Choose Big Careers Technology solutions for Crypto Solutions?"
        >
          <Spacing lg="30" md="20" />
          <Div className="row">
            {/* Left Column with Text */}
            <Div className="col-lg-6 col-md-12">
              <ul className="cs-m0">
                <li>
                  Real-time trading and market insights for informed
                  decision-making.
                </li>
                <li>Secure crypto wallets to store your assets safely.</li>
                <li>Easy fiat-to-crypto and crypto-to-fiat conversion.</li>
                <li>
                  Powerful analytics tools to track trends and manage
                  investments.
                </li>
                <li>
                  Staking opportunities to earn passive income from your assets.
                </li>
                <li>
                  State-of-the-art security protocols to protect your assets.
                </li>
                <li>Instant and smooth transactions with low fees.</li>
                <li>
                  Comprehensive portfolio management tools to track your crypto
                  holdings.
                </li>
              </ul>
            </Div>
            {/* Right Column with Image */}
            <Div className="col-lg-6 col-md-12 text-center">
              <Image
                src="/products/c3.jpg"
                alt="Key Benefits"
                className="img-fluid cs-radius_15 shadow-lg"
                width={500}
                height={500}
              />
            </Div>
          </Div>
        </SectionHeading>
      </Div>

      <Spacing lg="120" md="50" />

      {/* Why Choose Us Section */}
      <Div className="container">
        <Div className="row">
          <Div className="col-xl-5 col-lg-6">
            <SectionHeading
              title="Why Choose Us"
              subtitle="Comprehensive Crypto Solutions for Your Digital Assets"
            >
              <Spacing lg="30" md="20" />
              <p className="cs-m0">
                At <strong>Big Careers Technology solutions</strong>, we aim to
                simplify the world of cryptocurrencies for you. Whether you are
                an experienced investor or just starting your crypto journey,
                our platform is designed to cater to all your needs, from secure
                wallets to market analytics and staking opportunities.
              </p>
              <Spacing lg="15" md="15" />
              <p className="cs-m0">
                Our platform ensures that you have access to cutting-edge
                technology, enhanced security, and seamless crypto management
                tools to grow and protect your digital assets effectively.
              </p>
            </SectionHeading>
          </Div>
          {/* Right Column with Image */}
          <Div className="col-xl-5 offset-xl-1 col-lg-6">
            <Div className="cs-image_layer cs-style1">
              <Div className="cs-image_layer_in">
                <Image
                  src="/products/c1.jpg"
                  alt="Why Choose Us"
                  className="w-100 cs-radius_15"
                  width={500}
                  height={500}
                />
              </Div>
            </Div>
            <Spacing lg="0" md="40" />
          </Div>
        </Div>
      </Div>

      <Spacing lg="150" md="80" />
      <ContactFooter />
    </>
  );
}
