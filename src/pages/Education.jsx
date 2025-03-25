

const education = [
    {
      school: "Georgia State University",
      degree: "Master of Science in Computer Science",
      duration: "August 2023 - Present",
      cgpa: "GPA: 4.21 / 4.3",
      coursework: [
        "Data Structures and Algorithms",
        "Web Development",
        "Mobile Application Development",
        "Operating Systems",
        "Computer Networks",
        "Artificial Intelligence",
        "Cloud Computing",
        "Data Mining"
    ]
    },
    {
        school: "Vignan's Foundation for Science, Technology & Research",
        degree: "Bachelor of Technology(Honors) in Computer Science and Engineering",
        duration: "July 2017 - June 2021",
        cgpa: "CGPA: 9.72 / 10",
        coursework: [
          "Database Management Systems",
          "Software Engineering",
          "Python Programming",
          "Operating Systems",
          "Internet of Things",
          "Machine Learning"
    ]
        
      }
  ];
  
  const Education = () => {
    return (
      <section id="education" className="p-10 w-full">
        <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-sky-800 via-purple-700 to-blue-600 text-transparent bg-clip-text inline-block">EDUCATION</h2>
        
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-3/4 transform -translate-x-1/2 h-full w-1 bg-gray-300"></div>
          
          {education.map((edu, index) => (
            <div key={index} className="flex flex-col md:flex-row items-start md:items-start mb-8 relative">
              
              {/* Left Side - Content */}
              <div className="w-full">
                <div className="absolute left-3/4 transform -translate-x-1/2 w-4 h-4 bg-sky-700 rounded-full border-2 border-white"></div>
                <h3 className="text-2xl font-bold text-sky-900">{edu.school}</h3>      
                <h4 className="text-xl font-semibold text-sky-700">{edu.degree}</h4>
                <p className="text-gray-700 mt-2 font-medium">{edu.cgpa}</p>
                <p className="mt-2 text-gray-700">
                  <span className="font-medium">Coursework:</span> {edu.coursework.join(", ")}
                </p>
                                
              </div>
  
  
              {/* Right Side - Duration */}
              <div className="w-full md:w-1/2 pl-6 text-gray-600 md:text-right">
                <p className="font-medium">{edu.duration}</p>
              </div>
            </div>
          ))}
        </div>

       
      </section>
    );
  };
  
  export default Education;
  