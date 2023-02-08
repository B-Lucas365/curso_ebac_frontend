var gulp = require('gulp');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var imagemin = require('gulp-imagemin');

gulp.task('sass', function() {
  return gulp.src('src/sass/*.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('dist/css'));
});

gulp.task('scripts', function() {
  return gulp.src('src/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'));
});

gulp.task('images', function() {
  return gulp.src('src/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/images'));
});

gulp.task('default', gulp.parallel('sass', 'scripts', 'images'));
