import { prisma } from "@/libs/prisma";

async function loadTasks() {
  // const res = await fetch("http://localhost:3000/api/tasks");
  // const data = await res.json();
  return await prisma.task.findMany();
}

async function HomePage() {
  const tasks = await loadTasks();
  console.log(tasks);

  return (
    <section className="container mx-auto">
      <div className="mt-10 grid grid-cols-3 gap-3">
        {tasks.map((task) => (
          <div
            key={task.id}
            className="bg-slate-900 p-3 hover:cursor-pointer hover:bg-slate-800"
          >
            <h3 className="mb-2 text-2xl font-bold">{task.title}</h3>
            <p>{task.description}</p>
            <p>{new Date(task.createdAt).toLocaleDateString()}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HomePage;
