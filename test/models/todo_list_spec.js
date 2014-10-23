require('../spec_helper');

describe('TodoList', function() {
  describe('attributes', function() {
    it('should have a title', function() {
      var list = models.TodoList.build({
        title: "My List"
      });

      expect(list.title).to.equal("My List");
    });
  });
});
