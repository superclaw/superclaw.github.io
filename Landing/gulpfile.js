var gulp = require('gulp'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify-es').default,
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
    .pipe(gulp.dest('src/css/pre'));
});

gulp.task('cssmin', function() {
  return gulp.src('src/css/pre/styles.css')
    .pipe(csso())
    .pipe(rename('styles.min.css'))
    .pipe(gulp.dest('build/css'));
});

gulp.task('js', function(){
  return gulp.src('src/js/scripts.js')
    .pipe(uglify())
    .pipe(rename('scripts.min.js'))
    .pipe(gulp.dest('build/js'));
});