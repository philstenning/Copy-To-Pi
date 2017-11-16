var gulp = require('gulp'),
watch = require('gulp-watch');

gulp.task('python', function() {
  return watch('./src/*.py')
   gulp.src('./src/*.py')
    .pipe(gulp.dest('//RASPI/PiShare/2017/testGulp'));
});

gulp.task('default', function(){
   return watch('./src/**',function(){
     gulp.src('src/**')
     .pipe(gulp.dest('//RASPI/PiShare/2017/testGulp2'));
   })
});