import TaskCard from "@/components/TaskCard";
import { prisma } from "@/libs/prisma";

async function loadTasks() {
  // const res = await fetch("http://localhost:3000/api/tasks");
  // const data = await res.json();
  return await prisma.task.findMany();
}

// export const revalidate = 60;
export const dynamic = "force-dynamic";

async function HomePage() {
  const tasks = await loadTasks();
  console.log(tasks);

  return (
    <section className="container mx-auto">
      <div className="mt-10 grid grid-cols-3 gap-3">
        {tasks.map((task) => (
          <TaskCard task={task} key={task.id} />
        ))}
      </div>
    </section>
  );
}

export default HomePage;
