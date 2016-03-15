'use strict';

module.exports = function(sequelize, DataTypes) {
  var S_BASE_INDEX = sequelize.define('s_base_index', {
    DFIRM_ID: {
      type: DataTypes.STRING(6),
      allowNull: false,
      defaultValue: 'NP'
    },

    THE_GEOM: 'geometry(MultiPolygon,4269)',

    BASE_ID: {
      type: DataTypes.STRING(25),
      allowNull: false,
      defaultValue: 'NP'
    },

    FILENAME: {
      type: DataTypes.STRING(128),
      allowNull: false,
      defaultValue: 'NP'
    },

    BASE_DATE: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: new Date(8888, 7, 8)
    },

    SOURCE_CIT: {
      type: DataTypes.STRING(11),
      allowNull: false,
      defaultValue: 'NP'
    }
  },
  {
    // classMethods: {
    //   associate: function(models) {
    //     User.hasMany(models.Task)
    //   }
    // }
    freezeTableName: true,
    schema: 'firm',
    timestamps: false
  });

  return S_BASE_INDEX
};
