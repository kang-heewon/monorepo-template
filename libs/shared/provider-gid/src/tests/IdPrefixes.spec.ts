/* eslint-disable @typescript-eslint/no-explicit-any */
import { describe, expect, it } from 'vitest';
import { IdPrefixes } from '../libs/IdPrefixes';

describe('IdPrefixes', () => {
  describe('generate', () => {
    it('올바른 형식의 ID를 생성한다', () => {
      const userId = IdPrefixes.USER.generate();
      const workspaceId = IdPrefixes.WORKSPACE.generate();
      const workspaceMemberId = IdPrefixes.WORKSPACE_MEMBER.generate();
      const wikiDocId = IdPrefixes.WIKI_DOCUMENT.generate();
      const wikiVerId = IdPrefixes.WIKI_VERSION.generate();
      const seatActivityId = IdPrefixes.SEAT_ACTIVITY.generate();

      expect(userId).toMatch(/^usr_[0123456789ABCDEFGHJKMNPQRSTVWXYZ]{26}$/);
      expect(workspaceId).toMatch(/^wks_[0123456789ABCDEFGHJKMNPQRSTVWXYZ]{26}$/);
      expect(workspaceMemberId).toMatch(/^wsm_[0123456789ABCDEFGHJKMNPQRSTVWXYZ]{26}$/);
      expect(wikiDocId).toMatch(/^wdc_[0123456789ABCDEFGHJKMNPQRSTVWXYZ]{26}$/);
      expect(wikiVerId).toMatch(/^wvr_[0123456789ABCDEFGHJKMNPQRSTVWXYZ]{26}$/);
      expect(seatActivityId).toMatch(/^sact_[0123456789ABCDEFGHJKMNPQRSTVWXYZ]{26}$/);
    });

    it('생성된 ID의 길이가 정확하다', () => {
      const id = IdPrefixes.USER.generate();
      expect(id.length).toBe(IdPrefixes.getLength());
    });
  });

  describe('validate', () => {
    it('유효한 USER ID를 검증한다', () => {
      const validId = IdPrefixes.USER.generate();
      expect(IdPrefixes.USER.validate(validId)).toBe(true);
    });

    it('유효한 WORKSPACE ID를 검증한다', () => {
      const validId = IdPrefixes.WORKSPACE.generate();
      expect(IdPrefixes.WORKSPACE.validate(validId)).toBe(true);
    });

    it('유효한 WORKSPACE_MEMBER ID를 검증한다', () => {
      const validId = IdPrefixes.WORKSPACE_MEMBER.generate();
      expect(IdPrefixes.WORKSPACE_MEMBER.validate(validId)).toBe(true);
    });

    it('유효한 WIKI_DOCUMENT ID를 검증한다', () => {
      const validId = IdPrefixes.WIKI_DOCUMENT.generate();
      expect(IdPrefixes.WIKI_DOCUMENT.validate(validId)).toBe(true);
    });

    it('유효한 WIKI_VERSION ID를 검증한다', () => {
      const validId = IdPrefixes.WIKI_VERSION.generate();
      expect(IdPrefixes.WIKI_VERSION.validate(validId)).toBe(true);
    });

    it('유효한 SEAT_ACTIVITY ID를 검증한다', () => {
      const validId = IdPrefixes.SEAT_ACTIVITY.generate();
      expect(IdPrefixes.SEAT_ACTIVITY.validate(validId)).toBe(true);
    });

    it('잘못된 prefix를 가진 ID는 거부한다', () => {
      const userId = IdPrefixes.USER.generate();
      expect(IdPrefixes.WORKSPACE.validate(userId)).toBe(false);
    });

    it('길이가 잘못된 ID는 거부한다', () => {
      expect(IdPrefixes.USER.validate('usr_123')).toBe(false);
      expect(IdPrefixes.USER.validate('usr_')).toBe(false);
    });

    it('prefix가 없는 ID는 거부한다', () => {
      expect(IdPrefixes.USER.validate('01HQVXYZ123456789012345678')).toBe(false);
    });

    it('잘못된 ULID 형식은 거부한다', () => {
      expect(IdPrefixes.USER.validate('usr_invalidulid123456789012')).toBe(false);
      expect(IdPrefixes.USER.validate('usr_01HQVXYZ12345678901234567!')).toBe(false);
    });

    it('빈 문자열은 거부한다', () => {
      expect(IdPrefixes.USER.validate('')).toBe(false);
    });

    it('null이나 undefined는 거부한다', () => {
      expect(IdPrefixes.USER.validate(null as any)).toBe(false);
      expect(IdPrefixes.USER.validate(undefined as any)).toBe(false);
    });

    it('숫자나 객체는 거부한다', () => {
      expect(IdPrefixes.USER.validate(123 as any)).toBe(false);
      expect(IdPrefixes.USER.validate({} as any)).toBe(false);
      expect(IdPrefixes.USER.validate([] as any)).toBe(false);
    });
  });

  describe('getLength', () => {
    it('올바른 ID 길이를 반환한다', () => {
      const expectedLength = 3 + 1 + 26; // prefix(3) + underscore(1) + ulid(26)
      expect(IdPrefixes.getLength()).toBe(expectedLength);
    });

    it('긴 prefix 길이도 지원한다', () => {
      const expectedLength = 4 + 1 + 26;
      expect(IdPrefixes.getLength(4)).toBe(expectedLength);
    });
  });
});
