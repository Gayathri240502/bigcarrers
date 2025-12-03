"use client";
import { useState } from "react";
import Div from "../ui/Div";
import PageHeading from "../ui/PageHeading";
import Spacing from "../ui/Spacing";
import ContactInfoWidget from "../ui/Widget/ContactInfoWidget";
import { FaArrowRight } from "react-icons/fa6";
import Head from "next/head";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    projectType: "",
    mobile: "",
    message: "",
  });

  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [error, setError] = useState("");

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (
      !formData.fullName ||
      !formData.email ||
      !formData.projectType ||
      !formData.mobile ||
      !formData.message
    ) {
      setError("All fields are required.");
      return;
    }

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (result.success) {
        setIsPopupVisible(true);
        setFormData({
          fullName: "",
          email: "",
          projectType: "",
          mobile: "",
          message: "",
        });
      } else {
        setError("Failed to send email. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <>
      <Head>
        <title>Contact Us | Big Careers Technology solutions</title>
        <meta
          name="description"
          content="Get in touch with Big Careers Technology solutions for AI & ML, Cyber Security, IoT, Blockchain, Cloud, and consulting services."
        />
        <meta
          name="keywords"
          content="Contact Big Careers Technology solutions, AI, Cyber Security, Blockchain, SAP, DevOps, Cloud, Consulting"
        />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="Contact Us | Big Careers Technology solutions"
        />
        <meta
          property="og:description"
          content="Reach out to Big Careers Technology solutions for expert support in AI, Cyber Security, and more."
        />
        <meta property="og:image" content="/logo.jpg" />
        <meta
          property="og:url"
          content="https://bigcareers.solutions/contact"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Contact Us | Big Careers Technology solutions"
        />
        <meta
          name="twitter:description"
          content="Need assistance? Contact Big Careers Technology solutions today."
        />
        <meta name="twitter:image" content="/logo.jpg" />
      </Head>

      <div className="mx-3">
        <PageHeading
          title="Contact Us"
          bgSrc="/Home/contactt.jpg"
          pageLinkText="Contact"
        />
        <Spacing lg="100" md="50" />

        <Div className="container">
          <Div className="row">
            <Div className="col-lg-6">
              <ContactInfoWidget withIcon />
              <Spacing lg="0" md="50" />
            </Div>
            <Div className="col-lg-6">
              <form onSubmit={handleSubmit} className="row">
                <Div className="col-sm-6">
                  <label className="cs-primary_color">Full Name*</label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="cs-form_field"
                    required
                  />
                  <Spacing lg="20" md="20" />
                </Div>
                <Div className="col-sm-6">
                  <label className="cs-primary_color">Email*</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="cs-form_field"
                    required
                  />
                  <Spacing lg="20" md="20" />
                </Div>
                <Div className="col-sm-6">
                  <label className="cs-primary_color">Project Type*</label>
                  <input
                    type="text"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className="cs-form_field"
                    required
                  />
                  <Spacing lg="20" md="20" />
                </Div>
                <Div className="col-sm-6">
                  <label className="cs-primary_color">Mobile*</label>
                  <input
                    type="text"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    className="cs-form_field"
                    required
                  />
                  <Spacing lg="20" md="20" />
                </Div>
                <Div className="col-sm-12">
                  <label className="cs-primary_color">Message*</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    cols="30"
                    rows="7"
                    className="cs-form_field"
                    required
                  ></textarea>
                  <Spacing lg="25" md="25" />
                </Div>
                <Div className="col-sm-12">
                  {error && <p className="error-message">{error}</p>}
                  <button type="submit" className="cs-btn cs-style1">
                    <span>Send Message</span>
                    <FaArrowRight />
                  </button>
                </Div>
              </form>
            </Div>
          </Div>
        </Div>

        {isPopupVisible && (
          <div className="popup">
            <div className="popup-content">
              <p className="text-gray-700">
                Your message has been sent successfully!
              </p>
              <button onClick={() => setIsPopupVisible(false)}>Close</button>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        .popup {
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background: white;
          color: black;
          padding: 20px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
          z-index: 1000;
          border-radius: 8px;
          text-align: center;
        }
        .popup-content {
          font-size: 16px;
          font-weight: bold;
        }
        .popup button {
          margin-top: 10px;
          padding: 5px 10px;
          background: #007bff;
          color: white;
          border: none;
          border-radius: 5px;
          cursor: pointer;
        }
        .error-message {
          color: red;
          font-size: 14px;
          margin-bottom: 10px;
        }
      `}</style>
    </>
  );
}
