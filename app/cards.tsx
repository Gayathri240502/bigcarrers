"use client";
import React from "react";
import { ArrowRight, Users, BriefcaseBusiness, Building2 } from "lucide-react";

export default function WorkforceSolutions() {
  const items = [
    {
      id: "human-resources-activity",
      title: "Human Resources Activity",
      subtitle:
        "Comprehensive HR operations including onboarding, compliance, staffing, and workforce support.",
      icon: Users,
      link: "/humanresources",
    },
    {
      id: "corporate-trading",
      title: "Corporate Trading",
      subtitle:
        "Flexible staffing and corporate talent trading solutions tailored for diverse industry demands.",
      icon: BriefcaseBusiness,
      link: "/corporatetrading",
    },
    {
      id: "manpower-supply",
      title: "Manpower Supply",
      subtitle:
        "Reliable short-term and long-term manpower support for industrial, corporate, and project-based needs.",
      icon: Building2,
      link: "/manpowersupply",
    },
  ];

  return (
    <section className="container py-5">
      <div className="text-center mb-4">
        <h2 className="fw-bold mb-2">Our Innovative Workforce Solutions</h2>
        <p className="text-muted mx-auto" style={{ maxWidth: "750px" }}>
          We address the complex workforce challenges organizations face today —
          from HR operations and corporate trading to manpower supply and talent
          lifecycle support. We deliver solutions that move your business
          forward.
        </p>
      </div>

      <div className="row g-4">
        {items.map((item) => {
          const Icon = item.icon;

          return (
            <div key={item.id} className="col-12 col-md-6 col-lg-4">
              <div className="p-4 border rounded shadow-sm bg-white h-100 hover-card d-flex">
                {/* Icon Block */}
                <div
                  className="me-3 d-flex align-items-center justify-content-center rounded bg-light border"
                  style={{ width: 72, height: 72 }}
                >
                  <Icon size={36} className="text-primary" />
                </div>

                {/* Text + CTA */}
                <div className="d-flex flex-column justify-content-between flex-grow-1">
                  <div>
                    <h5 className="fw-semibold mb-1">{item.title}</h5>
                    <p className="text-muted small mb-2">{item.subtitle}</p>
                  </div>

                  <a
                    href={item.link}
                    className="text-primary fw-semibold small d-inline-flex align-items-center"
                  >
                    Learn More <ArrowRight size={14} className="ms-1" />
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Styling */}
      <style jsx>{`
        .hover-card {
          transition: all 0.25s ease;
        }
        .hover-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 6px 18px rgba(0, 0, 0, 0.08);
        }
      `}</style>
    </section>
  );
}
