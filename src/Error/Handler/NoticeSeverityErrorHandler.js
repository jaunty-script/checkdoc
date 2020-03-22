module.exports = class NoticeSeverityErrorHandler {
  constructor(options = {}) {
    const {
      logger = console,
    } = options;
    this.logger = logger;
  }

  handleErrors(errors) {
    errors.forEach((error) => this.logger.log(error.message));
  }
};
