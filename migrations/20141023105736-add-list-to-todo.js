"use strict";

module.exports = {
  up: function(migration, DataTypes, done) {
    migration.addColumn(
      "Todos",
      "todo_list_id",
      {
        type: DataTypes.INTEGER
      }
    );
    done();
  },

  down: function(migration, DataTypes, done) {
    migration.removeColumn(
      "Todos",
      "todo_list_id"
    );
    done();
  }
};
