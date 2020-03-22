const Shell = require('shelljs');

module.exports = class GitDiffFileSource {
  getFiles(config) {
    const reference = this.getReference(config);
    const lines = Shell.exec(`git diff --name-only ${reference}`, { silent: true });
    return lines.trim().split('\n');
  }

  getReference(config) {
    const {
      reference,
    } = config;

    if (reference === 'last-tag') {
      return Shell.exec('git describe --abbrev=0 --tags', { silent: true });
    }

    return reference;
  }
};
