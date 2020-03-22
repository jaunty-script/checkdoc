const Shell = require('shelljs');
const GitDiffFileSource = require('../../src/FileSource/GitDiffFileSource');

jest.mock('shelljs');

describe('GitDiffFileSource', () => {
  beforeEach(() => {
    Shell.exec = jest.fn();
  });

  test.each([
    [{
      config: {
        reference: 'HEAD',
      },
      mockCallResults: [
        'file.js',
      ],
      expectedCalls: [
        ['git diff --name-only HEAD', { silent: true }],
      ],
      expectedResult: [
        'file.js',
      ],
    }],
    [{
      config: {
        reference: 'last-tag',
      },
      mockCallResults: [
        'v1.35.10',
        'index.js',
      ],
      expectedCalls: [
        ['git describe --abbrev=0 --tags', { silent: true }],
        ['git diff --name-only v1.35.10', { silent: true }],
      ],
      expectedResult: [
        'index.js',
      ],
    }],
  ])('getFiles(config) | %j', (example) => {
    const {
      config,
      mockCallResults,
      expectedCalls,
      expectedResult,
    } = example;
    const fileSource = new GitDiffFileSource();

    mockCallResults.forEach((result) => {
      Shell.exec.mockReturnValueOnce(result);
    });

    const result = fileSource.getFiles(config);

    expect(result).toStrictEqual(expectedResult);
    expectedCalls.forEach((expectedCall, index) => {
      expect(Shell.exec).toHaveBeenNthCalledWith(index + 1, ...expectedCall);
    });
    expect(Shell.exec).toHaveBeenCalledTimes(expectedCalls.length);
  });
});
