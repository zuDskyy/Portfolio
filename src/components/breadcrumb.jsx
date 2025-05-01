import { FaHome, FaChevronRight } from "react-icons/fa";

const CustomBreadcrumb = () => {
  const crumbs = [
    { label: "Home", href: "/", icon: <FaHome /> },
    { label: "Dashboard", href: "/dashboard" },
    { label: "Settings", href: "/dashboard/settings" },
  ];

  return (
    <nav className="w-full max-w-6xl mx-auto px-4 py-4">
      <ol className="flex items-center text-sm text-gray-400 space-x-2">
        {crumbs.map((crumb, index) => (
          <li key={index} className="flex items-center space-x-2">
            {index !== 0 && (
              <span className="text-gray-500">
                <FaChevronRight size={12} />
              </span>
            )}

            <a
              href={crumb.href}
              className="flex items-center space-x-1 hover:text-white hover:bg-gradient-to-r from-purple-600 to-blue-500 px-3 py-1.5 rounded-full transition-all duration-200"
            >
              {crumb.icon && <span className="text-base">{crumb.icon}</span>}
              <span className="font-medium">{crumb.label}</span>
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default CustomBreadcrumb;
