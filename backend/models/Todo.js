const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Todo extends Sequelize.Model { }
  Todo.init({
    'id': {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    'todoTitle': {
      type: DataTypes.TEXT
    },
    'todoResponsibility': {
      type: DataTypes.STRING
    },
    'todoPriority': {
      type: DataTypes.TEXT
    },
    'todoCompleted': {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    'createdAt': {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
    'updatedAt': {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
  }, 
  {
    sequelize,
    modelName: 'todos',
    freezeTableName: true
  });

  return Todo;
}