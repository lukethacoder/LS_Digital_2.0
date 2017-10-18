var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

gulp.task('default', function() {
  // place code for your default task here

});

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'app'
    },
  })
})


gulp.task('sass', function() {
  return gulp.src('src/**/*.scss') // Gets all files ending with .scss in app/scss
    .pipe(sass())
    .pipe(gulp.dest('app'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

gulp.task('watch', ['browserSync', 'sass'], function (){
  gulp.watch('src/*.scss', ['sass']);
  golp.watch('src/*.scss', browserSync.reload); 
  golp.watch('app/index.html', browserSync.reload); 
    // Other watchers
});