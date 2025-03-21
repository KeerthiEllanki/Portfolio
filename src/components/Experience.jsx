const experiences = [
    {
      company: "BilliMD",
      role: "Full Stack Developer",
      duration: "February 2025 – Present",
      responsibilities: [
        "Developed & launched key marketing pages for Medical Credentialing Service Provider using React, TypeScript & Tailwind CSS.",
        "Enhanced front-end performance with lazy loading and state management, cutting page load times by 45%.",
        "Engineered a fully responsive design using Tailwind CSS, ensuring adaptability across devices, boosting accessibility & mobile engagement by 30%."
      ],
    },
    {
      company: "Vanguard",
      role: "Software Engineer - Backend",
      duration: "October 2022 - August 2023",
      responsibilities: [
        "Developed and maintained 15+ scalable microservices using Java Spring Boot, serving over 1M+ users.",
        "Designed and implemented RESTful APIs, improving API integration efficiency.",
        "Integrated OAuth2.0 authorization across microservices, reducing unauthorized access attempts by 50%.",
        "Conducted unit and API testing, reducing production bugs by 50%.",
        "Led a team of 6 junior developers, mentoring them on Java best practices."
      ],
    },
    {
      company: "Vanguard",
      role: "Associate Software Engineer - Cloud",
      duration: "August 2021 - September 2022",
      responsibilities: [
        "Supervised backend microservices migration from PCF to AWS ECS, reducing operational costs.",
        "Implemented multi-region architecture on AWS, ensuring high availability and disaster recovery.",
        "Configured automated monitoring and alerting using EC2 Auto-Scaling, CloudWatch, and CloudFormation.",
        "Built and optimized CI/CD pipelines using Docker, Bitbucket, Bamboo, and Git, reducing release cycles from 5 weeks to 3 weeks."
      ],
    },
    {
      company: "Tech Mahindra",
      role: "Software Engineer - Full Stack",
      duration: "August 2020 - July 2021",
      responsibilities: [
        "Developed 25+ Angular-based frontend components for an employee self-service portal, reducing HR inquiries.",
        "Implemented client-side form validations, decreasing invalid submissions by 60%.",
        "Optimized SQL queries for MySQL databases, improving report generation speed significantly.",
        "Automated compliance email notifications using Python, increasing on-time completion rates."
      ],
    }
  ];
  
  const Experience = () => {
    return (
      <section id="experience" className="p-10 w-full">
        <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-sky-800 via-purple-700 to-blue-600 text-transparent bg-clip-text inline-block">EXPERIENCE</h2>
        
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-3/4 transform -translate-x-1/2 h-full w-1 bg-gray-300"></div>
          
          {experiences.map((exp, index) => (
            <div key={index} className="flex flex-col md:flex-row items-start md:items-start mb-8 relative">
              
              {/* Left Side - Content */}
              <div className="w-full">
                <div className="absolute left-3/4 transform -translate-x-1/2 w-4 h-4 bg-sky-700 rounded-full border-2 border-white"></div>
                <h3 className="text-2xl font-bold text-sky-900">{exp.role}</h3>      
                <h4 className="text-xl font-semibold text-sky-700">{exp.company}</h4>
                <ul className="list-disc list-inside mt-2 text-gray-700">
                  {exp.responsibilities.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
  
  
              {/* Right Side - Duration */}
              <div className="w-full md:w-1/2 pl-6 text-gray-600 md:text-right">
                <p className="font-medium">{exp.duration}</p>
              </div>
            </div>
          ))}
        </div>

        <hr className=" mt-10 border-t border-gray-300" />
      </section>
    );
  };
  
  export default Experience;
  