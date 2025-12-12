import { Base64 } from './Base64';

const CURSOR_DELIMITER = ':';

export function decodeCursor(cursor: string): string {
  const decoded = Base64.decode(cursor);
  const parts = decoded.split(CURSOR_DELIMITER);

  if (parts.length !== 2) {
    throw new Error('Invalid cursor format');
  }

  const [prefix, id] = parts;

  if (!prefix || !id) {
    throw new Error('Invalid cursor format');
  }

  return id;
}

export function encodeCursor(prefix: string, id: string): string {
  return Base64.encode(`${prefix}${CURSOR_DELIMITER}${id}`);
}
