const ErrorSeverityErrorHandler = require('../../../src/Error/Handler/ErrorSeverityErrorHandler');

describe('ErrorSeverityErrorHandler', () => {
  test('constructor()', () => {
    const errorHandler = new ErrorSeverityErrorHandler();
    expect(errorHandler.emitter).toStrictEqual(process);
    expect(errorHandler.logger).toStrictEqual(console);
  });

  test('handleErrors(errors)', () => {
    const errors = [
      new Error('Oh no!'),
      new Error('Something happened.'),
    ];
    const emitter = {
      exit: jest.fn(),
    };
    const logger = {
      error: jest.fn(),
    };
    const errorHandler = new ErrorSeverityErrorHandler({
      emitter,
      logger,
    });
    errorHandler.handleErrors(errors);
    expect(logger.error).toHaveBeenNthCalledWith(1, errors[0].message);
    expect(logger.error).toHaveBeenNthCalledWith(2, errors[1].message);
    expect(logger.error).toHaveBeenCalledTimes(errors.length);
    expect(emitter.exit).toHaveBeenCalledWith(1);
    expect(emitter.exit).toHaveBeenCalledTimes(1);
  });

  test('handleErrors(errors) with no errors', () => {
    const errors = [];
    const emitter = {
      exit: jest.fn(),
    };
    const logger = {
      error: jest.fn(),
    };
    const errorHandler = new ErrorSeverityErrorHandler({
      emitter,
      logger,
    });
    errorHandler.handleErrors(errors);
    expect(logger.error).toHaveBeenCalledTimes(0);
    expect(emitter.exit).toHaveBeenCalledTimes(0);
  });
});
