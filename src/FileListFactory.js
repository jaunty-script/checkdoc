const ArgumentsFileSource = require('./FileSource/ArgumentsFileSource');
const GitDiffFileSource = require('./FileSource/GitDiffFileSource');

module.exports = class FileListFactory {
  constructor(options = {}) {
    const {
      sources = {
        args: new ArgumentsFileSource(),
        'git-diff': new GitDiffFileSource(),
      },
    } = options;
    this.sources = sources;
  }

  make(config) {
    const {
      from,
    } = config;
    const fileSource = this.sources[from];
    return fileSource.getFiles(config);
  }
};
