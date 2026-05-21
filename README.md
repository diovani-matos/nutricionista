# Ana Luz Nutrição — Landing Page

Site institucional da **Dra. Ana Luz Ferreira**, nutricionista funcional especializada em crianças com **TEA**, **TDAH** e **seletividade alimentar**. Projeto desenvolvido com Next.js, TypeScript e animações suaves para uma experiência acolhedora e profissional.

## Prévia

Landing page de página única com seções: Hero, dores das famílias, abordagem, sobre a profissional, depoimentos, CTA para WhatsApp e rodapé.

## Stack

| Tecnologia | Uso |
|------------|-----|
| [Next.js 16](https://nextjs.org/) | App Router, SSR e otimização de imagens |
| [React 19](https://react.dev/) | Interface de componentes |
| [TypeScript](https://www.typescriptlang.org/) | Tipagem estática |
| [Tailwind CSS v4](https://tailwindcss.com/) | Utilitários (`object-cover`, `rounded-2xl`, etc.) |
| [Framer Motion](https://www.framer.com/motion/) | Animações de entrada, menu mobile e hovers |
| [Lucide React](https://lucide.dev/) | Ícones SVG |
| [Unsplash](https://unsplash.com/) | Imagens via `images.unsplash.com` |

## Paleta de cores

| Token | Cor | Uso |
|-------|-----|-----|
| `--sage` | Verde sálvia | Destaques secundários, passos |
| `--aqua` | Azul aqua | Botões primários, acentos, logo |
| `--aqua-light` | Aqua claro | Fundos de seções e depoimentos |
| `--off-white` | Off-white | Fundo geral |

## Estrutura do projeto

```
nutricionista/
├── app/
│   ├── globals.css      # Estilos globais e variáveis CSS
│   ├── layout.tsx       # Layout raiz (pt-BR, metadata)
│   └── page.tsx         # Página inicial (composição das seções)
├── components/
│   ├── Header.tsx       # Navegação + menu mobile animado
│   ├── Hero.tsx
│   ├── Dores.tsx
│   ├── Abordagem.tsx
│   ├── Sobre.tsx
│   ├── Depoimentos.tsx
│   ├── CtaSection.tsx
│   ├── Footer.tsx
│   └── motion/
│       ├── Reveal.tsx   # Fade-in ao scroll
│       └── Stagger.tsx  # Animação em cascata
└── lib/
    └── images.ts        # URLs estáveis das imagens Unsplash
```

## Como rodar localmente

### Pré-requisitos

- Node.js 18+
- npm (ou pnpm / yarn)

### Instalação

```bash
git clone https://github.com/SEU_USUARIO/nutricionista.git
cd nutricionista
npm install
```

### Desenvolvimento

```bash
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

### Build de produção

```bash
npm run build
npm start
```

### Lint

```bash
npm run lint
```

## Personalização rápida

| O quê | Onde alterar |
|-------|----------------|
| WhatsApp | `components/CtaSection.tsx` — link `wa.me` |
| Imagens | `lib/images.ts` — IDs do Unsplash |
| Textos e depoimentos | Componentes em `components/` |
| Cores | Variáveis em `app/globals.css` (`:root`) |
| SEO (título/descrição) | `app/layout.tsx` → `metadata` |

## Imagens

As fotos usam URLs diretas de `images.unsplash.com` (o antigo `source.unsplash.com` foi descontinuado). O domínio está configurado em `next.config.ts` em `images.remotePatterns`.

Após alterar `next.config.ts`, reinicie o servidor de desenvolvimento.

## Deploy

Compatível com [Vercel](https://vercel.com), Netlify ou qualquer host que suporte Next.js:

```bash
npm run build
```

## Histórico do projeto

1. Protótipo estático HTML
2. Migração para Next.js com componentes modulares
3. Responsividade mobile e menu hamburger funcional
4. Paleta aqua + animações Framer Motion
5. Imagens reais via Unsplash

## Licença

Projeto de portfólio — uso conforme acordado com a profissional.

---

Desenvolvido com foco em **ciência, acolhimento e neurodiversidade**.
