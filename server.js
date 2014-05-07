var express             = require('express')
    , app               = express()
    , fs                = require('fs')
    , mongoose          = require('mongoose')
    , flash             = require('connect-flash')
    , morgan            = require('morgan')
    , cookieParser      = require('cookie-parser')
    , bodyParser        = require('body-parser')
    , methodOverride    = require('method-override')
    , session           = require('express-session')
    , Twig              = require('twig')
    , twig              = Twig.twig;




// configuration ===============================================================
var configDB = require('./config/database.js')
mongoose.connect(configDB.url)


// set up express application
app.use(express.static(__dirname + '/public'))
app.use(morgan('dev'))
app.use(bodyParser())
app.use(methodOverride())
app.use(cookieParser())
app.use(session({ secret: 'todos-express4', cookie: { maxAge: 60000 }}))
app.use(flash())


// Set Twig as templating
app.set('view engine', 'twig')
app.set("twig options", {
    strict_variables: false
})
app.set('views', 'app/views')


// Bootstrap ===============================================================
var models_path = __dirname + '/app/models';
fs.readdirSync(models_path).forEach(function (file) {
  if (~file.indexOf('.js')) require(models_path + '/' + file);
});


// routes ===============================================================
require('./app/routes.js')(app, express)


// launch ===============================================================
var port = process.env.PORT || 8080;
app.listen(port)
console.log('Express 4 - Todoie Launched, listening on port ' + port);


// expose app
exports = module.exports = app;