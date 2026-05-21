import Link from "next/link";

export default function NotFound() {
  return (
    <main className="not-found">
      <h1>Página não encontrada</h1>
      <p>O endereço que você acessou não existe neste site.</p>
      <Link href="/" className="btn btn-primary">
        Voltar ao início
      </Link>
    </main>
  );
}
