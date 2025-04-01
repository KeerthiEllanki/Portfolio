import { useState } from "react";

const experiences = [
    {
      company: "BilliMD",
      role: "Software Developer",
      duration: "February 2025 – Present",
      description: "Contributing to the development of a medical credentialing SaaS platform at BilliMD, aimed at streamlining provider onboarding and compliance. Focused on building performant, accessible, and responsive UIs that support scalable credentialing workflows and enhance user experience across the healthcare ecosystem.",
      responsibilities: [
        "Engineered and launched 10+ dynamic marketing pages using React, TypeScript & Tailwind CSS for a medical credentialing platform, improving session duration by 25% and enhancing content accessibility.",
        "Enhanced front-end performance with lazy loading, optimized state management and modular code splitting, cutting page load times by 45%.",
        "Developed & deployed fully responsive UI using Tailwind CSS, ensuring adaptability across devices and increasing mobile engagement by 30%.",
        "Built and customized reusable UI components using Material UI, reducing UI development time by 50% and ensuring WCAG-compliant accessibility across 100% of user-facing pages.",
        "Integrated Framer Motion to design smooth UI animations across key user journeys, contributing to a more modern & intuitive user experience.",
        "Partnered with designers via Figma & Storybook to deliver pixel-perfect, responsive UIs, reducing QA cycles and improving cross-team handoff."
      ],
    },
    {
      company: "Georgia State University",
      role: "Graduate Teaching Assitant",
      duration: "August 2023 – Present",
      description: "Contributed to curriculum innovation through automated grading systems and interactive learning tools that improved student engagement and performance. Played a key role in creating scalable, learner-centered solutions that empowered student success, strengthened peer collaboration, and streamlined instructional processes in a high-enrollment, fast-paced academic setting.",
      responsibilities: [
        "Designed and implemented a browser-based code execution platform to automate grading of programming assignments, eliminating the need for local setup and improving grading efficiency for instructors.",
        "Delivered personalized tutoring and academic support in Data Structures, Algorithms, Python, and Java, helping over 200 students per semester improve understanding and achieve measurable academic gains.",
        "Created real-world coding exercises using interactive coding environments, integrating automated feedback and gamified learning elements to enhance problem-solving and industry readiness.",
        "Mentored and onboarded new lab assistants, sharing best practices and technical guidance, which improved instructional delivery and consistency across multiple lab sections.",
        "Collaborated with faculty to design lab materials and grading rubrics, ensuring alignment with course objectives and enhancing the overall learning experience."
      
      ],
    },
    {
      company: "Vanguard",
      role: "Software Engineer - Backend",
      duration: "October 2022 - August 2023",
      description: "Worked on Vanguard’s retirement readiness platform, used by over 1 million users to manage financial planning and retirement goals. Focused on building reliable and scalable backend services that improved system performance, strengthened data security, and enhanced integration with client-facing applications. My work supported critical platform functionality and played a key role in improving user trust, experience, and long-term engagement.",
      responsibilities: [
        "Developed and maintained 15+ scalable microservices using Java Spring Boot, for a retirement readiness platform, serving over 1M+ users.",
        "Designed and implemented RESTful APIs, focusing on structured error handling, XML/JSON serialization, and pagination logic, improving API integration efficiency.",
        "Integrated PostgreSQL with microservices using Spring Data JPA and Hibernate, building efficient CRUD functionality and optimizing data access with custom queries and ORM-level performance tuning.",
        "Integrated OAuth2.0 authorization across microservices, reducing unauthorized access attempts by 50%.",
        "Conducted comprehensive tests using Junit for unit-level testing and Postman for API-level testing, reducing production bugs by half.",
        "Collaborated on backend performance tuning using JMeter and AppDynamics, proactively identifying inefficiencies in service threads and memory usage to enhance throughput during peak load testing.",
        "Led a team of 6 junior developers, mentoring them on Java best practices; accelerating onboarding and improving code quality across deliverables."
      ],
    },
    {
      company: "Vanguard",
      role: "Associate Software Engineer - DevOps",
      duration: "August 2021 - September 2022",
      description: "Supported the modernization of Vanguard’s retirement platform by driving cloud migration and infrastructure optimization initiatives. Focused on improving platform scalability, availability, and delivery speed through architectural enhancements and automation. Contributed to secure data delivery workflows and built resilient systems that ensured reliable access to critical retirement planning tools for end users.",
      responsibilities: [
        "Led the migration of backend microservices from PCF to AWS ECS, enhancing scalability & reducing infrastructure costs by transitioning to containerized, cloud-native architecture.",
        "Implemented multi-region architecture on AWS, ensuring high availability and seamless failover for critical microservices.",
        "Leveraged Amazon Route 53 for intelligent traffic routing between regions, optimizing performance & reducing latency.",
        "Collaborated cross-functionally to deliver a secure document access service using S3, Lambda, API Gateway, and IAM, enabling time-restricted delivery of sensitive retirement plan data.",
        "Configured automated monitoring and alerting systems using EC2 Auto-Scaling, Cloud Watch, and Cloud Formation, reducing mean time to detect (MTTD) issues by 50%.",
        "Built and optimized robust CI/CD pipelines by integrating Docker to containerize applications and using Atlassian suite (Bitbucket, Bamboo, Jira) with Git, automating deployment processes and shortening release cycles from 5 weeks to 3 weeks."
      ],
    },
    {
      company: "Tech Mahindra",
      role: "Software Engineer - Full Stack",
      duration: "August 2020 - July 2021",
      description: "Contributed to the development of an internal employee self-service portal that streamlined HR workflows and improved operational efficiency. Delivered features that enhanced user experience, reduced manual workload, and enabled faster data access across departments. Played a key role in automating internal processes and resolving production issues, directly improving platform stability and overall system reliability in a high-visibility enterprise environment.",
      responsibilities: [
        "Developed 25+ Angular-based frontend components for employee self-service portal, streamlining workflows & reducing HR inquiries.",
        "Implemented client-side form validations using JavaScript, decreasing invalid submissions by 60% and improving overall user experience.",
        "Designed & optimized SQL queries for a MySQL database, improving report generation speed from minutes to seconds.",
        "Automated data extraction from internal compliance portals using Python and Selenium to track training completion status, streamlining email notification workflows and reducing manual verification efforts by 70%.",
        "Identified and resolved critical production bugs in Angular components and backend scripts by analyzing logs in Splunk, improving platform stability and reducing downtime for end users.",
        "Collaborated with senior developers and product owners to analyze the project requirements and translate them into actionable user stories in an Agile environment, consistently delivering 90% of sprint commitments."

      ],
    }
  ];
  
  
  const Experience = () => {
    const [selected, setSelected] = useState(null);
  
    const toggle = (index) => {
      setSelected(selected === index ? null : index);
    };
  
    return (
      <section id="experience" className="p-10 w-full">
        <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-sky-800 via-purple-700 to-blue-600 text-transparent bg-clip-text inline-block">
          EXPERIENCE
        </h2>
  
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-3/4 transform -translate-x-1/2 h-full w-1 bg-gray-300"></div>
  
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-start md:items-start mb-8 relative"
            >
              {/* Left Side - Tabs + Content */}
              <div className="w-full">
                {/* Dot on timeline */}
                <div className="absolute left-3/4 transform -translate-x-1/2 w-4 h-4 bg-sky-700 rounded-full border-2 border-white"></div>
  
                {/* Tab Button */}
                <button
                  onClick={() => toggle(index)}
                  className={`w-full text-left px-4 py-3 rounded-md transition-colors duration-300 ${
                    selected === index
                      ? "bg-blue-100 text-blue-800"
                      : "bg-gray-100 hover:bg-gray-200"
                  }`}
                >
                  <h3 className="text-2xl font-bold text-sky-900">{exp.role}</h3>
                  <h4 className="text-xl font-semibold text-sky-700">{exp.company}</h4>
                </button>
  
                {/* Description if selected */}
                {selected === index && (
                  <div className="mt-3 pl-4 space-y-4">
                    {/* Summary */}
                    <div>
                      <h5 className="text-sm font-semibold text-sky-700 ">
                        Summary
                      </h5>
                      <p className="text-gray-700 text-sm italic pl-4 mt-1">{exp.description}</p>
                    </div>

                    {/* Responsibilities */}
                    <div>
                      <h5 className="text-sm font-semibold text-sky-700">
                        Responsibilities
                      </h5>
                      <ul className="list-disc list-inside text-gray-700 mt-1 space-y-1 text-sm pl-4">
                        {exp.responsibilities.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
  
              {/* Right Side - Duration */}
              <div className="w-full md:w-1/2 pl-6 text-gray-600 md:text-right">
                <p className="font-medium">{exp.duration}</p>
              </div>
            </div>
          ))}
        </div>
  
       
      </section>
    );
  };
  
  export default Experience;