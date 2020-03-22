const WarningSeverityErrorHandler = require('../../../src/Error/Handler/WarningSeverityErrorHandler');

describe('WarningSeverityErrorHandler', () => {
  test('constructor()', () => {
    const errorHandler = new WarningSeverityErrorHandler();
    expect(errorHandler.logger).toStrictEqual(console);
  });

  test('handleErrors(errors)', () => {
    const errors = [
      new Error('Oh no!'),
      new Error('Something happened.'),
    ];
    const logger = {
      warn: jest.fn(),
    };
    const errorHandler = new WarningSeverityErrorHandler({ logger });
    errorHandler.handleErrors(errors);
    expect(logger.warn).toHaveBeenNthCalledWith(1, errors[0].message);
    expect(logger.warn).toHaveBeenNthCalledWith(2, errors[1].message);
    expect(logger.warn).toHaveBeenCalledTimes(errors.length);
  });
});
