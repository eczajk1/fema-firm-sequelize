'use strict';

module.exports = function(sequelize, DataTypes) {
  var L_XS_STRUCT = sequelize.define('l_xs_struct', {
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

    XS_STR_ID: {
      primaryKey: true,
      type: DataTypes.STRING(25),
      allowNull: false
    },

    XS_LN_ID: {
      type: DataTypes.STRING(25),
      allowNull: false
    },

    STRUCT_TYP: {
      type: DataTypes.STRING(60),
      allowNull: false,
      defaultValue: 'NP'
    },

    WTR_NM: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: 'NP'
    },

    STRUC_FACE: {
      type: DataTypes.STRING(10),
      allowNull: false,
      defaultValue: 'NP'
    },

    STR_STN: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: -8888
    },

    LO_CHRD_EL: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: -8888
    },

    HI_CHRD_EL: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: -8888
    },

    STRMBED_EL: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: -8888
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
    }
  },
  {
    classMethods: {
      associate: function(models) {
        L_XS_STRUCT.belongsTo(models.s_xs, {
          foreignKey: 'XS_LN_ID'
        });
      }
    },
    freezeTableName: true,
    schema: 'firm',
    timestamps: false
  });

  return L_XS_STRUCT;
};
