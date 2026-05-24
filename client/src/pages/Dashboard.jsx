import { useEffect, useState } from "react";
import API from "../services/api";

function Dashboard() {

  const [stats, setStats] = useState({
    totalLeads: 0,
    newLeads: 0,
    contactedLeads: 0,
    convertedLeads: 0,
  });

  useEffect(() => {

    const fetchStats = async () => {
      const res = await API.get("/leads/stats/overview");
      setStats(res.data);
    };

    fetchStats();

  }, []);

  const cards = [
  {
    title: "Total Leads",
    value: stats.totalLeads,
    color: "bg-blue-500",
  },
  {
    title: "New Leads",
    value: stats.newLeads,
    color: "bg-yellow-500",
  },
  {
    title: "Contacted",
    value: stats.contactedLeads,
    color: "bg-purple-500",
  },
  {
    title: "Converted",
    value: stats.convertedLeads,
    color: "bg-green-500",
  },
];

  return (
    <div>

      <div className="mb-8">

  <h1 className="text-4xl font-bold">
    Welcome Back 👋
  </h1>

  <p className="text-gray-500 mt-2">
    Here's what's happening with your CRM today.
  </p>

</div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

        {cards.map((card, index) => (
          <div
            key={index}
            className={`${card.color} text-white p-6 rounded-2xl shadow hover:scale-105 transition`}
          >
            <h2 className="text-gray-500 text-lg">
              {card.title}
            </h2>

            <p className="text-4xl font-bold mt-4">
              {card.value}
            </p>
          </div>
        ))}

      </div>

    </div>
  );
}

export default Dashboard;