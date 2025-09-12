import { FaTrophy, FaMedal, FaGraduationCap, FaRegNewspaper } from "react-icons/fa";
import Writing from "../assets/images/writing.png";
import { TbKarate } from "react-icons/tb";


const achievements = [
  {
    icon: <FaGraduationCap className="text-yellow-500 text-xl" />,
    text: "Awarded with Academic Excellence for outstanding performance during the bachelor’s degree programme at VFSTR University.",
  },
  {
    icon: <FaMedal className="text-red-500 text-xl" />,
    text: "Honored with a Central Government’s National Merit Scholarship throughout all four years of undergraduation.",
  },

  {
    icon: <FaTrophy className="text-purple-500 text-xl" />,
    text: "Secured top prize in Poster Presentation and Paper Presentation on \"Artificial Intelligence\" & \"Internet of Things\" respectively, in the National Level Tech Fest (Srujanankura).",
  },
  {
    icon: <img src={Writing} alt="Editor" title="Editor" className="w-5 h-5 object-contain" />,
    text: "Recognized as one of the best student editors of Voice of Vignan (An Independent Student Magazine of Vignan University).",
  },
  {
    icon: <TbKarate className="text-black-500 text-xl" />,
    text: "Pursued diploma in Japan Karate Association Of India (Yellow Belt) for the purpose of self-defencing.",
  },
];

const Achievements = () => {
  return (
    <section id="achievements" className="py-10 px-10">
      <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-sky-800 via-purple-700 to-blue-600 text-transparent bg-clip-text inline-block">ACHIEVEMENTS</h2>

      <ul className="space-y-6">
        {achievements.map((item, index) => (
          <li key={index} className="flex items-start space-x-3">
            <span className="mt-1">{item.icon}</span>
            <p className="text-gray-700">{item.text}</p>
          </li>
        ))}
      </ul>


    </section>
  );
};

export default Achievements;
