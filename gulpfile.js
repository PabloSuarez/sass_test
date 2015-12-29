'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var livereload = require('gulp-livereload');

gulp.task('sass', function () {
  gulp.src('*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'))
    .pipe(livereload());
});

gulp.task('default', function () {
  livereload.listen();
  gulp.watch('*', ['sass']);
  gulp.watch(['*']).on('change', livereload.changed);
});
