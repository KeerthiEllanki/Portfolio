import { FaJava, FaPython, FaJs, FaHtml5, FaCss3Alt, FaGit, FaAws } from "react-icons/fa";
import { SiTypescript, SiSpringboot, SiReact, SiAngular, SiTailwindcss, SiMysql, SiPostman, SiJira, SiDocker, SiGit, SiSplunk, SiFigma } from "react-icons/si";
import { TbSql } from "react-icons/tb";
import { VscAzureDevops } from "react-icons/vsc";
import AWSECS from "../assets/images/ecs.png";
import EC2AutoScaling from "../assets/images/ec2-autoscaling.png";
import CloudWatch from "../assets/images/cloudWatch.png";
import CloudFormation from "../assets/images/CloudFormation.png";
import Route53 from "../assets/images/route-53.png";
import AzureSQl from "../assets/images/azure-sql.png";


const Skills = () => {
  return (
    <section id="skills" className="px-10 py-10">
      <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-sky-800 via-purple-700 to-blue-600 text-transparent bg-clip-text inline-block">SKILLS</h2>

      <div className="grid md:grid-cols-4 gap-8 text-center">
        {/* Programming Languages */}
        <div className="bg-white shadow-lg p-6 rounded-lg">
        <h3 className="text-xl font-bold text-sky-900 mb-4">Programming Languages</h3>
          <div className="grid grid-cols-4 gap-4 justify-items-center text-4xl text-amber-600">
            <FaJava title="Java" />
            <FaPython title="Python" />
            <FaJs title="JavaScript" />
            <SiTypescript title="TypeScript" />
            <FaHtml5 title="HTML" />
            <FaCss3Alt title="CSS" />
            <TbSql title="SQL" />
          </div>
        </div>

        {/* Frameworks */}
        <div className="bg-white shadow-lg p-6 rounded-lg">
          <h3 className="text-xl font-bold text-sky-900 mb-4">Frameworks</h3>
          <div className="grid grid-cols-4 gap-4 justify-items-center text-4xl text-blue-600">
            <SiSpringboot title="Spring Boot" />
            <SiReact title="React" />
            <SiAngular title="Angular" />
           
            <SiTailwindcss title="Tailwind CSS" />
          </div>
        </div>

        {/* Cloud */}
        <div className="bg-white shadow-lg p-6 rounded-lg">
          <h3 className="text-xl font-bold text-sky-900 mb-4">Cloud (AWS & Azure)</h3>
          <div className="grid grid-cols-4 gap-4 justify-items-center text-4xl text-blue-600">
            <img src={AWSECS} alt="AWSECS" title="AWSECS" className="w-10 h-10 object-contain" />
            <img src={EC2AutoScaling} alt="EC2AutoScaling" title="EC2AutoScaling" className="w-10 h-10 object-contain" />
            <img src={CloudWatch} alt="CloudWatch" title="CloudWatch" className="w-10 h-10 object-contain" />
            <img src={CloudFormation} alt="CloudFormation" title="CloudFormation" className="w-10 h-10 object-contain" />
            <img src={Route53} alt="Route53" title="Route53" className="w-10 h-10 object-contain" />
            <VscAzureDevops title="Azure DevOps" />
            <img src={AzureSQl} alt="AzureSQl" title="AzureSQl" className="w-10 h-10 object-contain" />
            
          </div>
        </div>

        {/* Tools */}
        <div className="bg-white shadow-lg p-6 rounded-lg">
          <h3 className="text-xl font-bold text-sky-900 mb-4">Tools</h3>
          <div className="grid grid-cols-4 gap-4 justify-items-center text-4xl text-teal-700">
            <SiMysql title="MySQL" />
            <SiPostman title="Postman" />
            <SiJira title="Jira" />
            <SiDocker title="Docker" />
            <FaGit title="Git" />
            <SiSplunk title ="Splunk" />
            <SiFigma title ="Figma" />
          </div>
        </div>
    </div>
        
        {/* Others */}
    <div className="mt-8 text-center">
        <h3 className="text-xl font-bold text-sky-900 mb-4">Other Skills</h3>
        <p className="text-gray-700 text-lg">
          <span className="mx-2">CI/CD</span> • 
          <span className="mx-2">REST APIs</span> • 
          <span className="mx-2">Software Development Life Cycle</span> • 
          <span className="mx-2">Object-Oriented Programming</span> •
          <span className="mx-2">HTTP</span> •
          <span className="mx-2">Maven</span> •
          <span className="mx-2">Vite</span> •
          <span className="mx-2">Atlassian Tool Suite (BitBucket, Bamboo)</span> •
          <span className="mx-2">App Dynamics</span> •
          <span className="mx-2">Spring Tool Suite</span> •
          <span className="mx-2">Power Automate</span> 
        </p>
    </div>
    
    <hr className="mt-10 border-t border-gray-300" />
    </section>
    
  );
};

export default Skills;
