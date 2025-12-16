import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s | Status", // Template para títulos das rotas filhas dentro de /status
    default: "Status", // Título padrão caso a rota filha não defina um title
  },
  description: "Página de status do sistema.", // Meta description (SEO / snippets)
  keywords: ["status", "health", "monitoramento"], // Palavras-chave (pouco usadas por buscadores, mas ok)
  robots: {
    index: true, // Permite indexação por buscadores
    follow: true, // Permite seguir links na página
  },
  openGraph: {
    title: "Status", // Título para preview social (Open Graph)
    description: "Página de status do sistema.", // Descrição para preview social
    url: "/status", // URL base do segmento (ideal: absoluta com metadataBase)
    type: "website", // Tipo do recurso (ex: website, article)
    locale: "pt_BR", // Locale do conteúdo
  },
  twitter: {
    card: "summary", // Tipo de card do Twitter
    title: "Status", // Título do card
    description: "Página de status do sistema.", // Descrição do card
  },
};

export default function StatusLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
