App = Ember.Application.create();

App.Store = DS.Store.extend({
	revision: 12,
	adapter: 'DS.FixtureAdapter'
});

App.Router.map(function(){
	this.resource('tab');
});

App.TabRoute = Ember.Route.extend({
	model: function(){
		return App.Tab.find();
	}
});

App.IndexRoute = Ember.Route.extend({
	redirect: function(){
		this.transitionTo('tab');
	}
});

App.TabController = Ember.ObjectController.extend({
	nav: function(txt){
		alert(txt);
	},
});


App.Tab = DS.Model.extend({
	header1: DS.attr('string'),
	header2: DS.attr('string'),
	description: DS.attr('string')
	//image: DS.attr('image')
});

App.Tab.FIXTURES = [{
	id:1,
	header1: 'General Information',
	header2: 'Field Direct Overview'
},{
	id:2,
	header1: 'Features & Benefits',
	header2: 'Details of Field Direct'
},{
	id:3,
	header1: 'Getting Started',
	header2: 'Using Field Direct'
}];

