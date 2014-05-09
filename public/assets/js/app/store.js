App.ApplicationAdapter = DS.RESTAdapter.extend({
  namespace: 'api',
});

App.ApplicationSerializer = DS.RESTSerializer.extend({
  primaryKey: "_id"
});