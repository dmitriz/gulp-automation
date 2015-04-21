# gulp-automation
Automating the most painful parts of your code management!

[![Build
Status](https://travis-ci.org/dmitriz/gulp-automation.svg?branch=master)](https://travis-ci.org/dmitriz/gulp-automation)

## LiveReload
**LiveReload** monitors changes in your files and instantly updates all changes in your browser. It is very useful when you are updating your site and **don't want to keep manually reloading** the page in your browser again and again after every edit.

Surprisingly there seems to be lack of **simple clean working solutions** that are **easy to install, maintain and customize**. 

Many of them are based on installing a **Chrome browser extension**. However, in addition to being **limited** to the Chrome browser, [Chrome extensions are **vulnerable**](http://www.techrepublic.com/blog/it-security/chrome-extensions-are-vulnerable-advantage-bad-guys/).

Other solutions are based on manually adding a script tag inside your HTML file. This adds to the **maintenance headache** to remember removing it from your production code, among others.

Both extension and extra tags are completely **unnecessary**!

## Dead simple way to enjoy LiveReload!

- [Download and Install Node.js](https://nodejs.org/download/), see [How do I get started with Node.js](http://stackoverflow.com/questions/2353818/how-do-i-get-started-with-node-js) for more information.

- [Download this Repository](https://github.com/dmitriz/gulp-automation/archive/master.zip),
unzip it and change to the created subdirectory `gulp-automation-master`.

- **That's it!** Now start your Local Server, LiveReload and your Browser pointing to the right location with **one single command** in your terminal:
```sh
npm start
```

## Is LiveReload all it can do?

**No!** When building your site, you need many other tools like [Error checking (linting)](http://stackoverflow.com/questions/8503559/what-is-linting), [Minification](http://en.wikipedia.org/wiki/Minification_(programming)) and [Concatenation](https://hacks.mozilla.org/2012/12/fantastic-front-end-performance-part-1-concatenate-compress-cache-a-node-js-holiday-season-part-4/) for shorter load times and better performance. 

This is where the [Gulp.js automating system](http://gulpjs.com/) shines at its best. It has great rapidly growing community proving [open source plugins](http://gulpjs.com/plugins/) for all possible tasks you can imagine. Just <em>google "gulp" with whatever task you want</em> ;)

Use [provided `Gulpfile.js`](https://github.com/dmitriz/gulp-automation/blob/master/Gulpfile.js) to edit and add more tasks or write a new one!


## Now enjoy and read more tips in that file that loads in your browser!

Are you still here? No, we won't tell what else you see there until you do it ;-)


## FAQ

- What is the point of this solution?

  - To set you up and running with working LiveReload in *minimal possible time, with minimum steps*.
  - To provide the simple commented configuration file `Gulpfile.js`, where you can see all "magic" happen and how you can adapt it to your needs. For easy learning and playing :-)
  - To show the power of [**Gulp.js**](http://gulpjs.com/) and [**Node.js**](https://nodejs.org/).

- What about other LiveReload solutions that work great (for me)?

This is **not only** about LiveReload! 
Have a look at the simple `Gulpfile.js` and extend it to work hard for
many other tasks to **save your time** in the future.

- Why are the *Node.js packages* are included?

For the same reason that batteries are included when you buy a camera :=)
It is more convenient for folks less used to Node.js to get them up and running quicker.
The packages included are tested. 
Installing all packages locally instead with `npm install` should work too.


## Still having problems or suggestions?

[Send your Feedback!](https://github.com/dmitriz/gulp-automation/issues/new)
