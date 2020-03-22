const ErrorSeverityErrorHandler = require('./ErrorSeverityErrorHandler');
const NoticeSeverityErrorHandler = require('./NoticeSeverityErrorHandler');
const WarningSeverityErrorHandler = require('./WarningSeverityErrorHandler');

module.exports = class ErrorHandlerFactory {
  make(config) {
    const {
      severity,
    } = config;

    if (severity === 'error') {
      return new ErrorSeverityErrorHandler();
    }

    if (severity === 'warning') {
      return new WarningSeverityErrorHandler();
    }

    return new NoticeSeverityErrorHandler();
  }
};
