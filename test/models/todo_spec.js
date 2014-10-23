require('../spec_helper');

describe('Todo', function() {
  describe('attributes', function() {
    it('should have a title', function() {
      var todo = models.Todo.build({
        title: "Get It Done"
      });

      expect(todo.title).to.equal("Get It Done");
    });

    it('should have a todo list', function() {
      var todo = models.Todo.build({
        todo_list_id: 1 
      });

      expect(todo.todo_list_id).to.equal(1);
    });
  });
});
