
import TeamMemberCard from "../components/TeamMemberCard";

const teamMembers = [
  {
    name: "Dr. Sarah Chen",
    role: "Lead Data Scientist",
    image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b",
    bio: "Expert in machine learning and air quality analysis with over 10 years of experience.",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
  },
  {
    name: "Michael Rodriguez",
    role: "Senior ML Engineer",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    bio: "Specializes in developing scalable ML infrastructure and real-time analytics systems.",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
  },
  {
    name: "Emily Thompson",
    role: "Environmental Scientist",
    image: "https://images.unsplash.com/photo-1426604966848-d7adac402bff",
    bio: "Research focused on urban air quality patterns and environmental impact assessment.",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
  },
];

const AboutUs = () => {
  return (
    <div className="min-h-screen pt-24 px-4 bg-gradient-to-br from-gray-50 to-sky-50">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Our Team</h1>
        <p className="text-xl text-gray-600 mb-12 max-w-3xl">
          We are a dedicated team of data scientists, engineers, and environmental 
          experts working together to improve air quality monitoring through 
          innovative AI solutions.
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
