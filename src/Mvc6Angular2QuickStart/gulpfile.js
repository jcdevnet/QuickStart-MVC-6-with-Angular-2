/*
This file in the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkId=518007
*/

var gulp = require('gulp');
var del = require('del');


var paths = {
	sources: [
		'node_modules/@angular/**',
		'node_modules/bootstrap/**',
		'node_modules/core-js/**',
		'node_modules/reflect-metadata/**',
		'node_modules/rxjs/**',
		'node_modules/systemjs/**',
		'node_modules/zone.js/**'
	]
};


gulp.task('clean', function () {
	return del(['wwwroot/$scripts/*']);
});


gulp.task('load:sources', ['clean'], function () {
	gulp.src(paths.sources, { base: 'node_modules' })
		.pipe(gulp.dest('wwwroot/$scripts'));
});



gulp.task('default', function () {
	// place code for your default task here
});