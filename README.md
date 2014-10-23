# Todo with Tests

Install grunt cli

```
$ npm install -g grunt-cli
```

Install dependencies from `package.json`

```
$ npm install
```

Create the database in your postgres server

```
$ createdb todo_with_tests_development
```

## Required functionality:
* Create a todo list
  * A todo list should have a title and a description
  * Titles may be at most 100 characters
  * The description must be at least 5 characters long and at most 140
    characters

* Create a todo item for a todo list
  * A todo item should have a required title
  * The title must be at least 5 characters long and at most 100
    characters
  * You should be able to complete a todo item

* View todo lists by their id
* View a todo lists' completed items

* Delete a todo list
  * This should also delete all of its items, if there are any
* Delete a todo
