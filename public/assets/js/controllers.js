var todoieControllers = angular.module('todoieControllers', []);



// Todo List Ctrl
todoieControllers.controller('TodoListCtrl', function($scope, $http, $filter, $window) {
  $scope.formData = {};

  // Get All Todos
  $http.get('/api/todos')
    .success(function(data) {
      $scope.todos = data;
    })
    .error(function(data) {
      console.log('Error: ' + data);
    });


  // Create Todo
  $scope.createTodo = function() {
    $http.post('/api/todos', $scope.formData)
      .success(function(data) {
        $scope.formData = {};
        $scope.todos = data;
      })
      .error(function(data) {
        console.log('Error: ' + data);
      });
  };


  // Complete Todo
  $scope.completeTodo = function(id) {
    $http.put('/api/todos/' + id + '/complete')
      .success(function(data) {
        $scope.todos = data;
      })
      .error(function(data) {
        console.log('Error: ' + data);
      });
  };


  // Delete Todo
  $scope.deleteTodo = function(id) {
    $http.delete('/api/todos/' + id)
      .success(function(data) {
        $scope.todos = data;
      })
      .error(function(data) {
        console.log('Error: ' + data);
      })
  };


  // Remove Completed Todos
  $scope.removeCompleted = function() {
    // Get All Todos
    $http.get('/api/todos/removeCompleted')
      .success(function(data) {
        $scope.todos = data;
      })
      .error(function(data) {
        console.log('Error: ' + data);
      });
  };


  $scope.totalCompletion = function() {
    var completed = [];

    angular.forEach($scope.todos, function(value, key) {
      if ( value.completed )
        completed.push(value);
    });

    return $window.Math.floor((completed.length / $scope.todos.length) * 100) + "%";
  };

});


todoieControllers.controller("EditTodoCtrl", function($scope, $http, $location, $routeParams) {
  $scope.formData = {};
  $scope.formData.description;

  // Get todo for edit form
  $http.get('/api/todos/' + $routeParams.id + '/edit')
    .success(function(data) {
      $scope.todo = data;
      $scope.formData.description = data.description;
    })
    .error(function(data) {
      console.log('Error: ' + data);
    });



    $scope.editTodo = function(id) {
      $http.put('/api/todos/' + id + '/edit', $scope.formData)
        .success(function(data) {
          $scope.formData = {};
          $location.path( "/" );
        })
        .error(function(data) {
          console.log('Error: ' + data);
        })
    };
});