'use strict';

module.exports = function(sequelize, DataTypes) {
  var L_XS_ELEV = sequelize.define('l_xs_elev', {
    DFIRM_ID: {
      type: DataTypes.STRING(6),
      allowNull: false,
      defaultValue: 'NP'
    },

    VERSION_ID: {
      type: DataTypes.STRING(11),
      allowNull: false,
      defaultValue: 'NP'
    },

    XS_ELEV_ID: {
      primaryKey: true,
      type: DataTypes.STRING(25),
      allowNull: false
    },

    FW_WIDTH: {
      type: DataTypes.DOUBLE,
      defaultValue: -9999
    },

    FW_WIDTHIN: {
      type: DataTypes.DOUBLE,
      defaultValue: -9999
    },

    NE_WIDTH_L: {
      type: DataTypes.DOUBLE,
      defaultValue: -9999
    },

    NE_WIDTH_R: {
      type: DataTypes.DOUBLE,
      defaultValue: -9999
    },

    XS_AREA: {
      type: DataTypes.DOUBLE,
      defaultValue: -9999
    },

    AREA_UNIT: DataTypes.STRING(17),

    VELOCITY: {
      type: DataTypes.DOUBLE,
      defaultValue: -9999
    },

    VEL_UNIT: {
      type: DataTypes.DOUBLE,
      defaultValue: -9999
    },

    EVENT_TYP: {
      type: DataTypes.STRING(37),
      allowNull: false
    },

    WSEL: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: -8888
    },

    WSEL_WOFWY: {
      type: DataTypes.DOUBLE,
      defaultValue: -9999
    },

    WSEL_FLDWY: {
      type: DataTypes.DOUBLE,
      defaultValue: -9999
    },

    WSEL_INCRS: {
      type: DataTypes.DOUBLE,
      defaultValue: -9999
    },

    LEN_UNIT: {
      type: DataTypes.STRING(16),
      allowNull: false,
      defaultValue: 'NP'
    },

    V_DATUM: {
      type: DataTypes.STRING(17),
      allowNull: false,
      defaultValue: 'NP'
    },

    LEVEE_TF: {
      type: DataTypes.STRING(1),
      allowNull: false
    },

    LVSCENARIO: DataTypes.STRING(16),

    WSELREG_LL: {
      type: DataTypes.DOUBLE,
      defaultValue: -9999
    },

    WSELREG_RL: {
      type: DataTypes.DOUBLE,
      defaultValue: -9999
    },

    FREEBRD_LL: {
      type: DataTypes.DOUBLE,
      defaultValue: -9999
    },

    FREEBRD_RL: {
      type: DataTypes.DOUBLE,
      defaultValue: -9999
    },

    CALC_WO_BW: {
      type: DataTypes.STRING(1),
      allowNull: false
    }
  },
  {
    classMethods: {
      associate: function(models) {
        L_XS_ELEV.belongsTo(models.s_xs, {
          foreignKey: 'XS_LN_ID'
        });
      }
    },
    freezeTableName: true,
    schema: 'firm',
    timestamps: false
  });

  return L_XS_ELEV;
};
