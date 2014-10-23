"use strict";

module.exports = function(sequelize, DataTypes) {
  var TodoList = sequelize.define("TodoList", {
    title: {
      type: DataTypes.STRING,
      validate: {
        len: [0, 100] 
      }
    },
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
