function Settings() {

  return (
    <div>

      <h1 className="text-3xl font-bold mb-8">
        Settings
      </h1>

      <div className="bg-white p-6 rounded-xl shadow max-w-2xl">

        <div className="mb-6">

          <label className="block mb-2 font-semibold">
            Company Name
          </label>

          <input
            type="text"
            value="LeadFlow CRM"
            className="w-full border p-3 rounded-lg"
            readOnly
          />

        </div>

        <div className="mb-6">

          <label className="block mb-2 font-semibold">
            Admin Email
          </label>

          <input
            type="email"
            value="admin@leadflow.com"
            className="w-full border p-3 rounded-lg"
            readOnly
          />

        </div>

        <button
          className="bg-blue-500 text-white px-5 py-3 rounded-lg"
        >
          Save Changes
        </button>

      </div>

    </div>
  );
}

export default Settings;