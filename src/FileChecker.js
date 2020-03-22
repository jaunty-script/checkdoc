const ErrorHandlerFactory = require('./Error/Handler/ErrorHandlerFactory');
const FileListFactory = require('./FileListFactory');
const UpdateRequiredError = require('./Error/UpdateRequiredError');

module.exports = class FileChecker {
  constructor(options = {}) {
    const {
      errorHandlerFactory = new ErrorHandlerFactory(),
      fileListFactory = new FileListFactory(),
    } = options;
    this.errorHandlerFactory = errorHandlerFactory;
    this.fileListFactory = fileListFactory;
  }

  checkFiles(config) {
    const {
      documents,
    } = config;
    const errorHandler = this.errorHandlerFactory.make(config);
    const fileList = this.fileListFactory.make(config);
    const documentsThatNeedUpdate = new Map();
    documents.forEach((document) => {
      const {
        dependencies,
        file,
      } = document;

      if (fileList.includes(file)) {
        return;
      }

      dependencies.forEach((dependency) => {
        if (!fileList.includes(dependency)) {
          return;
        }

        if (!documentsThatNeedUpdate.has(file)) {
          documentsThatNeedUpdate.set(file, new Set());
        }

        documentsThatNeedUpdate.get(file).add(dependency);
      });
    });

    const errors = [];
    documentsThatNeedUpdate.forEach((files, document) => {
      errors.push(new UpdateRequiredError(document, [...files].sort()));
    });

    errorHandler.handleErrors(errors);
  }
};
