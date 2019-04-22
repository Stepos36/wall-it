'use strict';
module.exports = (sequelize, DataTypes) => {
  const Stock_holding = sequelize.define('Stock_holding', {
    symbol: DataTypes.STRING,
    quantity: DataTypes.INTEGER,
    cashflow: DataTypes.DECIMAL
  }, {underscored: true});
  Stock_holding.associate = function(models) {
    // associations can be defined here
    Stock_holding.belongsTo(models.User)
  };
  return Stock_holding;
};