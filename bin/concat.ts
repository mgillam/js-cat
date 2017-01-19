#!/usr/bin/env node

'use strict';

const app = require('commander')
const cfg = require('../package.json');
const concat = require('../index');
const path = require('path');
const fs = require('fs');

app.version(cfg.version)
  .option('-o, --output <file>', 'output file')
  .description(cfg.description)

app.parse(process.argv);

let err = err => console.log(err);
let output = o => {
  if (!app.output) {
    console.log(o);
  }
};

if(app.args.length) {
  concat(app.args, app.output).then(output).catch(err)
} else throw new Error('no files specified')