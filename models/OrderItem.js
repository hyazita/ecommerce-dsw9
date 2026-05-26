const { DataTypes } = require('sequelize');
const sequelize     = require('../config/database');

const OrderItem = sequelize.define('OrderItem', {
  id:       { type: DataTypes.INTEGER,        primaryKey: true, autoIncrement: true },
  quantity: { type: DataTypes.INTEGER,        allowNull: false },
  price:    { type: DataTypes.DECIMAL(10, 2), allowNull: false },  // <-- coma aquí
  store_id: { 
    type: DataTypes.INTEGER, 
    allowNull: true, 
    references: { model: 'stores', key: 'id' } 
  }
});

module.exports = OrderItem;