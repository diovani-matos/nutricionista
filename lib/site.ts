const whatsappNumber =
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "5511999999999";

export const siteConfig = {
  name: "Ana Luz Nutrição",
  title: "Dra. Ana Luz | Nutrição Funcional para Crianças Atípicas",
  description:
    "Especialista em crianças com TEA, TDAH e Seletividade Alimentar. Nutrição funcional materno-infantil com ciência e acolhimento.",
  url: "https://nutricionista-ivory.vercel.app",
  whatsappUrl: `https://wa.me/${whatsappNumber.replace(/\D/g, "")}`,
  social: {
    instagram: process.env.NEXT_PUBLIC_INSTAGRAM_URL ?? "",
    youtube: process.env.NEXT_PUBLIC_YOUTUBE_URL ?? "",
    whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_URL ?? "",
  },
} as const;
