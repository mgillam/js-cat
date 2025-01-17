#!/usr/bin/env node

'use strict';

const app = require('commander')
const cfg = require('../package.json');
const concat = require('../index');
const path = require('path');

app.version(cfg.version)
  .option('-o, --output <file>', 'output file')
  .option('-d, --delimiter <string>', 'delimiter between files')
  .description(cfg.description)

app.parse(process.argv);

let err = (err: Error) => console.log(err);
let output = (o: string) => {
  if (!app.output) {
    console.log(o);
  }
};

if(app.args.length) {
  concat(app.args, app.output, { delimiter: app.delimiter || ''}).then(output).catch(err)
} else throw new Error('no files specified')
