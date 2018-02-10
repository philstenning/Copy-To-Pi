var gulp = require('gulp'),
watch = require('gulp-watch');
const changed = require('gulp-changed')
const debug = require('gulp-debug');

const SRC = './dalekbot/**';
const SRC_PY = './dalekbot/*/*.py';
const DEST = '//RASPI/share/dalekbot';

 

gulp.task('changed', function () {
  return watch(SRC, function () {
    gulp.src(SRC)
      .pipe(changed(DEST))
      .pipe(debug({title: 'copied:'}))
      .pipe(gulp.dest(DEST))
  })
});

gulp.task('changed_py', function () {
  return watch(SRC_PY, function () {
    gulp.src(SRC_PY)
      .pipe(changed(DEST))
      .pipe(debug({title: 'copied:'}))
      .pipe(gulp.dest(DEST))
  })
});

gulp.task('python', function () {
  return watch(SRC_PY)
  gulp.src(SRC_PY)
    .pipe(gulp.dest(DEST));
});

gulp.task('default', function () {
  return watch(SRC, function () {
    gulp.src(SRC)
      .pipe(gulp.dest(DEST));
  })
});