'use strict';

var gulp = require('gulp');
var bitcoreTasks = require('bitcore-build-gobyte');

bitcoreTasks('p2p', {skipBrowser: true});

gulp.task('default', ['lint', 'coverage']);
