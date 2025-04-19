
import TeamMemberCard from "../components/TeamMemberCard";

const teamMembers = [
  {
    name: "Aashish S Kamath",
    role: "Frontend Developer",
    image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b",
    bio: "Expert in machine learning and air quality analysis with over 10 years of experience.",
    github: "https://github.com/Aashish-kamath",
    linkedin: "https://www.linkedin.com/in/aashish-s-kamath-b1485b299/",
  },
  {
    name: "Surya K P",
    role: "ML Engineer",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    bio: "Specializes in developing scalable ML infrastructure and real-time analytics systems.",
    github: "https://github.com/SuryaKPog",
    linkedin: "https://www.linkedin.com/in/surya-kp/",
  },
  {
    name: "Anamika Saroha",
    role: "ML Engineer + Frontend Developer",
    image: "/anamika_photo.jpeg",
    bio: "Bridging AI and UI — delivering scalable ML systems with intuitive, modern frontends.",
    github: "https://github.com/sarohaanamika",
    linkedin: "https://www.linkedin.com/in/anamika-saroha-a8a7b126b/",
  },
];

const AboutUs = () => {
  return (
    <div className="min-h-screen pt-24 px-4 bg-gradient-to-br from-gray-50 to-sky-50">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Our Team</h1>
        <p className="text-xl text-gray-600 mb-12 max-w-3xl">
        We are a dedicated team of data scientists, engineers, and 
        frontend developers working together to improve air quality 
        monitoring through innovative AI solutions.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <TeamMemberCard key={member.name} {...member} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
