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

App.TodosEditController = Ember.ObjectController.extend({
  actions: {
    submit: function(){
      console.log(this.get('model'));
      this.transitionToRoute('todos.index');
    }
  }
});
