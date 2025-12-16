import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <Link href="/postagens/124" prefetch={false}>
          Abrir postagem 124
        </Link>
        <Link
          href={{
            pathname: "/postagens/125",
            query: {
              data: "125",
            },
          }}
          prefetch={false}
        >
          Abrir postagem 125
        </Link>
        <Link href="/status/ok" prefetch>
          Abrir status ok
        </Link>
      </main>
    </div>
  );
}
