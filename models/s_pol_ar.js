'use strict';

module.exports = function(sequelize, DataTypes) {
  var S_POL_AR = sequelize.define('s_pol_ar', {
    DFIRM_ID: {
      type: DataTypes.STRING(6),
      allowNull: false,
      defaultValue: 'NP'
    },

    THE_GEOM: 'geometry(MultiPolygon,4269)',

    VERSION_ID: {
      type: DataTypes.STRING(11),
      allowNull: false,
      defaultValue: 'NP'
    },

    POL_AR_ID: {
      primaryKey: true,
      type: DataTypes.STRING(25),
      allowNull: false
    },

    POL_NAME1: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: 'NP'
    },

    POL_NAME2: DataTypes.STRING(50),

    POL_NAME3: DataTypes.STRING(50),

    CO_FIPS: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: 'NP'
    },

    ST_FIPS: {
      type: DataTypes.STRING(2),
      allowNull: false,
      defaultValue: 'NP'
    },

    COMM_NO: {
      type: DataTypes.STRING(4),
      allowNull: false,
      defaultValue: 'NP'
    },

    CID: {
      type: DataTypes.STRING(6),
      allowNull: false,
      defaultValue: 'NP'
    },

    ANI_TF: {
      type: DataTypes.STRING(1),
      allowNull: false,
    },

    ANI_FIRM: DataTypes.STRING(25),

    COM_NFO_ID: {
      type: DataTypes.STRING(6),
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
    freezeTableName: true,
    schema: 'firm',
    timestamps: false
  });

  return S_POL_AR;
};
