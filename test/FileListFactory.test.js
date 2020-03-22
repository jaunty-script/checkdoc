const ArgumentsFileSource = require('../src/FileSource/ArgumentsFileSource');
const FileListFactory = require('../src/FileListFactory');
const GitDiffFileSource = require('../src/FileSource/GitDiffFileSource');

describe('FileListFactory', () => {
  test('constructor()', () => {
    const factory = new FileListFactory();
    expect(factory.sources).toStrictEqual({
      args: expect.any(ArgumentsFileSource),
      'git-diff': expect.any(GitDiffFileSource),
    });
  });

  test('make(config)', () => {
    const expected = {
      test: 'test.js',
      otherTest: 'other-test.js',
    };
    const factory = new FileListFactory({
      sources: {
        test: {
          getFiles: jest.fn(() => expected.test),
        },
        otherTest: {
          getFiles: jest.fn(() => expected.otherTest),
        },
      },
    });
    expect(factory.make({ from: 'test' })).toStrictEqual(expected.test);
    expect(factory.make({ from: 'otherTest' })).toStrictEqual(expected.otherTest);
  });
});
