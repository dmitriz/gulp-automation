'use strict';

var gulp = require('gulp');

// lazy load plugins - $$.clean instead of requiring it
// don't forget to npm install the plugins!
var $$ = require('gulp-load-plugins')();

gulp.task('default', ['build'], function () {
	console.log("Gulp runs task: default");
});

gulp.task('build', function () {
	console.log("Gulp runs task: build");
});
