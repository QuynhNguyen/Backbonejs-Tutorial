backbonejs.WineListView = Backbone.View.extend({

  tagName: 'ul',

  initialize: function(){
  	this.collection.bind("reset", this.render, this);
  },

  render: function(eventName){

    alert(this.collection.size());

  	this.collection.each(function(wine){
  		$(this.el).append(new backbonejs.WineListItemView({model:wine}).render().el);
  	}, this);

  	return this;
  }

});

backbonejs.WineListItemView = Backbone.View.extend({

	tagName: 'li',

	template: _.template($('tpl-wine-list-item').html()),

	render: function(eventName){
		alert("hi 2");
		$(this.el).html(this.template(this.model.toJSON()));
		return this;
	}
});

backbonejs.WineView = Backbone.View.extend({

	tagName: 'div',

	template: _.template($('tpl-wine-details').html()),

	render: function(eventName){
		$(this.el).html(this.template(this.model.toJSON()));
	}

});