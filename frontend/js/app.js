angular
	.module('hateAngular', ['ngResource', 'ui.router'])
	.config(function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/');
	$stateProvider
	.state('hate', {
		url: '/',
		templateUrl: 'hate.html'
	})

	.state('hate.show', {
		url: '/hate/:id',
		templateUrl: 'hate.show.html'
	})

	.state('new', {
		url: '/hate/new',
		templateUrl: 'new.html'
	});
})

	.service('HateService', function () {
		return $resource('http://localhost:3000/hate/:id', {
		 id: '@_id' 
		});
		var self = this;

		var Hate = $resource('http://localhost:3000/hate/:id', { id: '@_id' });

		self.hates = Hate.query();

	  this.selectHate = function(hate, index) {
		  self.activeHateIndex = index;
		  self.selectedHate = Hate.get({ id: character._id });
	  };

		this.newHate = {};

		this.saveHate = function() {
			Hate.save(self.newHate, function(hate) {
				self.hates.push(hate);
				self.newHate = {};
			})
		}
	})
 