const ErrorHandlerFactory = require('../../../src/Error/Handler/ErrorHandlerFactory');
const ErrorSeverityErrorHandler = require('../../../src/Error/Handler/ErrorSeverityErrorHandler');
const NoticeSeverityErrorHandler = require('../../../src/Error/Handler/NoticeSeverityErrorHandler');
const WarningSeverityErrorHandler = require('../../../src/Error/Handler/WarningSeverityErrorHandler');

describe('ErrorHandlerFactory', () => {
  test.each([
    [{
      config: {
        severity: 'error',
      },
      expected: expect.any(ErrorSeverityErrorHandler),
    }],
    [{
      config: {
        severity: 'warning',
      },
      expected: expect.any(WarningSeverityErrorHandler),
    }],
    [{
      config: {
        severity: 'notice',
      },
      expected: expect.any(NoticeSeverityErrorHandler),
    }],
  ])('make(config) | %j ', (example) => {
    const {
      config,
      expected,
    } = example;
    const factory = new ErrorHandlerFactory();
    const result = factory.make(config);
    expect(result).toStrictEqual(expected);
  });
});
