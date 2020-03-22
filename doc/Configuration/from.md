## from

This configuration setting determines where the checked files are pulled from. (Default: `git-diff`)

### args

When set to `args`, the files are expected to be passed in through the command line arguments.
Use this setting if you require precise control over what files are being checked.

#### Configuration file example

```json
{
  "from": "args"
}
```
```
npx @jaunty-script/checkdoc index.js src/widget.js
```

#### Command line example

```
npx @jaunty-script/checkdoc --from=args index.js src/widget.js
```

### git-diff

When set to `git-diff`, the files are pulled using [`git diff`](https://git-scm.com/docs/git-diff).
This checks the files changed between the current state and the reference specified in the [`reference`](./reference.md) setting (Default: `master`).
This is equivalent to running `git diff --name-only <reference>`.

The following aliases are available as `reference` settings.

* **last-tag**: Pulls the last tagged version of the repository with `git describe --abbrev=0 --tags`

#### Configuration file example

```json
{
  "from": "git-diff"
}
```

#### Command line example

```
npx @jaunty-script/checkdoc --from="git-diff"
```
