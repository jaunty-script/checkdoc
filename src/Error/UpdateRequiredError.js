module.exports = class UpdateRequiredError extends Error {
  constructor(document, files) {
    super();
    this.message = (''
      + `${document} requires an update. The following related files were changed:\n`
      + `  ${files.join('\n  ')}\n`
    );
    this.name = 'UpdateRequiredError';
  }
};
