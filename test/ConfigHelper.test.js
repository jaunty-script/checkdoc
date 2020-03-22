const ConfigHelper = require('../src/ConfigHelper');

describe('ConfigHelper', () => {
  test('ConfigHelper.coerceDocuments(documents)', () => {
    const documents = [
      'doc.md:file.js',
      {
        file: 'widget.md',
        dependencies: ['widget.js'],
      },
      ['ignored'],
      null,
      undefined,
      10,
    ];
    const expected = [
      {
        file: 'doc.md',
        dependencies: ['file.js'],
      },
      {
        file: 'widget.md',
        dependencies: ['widget.js'],
      },
    ];
    const result = ConfigHelper.coerceDocuments(documents);
    expect(result).toStrictEqual(expected);
  });
});
