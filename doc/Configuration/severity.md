## severity

This configuration setting determines how failed checks are handled. (Default: `error`)

* **error**: Logs to the error console and exits with an error status.
* **warning**: Logs to the warning console and exits with a non-error status.
* **notice**: Logs to the standard console and exits with a non-error status.

### Configuration file example

```json
{
  "severity": "notice"
}
```

### Command line example

```
npx @jaunty-script/checkdoc --severity=notice
```
