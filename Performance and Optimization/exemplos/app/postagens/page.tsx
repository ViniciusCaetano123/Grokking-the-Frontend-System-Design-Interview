"use client";
import Image from "next/image";
import { useRouter, useParams, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import Link from "next/link";

export default function Postagens() {
  const router = useRouter();
  const params = useParams();
  const searchParams = useSearchParams();
  console.log(searchParams.get("data"));
  useEffect(() => {
    console.log(params);
    console.log(searchParams);
    //router.push("/postagens/123");
  }, [router]);
  return (
    <div>
      <h1>Postagens</h1>
      <Image
        src="https://images.unsplash.com/photo-1605460375648-278bcbd579a6"
        alt="Vercel Logo"
        priority
        layout="fill"
        objectFit="cover"
      />
      <Link href="/postagens/123">Abrir postagem 123</Link>
    </div>
  );
}
