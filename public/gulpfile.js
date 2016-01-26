var assetsDir = 'assets/',
    imagesDir = assetsDir + 'images/',
    scriptsDir = assetsDir + 'js/',
    scssDir = assetsDir + 'scss/',
    stylesDir = assetsDir + 'css/';

var gulp = require('gulp');
var gutil = require('gulp-util');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var csso = require('gulp-csso');
var rename = require('gulp-rename');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var jade = require('gulp-jade');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');

gulp.task('styles', function() {
  return gulp.src(scssDir + '**/*.scss')
            .pipe(sourcemaps.init())
            .pipe(sass())
            .pipe(rename({suffix: '.prefixed'}))
            .pipe(autoprefixer({
              browsers: ['last 3 versions', 'ie 9']
            }))
            .pipe(sourcemaps.write())
            .pipe(gulp.dest(stylesDir))
            .pipe(rename({suffix: '.min'}))
            .pipe(csso({
              report: 'gzip'
            }))
            .pipe(gulp.dest(stylesDir))
});

gulp.task('js', function() {
  return gulp.src([scriptsDir + 'src/plugins.js', scriptsDir + 'src/main.js'])
              .pipe(sourcemaps.init())
              .pipe(concat('site.js'))
              .pipe(gulp.dest(scriptsDir))
              .pipe(uglify())
              .pipe(rename({suffix: '.min'}))
              .pipe(sourcemaps.write())
              .pipe(gulp.dest(scriptsDir))
              .on('error', gutil.log)
});

gulp.task('jade', function() {
  gulp.src(['html/jade/components/**/*.jade', '!html/jade/components/_includes/*.jade', 'html/jade/pages/**/*.jade', '!html/jade/pages/layout.jade', '!html/jade/pages/_includes/*.jade'])
        .pipe(jade({
          pretty: true
        }))
        .pipe(gulp.dest('html/', { ext: '.html' }))
});

gulp.task('imagemin', function() {
  return gulp.src(imagesDir + '**/*.*')
              .pipe(imagemin({
                optimizationLevel: 7,
                progressive: true,
                interlaced: true,
                svgoPlugins: [{removeViewBox: false}],
                use: [pngquant()]
              }))
              .pipe(gulp.dest(imagesDir));
});


gulp.task('watch', function() {
  gulp.watch(scssDir + '**/*.scss', ['styles']);
  gulp.watch(scriptsDir + 'src/*.js', ['js']);
  gulp.watch(["**/*.jade", "html/jade/components/modules/*.html"], ['jade']);
});

gulp.task('optimg', ['imagemin']);

gulp.task('default', ['jade', 'styles', 'js']);