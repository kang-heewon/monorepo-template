export class Base64 {
  static encode(str: string): string {
    return Buffer.from(str, 'utf-8').toString('base64');
  }

  static decode(base64: string): string {
    return Buffer.from(base64, 'base64').toString('utf-8');
  }
}
