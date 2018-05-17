var gulp = require('gulp'),
handlebars = require('gulp-handlebars');
sass = require('gulp-sass'),
autoprefixer = require('gulp-autoprefixer'),
browserSync = require('browser-sync').create();

gulp.task('sass', function () {
return gulp.src('sass/styles.scss')
 .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
    }))
    .pipe(gulp.dest('css/'))
    .pipe(browserSync.stream());
});

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('build', ['browser-sync', 'sass'], function () {
    gulp.watch('sass/**/*.scss', ['sass']);
    gulp.watch('*.html', browserSync.reload);
    gulp.watch('scripts/*.js', browserSync.reload);
});

gulp.task('default', ['build']);