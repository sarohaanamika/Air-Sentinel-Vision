
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold text-sky-600">Air Sentinel</Link>
          </div>
          <div className="flex items-center space-x-8">
            {[
              { name: "Home", path: "/" },
              { name: "Model", path: "/model" },
              { name: "About Us", path: "/about" },
            ].map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors
                  ${location.pathname === item.path
                    ? "text-sky-600 bg-sky-50"
                    : "text-gray-600 hover:text-sky-600 hover:bg-sky-50"
                  }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
