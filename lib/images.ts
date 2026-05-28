/** URLs estáveis do images.unsplash.com (source.unsplash.com foi descontinuado). */
export function unsplash(
  photoId: string,
  width = 800,
  height?: number,
): string {
  const params = new URLSearchParams({
    auto: "format",
    fit: "crop",
    w: String(width),
    q: "80",
  });
  if (height) {
    params.set("h", String(height));
  }
  return `https://images.unsplash.com/${photoId}?${params.toString()}`;
}

export const IMAGES = {
  /** Mãe e filha à mesa — refeição acolhedora */
  hero: unsplash("photo-1544776193-352d25ca82cd", 900, 1200),
  /** Profissional de saúde em ambiente acolhedor */
  sobre: "/images/sobre-nutricionista.jpg",
} as const;
