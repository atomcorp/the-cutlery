var gulp = require('gulp');
var jade = require('gulp-jade');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
 
gulp.task('templates', function() {
  var YOUR_LOCALS = {}; 
  gulp.src('./src/jade/*.jade')
    .pipe(jade({
      locals: YOUR_LOCALS
    }))
    .pipe(gulp.dest('./dev/'))
});

gulp.task('sass', function () {
    gulp.src('./src/sass/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./dev/css/'));
});

gulp.task('scripts', function() {
	return gulp.src('./src/js/*.js')
	.pipe(concat('all-scripts.min.js'))
	.pipe(uglify())
	.pipe(gulp.dest('./dev/js/'));
});


// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch('./src/jade/*.jade', ['templates']);
    gulp.watch('./src/sass/*.scss', ['sass']);
    gulp.watch('./src/js/*.js', ['scripts']);
});

gulp.task('default', ['templates','sass','scripts','watch']);
