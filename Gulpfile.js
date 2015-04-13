'use strict';

var gulp = require('gulp');

// import local config
var config = require('./Gulp.conf.js');

// lazy load plugins - $$.clean instead of requiring it
// don't forget to npm install the plugins!
var $$ = require('gulp-load-plugins')();

// The default task - called when you run `gulp` from cli
gulp.task('default', ['build'], function () {
});

gulp.task('build', ['js'], function () {
});

// compiling js files
gulp.task('js', function () {
  //var filter = $$.filter(config.globs.js);

  return gulp.src(config.paths.js)
    .pipe($$.uglify())
    .pipe(gulp.dest(config.dirs.min));
});
