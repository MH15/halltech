var gulp = require('gulp'),
	gutil = require('gulp-util'),

	less = require('gulp-less'),
	uglify = require('gulp-uglify'),
	pump = require('pump'),
	path = require('path'),
	watch = require('gulp-watch'),
	notify = require('gulp-notify')

// auto refresh
var browserSync = require('browser-sync').create()
 

// compile all less files
gulp.task('less', function () {
  return gulp.src('./src/less/**/*.less')
	.pipe(less())
	.pipe(gulp.dest('./dist/style'))

    .pipe(browserSync.stream())
	
});

// javascript
gulp.task('js', function (cb) {
	return gulp.src('./src/js/*')
		.pipe(gulp.dest('./dist/js'))
});

// move files to /dist
gulp.task('move', function () {
	// copy images
	return gulp.src('./src/res/*')
		.pipe(gulp.dest('./dist/res'))

}) 

// compile less on save
gulp.task('watch', function() {
	// watch scss files
	gulp.watch('./src/less/**/*.less', function() {
		gulp.run('less')
	});
	gulp.watch('./src/js/**/*.js', function() {
		gulp.run('js')
	});
	

	notify({
		title: 'All Tasks Complete',
		message: 'Refreshing...!',
		sound: false
	})
});

// Static server
gulp.task('serve', ['less', 'js'], function() {

	browserSync.init({
		server: {
    	  baseDir: "./"
    	},
    	startPath: "/"
	});


	// gulp.run('move')

	gulp.watch("./src/less/**/*.less", ['less']);
	// gulp.watch("./src/js/**/*.js", ['js']);
	gulp.watch("./dist/js/**/*.js").on('change', browserSync.reload)
	gulp.watch("./**/*.html").on('change', browserSync.reload);
});




// like init
gulp.task('default', ['serve', 'less', 'watch'])