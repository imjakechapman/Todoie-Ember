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
    if (err)
      res.send(err)

    // Return all todos in JSON format
    res.json({
      todos: todos
    })

  })

}


/**
* Create Todo
*/
exports.create = function(req, res) {

  console.log(req.body.todo);

  Todo.create({
    description   :   req.body.todo.description,
    completed     :   false
  }, function(err, todo) {
    if (err)
      res.send(err)

    res.json({
      todo: todo
    })
  })

}


/**
* Show Edit
*/
exports.edit = function(req, res) {
  res.json({
    todo: req.todo
  })
}


/**
* Do Edit
*/
exports.update = function(req, res) {

  Todo.findOneAndUpdate({ _id: req.params.id }, { description: req.body.todo.description, completed: req.body.todo.completed }, null, function(err, todo) {
    if(err)
      res.send(err)

    res.json({
      todo: todo
    })
  })

}


/**
* Delete Todo
*/
exports.destroy = function(req, res) {

  Todo.remove({
    _id: req.params.id
  }, function(err, todo) {
    if(err)
      res.send(err)

    res.json({
      meta: {
        status: "ok"
      }
    })
  })

}



/**
* removeCompleted
*/
exports.removeCompleted = function(req, res) {
  Todo.remove({ completed: 1 }, function(err) {
    if(err)
      res.send(err)

    res.json({
      meta: {
        status: "ok"
      }
    })
  })
}