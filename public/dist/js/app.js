// Instantiate Application
var App = window.App = Ember.Application.create({
  LOG_TRANSITIONS: true,
  LOG_ACTIVE_GENERATION: true,
  LOG_VIEW_LOOKUPS: true
});

App.Router.reopen({
  location: 'auto'
});

App.Router.map(function() {

  this.resource('todos', function() {
    this.route('edit', { path: '/:todo_id/edit' });
  });

});
App.ApplicationAdapter = DS.RESTAdapter.extend({
  namespace: 'api',
});

App.ApplicationSerializer = DS.RESTSerializer.extend({
  primaryKey: "_id"
});
App.ApplicationController = Ember.ObjectController.extend({
});
App.ValidationMixin = Ember.Mixin.create({
  rules: {
    description: "required"
  },
  validate: function(params) {
    this.set('validationError', null);
    var validator = new Validator(params, this.get('rules'));
    if(validator.fails()) {
      this.set('validationError', validator.errors.first('description'));
      return false;
    }

    return true;
  }
});

App.TodosIndexController = Ember.ArrayController.extend(App.ValidationMixin, {
  sortProperties: ['completed'],
  sortAscending: true,

  completedTasks: function() {
    return this.filterBy('completed', true);
  }.property('model.@each.completed'),

  completedStyle: function() {
    var completed = this.get('completedTasks');

    return 'width: ' + Math.floor((completed.length / this.get('length')) * 100) + "%";
  }.property('model.@each', 'completedTasks'),

  actions: {
    create: function() {
      var todo = {
        description: this.get('newDescription'),
        completed: false
      };

      if(this.validate(todo)) {
        this.store.createRecord('todo', todo).save();
        this.set('newDescription', null);
      }
    },
    delete: function(todo) {
      todo.deleteRecord();
      todo.save();
    },
    complete: function(todo) {
      todo.set('completed', true);
      todo.save();
    },
    removeCompleted: function() {
      this.get('completedTasks').forEach(function(todo) {
        todo.deleteRecord();
      });

      $.getJSON('/api/todos/removeCompleted');
    }
  }
});

App.TodosEditController = Ember.ObjectController.extend(App.ValidationMixin, {
  actions: {
    submit: function(todo){
      todo.set('description', this.get('description'));
      if(todo.save()) {
        this.transitionToRoute('todos.index');
      } else {
        this.set('validationError', 'Could not save todo.');
      }
    }
  }
});

App.Todo = DS.Model.extend({
  description: DS.attr('string'),
  completed: DS.attr('boolean'),
  notCompleted: Ember.computed.not('completed')
});



// App.Todo.FIXTURES = [
//  {
//    id: 1,
//    description: 'Learn Ember.js',
//    completed: true
//  },
//  {
//    id: 2,
//    description: 'Learn more Ember.js, cause this shit is confusing',
//    completed: false
//  },
//  {
//    id: 3,
//    description: 'This is the final todo.',
//    completed: false
//  }
// ];
// no need of a home page
App.IndexRoute = Ember.Route.extend({
    redirect: function(){
        this.transitionTo('todos');
    }
});
App.TodosRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('todo');
  }
});
App.ApplicationView = Ember.View.extend({
    templateName: 'application'
});