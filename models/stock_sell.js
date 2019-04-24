'use strict';
module.exports = (sequelize, DataTypes) => {
  const Stock_sell = sequelize.define('Stock_sell', {
    quantity: DataTypes.INTEGER,
    stock_symbol: DataTypes.STRING,
    price: DataTypes.DECIMAL,
    date: DataTypes.DATE,
    user_id: DataTypes.INTEGER,
    stock_holding_id: DataTypes.INTEGER
  }, {underscored: true});
  Stock_sell.associate = function(models) {
    // associations can be defined here
    Stock_sell.beforeCreate((sale, options) => {
      return new Promise((resolve, reject) => {
        models.Stock_holding.findOne({
          where: {
            symbol: sale.stock_symbol,
            user_id: sale.user_id
          }
      }).then(data => {
        if (data) {
          models.Stock_holding.update({
            quantity: parseInt(data.quantity) - parseInt(sale.quantity),
            cashflow: (parseFloat(sale.price) * parseInt(sale.quantity)) + parseFloat(data.cashflow)
          },
          {
            where: {
              user_id: data.user_id,
              symbol: data.symbol
            }
          }).then(data =>{ 
            models.Stock_holding.findOne({
              where: {
                symbol: sale.stock_symbol,
                user_id: sale.user_id
              }
            }).then(data => {
              sale.stock_holding_id = data.id
              console.log(sale)
              resolve(sale)
            })
          })
        }
        else {
          reject("Error. Stock Holding not found.")
        }
      })
    })
  })
  };
  return Stock_sell;
};