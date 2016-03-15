'use strict';

module.exports = function(sequelize, DataTypes) {
  var S_PROFIL_BASLN = sequelize.define('s_profil_basln', {

  DFIRM_ID: {
    type: DataTypes.STRING(6),
    allowNull: false
  },

  THE_GEOM: 'geometry(MultiLineStringZ,4269)',

  VERSION_ID: {
    type: DataTypes.STRING(11),
    allowNull: false,
    defaultValue: 'NP'
  },

  BASELN_ID: {
    primaryKey: true,
    type: DataTypes.STRING(25),
    allowNull: false
  },

  WTR_NM: {
    type: DataTypes.STRING(100),
    allowNull: false,
    defaultValue: 'NP'
  },

  SEGMT_NAME: DataTypes.STRING(254),

  WATER_TYP: {
    type: DataTypes.STRING(38),
    allowNull: false,
    defaultValue: 'NP'
  },

  STUDY_TYP: {
    type: DataTypes.STRING(28),
    allowNull: false,
    defaultValue: 'NP'
  },

  SHOWN_FIRM: {
    type: DataTypes.STRING(1),
    allowNull: false,
    defaultValue: ''
  },

  R_ST_DESC: {
    type: DataTypes.STRING(254),
    allowNull: false,
    defaultValue: 'NP'
  },

  R_END_DESC: {
    type: DataTypes.STRING(254),
    allowNull: false,
    defaultValue: 'NP'
  },

  STRMBED_EL: {
    type: DataTypes.DOUBLE,
    allowNull: false,
    defaultValue: -8888
  },

  V_DATUM_OFF: DataTypes.STRING(6),

  DATUM_UNIT: DataTypes.STRING(16),

  FLD_PROB1: DataTypes.STRING(254),

  FLD_PROB2: DataTypes.STRING(254),

  FLD_PROB3: DataTypes.STRING(254),

  SPEC_CONS1: DataTypes.STRING(254),

  SPEC_CONS2: DataTypes.STRING(254),

  START_ID: {
    type: DataTypes.STRING(25),
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

  return S_PROFIL_BASLN;
};
