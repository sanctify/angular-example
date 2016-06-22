(function() {
	'use strict';

	var myModule = angular.module('myModule', []);

	myModule.service('hello', ['$window', function($window) {
		return {
			welcome: function(name) {
				//$window.alert('Hello ' + name + '!');
				$window.alert('Hello ducon !');
			}
		};
	}]);
})();



