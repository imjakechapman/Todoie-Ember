// public/core.js
var todoie = angular.module('todoie', [
  'ngRoute',
  'todoieControllers'
]);

// Router
todoie.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'assets/js/templates/list.html',
        controller: 'TodoListCtrl'
      }).
      when('/todos/:id/edit', {
        templateUrl: 'assets/js/templates/edit.html',
        controller: 'EditTodoCtrl'
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);