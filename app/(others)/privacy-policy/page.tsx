import React from "react";
import PageHeading from "../../ui/PageHeading";
import ContactFooter from "../../ui/contactpg";

export const metadata = {
  title: "Privacy Policy | Big Careers  solutions",
  description:
    "Read Big Careers  solutions's Privacy Policy to understand how we collect, use, and protect your personal information. We prioritize data security and transparency in AI & ML, Cyber Security, IoT, Blockchain, SAP, DevOps, Cloud, and more.",
  keywords: [
    "Big Careers Technology solutions Privacy Policy",
    "Data Protection",
    "User Privacy",
    "AI & ML Security",
    "Cyber Security Policy",
    "IoT Privacy",
    "Blockchain Security",
    "Cloud Data Protection",
    "GDPR Compliance",
    "Data Engineering Privacy",
  ],
  robots: "index, follow",
  openGraph: {
    title: "Privacy Policy | Big Careers  solutions",
    description:
      "Learn how Big Careers solutions handles data privacy and security across AI, Cyber Security, IoT, Blockchain, SAP, and other technology domains.",
    url: "https://bigcareers.solutions/privacy-policy",
    type: "website",
    image: "/logo.jpg",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | Big Careers  solutions",
    description:
      "Big Careers  solutions is committed to protecting your privacy. Learn more about our data policies and security measures.",
    image: "/logo.jpg",
  },
};

const PrivacyPolicy = () => {
  return (
    <>
      {/* Start Page Heading Section */}
      <PageHeading
        title="Privacy Policy"
        bgSrc="/images/service_hero_bg.jpeg"
        pageLinkText="Privacy Policy"
      />
      {/* End Page Heading Section */}

      {/* Start About Section */}
      <div
        className="m-20 flex flex-col items-center justify-center px-4 text-left"
        style={{ marginTop: "20px" }}
      >
        {/* Main Title */}
        <h2 className="text-center font-bold text-3xl mt-20 mb-8">
          Privacy Policy
        </h2>

        {/* Description */}
        <p className="mb-6 leading-7">
          This Privacy Policy outlines how Big Careers Technology solutions collects, uses, and protects
          your personal data when you visit our website or use our services.
        </p>

        {/* Article 1 */}
        <p className="font-bold text-white mt-8 mb-4 text-xl">
          Article 1. Utilization of Personal Data Collected
        </p>
        <p className="mb-6 leading-7">
          Individual information gathered by Big Careers Technology solutions will be utilized by Big Careers Technology solutions
          for input purposes, for advertising and promotional purposes, for
          product development, for content improvement, and to customize the
          content and layout of the Big Careers Technology solutions website. Names, email addresses, and
          postal data gathered may be added to Big Careers Technology solutions databases and used for
          future communications, mailings regarding site updates, new products
          and services, and upcoming events.
        </p>
        <p className="mb-6 leading-7">
          The user's contact information is used to reach them in case of a
          prize winner and to inform the relevant taxing and regulatory
          authorities regarding drawing prizes granted.
        </p>

        {/* Article 2 */}
        <p className="font-bold text-white mt-8 mb-4 text-xl">
          Article 2. Exposure of Personal Data to Third Parties
        </p>
        <p className="mb-6 leading-7">
          Big Careers Technology solutions will not disclose to third parties any information voluntarily
          or intentionally disclosed by visitors.
        </p>

        {/* Article 3 */}
        <p className="font-bold text-white mt-8 mb-4 text-xl">
          Article 3. Opt-Out Right
        </p>
        <p className="mb-6 leading-7">
          We allow users the opportunity to opt out of receiving communications
          from us at the point where we intentionally request information about
          the visitor. Big Careers Technology solutions also enables users to remove their data from our
          database. If a user removes their data from the Big Careers Technology solutions database, it
          will no longer be used by Big Careers Technology solutions.
        </p>

        {/* Article 4 */}
        <p className="font-bold text-white mt-8 mb-4 text-xl">
          Article 4. Access to and Ability to Correct Personal Data
        </p>
        <p className="mb-6 leading-7">
          Upon request via email, Big Careers Technology solutions will provide visitors with an overview
          of any personal data held by Big Careers Technology solutions related to the visitor. Big Careers Technology solutions
          will only send personal records to the email address on file for the
          visitor's name associated with it. Visitors may amend, correct,
          change, or update their personal record or cause their personal record
          to be removed from Big Careers Technology solutions database. Visitors may change or alter
          information previously provided by contacting Big Careers Technology solutions via email at{" "}
          <a
            href="mailto:info@Big Careers Technology solutions.com"
            className="text-blue-500 hover:underline"
          >
            sales@bigcareers.solutions{" "}
          </a>
          .
        </p>

        {/* Article 5 */}
        <p className="font-bold text-white mt-8 mb-4 text-xl">
          Article 5. Big Careers Technology solutions Right to Contact User
        </p>
        <p className="mb-6 leading-7">
          Big Careers Technology solutions reserves the right to contact site visitors regarding account
          status and changes to subscriber agreements, privacy policies, or any
          other policies or agreements necessary for site visitors.
        </p>

        {/* Article 6 */}
        <p className="font-bold text-white mt-8 mb-4 text-xl">
          Article 6. Big Careers Technology solutions Right to Change Privacy Policy
        </p>
        <p className="mb-6 leading-7">
          Big Careers Technology solutions reserves the right to change this policy at any time by
          informing visitors of the existence and location of the new or updated
          privacy policy.
        </p>

        {/* Article 7 */}
        <p className="font-bold text-white mt-8 mb-4 text-xl">
          Article 7. Big Careers Technology solutions Use of Google AdWords
        </p>
        <p className="mb-6 leading-7">
          Big Careers Technology solutions uses Google Analytics, Google AdWords Conversion Tracker, and
          other Google services, as well as HubSpot, which place cookies on a
          browser over the site. These cookies help us improve the site's
          effectiveness for our visitors. These cookies are set and read by
          Google and HubSpot.
        </p>
        <p className="mb-6 leading-7">
          To opt-out of Google tracking, please visit this page (Google features
          & announcements).
        </p>
        <p className="mb-6 leading-7">
          To opt-out of HubSpot tracking, simply UNSUBSCRIBE.
        </p>
        <p className="mb-6 leading-7">
          We use AdWords remarketing to advertise our sites across the web. We
          place a cookie on a browser, and then a third party (Google) reads
          these cookies and may serve an ad on a third-party website. You may
          opt-out of this ad serving on Google's opt-out page. If you're
          concerned about third-party cookies served by networks, you should
          also visit the Network Advertising Initiative opt-out page.
        </p>

        {/* Contact Section */}
        <p className="font-bold text-white mt-8 mb-4 text-xl">Contact</p>
        <p className="mb-6 leading-7">
          If you have any questions about this privacy statement, the practices
          of this site, or your dealings with this site, contact us at:{" "}
          <a
            href="mailto:sales@bigcareers.solutions"
            className="text-blue-500 hover:underline"
          >
            sales@bigcareers.solutions
          </a>
          .
        </p>
      </div>
      {/* End About Section */}
      <ContactFooter />
    </>
  );
};

export default PrivacyPolicy;
