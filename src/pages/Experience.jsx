import { useState } from "react";

const experiences = [

  {
    company: "Luckie & Co.",
    role: "Developer",
    duration: "June 2025 – Present",
    description: "Contributed to design and development of the Luckie 2.0 corporate website, building responsive and interactive features along with AI-powered chatbot that improved client engagement and streamlined content management workflows. Worked for a responsive microsite for Rivian to highlight its investment initiatives and strengthen community presence.",
    responsibilities: [
      "Architected Luckie 2.0 corporate website on WordPress (Elementor) CMS with custom React, JavaScript and PHP components, streamlining workflows for content management team and cutting content update time by 23%.",
      "Engineered a gamified learning platform with React, Python FastAPI, SQLAlchemy, and MSSQL Server, featuring 30+ multi-domain quizzes with badge achievements and Slack integration, achieving 95% employee participation within 2 months.",
      "Automated client engagement with an AI-powered chatbot leveraging HubSpot APIs & JavaScript, handling 42% of initial queries and freeing up 25 + hours / week of manual customer support time.",
      "Published 50+ SEO-optimized recipe pages for Spice World in WordPress, implementing structured data markup, increasing organic search rankings and drove 18 % growth in site traffic over 3 months.",
      "Designed Rivian's EV Impact platform on Squarespace with custom JavaScript and Mapbox integration, delivering an interactive charging station locator with advanced filtering and geolocation capabilities."
    ],
  },
  {
    company: "BilliMD",
    role: "Software Developer",
    duration: "February 2025 – May 2025",
    description: "Contributing to the development of a medical credentialing SaaS platform at BilliMD, aimed at streamlining provider onboarding and compliance. Focused on building performant, accessible, and responsive UIs that support scalable credentialing workflows and enhance user experience across the healthcare ecosystem.",
    responsibilities: [
      "Built 10+ dynamic marketing pages with React, TypeScript & Tailwind CSS for a healthcare credentialing SaaS platform, increasing average session duration by 16% and enhancing content accessibility.",
      "Connected backend APIs via Axios with RxJS Observables, powering real-time updates across provider directories and FAQ sections.",
      "Accelerated front-end performance with lazy loading, Redux for global state management, and Context API for scoped states, alongside modular code splitting, slashing page load times by 44%.",
      "Composed a library of 10+ accessible UI components with Material UI and Framer Motion, trimming dev time by 28% while maintaining a modern and WCAG - compliant user experience.",
      "Architected asynchronous processing with RabbitMQ message queues for time-intensive tasks such as provider verification & notification workflows, eliminating delays in user - facing interactions.",
      "Partnered with designers via Figma & Storybook to deliver pixel - perfect, responsive UIs, reducing QA cycles & improving cross - team handoff.",
      "Deployed backend services on Kubernetes clusters to enable container orchestration, auto - scaling, and streamlined resource management across dev and staging environments."
    ],
  },
  {
    company: "Georgia State University",
    role: "Graduate Assitant",
    duration: "August 2023 – July 2025",
    description: "Worked as a Graduate Teaching Assistant in the Computer Science department and as a Graduate Assistant with the TRIO SSS program, supporting both academic instruction and student success initiatives.",
    responsibilities: [
      "Designed and implemented a browser-based code execution platform to automate grading of programming assignments, eliminating the need for local setup and improving grading efficiency for instructors.",
      "Delivered personalized tutoring and academic support in Data Structures, Algorithms, Python, and Java, helping over 200 students per semester improve understanding and achieve measurable academic gains.",
      "Created real-world coding exercises using interactive coding environments, integrating automated feedback and gamified learning elements to enhance problem-solving and industry readiness.",
      "Supported TRIO SSS staff in efforts to enhance retention, progression, and graduation rates among first-generation, low - income, and disabled students through various administrative, recruitment, and engagement activities.",
      "Mentored students on career development by providing guidance on resume building, exploring internship opportunities, and discussing career paths, empowering them with tools for academic and professional success."
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
      "Connected PostgreSQL with microservices using Spring Data JPA and Hibernate, building efficient CRUD functionality and optimizing data access with custom queries and ORM-level performance tuning.",
      "Enforced OAuth2.0 authorization across microservices, preventing ~30% of unauthorized access attempts.",
      "Migrated synchronous REST-based inter-service communication to Kafka-based event streaming, reducing service latency by 16% and significantly improving scalability and fault tolerance under peak load.",
      "Conducted comprehensive tests using Junit for unit-level testing and Postman for API-level testing, reducing production bugs by half.",
      "Performed backend performance tuning with Apache JMeter and AppDynamics, identifying inefficiencies in service threads and memory usage to boost throughput during peak load testing.",
      "Documented APIs using OpenAPI/Swagger, ensuring seamless integration and testing for internal consumer teams and reducing back-andforth for documentation clarity.",
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
      "Optimized robust CI/CD pipelines by integrating Docker to containerize applications and using Atlassian suite (Bitbucket, Bamboo, Jira) with Git, automating deployment processes and shortening release cycles from 5 weeks to 3 weeks."
    ],
  },
  {
    company: "Tech Mahindra",
    role: "Full-Stack Software Engineer Intern",
    duration: "March 2021 - July 2021",
    description: "Contributed to the development of an internal employee self-service portal that streamlined HR workflows and improved operational efficiency. Delivered features that enhanced user experience, reduced manual workload, and enabled faster data access across departments. Played a key role in automating internal processes and resolving production issues, directly improving platform stability and overall system reliability in a high-visibility enterprise environment.",
    responsibilities: [
      "Developed 25+ Angular-based frontend components for employee self-service portal, streamlining workflows & reducing HR inquiries.",
      "Designed & optimized SQL queries for a MySQL database, improving report generation speed from minutes to seconds.",
      "Automated data extraction from internal compliance portals using Python and Selenium to track training completion status, streamlining email notification workflows and reducing manual verification efforts by ~70%.",
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
      <h2 className="text-4xl font-bold mb-16 text-sky-900 inline-block">
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
                className={`w-full text-left px-4 py-3 rounded-md border font-medium  transform-gpu transition-all duration-300 cursor-pointer east-out
                ${selected === index
                    ? "bg-sky-900 text-white border-sky-900 shadow-md hover:bg-white hover:text-sky-900 hover:shadow-lg hover:scale-103"
                    : "bg-sky-900 text-white border-sky-900 hover:bg-white hover:text-sky-900 hover:shadow-lg hover:scale-103"
                  }`}
              >
                <h3 className="text-2xl font-bold ">{exp.role}</h3>
                <h4 className="text-xl font-semibold opacity-90">{exp.company}</h4>
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