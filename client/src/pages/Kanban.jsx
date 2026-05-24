import { useEffect, useState } from "react";
import API from "../services/api";

function Kanban() {

  const [leads, setLeads] = useState([]);

  const columns = [
    "New",
    "Contacted",
    "Qualified",
    "Converted",
  ];

  // FETCH LEADS
  const fetchLeads = async () => {

    try {

      const res = await API.get("/leads");

      setLeads(res.data);

    } catch (error) {

      console.log(error);

    }

  };

  useEffect(() => {
    fetchLeads();
  }, []);

  // UPDATE STATUS
  const updateStatus = async (id, status) => {

    try {

      await API.put(`/leads/${id}`, {
        status,
      });

      fetchLeads();

    } catch (error) {

      console.log(error);

    }

  };

  return (
    <div>

      <h1 className="text-3xl font-bold mb-8">
        Lead Pipeline
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

        {columns.map((column) => (

          <div
            key={column}
            className="bg-gray-200 p-4 rounded-2xl min-h-[500px]"
          >

            <h2 className="text-xl font-bold mb-4">
              {column}
            </h2>

            {leads
              .filter(
                (lead) => (lead.status || "New") === column
              )
              .map((lead) => (

                <div
                  key={lead._id}
                  className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition mb-4"
                >

                  <h3 className="font-bold">
                    {lead.name}
                  </h3>

                  <p className="text-gray-500 mb-3">
                    {lead.company}
                  </p>

                  <select
                    value={lead.status || "New"}
                    onChange={(e) =>
                      updateStatus(
                        lead._id,
                        e.target.value
                      )
                    }
                    className="border p-2 w-full rounded"
                  >
                    <option value="New">
                      New
                    </option>

                    <option value="Contacted">
                      Contacted
                    </option>

                    <option value="Qualified">
                      Qualified
                    </option>

                    <option value="Converted">
                      Converted
                    </option>

                  </select>

                </div>

              ))}

          </div>

        ))}

      </div>

    </div>
  );
}

export default Kanban;