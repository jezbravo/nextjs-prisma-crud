"use client";
import { useRouter } from "next/navigation";

function NewPage() {
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const description = e.target.description.value;
    const res = await fetch("/api/tasks", {
      method: "POST",
      body: JSON.stringify({ title, description }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();
    console.log(data);
    router.push("/");
  };

  return (
    <div className="flex h-screen items-center justify-center">
      <form
        className="w-full bg-slate-800 p-10 md:w-1/2 lg:w-1/3"
        onSubmit={handleSubmit}
      >
        <label htmlFor="title" className="text-sm font-bold">
          Título de la tarea
        </label>
        <input
          id="title"
          type="text"
          className="mb-4 w-full border border-gray-400 p-2 text-black"
          placeholder="Título"
        />
        <label htmlFor="description" className="text-sm font-bold">
          Descripción
        </label>
        <textarea
          id="description"
          rows="3"
          className="mb-4 w-full border border-gray-400 p-2 text-black"
          placeholder="Descripción"
        ></textarea>
        <button className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700">
          Crear
        </button>
      </form>
    </div>
  );
}

export default NewPage;
