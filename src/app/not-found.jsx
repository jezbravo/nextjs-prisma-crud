import Link from "next/link";

function NotFound() {
  return (
    <section className="flex h-[calc(100vh-7rem)] items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold">Not Found</h1>
        <Link href={"/"} className="mt-5 text-slate-400">
          Volver al Inicio
        </Link>
      </div>
    </section>
  );
}

export default NotFound;
