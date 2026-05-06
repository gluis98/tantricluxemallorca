import fs from 'fs';
import path from 'path';

const IMAGE_EXT = /\.(jpe?g|png|webp|gif|avif)$/i;

function resolveRoomsDir(): string | null {
  const candidates = [
    path.join(process.cwd(), 'public_html', 'images', 'rooms'),
    path.join(process.cwd(), 'public', 'images', 'rooms'),
  ];
  for (const dir of candidates) {
    if (fs.existsSync(dir)) return dir;
  }
  return null;
}

/**
 * Rutas públicas /images/rooms/... (misma convención que Laravel + ImageController).
 */
export function getRoomImagePaths(): string[] {
  const dir = resolveRoomsDir();
  if (!dir) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => IMAGE_EXT.test(f))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
    .map((f) => `/images/rooms/${encodeURIComponent(f)}`);
}
