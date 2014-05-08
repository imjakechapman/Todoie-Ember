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
    res.json(todos)

  })

}


/**
* Create Todo
*/
exports.create = function(req, res) {

  Todo.create({
    description   :   req.body.description,
    completed     :   false
  }, function(err, todo) {
    if (err)
      res.send(err)

    // Return all todos
    Todo.find(null, null, {sort: { completed: 1 }}, function(err, todos) {
      if (err)
        res.send(err)

      res.json(todos)
    })
  })

}


/**
* Show Edit
*/
exports.edit = function(req, res) {
  res.json(req.todo)
}


/**
* Do Edit
*/
exports.update = function(req, res) {

  Todo.findOneAndUpdate({ _id: req.params.id }, { description: req.body.description }, null, function(err, todo) {
    if(err)
      res.send(err)

    Todo.find(null, null, {sort: { completed: 1 }}, function(err, todos) {
      if(err)
        res.send(err)

      res.json(todos)
    })
  })

}


/**
* Complete Todo
*/
exports.completeTodo = function(req, res) {

  Todo.findOneAndUpdate({ _id: req.params.id }, { completed: true }, null, function(err, todo) {
    if(err)
      res.send(err)

    Todo.find(null, null, {sort: { completed: 1 }}, function(err, todos) {
      if(err)
        res.send(err)

      res.json(todos)
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

    Todo.find(function(err, todos) {
      if(err)
        res.send(err)

      res.json(todos)
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

    Todo.find(null, null, {sort: { completed: 1 }}, function(err, todos) {
      if(err)
        res.send(err)

      res.json(todos)
    })
  })
}