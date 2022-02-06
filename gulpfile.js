var gulp = require('gulp');
var sass = require('gulp-sass')(require('sass'));

// TASKS FOR OVERALL SCRIPT
gulp.task('general-sass', function () {
	return gulp
		.src('assets/sass/custom/*.scss')
		.pipe(sass())
		.pipe(gulp.dest('assets/css'));
});

gulp.task('general-gulp-check', function () {
	return console.log('Gulp Working, on changing Sass files');
});

gulp.task('general-watch', function () {
	gulp.watch('assets/sass/custom/*.scss', gulp.series('general-sass'));
});

// Tasks for Tajam
gulp.task('tajam-sass', function () {
	return gulp
		.src('Tajam/src/CSS/*.scss')
		.pipe(sass())
		.pipe(gulp.dest('Tajam/CSS'));
});

gulp.task('tajam-watch', function () {
	gulp.watch('Tajam/src/CSS/*.scss', gulp.series('tajam-sass'));
});

//Tasks for Eclipse
gulp.task('eclipse-sass', function () {
	return gulp
		.src('Eclipse/CSS/src/*.scss')
		.pipe(sass())
		.pipe(gulp.dest('Eclipse/CSS/dest'));
});

gulp.task('eclipse-watch', function () {
	gulp.watch(
		'Eclipse/CSS/src/*.scss',
		gulp.series('eclipse-sass'),
	);
});
