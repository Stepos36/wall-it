'use strict';
module.exports = (sequelize, DataTypes) => {
  const Stock_buy = sequelize.define('Stock_buy', {
    quantity: DataTypes.INTEGER,
    price: DataTypes.DECIMAL,
    date: DataTypes.DATE
  }, {underscored: true});
  Stock_buy.associate = function(models) {
    // associations can be defined here
    Stock_buy.belongsTo(models.Stock_holding)
  };
  return Stock_buy;
};