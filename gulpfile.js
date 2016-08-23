var gulp = require('gulp'),
    less = require('gulp-less'),
    autoprefixer = require('gulp-autoprefixer'),
    browserSync = require('browser-sync').create(),
    cache = require('gulp-cached'),
    cleanCSS = require('gulp-clean-css');

//less-task
gulp.task('less', function () {
    return gulp.src('less/*.less')
        .pipe(less())
        .pipe(autoprefixer('last 15 versions'))
        .pipe(cache('less'))
        .pipe(gulp.dest('css'))
});

// //minify-css-task
// gulp.task('minify-css', function() {
//     return gulp.src('css/*.css')
//         .pipe(cleanCSS())
//         .pipe(gulp.dest('styles'));
// });

//watch-task
gulp.task('watch', function () {
    gulp.watch('less/*.less', ['less']);
    gulp.watch('fonts/*.css', browserSync.reload);
    gulp.watch('css/*.css', browserSync.reload);
    gulp.watch('js/*.js', browserSync.reload);
    gulp.watch('*.html', browserSync.reload);
});

//server-task
gulp.task('server', function () {
    browserSync.init({
        server: true,
        notify: false
    });
    //browserSync.watch('*/*.*').on('change', browserSync.reload);
});

gulp.task('default',
    ['less', 'watch', 'server']
);