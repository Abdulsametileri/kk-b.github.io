const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');

//compile SASS files into CSS files
gulp.task('sass', function() {
  return gulp.src('src/scss/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('src/css'))
    .pipe(browserSync.stream());
})

// create a server and watching files

gulp.task('serve', function() {
	browserSync.init({
    server: './src'
  });

  gulp.watch('src/scss/*.scss', gulp.series('sass'));
  gulp.watch('src/*.html').on('change', browserSync.reload);
});

gulp.task('default', gulp.series(['sass', 'serve']))
