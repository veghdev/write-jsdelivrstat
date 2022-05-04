# Contributing

# Issues

You can find our open issues in the project's [issue tracker](https://github.com/veghdev/write-jsdelivrstat/issues). Please let us know if you find any issues or have any feature requests there.

# Pull requests

A pull request must contain a linked issue, its title should explain the issue or feature shortly and clearly.

# CI check

The `check` script collects the scripts which are run by the `CI` workflow.
The `CI` workflow invokes the `check-prettier` and the `check-eslint` scripts.

```sh
npm run check
```

## Formatting

The write-jsdelivrstat project is formatted with `prettier`.
Run the `check-prettier` script to check that the js files are formatted with `prettier`.

```sh
npm run check-prettier
```

`prettier` can be run with the `prettier` script.

```sh
npm run prettier
```

## Linter

The `eslint` script runs `eslint` over the write-jsdelivrstat project.

```sh
npm run eslint
```

# Release

write-jsdelivrstat is distributed on npmjs.

## Changes

If your changes are ready to release, you should increase the version number in `package.json`. The version bump should be in a separated commit 
and the commit message should be in the following format:

```
'package.json: version x.y.z'
```

New release should be created on [github](https://github.com/veghdev/write-jsdelivrstat/releases/new).

**Note:** Release notes are auto-generated from closed pull requests.

## Package

Publishing a new release will automatically trigger the [Release](https://github.com/veghdev/write-jsdelivrstat/blob/main/.github/workflows/release.yml) workflow which builds and uploads the write-jsdelivrstat package to [npmjs](https://www.npmjs.com/package/write-jsdelivrstat/).
