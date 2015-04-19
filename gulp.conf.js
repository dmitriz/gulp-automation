// Gulp configuration
module.exports = {
  port : 8080
  , root : __dirname
  , dirs : {
      "min"   : "min"
    , "build" : ""
    //, "backup" : "/Users/dmitrizaitsev/Box Sync"
    , "backup" : "/Users/dmitrizaitsev/Dropbox/p/Backups"

    // production directory
    , "prod" : "parse/public"
    , "prodDev" : "parse-dev/public"
  }
  , paths : {
    //   "app_js_src" : ["*", "!scripts*", "!Gulpfile*", "!*test.js", "!*.conf.js"]
    // , "app_js_concat" : "scripts.js"
    // , "app_js_dest" : "/"
    // , "vendor_js_src" : "assets/*"

    // source files to be processed
     "src" : "src/*"

    // js assets
    , "js" : ["!**/*test.js", "src/**/*.js"]

    // excluding from adding 'use strict;'
    , "jsStrict" : [
        "!**/*cache.js"
        , "!**/*map.js"
        , "!**/*standalone.js"
        , "!**/-route.js"
    ]

    // css assets
    , "css" : "src/**/*.css"

    // html assets
    , 'html': ["!src/index.html", "src/**/*.html"]

    // minimized assets
    , "min" : {
        "js"  : "min/**/*.js"
      , "css" : "min/**/*.css"
      , "html" : "min/**/*.html"
    }

    // concatenated assets
    , "concat" : {
        "js"  : "concat.js"
      , "css" : "concat.css"
    }
    , "build" : ""
    , "backup" : ['**/*', '!node_modules{,/**}', '!bower_components{,/**}']

    , "fullApp" : [
        "!app.js",
        "!*conf.js",
        "!*test.js",
        "!Gulpfile*",
        "*.js",
        "index.html",
        "main.tpl.html",
        "*.css",
        "assets/**/*",
        "img/*",
        "images/*",
        // "reg-list150.js",
        // "regions-data.js",
        // "features-data.js",
        // "hotels-data.js",
        // "libs.js",
        // "app.min.js",
        "*.map"
    ]
  }

  , cssHint : {
    "box-sizing": false,
    "box-model": false,
    "gradients": false,
    "shorthand": false,
    "known-properties": false,
    "star-property-hack"  : false,
    "compatible-vendor-prefixes"  : false,
    "regex-selectors" : false,
    "adjoining-classes" : false,
    "unqualified-attributes": false,
    "universal-selector": false,
    "floats": false,
    "important": false,
    "font-sizes": false,
    "outline-none": false,
    "unique-headings": false,
    "zero-units"  : false,
    "ids" : false
}

  // copied from Google web kit
  , AUTOPREFIXER_BROWSERS : [
    'ie >= 10',
    'ie_mob >= 10',
    'ff >= 30',
    'chrome >= 34',
    'safari >= 7',
    'opera >= 23',
    'ios >= 7',
    'android >= 4.4',
    'bb >= 10'
  ]

  , getTimeStamp: function(){
    var prefix = "33hotels-Backup",
        date = new Date();
    return prefix + "-" + date.getFullYear() + "-" + (1+date.getMonth()) + "-" + date.getDate() + "-" + date.getTime();
  }
}
