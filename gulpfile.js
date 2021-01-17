var gulp = require('gulp');

var files = [
    './*',
    './*/*',
    './.debug',
];

gulp.task('copy', function() {
    return gulp.src(files , { base: './' })
        .pipe(gulp.dest('C:\\Program Files\\Common Files\\Adobe\\CEP\\extensions\\build'));
});
