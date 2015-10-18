angular
	.module('hateAngular', ['ui.router'])
	.config(videoRouter);


function videoRouter($stateProvider, $urlRouterProvider) {
	$stateProvider
	.state('hate', {
		url: '/hate',
		templateUrl: 'hate.html'
	})

	.state('hate.show', {
		url: '/hate/:id',
		templateUrl: 'hate.show.html'
	})

	.state('new', {
		url: '/new',
		templateUrl: 'new.html'
	});
	};
}