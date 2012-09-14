backbonejs.WineListView = Backbone.View.extend({

  tagName: 'ul',
  collection: backbonejs.WineController,

  initialize: function(){
  	this.collection.bind("reset", this.render, this);
  },

  render: function(eventName){
  	this.collection.each(function(wine){
  		console.log(wine);
  		console.log(new backbonejs.WineListItemView({model:wine}).render().el);
  		$(this.el).append(new backbonejs.WineListItemView({model:wine}).render().el);
  	}, this);

  	return this;
  }

});

backbonejs.WineListItemView = Backbone.View.extend({

	tagName: 'li',

	

	template: _.template($('#tpl-wine-list-item').html()),

	render: function(eventName){
		
		console.log(this.model);

		$(this.el).html(this.template(this.model.toJSON()));
		return this;
	}
});

backbonejs.WineView = Backbone.View.extend({

	tagName: 'div',

	template: _.template($('#tpl-wine-details').html()),

	render: function(eventName){
		console.log("el1");
		console.log(this.el);
		$(this.el).html(this.template(this.model.toJSON()));
		console.log("el2");
		console.log(this.el);
		return this;
	}

});