
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const FeatureCard = ({ icon: Icon, title, description }: FeatureCardProps) => {
  return (
    <div className="p-6 rounded-xl bg-white/60 backdrop-blur-lg border border-gray-200 hover:shadow-lg transition-all">
      <div className="w-12 h-12 rounded-lg bg-sky-100 flex items-center justify-center mb-4">
        <Icon className="w-6 h-6 text-sky-600" />
      </div>
      <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default FeatureCard;
