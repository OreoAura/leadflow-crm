import { Link, Outlet, useLocation } from "react-router-dom";

import {
  FaChartBar,
  FaUsers,
  FaTasks,
  FaCog,
  FaColumns,
} from "react-icons/fa";

function DashboardLayout() {

  const location = useLocation();

  const links = [
    {
      name: "Dashboard",
      path: "/",
      icon: <FaChartBar />,
    },
    {
      name: "Leads",
      path: "/leads",
      icon: <FaUsers />,
    },
    {
      name: "Kanban",
      path: "/kanban",
      icon: <FaColumns />,
    },
    {
      name: "Tasks",
      path: "/tasks",
      icon: <FaTasks />,
    },
    {
      name: "Settings",
      path: "/settings",
      icon: <FaCog />,
    },
  ];

  return (
    <div className="flex min-h-screen bg-gray-100">

      {/* SIDEBAR */}
      <aside className="w-64 bg-gray-900 text-white p-6">

        <h1 className="text-3xl font-bold mb-10">
          LeadFlow
        </h1>

        <nav className="flex flex-col gap-3">

          {links.map((link) => (

            <Link
              key={link.path}
              to={link.path}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition
              ${
                location.pathname === link.path
                  ? "bg-blue-500"
                  : "hover:bg-gray-800"
              }`}
            >

              {link.icon}

              {link.name}

            </Link>

          ))}

        </nav>

      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 p-8 bg-gray-100">

        {/* TOPBAR */}
        <div className="bg-white p-5 rounded-xl shadow mb-8 flex justify-between items-center">

          <h2 className="text-2xl font-bold">
            CRM Dashboard
          </h2>

          <button
            onClick={() => {
              localStorage.removeItem("token");
              window.location.href = "/login";
            }}
            className="bg-red-500 text-white px-4 py-2 rounded-lg"
          >
            Logout
          </button>

        </div>

        <Outlet />

      </main>

    </div>
  );
}

export default DashboardLayout;