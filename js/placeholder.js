// SNKRS HUB — placeholder image generator
// Produces an on-brand "image placeholder" graphic as an inline SVG data URI.
// Swap these out for real photography later, no other code needs to change,
// just replace the placeholderImage(...) call with a real file path or URL.

function placeholderImage(label, ratio) {
  ratio = ratio || "1:1";
  const size = ratio === "4:3" ? { w: 800, h: 600 } : { w: 800, h: 800 };
  const safeLabel = String(label)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

  const cx = size.w / 2;
  const iconY = size.h / 2 - 60;
  const titleY = size.h / 2 + 55;
  const labelY = titleY + 30;

  const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="${size.w}" height="${size.h}" viewBox="0 0 ${size.w} ${size.h}">
  <rect width="${size.w}" height="${size.h}" fill="#1a1a18"/>
  <rect x="14" y="14" width="${size.w - 28}" height="${size.h - 28}" fill="none" stroke="#c1652f" stroke-width="2" stroke-dasharray="10 8"/>
  <g transform="translate(${cx},${iconY})" fill="none" stroke="#928f86" stroke-width="3">
    <rect x="-72" y="-54" width="144" height="108" rx="6"/>
    <circle cx="-32" cy="-20" r="13"/>
    <path d="M-72 32 L-22 -8 L18 22 L72 -22 L72 54 L-72 54 Z" fill="#928f86" stroke="none"/>
  </g>
  <text x="${cx}" y="${titleY}" text-anchor="middle" font-family="Arial, sans-serif" font-size="21" letter-spacing="2" fill="#f6f4f0" font-weight="700">IMAGE PLACEHOLDER</text>
  <text x="${cx}" y="${labelY}" text-anchor="middle" font-family="Arial, sans-serif" font-size="14" fill="#928f86">${safeLabel}</text>
</svg>`.trim();

  return "data:image/svg+xml;utf8," + encodeURIComponent(svg);
}
