
interface TeamMemberCardProps {
  name: string;
  role: string;
  image: string;
  bio: string;
  github?: string;
  linkedin?: string;
}

const TeamMemberCard = ({ name, role, image, bio, github, linkedin }: TeamMemberCardProps) => {
  return (
    <div className="p-6 rounded-xl bg-white/60 backdrop-blur-lg border border-gray-200 transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:-translate-y-2">
      <img
        src={image}
        alt={name}
        className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
      />
      <h3 className="text-xl font-semibold text-center mb-1 text-gray-800">{name}</h3>
      <p className="text-sky-600 text-sm text-center mb-4">{role}</p>
      <p className="text-gray-600 text-center mb-4">{bio}</p>
      <div className="flex justify-center space-x-4">
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-sky-600"
          >
            GitHub
          </a>
        )}
        {linkedin && (
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-sky-600"
          >
            LinkedIn
          </a>
        )}
      </div>
    </div>
  );
};

export default TeamMemberCard;
