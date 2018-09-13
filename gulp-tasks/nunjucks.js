var nunjucksRender = require('gulp-nunjucks-render');
var data = require("gulp-data");

module.exports = function (gulp, plugins) {
    return function () {
       gulp.src('app/**/*.+(html|nunjucks)')
       .pipe(data({
           gal1: require("../app/gal1.json"),
           gal2: require("../app/gal2.json"),
           gal3: require("../app/gal3.json"),
           gal4: require("../app/gal4.json"),
           gal5: require("../app/gal5.json")
       }))
      .pipe(nunjucksRender({
           path: ['app/templates']
        }))
        .pipe(plugins.removeCode({
           tmp: true,
           build: true
        }))
      .pipe(gulp.dest('.tmp'))
      .pipe(plugins.browserSync.reload({
        stream: true
      }))
    };
};
