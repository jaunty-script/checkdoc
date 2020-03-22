# checkdoc

It's easy to forget to update documentation, even when it's generated from comments in the code.
This CLI tool can help with that by ensuring that whenever files are updated, the developer is reminded to update the corresponding documentation as well.

## Quick start

Install the package using npm.

```
npm install @jaunty-script/checkdoc --save-dev
```

Create a `.checkdoc.json` file.
Alternatively, create a `checkdoc` section in your `package.json` file.

```json
{
  "documents": [
    {
      "file": "README.md",
      "dependents": ["index.js"]
    }
  ]
}
```

Run checkdoc using `npx`.

```
npx @jaunty-script/checkdoc
```

And that's it!
This will use git to check for changed files between the working tree and the `master` branch (default behavior).
If `index.js` was changed and `README.md` was not changed, the following message will appear and an error will be emitted.

```
README.md requires an update. The following related files were changed:
  index.js
```

If no changes to documentation are needed, the documentation file can be updated with a minor change, such as a timestamp.
Alternatively, the [severity level](/doc/Configuration/severity.md) can be reduced to `notice` or `warning` and the messages can be ignored.

## Documentation

* [Command Line](/doc/CommandLine.md)
* [Configuration](/doc/Configuration.md)
  * [documents](/doc/Configuration/documents.md)
  * [from](/doc/Configuration/from.md)
  * [reference](/doc/Configuration/reference.md)
  * [severity](/doc/Configuration/severity.md)
