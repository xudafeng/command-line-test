# command-line-test

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]
[![node version][node-image]][node-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/command-line-test.svg?style=flat-square
[npm-url]: https://npmjs.org/package/command-line-test
[travis-image]: https://img.shields.io/travis/xudafeng/command-line-test.svg?style=flat-square
[travis-url]: https://travis-ci.org/xudafeng/command-line-test
[coveralls-image]: https://img.shields.io/coveralls/xudafeng/command-line-test.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/xudafeng/command-line-test?branch=master
[node-image]: https://img.shields.io/badge/node.js-%3E=_0.10-green.svg?style=flat-square
[node-url]: http://nodejs.org/download/
[download-image]: https://img.shields.io/npm/dm/command-line-test.svg?style=flat-square
[download-url]: https://npmjs.org/package/command-line-test

> command-line test tool for Node.js

## Installment

```shell
$ npm i command-line-test --save-dev
```

## Usage

```javascript
const CliTest = require('..');

const pkg = require('../package');

describe('test', function() {
  it('constructor should be ok', function() {
    CliTest.should.be.ok();
  });

  it('exec method should be ok', function *() {
    const cliTest = new CliTest();
    const res = yield cliTest.exec('cat package.json');
    const _pkg = JSON.parse(res.stdout);
    pkg.name.should.be.equal(_pkg.name);
  });
});
```

## Sample

- [macacajs/macaca-cli](//github.com/macacajs/macaca-cli/tree/master/test)
- [xudafeng/startserver](//github.com/xudafeng/startserver/tree/master/test)
- [xudafeng/detect-port](//github.com/xudafeng/detect-port/tree/master/test)

## License

The MIT License (MIT)

Copyright (c) 2015 xdf
