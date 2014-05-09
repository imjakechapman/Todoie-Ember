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