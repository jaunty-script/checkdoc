# Command Line

The following command line options are available.

## --help

Shows the help text which briefly describes each option.

## --version

Displays the current version of the tool.

## --config

Specify a file to pull [configuration settings](./Configuration.md) from. (Default: `.checkdoc.json`)

## --documents

Provide a list of documents to check.
See the [`documents`](./Configuration/documents.md) configuration setting for more details.

## --from

Specify where the checked files will be pulled from.
See the [`from`](./Configuration/from.md) configuration setting for more details.

## --reference

Used with `--from` or the `from` configuration setting to determine where the checked files will be pulled from.
See the [`reference`](./Configuration/reference.md) configuration setting for more details.

## --severity

Sets the severity level of failed checks.
See the [`severity`](./Configuration/severity.md) configuration setting for more details.
