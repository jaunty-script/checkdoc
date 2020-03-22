const ArgumentsFileSource = require('../../src/FileSource/ArgumentsFileSource');

describe('ArgumentsFileSource', () => {
  test('getFiles(config)', () => {
    const config = {
      _: ['some', 'files'],
      other: 'ignored',
    };
    const fileSource = new ArgumentsFileSource();
    const result = fileSource.getFiles(config);
    expect(result).toStrictEqual(config._);
  });
});
