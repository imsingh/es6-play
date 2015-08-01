var gulp = require('gulp');
var babel = require('gulp-babel');
var connect = require('gulp-connect');

// app settings
var settings  = {
	port : 8080
};

// Default Task
gulp.task('default', ['serve','watch'], function(){

});

// Transpile Task
gulp.task('transpile', function() {
	gulp.src('js/**/*.js')
	.pipe(babel())
	.pipe(gulp.dest('dist'));
});

// Watch the js source files and transpile it.
gulp.task('watch', function() {
	gulp.watch('js/**/*.js', ['transpile']);
});

gulp.task('serve', ['transpile'], function() {
  connect.server({
    port: settings.port,
    livereload: true
  });
});
