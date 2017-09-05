let gulp = require('gulp');
let htmlmin = require('gulp-htmlmin');
let minify = require('gulp-minify');
let cleanCSS = require('gulp-clean-css');

/* Configuration to run on production */

// Minify php file
gulp.task('minify', function() {
     gulp.src('public/*.php')
        .pipe(htmlmin({
            collapseWhitespace: true,
            removeComments: true
        }))
        .pipe(gulp.dest('public'));
});

// Minify javascript file
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

// Minify css file
gulp.task('minify-css', () => gulp.src('public/css/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('public/css'))
);

gulp.task('default', ['minify', 'compress', 'minify-css']);
