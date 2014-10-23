"use strict";

module.exports = function(sequelize, DataTypes) {
  var TodoList = sequelize.define("TodoList", {
    title: {
      type: DataTypes.STRING,
      validate: {
        len: [0, 100] 
      }
    },
    description: {
      type: DataTypes.STRING,
      validate: {
        len: [5, 140]
      }
    }
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });

  return TodoList;
};
