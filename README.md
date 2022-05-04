[![npm version](https://badge.fury.io/js/write-jsdelivrstat.svg)](https://badge.fury.io/js/write-jsdelivrstat)
[![CI](https://github.com/veghdev/write-jsdelivrstat/workflows/CI/badge.svg?branch=main)](https://github.com/veghdev/write-jsdelivrstat/actions/workflows/ci.yml)


# About The Project

write-jsdelivrstat makes it easy to collect, filter and save jsdelivr statistics to csv files.

# Installation

write-jsdelivrstat requires `enum`, `csv-writer`, `csv-parser` and `node-fetch` packages.

```sh
npm install write-jsdelivrstat
```

# Usage

```js
const WriteJsdelivrStat = require("write-jsdelivrstat").default;

const targetPackage = "npm-stat-api";
const csvDir = "stats/npm-stat-api";
const writejsdelivrstat = new WriteJsdelivrStat(targetPackage, csvDir);

writejsdelivrstat.writeJsdelivrStat("2021", "2022-03");

writejsdelivrstat.datePeriod = "month";
writejsdelivrstat.writeJsdelivrStat("2022-01", "2022-04-15");
```

Visit our [documentation](https://veghdev.github.io/write-jsdelivrstat/) site for code reference or 
our [wiki](https://github.com/veghdev/write-jsdelivrstat/wiki/) site for a step-by-step tutorial into write-jsdelivrstat.

# Contributing

We welcome contributions to the project, visit our [contributing](https://github.com/veghdev/write-jsdelivrstat/blob/main/CONTRIBUTING.md) guide for further info.

# Contact

Join our [discussions](https://github.com/veghdev/write-jsdelivrstat/discussions) page if you have any questions or comments.

# License

Copyright © 2022.

Released under the [Apache 2.0 License](https://github.com/veghdev/write-jsdelivrstat/blob/main/LICENSE).