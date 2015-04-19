'use strict';

// Main Config
var config = {
	rootDir: __dirname,
	servingPort: 9000,
	filesToWatch: ['*.{html,css,js}', '!karma.conf.js', '!protractor.conf.js']
}

var gulp = require('gulp');

// lazy load plugins - $$.clean instead of requiring it
// don't forget to npm install the plugins!
var $$ = require('gulp-load-plugins')();

// The default task - called when you run `gulp` from CLI
gulp.task('default', ['watch'], function () {
});

gulp.task('watch', ['connect', 'serve'], function () {
  gulp.watch(config.filesToWatch, function (file) {
    $$.livereload().changed(file.path);
    console.log(file.path, " is reloaded!");
  });
});

gulp.task('connect', function(){
  var connect = require('connect');
  return connect()
    .use(require('connect-livereload')())
    .use(connect.static(rootDir))
    .listen(servingPort);
});

gulp.task('serve', ['connect'], function () {
  return require('opn')('http://localhost:' + servingPort);
});
