module.exports = function(config) {
	'use strict';

	config.set({

		basePath: '../../../',

		files: [
		'bower_components/angular/angular.js',
		'bower_components/angular-mocks/angular-mocks.js',
		'app/24_karma/app/*.js',
		'app/24_karma/test/unit/**/*.js'
		],

		autoWatch: true,

		frameworks: ['jasmine'],

		browsers: ['Chrome'],

	});
};
