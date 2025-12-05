"use client";

import React, { useState } from "react";

export default function PricingTableList({ initialTab }) {
  const [tab, setTab] = useState(initialTab || "MAN POWER SERVICES");

  const cardsData = {
     "MAN POWER SERVICES": [
  {
    title: "Workforce Agility",
    features:
      "We help organizations stay adaptable, respond to market changes, and keep pace with the evolving future of work.",
  },
  {
    title: "Direct Hire",
    features:
      "Decades of recruitment expertise enabling us to match and directly hire the right talent for your team.",
  },
  {
    title: "Flexible Staffing",
    features:
      "From short-term skilled roles to large teams, we provide flexible workforce solutions with contract-to-hire options.",
  },
  {
    title: "Onsite Management",
    features:
      "End-to-end onsite workforce management that integrates seamlessly with your operations for improved performance.",
  },
  {
    title: "Technology-Driven Workforce Solutions",
    features:
      "AI and data-driven tools that streamline hiring, automate workflows, and enhance decision-making.",
  },
  {
    title: "AI & Digital Capabilities",
    features:
      "Predictive analytics, NLP, computer vision, chatbots, personalized marketing, and model optimization.",
  },
    ],

    "TRAINING & TECH SERVICES": [
  {
    title: "AI, ML & Python",
    features:
      "Learn AI, machine learning, and Python with hands-on projects to build intelligent, real-world applications.",
  },
  {
    title: "Java Full Stack",
    features:
      "Master Java, Spring Boot, and modern front-end tools to build scalable full-stack enterprise applications.",
  },
  {
    title: "Web Full Stack",
    features:
      "Become a full-stack web developer using HTML, CSS, JS, React, Node.js, and APIs to create dynamic web apps.",
  },
  {
    title: "Mobile Full Stack",
    features:
      "Build cross-platform mobile apps using React Native / Flutter with full backend integration.",
  },
  {
    title: "Cybersecurity",
    features:
      "Gain practical skills in ethical hacking, network security, and threat prevention for modern security needs.",
  },
  {
    title: "DevOps",
    features:
      "Learn CI/CD, Docker, Kubernetes, and automation tools to streamline development and deployment workflows.",
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
