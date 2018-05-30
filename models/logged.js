module.exports = function(sequelize, DataTypes) {
    var Account = sequelize.define("Account", {
      type: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isIn: [['checking', 'savings']]
        }
      },
      balance: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
      }
    });
  
    Account.associate = function(models) {
      Account.hasMany(models.Transaction, {
        onDelete: "cascade"
      })
  
      Account.belongsTo(models.User, {
        foreignKey: {
          allowNull: false
        }
      })
    };
  
    return Account;
  };