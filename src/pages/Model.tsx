
import { BarChart, LineChart, Line, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const data = [
  { name: "Jan", value: 95 },
  { name: "Feb", value: 88 },
  { name: "Mar", value: 92 },
  { name: "Apr", value: 87 },
  { name: "May", value: 89 },
  { name: "Jun", value: 91 },
];

const Model = () => {
  return (
    <div className="min-h-screen pt-24 px-4 bg-gradient-to-br from-gray-50 to-sky-50">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Model Performance</h1>
        
        {/* Model Explanation */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Approach</h2>
          <p className="text-gray-600 mb-6">
            We utilize a sophisticated Random Forest model for anomaly detection in air quality data. 
            This ensemble learning method combines multiple decision trees to achieve high accuracy 
            and robustness in identifying unusual patterns in air quality metrics.
          </p>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="p-6 rounded-xl bg-white/60 backdrop-blur-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-4">Model Accuracy Over Time</h3>
            <div className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="value" stroke="#0ea5e9" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="p-6 rounded-xl bg-white/60 backdrop-blur-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-4">Feature Importance</h3>
            <div className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="value" fill="#0ea5e9" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Model;
