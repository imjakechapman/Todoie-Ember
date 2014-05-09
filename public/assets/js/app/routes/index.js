// no need of a home page
App.IndexRoute = Ember.Route.extend({
    redirect: function(){
        this.transitionTo('todos');
    }
});