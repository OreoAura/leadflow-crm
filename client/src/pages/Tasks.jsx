function Tasks() {

  const tasks = [
    {
      title: "Follow up with client",
      priority: "High",
    },
    {
      title: "Prepare sales proposal",
      priority: "Medium",
    },
    {
      title: "Schedule demo meeting",
      priority: "Low",
    },
  ];

  return (
    <div>

      <h1 className="text-3xl font-bold mb-8">
        Tasks
      </h1>

      <div className="grid gap-4">

        {tasks.map((task, index) => (

          <div
            key={index}
            className="bg-white p-5 rounded-xl shadow"
          >

            <h2 className="text-xl font-semibold">
              {task.title}
            </h2>

            <p className="text-gray-500 mt-2">
              Priority: {task.priority}
            </p>

          </div>

        ))}

      </div>

    </div>
  );
}

export default Tasks;