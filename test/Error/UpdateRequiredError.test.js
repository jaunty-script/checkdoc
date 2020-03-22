const UpdateRequiredError = require('../../src/Error/UpdateRequiredError');

describe('UpdateRequiredError', () => {
  test('constructor(document, files)', () => {
    const document = 'doc.md';
    const files = [
      'widget.js',
      'gadget.js',
      'bauble.js',
    ];
    const expected = (''
      + 'doc.md requires an update. The following related files were changed:\n'
      + '  widget.js\n'
      + '  gadget.js\n'
      + '  bauble.js\n'
    );
    const error = new UpdateRequiredError(document, files);
    expect(error).toBeInstanceOf(Error);
    expect(error.message).toStrictEqual(expected);
    expect(error.name).toStrictEqual('UpdateRequiredError');
  });
});
