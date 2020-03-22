#!/usr/bin/env node

const CommandLineArguments = require('yargs');
const ConfigHelper = require('./src/ConfigHelper');
const FileChecker = require('./src/FileChecker');

CommandLineArguments.strict();
CommandLineArguments.wrap(CommandLineArguments.terminalWidth());
CommandLineArguments.pkgConf('checkdoc');
CommandLineArguments.option('config', {
  config: true,
  default: '.checkdoc.json',
  description: 'Specify config file',
  requiresArg: true,
  type: 'string',
});
CommandLineArguments.option('documents', {
  coerce: (documents) => ConfigHelper.coerceDocuments(documents),
  description: 'Provide documents to check',
  type: 'array',
});
CommandLineArguments.option('from', {
  choices: ['git-diff', 'args'],
  default: 'git-diff',
  description: 'Source of files to check',
  requiresArg: true,
  type: 'string',
});
CommandLineArguments.option('reference', {
  default: 'master',
  description: 'Reference for file source',
  requiresArg: true,
  type: 'string',
});
CommandLineArguments.option('severity', {
  choices: ['notice', 'warning', 'error'],
  description: 'Severity level of failed checks',
  default: 'error',
  requiresArg: true,
  type: 'string',
});

const fileChecker = new FileChecker();
fileChecker.checkFiles(CommandLineArguments.argv);
