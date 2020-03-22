module.exports = class ArgumentsFileSource {
  getFiles(config) {
    return config._;
  }
};
