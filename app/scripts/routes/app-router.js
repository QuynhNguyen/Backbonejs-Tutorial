backbonejs.Router = Backbone.Router.extend({
	routes:{
		"" : "list", //default case then we just render whole wine list
		"wines/:id" : "wineDetails" //run wine details method
	},

	list: function(){
		this.wineList = new backbonejs.WineController();
		this.wineListView = new backbonejs.WineListView({collection:this.wineList});
		this.wineList.fetch();
		$('#sidebar').html(this.wineListView.render().el);
	},

	wineDetails: function(id){
		this.wine = this.wineList.get(id);
		this.wineView = new WineView({model:this.wine});
		$('#content').html(this.wineView.render().el);
	}
});

