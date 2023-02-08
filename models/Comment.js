const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

Comment.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
  
})