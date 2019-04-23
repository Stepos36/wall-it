'use strict';
module.exports = (sequelize, DataTypes) => {
  const Stock_buy = sequelize.define('Stock_buy', {
    quantity: DataTypes.INTEGER,
    stock_symbol: DataTypes.STRING,
    price: DataTypes.DECIMAL,
    date: DataTypes.DATE,
    user_id: DataTypes.INTEGER
  }, {underscored: true});
  Stock_buy.associate = function(models) {
    // associations can be defined here
    // Adds stock_holding_id to stock_buy
    Stock_buy.belongsTo(models.Stock_holding)
    Stock_buy.beforeCreate((buy, options) => {
        models.Stock_holding.findOne({
          where: {
            symbol: buy.stock_symbol,
            user_id: buy.user_id
          }
      }).then(data => {
        if (data) {
          models.Stock_holding.update({
            quantity: parseInt(data.quantity) + parseInt(buy.quantity),
            cashflow: ((parseFloat(buy.price) * parseInt(buy.quantity)) * -1) + parseFloat(data.cashflow)
          },
          {
            where: {
              user_id: data.user_id,
              symbol: data.symbol
            }
          }).then(data => console.log(data))
        }
        else {
          models.Stock_holding.create({
            symbol: buy.stock_symbol,
            quantity: parseInt(buy.quantity),
            user_id: buy.user_id,
            cashflow: (parseInt(buy.quantity) * parseFloat(buy.price)) * -1
          }).then(data => console.log(data))
        }
      })
    })
  };
  return Stock_buy;
};