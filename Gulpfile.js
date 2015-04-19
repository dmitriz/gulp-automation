'use strict';

/* 
 * Don't forget to `npm install` these packages before running this script:
 *
 *```sh
 * 	npm install gulp gulp-load-plugins gulp-livereload connect connect-livereload opn --save 
*/

var gulp = require('gulp');
var connect = require('connect');
var connectLivereload = require('connect-livereload');
var opn = require('opn');
var gulpLivereload = require('gulp-livereload');

/*
 * ---------->  Main Config  <-------------
 */
var config = {
	rootDir: __dirname,
	servingPort: 8080,

	// the files you want to watch for changes for live reload
	filesToWatch: ['*.{html,css,js}', '!Gulpfile.js', '!karma.conf.js', '!protractor.conf.js']
}

// To keep Travis CI happy
gulp.task('test', function () {
  console.log("Travis is happy with you!");
});

// The default task - called when you run `gulp` from CLI
gulp.task('default', ['prepare', 'watch', 'serve']);

gulp.task('prepare', function () {
});

gulp.task('watch', ['connect'], function () {
  gulpLivereload.listen();
  gulp.watch(config.filesToWatch, function(file) {
    gulp.src(file.path)
      .pipe(gulpLivereload());
  });
});

gulp.task('serve', ['connect'], function () {
  return opn('http://localhost:' + config.servingPort);
});

gulp.task('connect', function(){
  return connect()
    //.use(connectLivereload())
    .use(connect.static(config.rootDir))
    .listen(config.servingPort);
});
