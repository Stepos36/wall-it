'use strict';
module.exports = (sequelize, DataTypes) => {
  const Currency_sell = sequelize.define('Currency_sell', {
    quantity: DataTypes.INTEGER,
    currency_symbol: DataTypes.STRING,
    price: DataTypes.DECIMAL(10,2),
    date: DataTypes.DATE,
    user_id: DataTypes.INTEGER,
    currency_holding_id: DataTypes.INTEGER
  }, {underscored: true});
  Currency_sell.associate = function(models) {
    // associations can be defined here
    Currency_sell.beforeCreate((sale, options) => {
      return new Promise((resolve, reject) => {
        models.Currency_holding.findOne({
          where: {
            symbol: sale.currency_symbol,
            user_id: sale.user_id
          }
      }).then(data => {
        if (data) {
          models.Currency_holding.update({
            quantity: parseInt(data.quantity) - parseInt(sale.quantity),
            cashflow: (parseFloat(sale.price) * parseInt(sale.quantity)) + parseFloat(data.cashflow)
          },
          {
            where: {
              user_id: data.user_id,
              symbol: data.symbol
            }
          }).then(data =>{ 
            models.Currency_holding.findOne({
              where: {
                symbol: sale.currency_symbol,
                user_id: sale.user_id
              }
            }).then(data => {
              sale.currency_holding_id = data.id
              resolve(sale)
            })
          })
        }
        else {
          reject("Error. Currency Holding not found.")
        }
      })
    })
  })
  };
  return Currency_sell;
};