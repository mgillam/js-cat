# concatifier
## A fork of [concat](https://github.com/gko/concat)

[![Build Status](https://travis-ci.org/gko/concat.svg?branch=master)](https://travis-ci.org/gko/concat)

Concatenate multiple files. The only critical difference from the upstream **concat** is that this one does not add newline characters between the concatenated files.

## Usage

```bash
Usage: concat [options]

concatenate multiple files

Options:
    -h, --help                   output usage information
    -V, --version                output the version number
    -o, --output <file>          output file
```

examples:
```bash
concat -o output.css ./1.css ./2.css ./3.css
```

You can also use it from node:

```javascript
const concat = require('concat');

concat([file1, file2, file3]).then(result => console.log(result))

// or
concat([file1, file2, file3], outputFile)
```

## Tests

To run tests you simply need to do:
```bash
npm run test
```

## Like it?

:star: this repo

## License

[MIT](http://opensource.org/licenses/MIT)

Concat is Copyright (c) 2017 Konstantin Gorodinskiy
