'use strict';

var expect = require('expect.js');

describe('models/index', function () {

  beforeEach(function () {
    this.models = require('../../index.js');
  });

  it('returns the s_nodes model', function () {
    // var models = require('../../models');
    expect(this.models.s_nodes).to.be.ok();
  });

  it('returns the s_profil_basln model', function () {
    // var models = require('../../models');
    expect(this.models.s_profil_basln).to.be.ok();
  });

  it('returns the s_xs model', function () {
    // var models = require('../../models');
    expect(this.models.s_xs).to.be.ok();
  });

  it('returns the study_info model', function () {
    // var models = require('../../models');
    expect(this.models.study_info).to.be.ok();
  });
});
