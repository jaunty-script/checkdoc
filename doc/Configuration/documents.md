## documents

This configuration setting lists the documentation files (documents) and the files they depend on.
Documents can be listed in `<document>:<dependency>` format or as a list of objects in the following format.

```json
{
  "file": "<document>",
  "dependencies": ["<file>"]
}
```

This configuration option is also available as the command-line argument [`--documents`](../CommandLine.md#--documents).
When using the command line argument, documents must be listed in `<document>:<dependency>` format.

### Configuration file example

```json
{
  "documents": [
    "doc/widget.md:src/widget.js",
    "doc/widget.md:src/widget-component.js",
    {
      "file": "doc/bauble.md",
      "dependencies": [
        "src/bauble.js",
        "src/bauble-component.js"
      ]
    }
    {
      "file": "README.md",
      "dependencies": ["index.js"]
    }
  ]
}
```

### Command line example

```
npx @jaunty-script/checkdoc --documents "README.md:index.js" "doc/widget.md:src/widget.js"
```
