export const ASSET_BASE_URL = process.env.NEXT_PUBLIC_ASSET_BASE_URL ?? "";

export const ASSET_HOSTNAME = ASSET_BASE_URL.replace(/^https?:\/\//, "");

export function asset(path: string) {
  if (!ASSET_BASE_URL) return path;

  const cleanPath = path.startsWith("/") ? path.slice(1) : path;
  return `${ASSET_BASE_URL}/${cleanPath}`;
}
