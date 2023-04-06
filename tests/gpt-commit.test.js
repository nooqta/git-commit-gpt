import { getGitSummary } from './../commands/gpt-commit';

describe('getGitSummary', () => {
  it('should return a string or null', async () => {
    const summary = await getGitSummary();
    expect(summary).toBeInstanceOf(String).or.toBeNull();
  });
});
