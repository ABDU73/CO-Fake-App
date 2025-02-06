import React from "react";
import { Header } from "../components/Header";

const Services = () => {
  const services = [
    {
      title: "Remote Work Tools & Resources",
      description:
        "Cloud-based tools, communication software, time tracking, project management systems, remote collaboration platforms.",
    },
    {
      title: "Health and Wellness Support",
      description:
        "Telemedicine, wellness coaching, employee health insurance, mental health resources, stress management workshops.",
    },
    {
      title: "Employee Development & Training",
      description:
        "Online courses, skill development programs, leadership training, certifications, personal growth resources.",
    },
    {
      title: "Career Counseling & Support",
      description:
        "Career planning, resume building, interview coaching, job search support, networking opportunities.",
    },
    {
      title: "Flexible Work Hours and Scheduling",
      description:
        "Customizable work schedules, flexible hours, paid time off, and vacation policies for a better work-life balance.",
    },
    {
      title: "Technology & Equipment Support",
      description:
        "Provision of work equipment, software installation, troubleshooting, remote technical support, office setup assistance.",
    },
    {
      title: "Employee Benefits & Perks",
      description:
        "Health benefits, retirement plans, gym memberships, employee discounts, team-building activities, performance incentives.",
    },
    {
      title: "Employee Assistance Programs (EAP)",
      description:
        "Support with personal issues, counseling services, legal or financial advice, work-life balance programs.",
    },
    {
      title: "Collaborative Team Culture",
      description:
        "Team-building events, employee engagement programs, mentorship opportunities, cross-functional collaboration projects.",
    },
    {
      title: "Onboarding & Integration Assistance",
      description:
        "New hire orientation, integration programs, company culture training, team introductions, performance feedback systems.",
    },
  ];

  return (
    <div>
      <Header />
    <div className="min-h-screen bg-gray-100 py-10 px-5">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-sans text-center text-blue-800 mb-12">
          Our Services
        </h1>
        <p className="text-lg text-gray-500 text-center mb-12">
        Learn about the services that can support and empower you.
        </p>

        {/* Services List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <h2 className="text-2xl font-semibold text-blue-500 mb-4">
                {service.title}
              </h2>
              <p className="text-gray-700">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
};

export default Services;
