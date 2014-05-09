// Instantiate Application
var App = window.App = Ember.Application.create({
  LOG_TRANSITIONS: true,
  LOG_ACTIVE_GENERATION: true,
  LOG_VIEW_LOOKUPS: true
});

App.Router.reopen({
  location: 'auto'
});
