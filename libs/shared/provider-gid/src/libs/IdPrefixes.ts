import { ulid } from 'ulid';

const usedPrefixes = new Set<string>();

export class IdPrefixes {
  static readonly USER = new IdPrefixes('usr');
  static readonly WORKSPACE = new IdPrefixes('wks');
  static readonly WORKSPACE_MEMBER = new IdPrefixes('wsm');
  static readonly SLACK_INSTALLATION = new IdPrefixes('sli');
  static readonly WIKI_DOCUMENT = new IdPrefixes('wdc');
  static readonly WIKI_VERSION = new IdPrefixes('wvr');
  static readonly KUDOS_RECORD = new IdPrefixes('kud');
  static readonly KUDOS_CONFIG = new IdPrefixes('kuc');
  static readonly SLACK_MEMBER = new IdPrefixes('slm');
  static readonly BILLING_RECORD = new IdPrefixes('blr');
  static readonly INVOICE = new IdPrefixes('inv');
  static readonly SEAT_ACTIVITY = new IdPrefixes('sact');
  static readonly PRICING_TIER = new IdPrefixes('pti');
  static readonly SUBSCRIPTION = new IdPrefixes('sub');

  private readonly prefix: string;
  private readonly expectedLength: number;

  constructor(prefix: string) {
    if (prefix.length < 3) {
      throw new Error(`Prefix must be at least 3 characters long, but got ${prefix.length}`);
    }

    if (usedPrefixes.has(prefix)) {
      throw new Error(`Prefix '${prefix}' is already in use`);
    }

    usedPrefixes.add(prefix);
    this.prefix = prefix;
    this.expectedLength = IdPrefixes.getLength(prefix.length);
    this.generate = this.generate.bind(this);
  }

  public generate() {
    return `${this.prefix}_${ulid()}`;
  }

  public validate(id: string): boolean {
    if (typeof id !== 'string') {
      return false;
    }

    if (id.length !== this.expectedLength) {
      return false;
    }

    const expectedPrefix = `${this.prefix}_`;
    if (!id.startsWith(expectedPrefix)) {
      return false;
    }

    const ulidPart = id.slice(this.prefix.length + 1);
    const ulidRegex = /^[0123456789ABCDEFGHJKMNPQRSTVWXYZ]{26}$/;
    return ulidRegex.test(ulidPart);
  }

  static getLength(prefixLength = 3): number {
    const MINIMUM_PREFIX_LENGTH = 3;
    const ULID_LENGTH = 26;
    const actualPrefixLength = Math.max(prefixLength, MINIMUM_PREFIX_LENGTH);
    return actualPrefixLength + 1 + ULID_LENGTH;
  }
}
