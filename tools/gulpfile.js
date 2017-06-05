const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const rename = require('gulp-rename');

gulp.task('default', () => (
  gulp.src('source/index.css')
    .pipe(autoprefixer())
    .pipe(rename('gulp-autoprefixer.css'))
    .pipe(gulp.dest('build'))
));
