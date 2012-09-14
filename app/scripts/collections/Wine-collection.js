backbonejs.WineController = Backbone.Collection.extend({

  model: backbonejs.WineModel,

  sync: function(method, model, options){
  	var params = _.extend({
  		type: 'GET',
  		dataType: 'jsonp',
  		url: model.url(),
  		processData: false, 
  		success: function(result){
  			alert("DONE BITCHES");
  		},
  		error: function(xhr, ajaxOptions, thrownError){
  			console.log(xhr.statusText);
  			console.log(xhr.responseText);
  			console.log(xhr.status);
  			console.log(thrownError);
  		},
  		complete: function(xhr, textResp){
  			console.log(xhr);
  			console.log(textResp);
  		}
  	}, options);

  	return $.ajax(params);
  },

  url: function(){
  	return "http://192.168.56.1/backbone-wine/wines";
  }
}); 
