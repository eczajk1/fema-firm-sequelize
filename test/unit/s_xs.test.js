'use strict';

var expect = require('expect.js');

describe('models/s_xs', function () {
  beforeEach(function () {
    this.s_xs = require('../../index.js').s_xs;
  });

  describe('create', function () {
    it('creates a cross-section (s_xs)', function () {

      var test_xs = {
        XS_LN_ID: '1'
      };

      return this.s_xs.create(test_xs).then(function (s_xs) {
        expect(s_xs.XS_LN_ID).to.equal('1');
        expect(s_xs.SOURCE_CIT).to.equal('NP');
      });
    });
  });
});
