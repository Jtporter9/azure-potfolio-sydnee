angular.module('portfolio', ['ui.router'])

	.config(function ($stateProvider, $urlRouterProvider, $httpProvider) {

		$urlRouterProvider.otherwise('/');

		$stateProvider
			.state('/', {
				url: '/',
				templateUrl: 'Public/js/landing/landing.html',
				controller: 'landingCtrl'
			})

			.state('admin', {
				url: '/admin',
				templateUrl: 'Public/js/admin/admin.html',
				controller: 'adminCtrl'
			})
	});
