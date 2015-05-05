/**
 * Created by Dima on 05.05.2015.
 */
var gulp = require('gulp'),
    bundle = require('gulp-bundle-assets');

gulp.task('default', function() {
    return gulp.src('./bundle.config.js')
        .pipe(bundle())
        .pipe(gulp.dest('./dist'));
});