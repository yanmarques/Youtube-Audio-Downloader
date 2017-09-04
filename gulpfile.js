let gulp = require('gulp');
let htmlmin = require('gulp-htmlmin');
let minify = require('gulp-minify');

gulp.task('minify', function() {
     gulp.src('public/*.php')
        .pipe(htmlmin({
            collapseWhitespace: true,
            removeComments: true
        }))
        .pipe(gulp.dest('public'));
});

gulp.task('compress', function() {
  gulp.src('public/js/*.js')
    .pipe(minify({
        ext:{
            src:'-debug.js',
            min:'.js'
        },
        exclude: ['tasks'],
        ignoreFiles: ['.combo.js', '-min.js']
    }))
    .pipe(gulp.dest('public/js'));
});

gulp.task('default', ['minify', 'compress']);
