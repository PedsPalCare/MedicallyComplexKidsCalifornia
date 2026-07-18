import { describe, expect, it } from 'vitest';
import { programs } from '../src/data/programs';
import { resources } from '../src/data/resources';
import { denialPaths } from '../src/data/denials';
import { counties, needs } from '../src/data/site';

const isoDate = /^\d{4}-\d{2}-\d{2}$/;

describe('statewide data contracts', () => {
  it('contains all 58 California counties exactly once', () => {
    expect(counties).toHaveLength(58);
    expect(new Set(counties).size).toBe(58);
  });

  it('covers every home-page family need', () => {
    expect(needs).toHaveLength(10);
    expect(new Set(needs.map((need) => need.id)).size).toBe(needs.length);
  });

  it('requires source and review metadata on every program', () => {
    expect(programs.length).toBeGreaterThanOrEqual(11);
    for (const program of programs) {
      expect(program.slug).toMatch(/^[a-z0-9]+(?:-[a-z0-9]+)*$/);
      expect(program.sources.length).toBeGreaterThan(0);
      expect(program.lastReviewed).toMatch(isoDate);
      expect(program.nextReview).toMatch(isoDate);
      expect(program.contentOwner.length).toBeGreaterThan(0);
      for (const source of program.sources) expect(source.url).toMatch(/^https:\/\//);
    }
  });

  it('has a distinct denial route for every requested system', () => {
    expect(denialPaths.map((path) => path.id).sort()).toEqual([
      'ccs', 'hcba', 'ihss', 'medi-cal-ffs', 'medi-cal-plan', 'private-insurance', 'regional-center', 'school'
    ]);
    for (const path of denialPaths) {
      expect(path.sources.length).toBeGreaterThan(0);
      expect(path.verified).toMatch(isoDate);
      expect(path.deadline.toLowerCase()).toMatch(/notice|deadline|instructions|route|process/);
    }
  });

  it('publishes only named, source-linked resources', () => {
    expect(resources.length).toBeGreaterThanOrEqual(10);
    for (const resource of resources) {
      expect(resource.name.trim()).not.toBe('');
      expect(resource.url).toMatch(/^https:\/\//);
      expect(resource.sourceUrl).toMatch(/^https:\/\//);
      expect(resource.verified).toMatch(isoDate);
    }
  });
});
