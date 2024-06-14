import { describe, it, expect } from 'vitest';

describe('CI smoke test', () => {
  it('should pass CI', () => {
    expect(true).toBe(true);
  });
});