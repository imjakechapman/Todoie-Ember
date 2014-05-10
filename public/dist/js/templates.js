Ember.TEMPLATES["application"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1;


  data.buffer.push("<nav class=\"navbar navbar-inverse navbar-default navbar-static-top\" role=\"navigation\">\n    <div class=\"container\">\n      <div class=\"navbar-header\">\n        <a href=\"/\" class=\"navbar-brand\">Todoie - <small>a stupid todo app with Express 4 &amp; Ember.js</small></a>\n      </div>\n      <p class=\"navbar-text navbar-right disabled\"><a href=\"#\" class=\"navbar-link\" onclick=\"alert('Users &amp; Authentication coming in next post in series. We\\'ll be using Passport.js');\">Sign In</a></p>\n    </div>\n  </nav>\n\n  <main class=\"container\">\n    ");
  stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  </main>");
  return buffer;
  
});
Ember.TEMPLATES["todos"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var stack1;


  stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  else { data.buffer.push(''); }
  
});
Ember.TEMPLATES["todos/edit"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', helper, options, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;


  data.buffer.push("<div class=\"row\">\n  <div class=\"col-md-12\">\n    <form role=\"form\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "submit", "", {hash:{
    'on': ("submit")
  },hashTypes:{'on': "STRING"},hashContexts:{'on': depth0},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
  data.buffer.push(">\n      <div class=\"form-group\">\n        ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'value': ("description"),
    'class': ("form-control"),
    'required': ("required")
  },hashTypes:{'value': "ID",'class': "STRING",'required': "STRING"},hashContexts:{'value': depth0,'class': depth0,'required': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n      </div>\n\n      <button type=\"submit\" class=\"btn btn-default\">Edit Todo</button>\n    </form>\n  </div>\n</div>\n");
  return buffer;
  
});
Ember.TEMPLATES["todos/index"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n    <div class=\"alert alert-warning\">\n      <p>");
  stack1 = helpers._triageMustache.call(depth0, "validationError", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</p>\n    </div>\n    ");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n        ");
  stack1 = helpers['if'].call(depth0, "todo.notCompleted", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(7, program7, data),fn:self.program(4, program4, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n        ");
  return buffer;
  }
function program4(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n        <li class=\"list-group-item\">\n          <span class=\"badge warning\"><a href=\"#\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "delete", "todo", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
  data.buffer.push(">delete</a></span>\n          <span class=\"badge primary\">");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "todos.edit", "todo", options) : helperMissing.call(depth0, "link-to", "todos.edit", "todo", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span>\n          <span class=\"badge primary\"><a href=\"#\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "complete", "todo", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
  data.buffer.push(">complete</a></span>\n          ");
  stack1 = helpers._triageMustache.call(depth0, "todo.description", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        </li>\n        ");
  return buffer;
  }
function program5(depth0,data) {
  
  
  data.buffer.push("edit");
  }

function program7(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n        <li class=\"list-group-item\">\n          <span class=\"badge\">completed</span>\n          ");
  stack1 = helpers._triageMustache.call(depth0, "todo.description", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        </li>\n        ");
  return buffer;
  }

function program9(depth0,data) {
  
  
  data.buffer.push("\n        <li class=\"list-group-item\">No Todos</li>\n        ");
  }

function program11(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n        <a href=\"#\" class=\"list-group-item\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "removeCompleted", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">Remove Completed Tasks</a>\n        ");
  return buffer;
  }

  data.buffer.push("<div class=\"row\">\n  <div class=\"col-md-8\">\n\n    ");
  stack1 = helpers['if'].call(depth0, "validationError", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n    <div class=\"panel panel-default\">\n      <div class=\"panel-heading\">\n        <h3 class=\"panel-title\">Total Todos: ");
  stack1 = helpers._triageMustache.call(depth0, "length", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h3>\n      </div>\n      <div class=\"panel-body\">\n        <div class=\"progress\">\n          <div class=\"progress-bar progress-bar-success\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'style': ("completedStyle")
  },hashTypes:{'style': "ID"},hashContexts:{'style': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n            <span class=\"sr-only\">35% Complete (success)</span>\n          </div>\n        </div>\n      </div>\n\n      <ul class=\"list-group\">\n        ");
  stack1 = helpers.each.call(depth0, "todo", "in", "controller", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n        ");
  stack1 = helpers.unless.call(depth0, "controller.length", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(9, program9, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n\n        ");
  stack1 = helpers['if'].call(depth0, "completedTasks.length", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(11, program11, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n      </ul>\n    </div>\n\n  </div>\n\n\n  <!-- Todo Form -->\n  <div class=\"col-md-4\">\n    <form role=\"form\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "create", {hash:{
    'on': ("submit")
  },hashTypes:{'on': "STRING"},hashContexts:{'on': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" >\n      <div class=\"form-group\">\n        <label for=\"description\">Todo</label>\n        ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'value': ("newDescription"),
    'class': ("form-control")
  },hashTypes:{'value': "ID",'class': "STRING"},hashContexts:{'value': depth0,'class': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n      </div>\n\n      <button type=\"submit\" class=\"btn btn-default\">Create Todo</button>\n    </form>\n  </div>\n</div>\n");
  return buffer;
  
});