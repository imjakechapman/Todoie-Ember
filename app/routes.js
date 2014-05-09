/*
 * Module Dependencies
 */

 // Controllers
 // var todoController = require('./controllers/todoController')
 var todoApiController = require('./controllers/todoApiController')


module.exports = function(app, express) {


  // Create an API Router Instance
  var router = express.Router()

  // Inject Resource for ID Param
  router.param('id', todoApiController.load)
  app.param('id', todoApiController.load)


  // Remove Completed Todos
  router.get('/todos/removeCompleted', todoApiController.removeCompleted)


  // All Todos
  router.get('/todos', todoApiController.list)
  router.post('/todos', todoApiController.create)

  // Get Todo
  router.get('/todos/:id/edit', todoApiController.edit)
  router.put('/todos/:id', todoApiController.update)


  // Delete Todo
  router.delete('/todos/:id', todoApiController.destroy)


  // Apply router to use the /API Prefex
  app.use('/api', router)



  // application
  app.get('*', function(req, res) {
    res.sendfile('./public/index.html');
  });

}