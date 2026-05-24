function Team() {

  const members = [
    {
      name: "Aurbagni",
      role: "Admin",
    },
    {
      name: "Rahul",
      role: "Sales Executive",
    },
    {
      name: "Priya",
      role: "Business Development Associate",
    },
  ];

  return (
    <div>

      <h1 className="text-3xl font-bold mb-8">
        Team
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

        {members.map((member, index) => (

          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow"
          >

            <h2 className="text-xl font-bold">
              {member.name}
            </h2>

            <p className="text-gray-500 mt-2">
              {member.role}
            </p>

          </div>

        ))}

      </div>

    </div>
  );
}

export default Team;