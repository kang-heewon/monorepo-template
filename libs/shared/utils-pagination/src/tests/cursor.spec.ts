import { describe, expect, it } from 'vitest';

import { Base64 } from '../Base64';
import { decodeCursor, encodeCursor } from '../cursor';

describe('cursor utilities', () => {
  it('decodes an encoded cursor and returns the identifier part', () => {
    const cursor = encodeCursor('prefix', '12345');

    expect(decodeCursor(cursor)).toBe('12345');
  });

  it('throws when the decoded cursor is missing the delimiter', () => {
    const cursor = Base64.encode('invalidcursor');

    expect(() => decodeCursor(cursor)).toThrowError('Invalid cursor format');
  });

  it('throws when the decoded cursor is missing the identifier', () => {
    const cursor = Base64.encode('prefix:');

    expect(() => decodeCursor(cursor)).toThrowError('Invalid cursor format');
  });
});
