
var gulp = require('gulp');
var gutil = require('gulp-util');
var bower = require('bower');
var concat = require('gulp-concat');
var copy = require("gulp-copy");
var sass = require('gulp-ruby-sass');
var minifyCss = require('gulp-minify-css');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var sh = require('shelljs');
var del = require('del');
var mergeStream = require('merge-stream');
var cleanCss = require("gulp-clean-css");

var paths = {
    sass: ['./scss/**/*.scss'],
    js: ['./www/js/app/*.js', './www/js/app/controllers/*.js', './www/js/app/directives/**/*.js']
};

gulp.task('default', ["copy", 'sass', "scripts"]);

gulp.task('sass', function(done) {
    return sass('./scss/ionic.app.scss',{noCache:true})
        .on('error', sass.logError)
        .pipe(rename('ionic.app.min.css'))
        .pipe(gulp.dest('./dist/'))
});

gulp.task('clean', function(cb){
    del(['./dist/**/*.*', './dist/*.*'], cb);
});

gulp.task('scripts', function(done){
    return gulp.src(['./www/js/app/*.js', './www/js/app/controllers/*.js', './www/js/app/directives/**/*.js'])
        .pipe(concat('app.vendor.js'))
        .pipe(gulp.dest('./dist/'))
});

gulp.task('copy', function(done){
    return mergeStream(

        gulp.src("./www/lib/**/*")
        .pipe(gulp.dest("./dist/lib")),

        gulp.src("./www/js/services.js")
        .pipe(gulp.dest("./dist/")),

        gulp.src(["./www/templates/**/*", "./www/templates/*"])
        .pipe(gulp.dest("./dist/templates")),

        gulp.src(["./www/img/**/*", "./www/img/*"])
        .pipe(gulp.dest("./dist/img")),

        gulp.src("./www/index.html")
            .pipe(gulp.dest('./dist/'))
    )
});

gulp.task('watch', function() {
    gulp.watch(paths.sass, ['default']);
    gulp.watch(paths.js, ['default']);
    //gulp.watch("./www/css", ['minifyCss']);
    //gulp.watch(paths.js, ['uglify']);
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
