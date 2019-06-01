'use strict';
module.exports = (sequelize, DataTypes) => {
  const Currency_buy = sequelize.define('Currency_buy', {
    quantity: DataTypes.INTEGER,
    currency_symbol: DataTypes.STRING,
    price: DataTypes.DECIMAL(10,2),
    date: DataTypes.DATE,
    user_id: DataTypes.INTEGER,
    currency_holding_id: DataTypes.INTEGER
  }, {underscored: true});
  Currency_buy.associate = function(models) {
    // associations can be defined here
    Currency_buy.beforeCreate((buy, options) => {
      return new Promise((resolve, reject) => {
        models.Currency_holding.findOne({
          where: {
            symbol: buy.currency_symbol,
            user_id: buy.user_id
          }
      }).then(data => {
        if (data) {
          models.Currency_holding.update({
            quantity: parseInt(data.quantity) + parseInt(buy.quantity),
            cashflow: ((parseFloat(buy.price) * parseInt(buy.quantity)) * -1) + parseFloat(data.cashflow)
          },
          {
            where: {
              user_id: data.user_id,
              symbol: data.symbol
            }
          }).then(data =>{ 
            models.Currency_holding.findOne({
              where: {
                symbol: buy.currency_symbol,
                user_id: buy.user_id
              }
            }).then(data => {
              buy.currency_holding_id = data.id
              resolve(buy)
            })
          })
        }
        else {
          models.Currency_holding.create({
            symbol: buy.currency_symbol,
            quantity: parseInt(buy.quantity),
            user_id: buy.user_id,
            cashflow: (parseInt(buy.quantity) * parseFloat(buy.price)) * -1
          }).then(data => {
            buy.currency_holding_id = data.id
            console.log(buy)
            resolve(buy)
          })
        }
      })
    })
  })
  };
  return Currency_buy;
};