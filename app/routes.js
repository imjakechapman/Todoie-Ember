/*
 * Module Dependencies
 */

 // Controllers
 var todoController = require('./controllers/todoController')


module.exports = function(app, express) {

  // Create Router Instance
  var router = express.Router()


  // Set Flash Messages
  router.use(function(req, res, next) {
    req.message = req.flash('info')
    next()
  })

  // Set route param (basically prefetching and doing anything with resource before route hits)
  router.param('id', todoController.load)
  app.param('id', todoController.load)


  // Index
  router.get('/', todoController.list)


  // Chaining Routes using app.route
  app.route('/todos')
    .get(todoController.list)
    .post(todoController.create)


  // Show and Do Edit
  app.route('/todos/:id/edit')
    .get(todoController.edit)
    .post(todoController.update)


  // Complete Todo
  router.get('/todos/:id/complete', todoController.completeTodo)


  // Delete Todo
  router.get('/todos/:id/delete', todoController.destroy)

  // Remove Completed
  router.get('/todos/removeCompleted', todoController.removeCompleted)


  // apply routes to app
  app.use('/', router);

}