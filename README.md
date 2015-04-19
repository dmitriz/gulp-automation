# gulp-automation
Automating the most painful parts of your code management

[![Build
Status](https://travis-ci.org/dmitriz/gulp-automation.svg?branch=master)](https://travis-ci.org/dmitriz/gulp-automation)

This is your dead simple file to enjoy Live Reload!

To make it work correctly:

Download and Install Git, see Github Guide to Installing Git, Atlassian Guide for Git and Git for beginners: The definitive practical guide for more information.

Download and Install Node.js, see How do I get started with Node.js for more information.

Copy (clone) Our Gulp Automation Repository into your local directory by typing in your terminal window:
git clone https://github.com/dmitriz/gulp-automation.git

This should create local subdirectory gulp-automation. Change to it and make sure the file package.json is found:
cd gulp-automation; ls package.json
Install Gulp.js and few other Node.js packages (and be patient ;-):

npm install; npm install --global gulp

Start your Local server and Live reload from Gulp.js by one simple command:
gulp
and don't worry when it "jumps" to your browser - we are trying hard to save you from manual work ;)
Voila!

Your server should start and serve the local file index.html right in your browser! Now try to modify and save it and enjoy your browser automatically reloading the changes! Your server keeps running in your terminal window and keep informing you about which files are reloaded! Finally you are the boss of your machine! ;-)

Trouble shooting:

If the reload does not work, try to manually reload your browser. It will (hopefully) reload itself from now on. ;-)
