
var gulp = require('gulp');
var gutil = require('gulp-util');
var bower = require('bower');
var concat = require('gulp-concat');
var copy = require("gulp-copy");
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var sh = require('shelljs');
var del = require('del');

var paths = {
    sass: ['./scss/**/*.scss'],
    js: ['./www/js/app/*.js', './www/js/app/controllers/*.js', './www/js/app/directives/**/*.js']
};

gulp.task('default', ['sass', 'scripts', 'concat', 'copy', 'minifyCss', 'uglify']);

gulp.task('sass', function(done) {
    gulp.src('./scss/ionic.app.scss')
        .pipe(sass())
        .pipe(gulp.dest('./www/css/'))
        .pipe(minifyCss({
          keepSpecialComments: 0
        }))
        .pipe(rename({ extname: '.min.css' }))
        .pipe(gulp.dest('./www/css/'))
        .on('end', done);
});

gulp.task('concat', function(done){
    gulp.src(['./node_modules/semantic-ui-css/semantic.min.css', './node_modules/semantic-ui-icon/icon.min.js'])
        .pipe(concat('style.css'))
        .pipe(gulp.dest('./www/css/'))
        .on('end', done);
});

gulp.task('clean', function(cb){
    del(['./www/js/app.min.js', './www/js/app.vendor.min.js', './www/css/ionic.app.min.css'], cb);
});

gulp.task('scripts', ['clean'], function(done){
    gulp.src(paths.js)
        .pipe(concat('app.vendor.js'))
        .pipe(gulp.dest('./www/js'))
        .on('end', done);
});

gulp.task('minifyCss',['clean'], function(){
    gulp.src("./www/css/app.min.css")
        .pipe(minifyCss())
        .pipe(gulp.dest('./www/js/'));
});

gulp.task('uglify',  ['clean'], function(){
    gulp.src("./www/js/app.vendor.js")
        .pipe(gulp.dest("./www/js/"))
        .pipe(rename({suffix: '.min'}))
        .pipe(uglify())
        .pipe(gulp.dest("./www/js/"));
});

gulp.task('copy', function(done){
    gulp.src("./node_modules/semantic-ui-css/themes/**/*.*")
        .pipe(gulp.dest('./www/css/themes/'))
        .on('end', done);
});

gulp.task('watch', function() {
    gulp.watch(paths.sass, ['sass']);
    gulp.watch(paths.js, ['scripts']);
});

gulp.task('install', ['git-check'], function() {
    return bower.commands.install()
        .on('log', function(data) {
            gutil.log('bower', gutil.colors.cyan(data.id), data.message);
        });
});

gulp.task('git-check', function(done) {
    if (!sh.which('git')) {
        console.log(
            '  ' + gutil.colors.red('Git is not installed.'),
            '\n  Git, the version control system, is required to download Ionic.',
            '\n  Download git here:', gutil.colors.cyan('http://git-scm.com/downloads') + '.',
            '\n  Once git is installed, run \'' + gutil.colors.cyan('gulp install') + '\' again.'
        );
        process.exit(1);
    }
    done();
});
