"use strict";

module.exports = function(sequelize, DataTypes) {
  var Todo = sequelize.define("Todo", {
    title: DataTypes.STRING,
    todo_list_id: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });

  return Todo;
};
