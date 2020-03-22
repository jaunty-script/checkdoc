module.exports = class WarningSeverityErrorHandler {
  constructor(options = {}) {
    const {
      logger = console,
    } = options;
    this.logger = logger;
  }

  handleErrors(errors) {
    errors.forEach((error) => this.logger.warn(error.message));
  }
};
