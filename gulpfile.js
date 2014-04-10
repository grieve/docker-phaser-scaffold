var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();

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
        .pipe(gulp.dest('dist/assets/css'));
});

gulp.task('lint', function(){
    return gulp.src('src/main.js')
        .pipe(plugins.plumber())
        .pipe(plugins.jshint('.jshintrc'))
        .pipe(plugins.jshint.reporter('jshint-stylish'));
});

gulp.task('debug', ['lint'], function(){
    return gulp.src('src/main.js')
        .pipe(plugins.plumber())
        .pipe(plugins.browserify({
            debug: true,
            transform: ['hbsfy']
        }))
        .pipe(plugins.concat('build.js'))
        .pipe(gulp.dest('dist/'));
});

gulp.task('production', ['lint'], function(){
    return gulp.src('src/main.js')
        .pipe(plugins.plumber())
        .pipe(plugins.browserify({
            debug: false,
            transform: ['hbsfy']
        }))
        .pipe(plugins.uglify())
        .pipe(plugins.concat('build.js'))
        .pipe(gulp.dest('dist/'));
});

gulp.task('default', function(){
    gulp.start('scss', 'debug');
});


gulp.task('watch', function(){
    gulp.watch('scss/**/*.scss', ['scss']);
    gulp.watch('src/**/*.js', ['debug']);
    gulp.watch('src/**/*.hbs', ['debug']);
});
