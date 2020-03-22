const ErrorHandlerFactory = require('../src/Error/Handler/ErrorHandlerFactory');
const FileChecker = require('../src/FileChecker');
const FileListFactory = require('../src/FileListFactory');
const UpdateRequiredError = require('../src/Error/UpdateRequiredError');

describe('FileChecker', () => {
  test('constructor()', () => {
    const fileChecker = new FileChecker();
    expect(fileChecker.errorHandlerFactory).toBeInstanceOf(ErrorHandlerFactory);
    expect(fileChecker.fileListFactory).toBeInstanceOf(FileListFactory);
  });

  test('checkFiles(config)', () => {
    const config = {
      documents: [
        {
          file: 'document.md',
          dependencies: [
            'index.js',
            'widget.js',
          ],
        },
        {
          file: 'document.md',
          dependencies: [
            'bauble.js',
            'widget.js',
          ],
        },
        {
          file: 'widget.md',
          dependencies: [
            'widget.js',
          ],
        },
        {
          file: 'bauble.md',
          dependencies: [
            'bauble.js',
          ],
        },
      ],
    };
    const files = [
      'bauble.js',
      'component.js',
      'widget.md',
      'widget.js',
    ];
    const expectedErrors = [
      new UpdateRequiredError('document.md', ['bauble.js', 'widget.js']),
      new UpdateRequiredError('bauble.md', ['bauble.js']),
    ];
    const errorHandler = {
      handleErrors: jest.fn(),
    };
    const fileChecker = new FileChecker({
      errorHandlerFactory: {
        make: jest.fn(() => errorHandler),
      },
      fileListFactory: {
        make: jest.fn(() => files),
      },
    });
    fileChecker.checkFiles(config);
    expect(errorHandler.handleErrors).toHaveBeenCalledWith(expectedErrors);
    expect(errorHandler.handleErrors).toHaveBeenCalledTimes(1);
  });
});
