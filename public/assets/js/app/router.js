App.Router.map(function() {

  this.resource('todos', function() {
    this.route('edit', { path: '/:todo_id/edit' });
  });

});