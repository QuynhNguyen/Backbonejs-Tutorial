backbonejs.Router = Backbone.Router.extend({
	routes:{
		"" : "list", //default case then we just render whole wine list
		"wines/:id" : "wineDetails" //run wine details method
	},

	list: function(){
		this.wineList = new backbonejs.WineController();
		this.wineListView = new backbonejs.WineListView({collection:this.wineList});
		this.wineList.fetch();
		console.log("start");
		console.log(this.wineList);
		$('#sidebar').html(this.wineListView.render().el);
		console.log(this.wineList);
	},

	wineDetails: function(id){
		this.wine = this.wineList.get(id);
		this.wineViewDetails = new backbonejs.WineView({model:this.wine});
		console.log("third");
		console.log(this.wineViewDetails);
		$('#content').html(this.wineViewDetails.render().el);
		console.log("fourth");
		console.log(this.wineViewDetails.el);
	}
});

