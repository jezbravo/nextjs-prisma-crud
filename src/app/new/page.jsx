"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

function NewPage({ params }) {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (params.id) {
      fetch(`/api/tasks/${params.id}`)
        .then((res) => res.json())
        .then((data) => {
          setTitle(data.title);
          setDescription(data.description);
        });
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // const title = e.target.title.value;
    // const description = e.target.description.value;
    if (params.id) {
      const res = await fetch(`/api/tasks/${params.id}`, {
        method: "PUT",
        body: JSON.stringify({ title, description }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      console.log(data);
    } else {
      const res = await fetch("/api/tasks", {
        method: "POST",
        body: JSON.stringify({ title, description }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
    }
    router.push("/");
    router.refresh();
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
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <label htmlFor="description" className="text-sm font-bold">
          Descripción
        </label>
        <textarea
          id="description"
          rows="3"
          className="mb-4 w-full border border-gray-400 p-2 text-black"
          placeholder="Descripción"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        ></textarea>
        <button className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700">
          Crear
        </button>
      </form>
    </div>
  );
}

export default NewPage;
