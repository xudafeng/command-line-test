/* ================================================================
 * command-line-test by xdf(xudafeng[at]126.com)
 *
 * first created at : Sun Sep 25 2016 21:13:42 GMT+0800 (CST)
 *
 * ================================================================
 * Copyright  xdf
 *
 * Licensed under the MIT License
 * You may not use this file except in compliance with the License.
 *
 * ================================================================ */

'use strict';

var CliTest = require('..');

const pkg = require('../package');

describe('test', function() {

  it('constructor should be ok', function() {
    CliTest.should.be.ok();
  });

  it('exec method should be ok with yeild', function *() {
    const cliTest = new CliTest();
    const res = yield cliTest.exec('cat package.json');
    const _pkg = JSON.parse(res.stdout);
    pkg.name.should.be.equal(_pkg.name);
  });

  it('exec method should be ok with promise', function(done) {
    const cliTest1 = new CliTest();
    cliTest1.exec('cat package.json').then(res => {
      const _pkg = JSON.parse(res.stdout);
      pkg.name.should.be.equal(_pkg.name);
      done();
    });
  });

  it('exec method should be ok with callback', function(done) {
    const cliTest1 = new CliTest();
    cliTest1.exec('cat package.json', function(err, res) {
      const _pkg = JSON.parse(res.stdout);
      pkg.name.should.be.equal(_pkg.name);
      done();
    });
  });
});
