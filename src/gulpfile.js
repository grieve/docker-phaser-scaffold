var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();
var browserify = require('browserify');
var hbsfy = require('hbsfy');
var transform = require('vinyl-transform');

gulp.task('scss', function(){
    return gulp.src('scss/main.scss')
        .pipe(plugins.plumber())
        .pipe(plugins.sass({style: 'expanded'}))
        .pipe(plugins.autoprefixer(
            'last 2 version',
            'safari 5',
            'ie 8',
            'ie 9',
            'opera 12.1',
            'ios 6',
            'android 4'
        ))
        .pipe(plugins.rename({suffix: '.min'}))
        .pipe(plugins.minifyCss())
        .pipe(gulp.dest('dist/'));
});

gulp.task('lint', function(){
    return gulp.src('js/main.js')
        .pipe(plugins.jshint('.jshintrc'))
        .pipe(plugins.jshint.reporter('jshint-stylish'));
});

gulp.task('debug', ['lint'], function(){
    var browserified = transform(function(filename){
        var brw = browserify({
            debug:true,
            transform: ['hbsfy']
        });
        brw.ignore('nw.gui');
        brw.add(filename);
        return brw.bundle();
    });

    return gulp.src('js/main.js')
        .pipe(browserified)
        .pipe(plugins.concat('build.js'))
        .pipe(gulp.dest('dist/'));
});

gulp.task('default', function(){
    gulp.start('scss', 'debug');
});


gulp.task('watch', function(){
    gulp.watch('scss/**/*.scss', ['scss']);
    gulp.watch('js/**/*.js', ['debug']);
    gulp.watch('js/**/*.hbs', ['debug']);
});
