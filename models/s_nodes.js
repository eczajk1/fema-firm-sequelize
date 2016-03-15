'use strict';

module.exports = function(sequelize, DataTypes) {
  var S_NODES = sequelize.define('s_nodes', {

    DFIRM_ID: {
      type: DataTypes.STRING(6),
      allowNull: false
    },

    THE_GEOM: 'geometry(Point,4269)',

    VERSION_ID: {
      type: DataTypes.STRING(11),
      allowNull: false,
      defaultValue: 'NP'
    },

    NODE_ID: {
      primaryKey: true,
      type: DataTypes.STRING(25),
      allowNull: false,
      defaultValue: 'NP'
    },

    NODE_TYPE: DataTypes.STRING(16),

    WTR_NM: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: 'NP'
    },

    NODE_DESC: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: 'NP'
    },

    MODEL_ID: {
      type: DataTypes.STRING(22),
      allowNull: false,
      defaultValue: 'NP'
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

  return S_NODES;
};
