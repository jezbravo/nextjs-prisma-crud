"use client";
import { useRouter } from "next/navigation";

function TaskCard({ task }) {
  const router = useRouter();
  return (
    <div
      //   key={task.id}
      className="bg-slate-900 p-3 hover:cursor-pointer hover:bg-slate-800"
      onClick={() => {
        router.push("/tasks/edit/" + task.id);
      }}
    >
      <h3 className="mb-2 text-2xl font-bold">{task.title}</h3>
      <p>{task.description}</p>
      <p>{new Date(task.createdAt).toLocaleDateString()}</p>
    </div>
  );
}

export default TaskCard;
