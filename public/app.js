(function () {
    'use strict';
	var myApp = angular.module('myApp', ['ngRoute']);
	myApp.config(function($routeProvider) {
		$routeProvider.
			when('/', { 
				templateUrl: 'views/partials/play.html',
				controller: 'playCtrl'
			}).
			when('/dictionary', {
				templateUrl: 'views/partials/dictionary.html', 
				controller: 'dictionaryCtrl'
			}).
			when('/add', {
				templateUrl: 'views/partials/word.html', 
				controller: 'wordCtrl'
			}).
			when('/about', {
				templateUrl: 'views/partials/about.html', 
				controller: 'aboutCtrl'
			}).
			
			otherwise({redirectTo: '/'});
	});
})();
