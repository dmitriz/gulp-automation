'use strict';

// import local config
var config = require('./Gulp.conf.js');

var gulp = require('gulp');

// lazy load plugins - $$.clean instead of requiring it
// don't forget to npm install the plugins!
var $$ = require('gulp-load-plugins')();


gulp.task('default', ['build'], function () {
  gulp.start('watch');
});

gulp.task('build', function(){
  //gulp.start('html-inject');
  //gulp.start('concat');
});

gulp.task('html-inject', function(){
  return gulp.src('src/index.html')
    .pipe($$.inject(gulp.src(config.paths.min.html), {
    //starttag: '<!-- inject:{{ext}} -->',
      addRootSlash: false
    //, ignorePath: "../" + config.dirs.min + "**"
    , relative: true
    , transform: function (filePath, file) {
      // return file contents as string
      return '<script id="' 
        // remove everything before and incl. the last "/"
        + filePath.replace(/^.*\//g, '') 
        + '" type="text/ng-template">' 
        + file.contents.toString('utf8')
        + '</script>';
    }
  }))
  .pipe(gulp.dest('.'));
});




// gulp.task('default', ['build'], function () {
//   gulp.sequence('biuld', 'watch');
// });

gulp.task('connect', function(){
  var connect = require('connect');
  return connect()
    .use(require('connect-livereload')())
    .use(connect.static(config.root))
    .listen(config.port);
});

// gulp.task('connect-exp', function() {
//   //var connect = require('gulp-connect');
//   $$.connect.server({
//     root: config.root,
//     port: config.port,
//     livereload: true
//   });
// });


gulp.task('serve', ['connect'], function () {
  return require('opn')('http://localhost:' + config.port);
});

gulp.task('watch', ['connect', 'serve'], function () {
  gulp.watch(['*.{html,css,js}', '!protractor.conf.js'], function (file) {
    $$.livereload.changed(file.path);
    console.log(file.path, " is reloaded!");
  });
  gulp.watch([config.paths.min.js, config.paths.min.css], ['concat']);
  // 'src/*.html' ?
  gulp.watch([config.paths.min.html, 'src/index.html'], ['html-inject']);
  gulp.watch(config.paths.css, ['css']);
  gulp.watch(config.paths.js, ['js']);
  gulp.watch(config.paths.html, ['html']);
});

// back up to timestamped directory - to be moved away for storage
gulp.task('backup', function(){
  return gulp.src(config.paths.backup, { base: './' })
    .pipe(gulp.dest(config.dirs.backup + '/' + config.getTimeStamp()));
});

gulp.task('test-with-plugin', function() {
  // Be sure to return the stream
  return gulp.src(config.paths.js)
    .pipe($$.karma({
      configFile: 'karma.conf.js',
      action: 'run'
    }))
    // .on('error', function(err) {
    //   // Make sure failed tests cause gulp to exit non-zero
    //   throw err;
    // });
});

gulp.task('karma', function () {
  require('karma').server.start(require('./karma.conf.js'));
});

// concat minimized JS and CSS files
gulp.task('concat', function(){

  return [   {min: config.paths.min.js, concat: config.paths.concat.js}
    , {min: config.paths.min.css, concat: config.paths.concat.css} ].forEach(function (paths) {
      gulp.src(paths.min)
        //.pipe($$.watch())
        .pipe($$.concat(paths.concat))
        .pipe(gulp.dest(config.dirs.build));
  });
  // gulp.src(config.paths.min.js)
  //   .pipe($$.concat(config.paths.concat.js))
  //   .pipe(gulp.dest(config.paths.build));

  // gulp.src(config.paths.min.css)
  //   .pipe($$.concat(config.paths.concat.css))
  //   .pipe(gulp.dest(config.paths.build));
});

// compiling js files
gulp.task('js', function () {
  var filter = $$.filter(config.paths.jsStrict);

  return gulp.src(config.paths.js)
    //.pipe($$.watch())
    // only pipe when changed
    //.pipe($$.changed(config.dirs.min, {extension: 'min.js'}))
    .pipe($$.changed(config.dirs.min))

    // only add 'use strict' when js file is n
    .pipe(filter)
    .pipe($$.header("'use strict';"))
    .pipe(filter.restore())

    .pipe($$.header("(function(){"))
    .pipe($$.footer("})();"))
    .pipe($$.jshint())
    .pipe($$.jshint.reporter('jshint-stylish'))
    .pipe($$.ngAnnotate())
    .pipe($$.uglify())
    // add '.min' preserving whole path 
    // .pipe($$.rename(function(path){
    //   path.basename += '.min';
    // }))
    .pipe(gulp.dest(config.dirs.min));
});

// compiling css files
gulp.task('css', function () {
  return gulp.src(config.paths.css)
    .pipe($$.changed(config.dirs.min))
    .pipe($$.autoprefixer())
    .pipe($$.csslint(config.cssHint))
    .pipe($$.csslint.reporter())
    .pipe($$.minifyCss())
    .pipe(gulp.dest(config.dirs.min));
});

// compiling html files
gulp.task('html', function(){
  return gulp.src(config.paths.html)
    .pipe($$.changed(config.dirs.min))
    .pipe($$.htmlhint({
        "tagname-lowercase": true,
        "attr-lowercase": true,
        "attr-value-double-quotes": true,
        "doctype-first": false,
        "tag-pair": true,
        "spec-char-escape": true,
        "id-unique": true,
        "src-not-empty": true,
        "attr-no-duplication": true
    }))
    .pipe($$.htmlhint.reporter())
    //.pipe($$.htmlmin({
      //  removeComments: true
      // , collapseWhitespace: true
      // , conservativeCollapse: true
      // , lint: true
    //}))
    .pipe(gulp.dest(config.dirs.min));
});

gulp.task('clean', function(){
  return gulp.src(['min/*'], {read: false})
  .pipe($$.clean());
});

// move to production directory
gulp.task('deploy', function(){
  // the base option sets the relative root for the set of files,
  // preserving the folder structure
  return gulp.src(config.paths.fullApp, {base: './'})

    // exclude from production, so it stays minified there but unfinified for dev
    .pipe($$.filter('!assets/angular.js'))
    .pipe(gulp.dest(config.dirs.prod));
});

// move to production directory
gulp.task('deploy-dev', function(){
  // the base option sets the relative root for the set of files,
  // preserving the folder structure
  return gulp.src(config.paths.fullApp, {base: './'})

    // exclude from production, so it stays minified there but unfinified for dev
    .pipe($$.filter('!assets/angular.js'))
    .pipe(gulp.dest(config.dirs.prodDev));
});
