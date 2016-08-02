var gulp = require('gulp');

var $ = require('gulp-load-plugins')();
console.log($);
//var autoprefixer = require('gulp-autoprefixer');
//var cleanCSS = require('gulp-clean-css');

gulp.task('default',function(){
	return gulp.src('src/app.css')
	.pipe($.autoprefixer({
		browsers: ['Firefox <= 20'],
		cascade : false
	}))
	.pipe($.cleanCss({compatibility: 'ie8'}))
	.pipe(gulp.dest('dist'));
});