var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var todoSchema = new Schema({

  description: {
    type: String,
    trim: true,
    required: '{PATH} is required!'
  },
  completed: {
    type: Boolean,
    default: 0
  },
  created_at: {
    type: Date,
    default: Date.now
  },
  updated_at: Date

})


// Updates todo.updated_at and saves todo.created_at if initial save
todoSchema.pre('save', function(next){
  this.updated_at = new Date
  next()
})


module.exports = mongoose.model('Todo', todoSchema)