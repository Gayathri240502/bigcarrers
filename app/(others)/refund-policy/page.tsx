import React from "react";
import PageHeading from "../../ui/PageHeading";
import ContactFooter from "../../ui/contactpg";
export const metadata = {
  title: "Refund Policy | Big Careers Technology solutions",
  description:
    "Read Big Careers Technology solutions's Refund Policy to understand the terms and conditions for refunds on our AI & ML, Cyber Security, IoT, Blockchain, SAP, DevOps, Cloud, and consulting services.",
  keywords: [
    "Big Careers Technology solutions Refund Policy",
    "Refund Terms",
    "Service Refunds",
    "Big Careers Technology solutions Payments",
    "AI & ML Refunds",
    "Cyber Security Services Refund",
    "IoT Refund Policy",
    "Blockchain Service Refunds",
    "Cloud Consulting Refund",
    "SAP & DevOps Refund Terms",
  ],
  robots: "index, follow",
  openGraph: {
    title: "Refund Policy | Big Careers Technology solutions",
    description:
      "Understand Big Careers Technology solutions's refund process for AI, Cyber Security, IoT, Blockchain, SAP, Cloud, and consulting services.",
    url: "https://bigcareers.solutions/refund-policy",
    type: "website",
    image: "/logo.jpg",
  },
  twitter: {
    card: "summary_large_image",
    title: "Refund Policy | Big Careers Technology solutions",
    description:
      "Learn about Big Careers Technology solutions's refund terms and conditions for our AI, Cyber Security, Cloud, and consulting services.",
    image: "/logo.jpg",
  },
};

const refundpolicy = () => {
  return (
    <>
      {/* Start Page Heading Section */}
      <PageHeading
        title="Refund Policy"
        bgSrc="/images/service_hero_bg.jpeg"
        pageLinkText="Refund Policy"
      />
      {/* End Page Heading Section */}

      {/* Start Privacy Policy Content Section */}
      <div
        className="m-20 flex flex-col items-center justify-center px-4 text-left"
        style={{ marginTop: "20px" }}
      >
        {/* Main Title */}
        <h2 className="text-center font-bold text-3xl mt-20 mb-8">
          Refund Policy
        </h2>

        <h3 className="details_item_info_title">Scope of This Policy</h3>
          <p>
            This Cancellation & Refund Policy applies to all software products,
            subscriptions, support packages, and professional-services
            engagements purchased directly from Big Careers Technology solutions Business Pvt Ltd
            (“Big Careers Technology solutions,” “we,” “us,” or “our”). Third-party marketplaces or
            resellers may have their own terms.
          </p>

          {/* 2. Cancellation Policy */}
          <h3 className="details_item_info_title">Cancellation Policy</h3>
          <p>
            Customers may request cancellation of a service or subscription by
            contacting us at{" "}
            <a href="mailto:sales@bigcareers.solutions">sales@bigcareers.solutions</a> before the
            next billing cycle or before the project has reached an irreversible
            stage of development.
          </p>
          <ul>
            <li>
              Cancellations of ongoing consulting or development projects must
              be requested in writing.
            </li>
            <li>
              Work already completed up to the point of cancellation will be
              billed and is non-refundable.
            </li>
            <li>
              Prepaid subscriptions may qualify for pro-rated refunds (see
              below).
            </li>
          </ul>

          {/* 3. Refund Eligibility */}
          <h3 className="details_item_info_title">Refund Eligibility</h3>
          <p>
            Refund requests are eligible within <strong>45 days</strong> of the
            original invoice date for subscription or one-time software license
            fees, provided:
          </p>
          <ul>
            <li>The product or service has not been materially delivered;</li>
            <li>No irreversible custom development work has commenced;</li>
            <li>
              The request is made by the original contracting entity or its
              authorized representative.
            </li>
          </ul>

          {/* 4. Non-Refundable Items */}
          <h3 className="details_item_info_title">Non-Refundable Items</h3>
          <ul>
            <li>Domain registrations or third-party license costs</li>
            <li>Completed consulting hours or milestone-based deliverables</li>
            <li>Setup, onboarding, or training fees already rendered</li>
          </ul>

          {/* 5. Request Procedure */}
          <h3 className="details_item_info_title">
            How to Request a Cancellation or Refund
          </h3>
          <p>
            Email <a href="mailto:sales@bigcareers.solutions">sales@bigcareers.solutions</a> with:
          </p>
          <ol>
            <li>Purchase order or invoice number</li>
            <li>Reason for the cancellation/refund request</li>
            <li>Preferred method of reimbursement</li>
          </ol>
          <p>
            Our finance team will acknowledge your request within two (2)
            business days and may request additional information.
          </p>

          {/* 6. Processing Time */}
          <h3 className="details_item_info_title">Processing Time</h3>
          <p>
            Approved refunds are typically processed within{" "}
            <strong>7–10 business days</strong>. Credit will be applied to the
            original method of payment unless otherwise agreed in writing.
          </p>

          {/* 7. Pro-Rated Refunds */}
          <h3 className="details_item_info_title">Pro-Rated Refunds</h3>
          <p>
            For annual or multi-month subscriptions canceled early, refunds are
            pro-rated based on unused full months, less any applicable discounts
            or promotional credits.
          </p>

          {/* 8. Chargebacks */}
          <h3 className="details_item_info_title">Chargebacks</h3>
          <p>
            Initiating a chargeback without first contacting Big Careers Technology solutions may result
            in suspension of services and additional administrative fees.
          </p>

          {/* 9. Changes */}
          <h3 className="details_item_info_title">Changes to This Policy</h3>
          <p>
            Big Careers Technology solutions reserves the right to amend this Cancellation & Refund Policy
            at any time. Updates will be posted on this page with a revised
            “Last Updated” date. Continued use of our services after changes
            signifies acceptance of the revised terms.
          </p>

          {/* 10. Contact */}
          <h3 className="details_item_info_title">Contact Us</h3>
          <p>
            Questions about cancellations or refunds should be sent to{" "}
            <a href="mailto:sales@bigcareers.solutions">sales@bigcareers.solutions</a> or directed
            to:
          </p>
          <address style={{ lineHeight: 1.6 }}>
            Big Careers Technology solutions Business Pvt Ltd
            <br />
            Survey No. 64, Building Number 9, Mindspace
            <br />
            13th Floor, Madhapur, Hyderabad 500081
            <br />
            Telangana, India
          </address>
        
      </div>
      {/* End refund policy Content Section */}
      <ContactFooter />
    </>
  );
};

export default refundpolicy;
