module.exports = class ErrorSeverityErrorHandler {
  constructor(options = {}) {
    const {
      emitter = process,
      logger = console,
    } = options;
    this.emitter = emitter;
    this.logger = logger;
  }

  handleErrors(errors) {
    errors.forEach((error) => this.logger.error(error.message));
    if (errors.length > 0) {
      this.emitter.exit(1);
    }
  }
};
