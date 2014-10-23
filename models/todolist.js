"use strict";

module.exports = function(sequelize, DataTypes) {
  var TodoList = sequelize.define("TodoList", {
    title: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });

  return TodoList;
};
