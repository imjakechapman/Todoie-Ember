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


  // Index
  router.get('/', todoController.list)


  // Create
  router.post('/todos', todoController.create)


  // apply routes to app
  app.use('/', router);

}