const gulp = require('gulp');

gulp.task('copy-html', () => {
    return gulp.src('./app/index.html')
        .pipe(gulp.dest('F:/OSPanel/domains/Vue/admin'));
});