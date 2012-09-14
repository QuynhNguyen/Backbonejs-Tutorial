
window.backbonejs = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  init: function() {
    console.log('Hello from Backbone!');
    this.app = new backbonejs.Router();
    Backbone.history.start();
  }
};

$(document).ready(function(){
  backbonejs.init();
});
