/*
 * Module Dependencies
 */
 var mongoose = require("mongoose"),
     Todo = mongoose.model('Todo')



/**
* Load Todo
*/
exports.load = function(req, res, next, id) {

  Todo.load(id, function (err, todo) {
    if (err) return next(err)
    if (!todo) return next(new Error('not found'))
    req.todo = todo
    next()
  });

}


/**
* List Todos
*/
exports.list = function(req, res) {

  Todo.find(null, null, {sort: { completed: 1 }}, function(err, todos) {
    if (err) {
      console.log(err)
      return
    }

    Todo.count({ completed: true }, function(err, completed) {

      res.render("todos/index", {
        todos: todos,
        message: req.message,
        totalCompletion: (todos.length) ? Math.floor( (completed / todos.length) * 100 ) + '%' : 0
      })

    })

  })

}


/**
* Create Todo
*/
exports.create = function(req, res) {
  var todo = new Todo()
  todo.description = req.body.description

  todo.save(function(err) {

    // Error saving, flash error and redirect
    if(err) {
      req.flash('info', err)
    }


    // No error, flash created message and redirect
    req.flash('info', 'Todo was successfully created')
    res.redirect('/')

  })
}