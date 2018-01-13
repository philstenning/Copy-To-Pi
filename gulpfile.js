var gulp = require('gulp'),
watch = require('gulp-watch');
const changed = require('gulp-changed')
const debug = require('gulp-debug');

const SRC = './src/**';
const SRC_PY = './src/*.py';
const DEST = '//RASPI/PiShare/your_folder';

 

gulp.task('changed', function () {
  return watch(SRC, function () {
    gulp.src(SRC)
      .pipe(changed(DEST))
      .pipe(debug({title: 'copied:'}))
      .pipe(gulp.dest(DEST))
  })
});

gulp.task('python', function () {
  return watch('./src/*.py')
  gulp.src('./src/*.py')
    .pipe(gulp.dest(DEST));
});

gulp.task('default', function () {
  return watch(SRC, function () {
    gulp.src(SRC)
      .pipe(gulp.dest(DEST));
  })
});