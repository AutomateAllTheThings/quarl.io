module.exports = (gulp, plugins) => {
  gulp.task("test", () =>
      gulp.src("spec/**/*.spec.js", {read: false})
        .pipe(plugins.mocha({reporter: "spec"}))
  );
};
