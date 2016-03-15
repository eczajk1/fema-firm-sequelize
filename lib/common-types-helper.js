'use strict';

function commonTypesHelper (Datatypes) {

  this.STRING = function (length, required, defaultValue) {

    var definition = {
      type: length ? DataTypes.STRING(length) : DataTypes.STRING,
      allowNull: required ? false : undefined,
      defaultValue: typeof(defaultValue) === 'string' ? defaultValue : undefined
    };

    return required || defaultValue ? definition : definition.type;
  }
}

module.exports = commonTypesHelper;
