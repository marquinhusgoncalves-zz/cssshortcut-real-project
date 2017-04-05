var gulp = require('gulp')
var pug = require('gulp-pug')
var stylus = require('gulp-stylus')

gulp.task('pug', function() {
    gulp.src('./src/pug/index.pug')
        .pipe(pug())
        .pipe(gulp.dest('./build/html'))
})

gulp.task('stylus', function() {
    gulp.src('./src/styl/style.styl')
        .pipe(stylus({
            compress: true
        }))
        .pipe(gulp.dest('./build/css'))
})

gulp.task('build', ['pug', 'stylus'])