'use strict';
module.exports = (sequelize, DataTypes) => {
  const Watchlist_item = sequelize.define('Watchlist_item', {
    symbol: DataTypes.STRING,
    user_id: DataTypes.INTEGER
  }, {underscored:true});
  Watchlist_item.associate = function(models) {
    // associations can be defined here
    Watchlist_item.belongsTo(models.User)
  };
  return Watchlist_item;
};