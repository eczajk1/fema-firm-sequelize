'use strict';

module.exports = function(sequelize, DataTypes) {
  var S_XS = sequelize.define('s_xs', {
    DFIRM_ID: {
      type: DataTypes.STRING(6),
      allowNull: false,
      defaultValue: 'NP'
    },

    THE_GEOM: 'geometry(MultiLineString,4269)',

    VERSION_ID: {
      type: DataTypes.STRING(11),
      allowNull: false,
      defaultValue: 'NP'
    },

    XS_LN_ID: {
      primaryKey: true,
      type: DataTypes.STRING(25),
      allowNull: false
    },

    WTR_NM: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: 'NP'
    },

    STREAM_STN: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: -8888
    },

    START_ID: {
      type: DataTypes.STRING(25),
      allowNull: false,
      defaultValue: 'NP'
    },

    XS_LTR: DataTypes.STRING(12),

    XS_LN_TYP: {
      type: DataTypes.STRING(24),
      allowNull: false,
      defaultValue: 'NP'
    },

    WSEL_REG: {
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
    },

    PROFXS_TXT: DataTypes.STRING(80),

    MODEL_ID: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: 'NP'
    },

    SEQ: DataTypes.INTEGER,

    SOURCE_CIT: {
      type: DataTypes.STRING(11),
      allowNull: false,
      defaultValue: 'NP'
    }
  },
  {
    classMethods: {
      associate: function(models) {
        S_XS.hasMany(models.l_xs_elev, {
          foreignKey: {
            name: 'XS_LN_ID'
          },
          onDelete: 'CASCADE'
        });
        S_XS.hasMany(models.l_xs_struct, {
          foreignKey: {
            name: 'XS_LN_ID'
          },
          onDelete: 'CASCADE'
        })
      }
    },
    freezeTableName: true,
    schema: 'firm',
    timestamps: false
  });

  return S_XS;
};
