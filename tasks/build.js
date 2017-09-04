module.exports = (gulp, plugins) => {
  gulp.task("build", () => {
    return gulp.src("source/**/*.js")
      .pipe(plugins.babel())
      .pipe(gulp.dest("distribute"));
  });
};
