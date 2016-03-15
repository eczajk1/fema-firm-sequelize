'use strict';

module.exports = function(sequelize, DataTypes) {
  var STUDY_INFO = sequelize.define('study_info', {

    DFIRM_ID: {
      type: DataTypes.STRING(6),
      allowNull: false
    },

    VERSION_ID: {
      type: DataTypes.STRING(11),
      allowNull: false,
      defaultValue: 'NP'
    },

    STD_NFO_ID: {
      primaryKey: true,
      type: DataTypes.STRING(25),
      allowNull: false,
      defaultValue: 'NP'
    },

    STUDY_PRE: DataTypes.STRING(19),

    STUDY_NM: {
      type: DataTypes.STRING(128),
      allowNull: false,
      defaultValue: 'NP'
    },

    STATE_NM: {
      type: DataTypes.STRING(24),
      allowNull: false,
      defaultValue: 'NP'
    },

    CNTY_NM: {
      type: DataTypes.STRING(128),
      allowNull: false,
      defaultValue: 'NP'
    },

    JURIS_TYP: DataTypes.STRING(22),

    LG_PAN_NO: {
      type: DataTypes.STRING(4),
      allowNull: false,
      defaultValue: 'NP'
    },

    OPP_TF: {
      type: DataTypes.STRING(1),
      allowNull: false,
    },

    H_DATUM: {
      type: DataTypes.STRING(30),
      allowNull: false,
      defaultValue: 'NP'
    },

    V_DATUM: {
      type: DataTypes.STRING(17),
      allowNull: false,
      defaultValue: 'NP'
    },

    PROJECTION: {
      type: DataTypes.STRING(75),
      allowNull: false,
      defaultValue: 'NP'
    },

    PROJ_ZONE: DataTypes.STRING(5),

    PROJ_UNIT: {
      type: DataTypes.STRING(18),
      allowNull: false,
      defaultValue: 'NP'
    },

    PROJ_SECND: DataTypes.STRING(75),

    PROJ_SUNIT: DataTypes.STRING(18),

    PROJ_SZONE: DataTypes.STRING(5),

    LANDWD_VAL: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: -8888,
    },

    CW_TF: {
      type: DataTypes.STRING(1),
      allowNull: false
    },

    RTROFT_TF: {
      type: DataTypes.STRING(1),
      allowNull: false
    },

    META_NM: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: 'NP'
    },

    FIS_NM: {
      type: DataTypes.STRING(15),
      allowNull: false,
      defaultValue: 'NP'
    },

    LOGO_NM: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: 'NP'
    },

    INDX_EFFDT: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: new Date(8888, 7, 8)
    },

    DBREV_DT: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: new Date(8888, 7, 8)
    },

    AVG_CFACTR: DataTypes.DOUBLE
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

  return STUDY_INFO;
};
