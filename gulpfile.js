var gulp = require("gulp");
var sass = require("gulp-sass")(require('sass'));
var concat = require("gulp-concat-css");

gulp.task("sass", function() {
  return gulp
    .src("assets/sass/custom/*.scss")
    .pipe(sass())
    .pipe(gulp.dest("assets/css"));
});

gulp.task("tajam-sass", function() {
  return gulp
    .src("Tajam/src/CSS/*.scss")
    .pipe(sass())
    .pipe(gulp.dest("Tajam/CSS"));
});

gulp.task("gulp-check", function() {
  return console.log("Gulp Working, on changing Sass files");
});

gulp.task("watch", function() {
  gulp.watch("assets/sass/custom/*.scss", gulp.series("sass"));
});

gulp.task("tajam-watch", function() {
  gulp.watch("Tajam/src/CSS/*.scss", gulp.series("tajam-sass"));
});
