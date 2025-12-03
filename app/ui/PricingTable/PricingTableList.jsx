"use client";

import React, { useState } from "react";

export default function PricingTableList({ initialTab }) {
  const [tab, setTab] = useState(initialTab || "ARTIFICIAL INTELLIGENCE");

  const cardsData = {
    "ARTIFICIAL INTELLIGENCE": [
      {
        title: "Predictive Analytics",
        features:
          "Leverage advanced machine learning models to forecast future trends and behaviors, enabling data-driven decision-making for improved business outcomes.",
      },
      {
        title: "Natural Language Processing",
        features:
          "Automate customer interactions and streamline text analysis through cutting-edge NLP models for sentiment analysis and contextual understanding.",
      },
      {
        title: "Computer Vision",
        features:
          "Enable accurate image and video recognition for security, automation, and medical diagnosis applications.",
      },
      {
        title: "AI Chatbots",
        features:
          "Provide responsive, intelligent virtual assistants to enhance customer experience and reduce operational costs.",
      },
      {
        title: "Personalized Marketing",
        features:
          "Optimize marketing campaigns with AI-driven segmentation and customized content tailored to individual customer preferences.",
      },
      {
        title: "AI Model Optimization",
        features:
          "Refine machine learning models for greater efficiency, accuracy, and scalability across various applications.",
      },
    ],

    "software-enterprise": [
      {
        title: "Enterprise Resource Planning",
        features:
          "Streamline business operations with integrated ERP solutions, improving efficiency and reducing costs.",
      },
      {
        title: "Customer Relationship Management",
        features:
          "Enhance customer interactions and track sales pipelines with advanced CRM tools.",
      },
      {
        title: "Custom Software Development",
        features:
          "Develop tailored applications that meet unique organizational needs and drive innovation.",
      },
      {
        title: "Cloud Integration",
        features:
          "Enable seamless data synchronization and scalability with robust cloud integration services.",
      },
      {
        title: "Workflow Automation",
        features:
          "Boost productivity by automating repetitive tasks and optimizing workflows.",
      },
      {
        title: "Business Intelligence Solutions",
        features:
          "Gain actionable insights from data analytics to make informed strategic decisions.",
      },
    ],

    "workforce-management": [
      {
        title: "Employee Scheduling",
        features:
          "Simplify workforce management with automated scheduling and real-time updates.",
      },
      {
        title: "Performance Analytics",
        features:
          "Track employee performance and productivity with advanced analytics tools.",
      },
      {
        title: "Payroll Automation",
        features:
          "Streamline payroll processing and compliance with automated tools.",
      },
      {
        title: "Training and Development",
        features:
          "Deliver personalized training programs to upskill employees and enhance engagement.",
      },
      {
        title: "HR Management Tools",
        features:
          "Optimize recruitment, onboarding, and employee records management with comprehensive HR tools.",
      },
      {
        title: "Workforce Optimization",
        features:
          "Utilize data-driven insights to align workforce resources with organizational goals.",
      },
    ],
    "data-engineering": [
      {
        title: "Data Warehousing",
        features:
          "Consolidate organizational data into centralized repositories for efficient access and analysis.",
      },
      {
        title: "ETL Process Automation",
        features:
          "Automate data extraction, transformation, and loading processes for seamless data integration.",
      },
      {
        title: "Real-Time Analytics",
        features:
          "Gain instant insights through real-time data processing and visualization tools.",
      },
      {
        title: "Big Data Management",
        features:
          "Handle large-scale data efficiently with advanced tools and frameworks.",
      },
      {
        title: "Data Governance",
        features:
          "Ensure data quality, security, and compliance with robust governance frameworks.",
      },
      {
        title: "Predictive Modeling",
        features:
          "Utilize statistical models and machine learning techniques to anticipate future trends.",
      },
    ],
  };

  return (
    <section style={{ position: "relative", padding: "2.5rem" }}>
      {/* Tabs */}
      <div
        style={{
          overflowX: "auto",
          whiteSpace: "nowrap",
          marginBottom: "1.5rem",
          display: "flex",
          gap: "1rem",
        }}
      >
        <ul
          style={{
            display: "flex",
            gap: "1rem",
            fontSize: "0.875rem",
            textTransform: "uppercase",
            fontWeight: "500",
            color: "#4B5563",
          }}
        >
          {Object.keys(cardsData).map((key) => (
            <li
              key={key}
              style={{
                cursor: "pointer",
                listStyle: "none",
                padding: "0.5rem 1rem",
                borderRadius: "0.375rem",
                border: tab === key ? "1px solid #3B82F6" : "1px solid #D1D5DB",
                color: tab === key ? "#3B82F6" : "#4B5563",
                transition: "border-color 0.3s",
              }}
              onClick={() => setTab(key)}
            >
              {key}
            </li>
          ))}
        </ul>
      </div>

      {/* Tab Content */}
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(1, 1fr)",
          gap: "1.5rem",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        }}
      >
        {cardsData[tab] ? (
          cardsData[tab].map((card, index) => (
            <div
              key={index}
              style={{
                backgroundColor: "#f5ebe0",
                color: "white",
                padding: "1.5rem",
                borderRadius: "0.5rem",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              }}
            >
              <h4
                style={{
                  fontSize: "1.125rem",
                  fontWeight: "600",
                  marginBottom: "0.5rem",
                }}
              >
                {card.title}
              </h4>
              <p style={{ color: "#5c5c5dff" }}>{card.features}</p>
            </div>
          ))
        ) : (
          <p style={{ color: "#4B5563" }}>No content available for this tab.</p>
        )}
      </section>
    </section>
  );
}

// Server-side rendering to initialize the default tab
export async function getServerSideProps(context) {
  const { tab } = context.query;

  return {
    props: {
      initialTab: tab || "ARTIFICIAL INTELLIGENCE", // Default tab
    },
  };
}
