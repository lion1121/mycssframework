
var gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync');

gulp.task('sass', function () {
    gulp.src('./scss/helpers/custom.scss')
        .pipe(sass({
            outputStyle:'expanded'
        }).on('error', sass.logError))
        .pipe(gulp.dest('./css'))
});

gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: '../myCustomGridSystem/'
        },
        notify: false
    });
});
gulp.task('watch', ['browser-sync', 'sass'], function () {
    gulp.watch('./scss/**/*.scss', ['sass']);
    gulp.watch('./*.html', browserSync.reload);
    gulp.watch('./js/**/*.js', browserSync.reload);
});