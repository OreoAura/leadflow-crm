import { useEffect, useState } from "react";
import API from "../services/api";

function Leads() {
  const [leads, setLeads] = useState([]);

  const [form, setForm] = useState({
    name: "",
    company: "",
  });

  // GET leads
  const fetchLeads = async () => {
    const res = await API.get("/leads");
    setLeads(res.data);
  };

  useEffect(() => {
    fetchLeads();
  }, []);

  // handle input
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // ADD lead
  const handleSubmit = async (e) => {
    e.preventDefault();

    await API.post("/leads", form);

    setForm({ name: "", company: "" });
    fetchLeads();
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Leads</h1>

      {/* FORM */}
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-2xl shadow mb-8">
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Lead Name"
          className="border p-2 mr-2"
          required
        />

        <input
          name="company"
          value={form.company}
          onChange={handleChange}
          placeholder="Company"
          className="border p-2 mr-2"
          required
        />

        <button className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-3 rounded-xl transition">
          Add Lead
        </button>
      </form>

      {/* LIST */}
      {leads.length === 0 ? (
        <p>No leads found</p>
      ) : (
        leads.map((lead) => (
  <div key={lead._id} className="p-4 bg-white mb-3 rounded-xl shadow">
    
    <div>
      <h2 className="font-bold">{lead.name}</h2>
      <p>{lead.company}</p>
    </div>

    <button
      onClick={async () => {
        await API.delete(`/leads/${lead._id}`);
        fetchLeads();
      }}
      className="bg-red-500 text-white px-3 py-1 rounded"
    >
      Delete
    </button>

  </div>
))
      )
      
      }
    </div>
  );
}

export default Leads;