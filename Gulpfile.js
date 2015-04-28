/*
 * --->  Loading External Node.js Modules  <------
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

  // this is your local directory to become served as root, 
  // e.g. `localhost:8080` should point to show `index.html` in that directory
	rootDir: __dirname,

  // any port to use for your local server
	servingPort: 8080,

	// the files you want to watch for changes for live reload
  // replace by any glob pattern matching your files
	filesToWatch: ['*.{html,css,js}', '!Gulpfile.js']
}

/*
 * ---------->  Gulp Tasks  <-------------
 */

// The default task - called when you run `gulp` from CLI
gulp.task('default', ['watch', 'serve']);

// `gulp watch` task watching for file changes
gulp.task('watch', ['connect'], function () {

  // =========== > removing this command to test the start option!!!
  //gulpLivereload.listen();
  gulp.watch(config.filesToWatch, function(file) {
    gulp.src(file.path)

      // notify server about changes
      //.pipe(gulpLivereload());
      .pipe(gulpLivereload({ start: true }));
  });
});

// `gulp serve` task loading the URL in your browser 
gulp.task('serve', ['connect'], function () {
  return opn('http://localhost:' + config.servingPort);
});

// `gulp connect` task starting your server
gulp.task('connect', function(){
  return connect()

    // inject JavaScript into our page to listen for change notifications:
    // <script src="//localhost:35729/livereload.js?snipver=1"></script>
    .use(connectLivereload())
    .use(connect.static(config.rootDir))
    .listen(config.servingPort);
});
