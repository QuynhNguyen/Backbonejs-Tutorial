backbonejs.WineController = Backbone.Collection.extend({

  model: backbonejs.WineModel,
  url: "http://192.168.56.1/backbone-wine/wines"
}); 
