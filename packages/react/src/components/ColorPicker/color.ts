/** Colour conversions. HSV keeps the hue when saturation or brightness reach zero. */

export interface Hsva { h: number; s: number; v: number; a: number } // h 0-360, s/v/a 0-1
export interface Rgba { r: number; g: number; b: number; a: number } // r/g/b 0-255, a 0-1

const clamp = (n: number, lo = 0, hi = 1) => Math.min(hi, Math.max(lo, n));
const hex2 = (n: number) => Math.round(n).toString(16).padStart(2, '0');

export function parseHex(input: string): Rgba | null {
  let h = input.trim().replace(/^#/, '');
  if (/^[0-9a-f]{3,4}$/i.test(h)) h = [...h].map((c) => c + c).join('');
  if (!/^[0-9a-f]{6}([0-9a-f]{2})?$/i.test(h)) return null;
  const n = (i: number) => parseInt(h.slice(i, i + 2), 16);
  return { r: n(0), g: n(2), b: n(4), a: h.length === 8 ? n(6) / 255 : 1 };
}

export function toHex({ r, g, b, a }: Rgba, withAlpha = a < 1) {
  return `#${hex2(r)}${hex2(g)}${hex2(b)}${withAlpha ? hex2(a * 255) : ''}`.toUpperCase();
}

export function rgbToHsv({ r, g, b, a }: Rgba): Hsva {
  const [R, G, B] = [r / 255, g / 255, b / 255];
  const max = Math.max(R, G, B);
  const d = max - Math.min(R, G, B);
  let h = 0;
  if (d) h = max === R ? ((G - B) / d) % 6 : max === G ? (B - R) / d + 2 : (R - G) / d + 4;
  return { h: (h * 60 + 360) % 360, s: max ? d / max : 0, v: max, a };
}

export function hsvToRgb({ h, s, v, a }: Hsva): Rgba {
  const f = (n: number) => {
    const k = (n + h / 60) % 6;
    return (v - v * s * clamp(Math.min(k, 4 - k), 0, 1)) * 255;
  };
  return { r: f(5), g: f(3), b: f(1), a };
}

export function rgbToHsl({ r, g, b }: Rgba) {
  const { h, s: sv, v } = rgbToHsv({ r, g, b, a: 1 });
  const l = v * (1 - sv / 2);
  const s = l === 0 || l === 1 ? 0 : (v - l) / Math.min(l, 1 - l);
  return { h, s, l };
}

export function hslToRgb(h: number, s: number, l: number, a = 1): Rgba {
  const v = l + s * Math.min(l, 1 - l);
  const sv = v === 0 ? 0 : 2 * (1 - l / v);
  return hsvToRgb({ h, s: sv, v, a });
}

export { clamp };
