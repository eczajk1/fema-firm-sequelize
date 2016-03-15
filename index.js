var fs        = require('fs');
var path      = require('path');
var Sequelize = require('sequelize');


function Models (config) {

  this.sequelize = new Sequelize(config.database, config.username, config.password, config);
  this.Sequelize = Sequelize;

  var db = this;

  fs
    .readdirSync(__dirname + '/models')
    .forEach(function (file) {
      var modelPath = path.join(__dirname, 'models', file);
      var model = db.sequelize.import(modelPath);
      db[model.name] = model;
    });

  Object.keys(db).forEach(function (modelName) {
    if ('associate' in db[modelName]) {
      db[modelName].associate(db);
    }
  });
}

module.exports = Models;
