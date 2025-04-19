
import { Activity, Brain, Scale } from "lucide-react";
import { Link } from "react-router-dom";
import FeatureCard from "../components/FeatureCard";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="pt-32 pb-20 px-4 bg-gradient-to-br from-sky-50 to-teal-50">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Air Sentinel: AI-Powered Air Quality Monitoring and Anomaly Detection
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Advanced machine learning algorithms for real-time air quality monitoring and
            anomaly detection, helping create a safer and cleaner environment.
          </p>
          <Link
            to="/model"
            className="inline-block px-6 py-3 rounded-lg bg-sky-600 text-white font-medium hover:bg-sky-700 transition-colors"
          >
            Explore Our Model
          </Link>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={Activity}
              title="Real-time Analysis"
              description="Continuous monitoring and instant analysis of air quality metrics using advanced sensors and AI algorithms."
            />
            <FeatureCard
              icon={Brain}
              title="Predictive Insights"
              description="Machine learning models that predict potential air quality issues before they become critical."
            />
            <FeatureCard
              icon={Scale}
              title="Scalable Monitoring"
              description="Flexible infrastructure that grows with your needs, from single location to city-wide deployment."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
