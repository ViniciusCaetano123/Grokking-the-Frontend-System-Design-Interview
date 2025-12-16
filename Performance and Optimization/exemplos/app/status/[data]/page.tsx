import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { data: string } | Promise<{ data: string }>;
}): Promise<Metadata> {
  const { data } = await Promise.resolve(params);

  return {
    title: data,
    description: `Página de status: ${data}.`,
    alternates: {
      canonical: `/status/${data}`,
    },
    openGraph: {
      title: `Status ${data}`,
      description: `Página de status: ${data}.`,
      url: `/status/${data}`,
      type: "website",
      locale: "pt_BR",
    },
    twitter: {
      card: "summary",
      title: `Status ${data}`,
      description: `Página de status: ${data}.`,
    },
  };
}

export default async function StatusDataPage({
  params,
}: {
  params: { data: string } | Promise<{ data: string }>;
}) {
  const { data } = await Promise.resolve(params);
  return (
    <div>
      <h1>Status {data}</h1>
    </div>
  );
}
