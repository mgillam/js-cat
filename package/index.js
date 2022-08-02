"use strict";
const fs_1 = require("fs");
const path_1 = require("path");
const log = (err) => console.log(err);
const isFile = (f) => (0, fs_1.statSync)(f).isFile();
const write = (fName, str) => new Promise((res, rej) => {
    (0, fs_1.writeFile)((0, path_1.resolve)(fName), str, (err) => {
        if (err)
            return rej(err);
        return res(str);
    });
});
const readFolder = (folder) => new Promise((res, rej) => {
    (0, fs_1.readdir)((0, path_1.resolve)(folder), (err, files) => {
        if (err)
            rej(err);
        const fileList = files.map(f => (0, path_1.join)(folder, f));
        res(fileList.filter(isFile));
    });
});
const read = (fName) => new Promise((res, rej) => {
    (0, fs_1.readFile)((0, path_1.resolve)(fName), (err, str) => {
        if (err)
            rej(err);
        res(str);
    });
});
const concat = (options) => {
    return (files) => new Promise((res, rej) => {
        return Promise.all(files.map(read))
            .then(src => res(src.join((options === null || options === void 0 ? void 0 : options.delimiter) || '\n')))
            .catch(rej);
    });
};
const defaultOptions = {
    delimiter: ''
};
module.exports = (folder, outFile, options) => new Promise((res, rej) => {
    let concatenated;
    let catOptions = Object.assign({}, defaultOptions, options || {});
    if (typeof folder === 'string') {
        concatenated = readFolder(folder)
            .then(concat(catOptions));
    }
    else {
        concatenated = concat(catOptions)(folder);
    }
    if (outFile) {
        concatenated.then((out) => write(outFile, out)
            .then(res)
            .catch(rej)).catch(rej);
    }
    else {
        concatenated.then(res).catch(rej);
    }
});
