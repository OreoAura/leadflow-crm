import { Link } from "react-router-dom";
import {
  FaTachometerAlt,
  FaUsers,
  FaTasks,
  FaUserFriends,
  FaCog,
} from "react-icons/fa";

function Sidebar() {
  return (
    <div className="w-64 bg-gray-900 text-white min-h-screen p-5">
      <h1 className="text-2xl font-bold mb-10">
        LeadFlow CRM
      </h1>

      <nav className="flex flex-col gap-4">

        <Link to="/" className="flex items-center gap-3 hover:text-blue-400">
          <FaTachometerAlt />
          Dashboard
        </Link>

        <Link to="/leads" className="flex items-center gap-3 hover:text-blue-400">
          <FaUsers />
          Leads
        </Link>

        <Link to="/tasks" className="flex items-center gap-3 hover:text-blue-400">
          <FaTasks />
          Tasks
        </Link>

        <Link to="/team" className="flex items-center gap-3 hover:text-blue-400">
          <FaUserFriends />
          Team
        </Link>

        <Link to="/settings" className="flex items-center gap-3 hover:text-blue-400">
          <FaCog />
          Settings
        </Link>

      </nav>
    </div>
  );
}

export default Sidebar;