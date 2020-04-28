var gulp = require('gulp'),
	rename = require('gulp-rename'),
	uglify = require('gulp-uglify'),
	postcss = require('gulp-postcss'),
	mqpacker = require('css-mqpacker'),
	autoprefixer = require('autoprefixer'),
	csso = require('gulp-csso');

gulp.task('css', function() {
  return gulp.src('src/css/styles.css')
    .pipe(postcss([
    	autoprefixer({ overrideBrowserslist: ['last 10 versions'] }),
    	mqpacker()
    ]))
    .pipe(gulp.dest('dest/css'));
});

gulp.task('cssmin', function() {
  return gulp.src('dest/css/styles.css')
    .pipe(csso())
    .pipe(rename('styles.min.css'))
    .pipe(gulp.dest('dest/css'));
});

gulp.task('js', function(){
  return gulp.src('src/js/scripts.js')
  .pipe(uglify())
  .pipe(rename('scripts.min.js'))
  .pipe(gulp.dest('dest/js'));
});