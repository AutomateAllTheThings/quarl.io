import cucumber from "gulp-cucumber";

module.exports = (gulp, plugins) => {
  return gulp.task("cucumber", ["build", "serve"], () => {
      return gulp.src("features/**/*")
        .pipe(
          cucumber({
            "steps": "features/steps/*.step.js",
            "format": "summary"
          })
        );
  })
}
