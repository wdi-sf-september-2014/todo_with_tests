require('../spec_helper');

describe('TodoList', function() {
  describe('attributes', function() {
    it('should have a title', function() {
      var list = models.TodoList.build({
        title: "My List"
      });

      expect(list.title).to.equal("My List");
    });

    it('should have a description', function() {
      var list = models.TodoList.build({
        description: "Todolist description"
      });

      expect(list.description).to.equal("Todolist description");
    });
  });

  describe('validations', function() {
    var ValidationError = require('sequelize').ValidationError;

    it('should be invalid for titles > 100 characters', function(done) {
      expect(
        models.TodoList.create({
          title: "asdfasdfasasdfasdfasasdfasdfasasdfasdfasasdfasdfasasdfasdfasasdfasdfasasdfasdfasasdfasdfasasdfasdfasasdf"
        })
      ).to.be.rejectedWith(ValidationError).notify(done);
    });

    it('should be invalid for descriptions < 5 characters', function(done) {
      expect(
        models.TodoList.create({
          description: "asdf"
        })
      ).to.be.rejectedWith(ValidationError).notify(done);
    });

    it('should be invalid for descriptions > 140 characters', function(done) {
      expect(
        models.TodoList.create({
          description: "asdfasdfasasdfasdfasasdfasdfasasdfasdfasasdfasdfasasdfasdfasasdfasdfasasdfasdfasasdfasdfasasdfasdfasasdfasdfasdfasdfasasdfasdfasasdfasdfasasdfasdfasasdfasdfasasdfasdfasasdfasdfasasdfasdfasasdfasdfasasdfasdfasasdf"
        })
      ).to.be.rejectedWith(ValidationError).notify(done);
    });
  });
});
