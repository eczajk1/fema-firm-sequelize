'use strict';

module.exports = function(sequelize, DataTypes) {
  var S_SUBBASINS = sequelize.define('s_subbasins', {

    DFIRM_ID: {
      type: DataTypes.STRING(6),
      allowNull: false
    },

    THE_GEOM: 'geometry(MultiPolygon,4326)',

    VERSION_ID: {
      type: DataTypes.STRING(11),
      allowNull: false,
      defaultValue: 'NP'
    },

    SUBBAS_ID: {
      primaryKey: true,
      type: DataTypes.STRING(25),
      allowNull: false,
      defaultValue: 'NP'
    },

    SUBBAS_NM: {
      type: DataTypes.STRING(254),
      allowNull: false,
      defaultValue: 'NP'
    },

    HUC8: {
      type: DataTypes.STRING(8),
      allowNull: false,
      defaultValue: 'NP'
    },

    WTR_NM: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: 'NP'
    },

    BASIN_DESC: {
      type: DataTypes.STRING(254),
      allowNull: false,
      defaultValue: 'NP'
    },

    SUB_AREA: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: -8888
    },

    AREA_UNIT: {
      type: DataTypes.STRING(17),
      allowNull: false,
      defaultValue: 'NP'
    },

    NODE_ID: DataTypes.STRING(17),

    BASIN_TYP: {
      type: DataTypes.STRING(19),
      allowNull: false,
      defaultValue: 'NP'
    },

    SOURCE_CIT: {
      type: DataTypes.STRING(11),
      allowNull: false,
      defaultValue: 'NP'
    }
  }, {
    freezeTableName: true,
    schema: 'firm',
    timestamps: false
  });

  return S_SUBBASINS;
};
