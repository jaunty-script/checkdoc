const NoticeSeverityErrorHandler = require('../../../src/Error/Handler/NoticeSeverityErrorHandler');

describe('NoticeSeverityErrorHandler', () => {
  test('constructor()', () => {
    const errorHandler = new NoticeSeverityErrorHandler();
    expect(errorHandler.logger).toStrictEqual(console);
  });

  test('handleErrors(errors)', () => {
    const errors = [
      new Error('Oh no!'),
      new Error('Something happened.'),
    ];
    const logger = {
      log: jest.fn(),
    };
    const errorHandler = new NoticeSeverityErrorHandler({ logger });
    errorHandler.handleErrors(errors);
    expect(logger.log).toHaveBeenNthCalledWith(1, errors[0].message);
    expect(logger.log).toHaveBeenNthCalledWith(2, errors[1].message);
    expect(logger.log).toHaveBeenCalledTimes(errors.length);
  });
});
