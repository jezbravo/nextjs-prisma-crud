import Link from "next/link";

function Nabvar() {
  return (
    <nav className="bg-slate-900">
      <div className="container mx-auto flex items-center justify-between py-3">
        <Link href={"/"}>
          <h3 className="text-3xl font-bold">NextJS & Prisma CRUD</h3>
        </Link>
        <ul className="flex gap-x-4 text-lg font-bold">
          <li className="text-slate-300 hover:text-slate-200">
            <Link href={"/"}>Inicio</Link>
          </li>
          <li className="text-slate-300 hover:text-slate-200">
            <Link href={"/new"}>Nueva tarea</Link>
          </li>
          <li className="text-slate-300 hover:text-slate-200">
            <Link href={"/about"}>Acerca de</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nabvar;
