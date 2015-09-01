'use strict';

// Todo: file rev
// Todo: Add html validation support
// Todo: Add scss-lint support
// Todo: Add jshint support

// Load plugins
var gulp                = require('gulp'),

    // Utility plugins
    util                = require('gulp-util'),
    del                 = require('del'),
    merge               = require('merge-stream'),
    plumber             = require('gulp-plumber'),
    notify              = require('gulp-notify'),
    path                = require('path'),
    sourcemaps          = require('gulp-sourcemaps'),
    browserSync         = require('browser-sync'),

    // HTML plugins
    htmlmin             = require('gulp-htmlmin'),

    // CSS plugins
    sass                = require('gulp-sass'),
    minifyCss           = require('gulp-minify-css'),
    autoprefixer        = require('gulp-autoprefixer'),
    combineMediaQueries = require('gulp-combine-media-queries'),

    // JS plugins
    jshint              = require('gulp-jshint'),
    uglify              = require('gulp-uglify'),
    concat              = require('gulp-concat'),

    // Image plugins
    imagemin            = require('gulp-imagemin'),
    svgSprite           = require('gulp-svg-sprite');

// Allows gulp --dist to be run for production compilation
var isProduction = util.env.dist ? true : false;

var onError = notify.onError("Error: <%= error.message %>");

// Base paths
var basePaths = {
  vendor: './node_modules/',
  src   : './src/',
  dest  : './dist/'
};

// paths definitions
var srcFiles = {
  scss  : [
    'scss/app.scss',
  ],
  js    : [
    'js/vendor.js',
    'js/app.js',
  ],
  img   : [
    'img/**',
    '../node_modules/photoswipe/dist/default-skin/default-skin.png',
    '../node_modules/photoswipe/dist/default-skin/default-skin.svg',
    '../node_modules/photoswipe/dist/default-skin/preloader.gif',
  ],
  sprite: [
    'sprite/*.svg',
  ],
  html  : [
    'index.html',
  ],
  misc  : [
    'pdf/*.pdf',
    '.htaccess',
    'apple-touch-icon.png',
    'favicon.ico',
    'humans.txt',
    'robots.txt',
  ]
};

gulp.task('clean', function (cb) {
  del('./dist/', cb);
});

gulp.task('scss', function () {
  return gulp.src(srcFiles.scss, {cwd: basePaths.src})
    .pipe(plumber({errorHandler: onError}))
    .pipe(isProduction ? util.noop() : sourcemaps.init())
    .pipe(sass({
      includePaths: [
        basePaths.vendor
      ]
    }))
    .pipe(combineMediaQueries({log: true}))
    .pipe(minifyCss())

    // These 2 lines is for working around the source map issue with autoprefixer
    //.pipe(sourcemaps.write())
    //.pipe(sourcemaps.init({loadMaps: true}))
    .pipe(autoprefixer({
      browsers: 'last 2 version',
      cascade : false
    }))

    .pipe(isProduction ? util.noop() : sourcemaps.write('.'))
    .pipe(gulp.dest(basePaths.dest + 'css'))
    .pipe(browserSync.stream({match: '**/*.css'}));

});

gulp.task('js', function () {
  var mergedStream = merge();

  srcFiles.js.forEach(function (val) {
    var src = require(basePaths.src + val);
    var stream = gulp.src(src, {cwd: basePaths.src + 'js'})
      .pipe(plumber({errorHandler: onError}))
      .pipe(isProduction ? util.noop() : sourcemaps.init())
      .pipe(concat(path.basename(val)))
      .pipe(uglify())
      .pipe(isProduction ? util.noop() : sourcemaps.write('./'))
      .pipe(gulp.dest(basePaths.dest + 'js'));

    mergedStream.add(stream);
  });

  return mergedStream;
});

gulp.task('img', function () {
  return gulp.src(srcFiles.img, {cwd: basePaths.src})
    .pipe(plumber({errorHandler: onError}))
    .pipe(imagemin())
    .pipe(gulp.dest(basePaths.dest + 'img'));
});

gulp.task('sprite', function () {
  return gulp.src(srcFiles.sprite, {cwd: basePaths.src})

    .pipe(plumber({errorHandler: onError}))
    .pipe(svgSprite({
      mode: {
        symbol: {
          dest   : '.',
          sprite : 'sprite.svg',
          example: false
        }
      }
    }))
    .pipe(gulp.dest(basePaths.dest + 'img'));
});

gulp.task('html', function () {
  return gulp.src(srcFiles.html, {cwd: basePaths.src})
    .pipe(plumber({errorHandler: onError}))
    .pipe(htmlmin({
      collapseBooleanAttributes   : true,
      collapseWhitespace          : true,
      removeAttributeQuotes       : true,
      removeCDATASectionsFromCDATA: true,
      removeComments              : true,
      removeCommentsFromCDATA     : true,
      removeEmptyAttributes       : true,
      removeOptionalTags          : false,
      removeRedundantAttributes   : true,
      useShortDoctype             : true
    }))
    .pipe(gulp.dest(basePaths.dest));
});

gulp.task('misc', function () {
  return gulp.src(srcFiles.misc, {
    cwd : basePaths.src,
    base: basePaths.src
  })
    .pipe(plumber({errorHandler: onError}))
    .pipe(gulp.dest(basePaths.dest));
});

// Default task
gulp.task('default', Object.keys(srcFiles));

// Watch task
gulp.task('watch', ['default'], function () {

  Object.keys(srcFiles).forEach(function (element) {
    var watchedFiles;
    switch (element) {
      case 'scss':
        watchedFiles = 'scss/**';
        break;
      case 'js':
        watchedFiles = 'js/**';
        break;
      default :
        watchedFiles = srcFiles[element];
        break;
    }

    gulp.watch(watchedFiles, {cwd: basePaths.src}, [element]);
  });

  gulp.watch(['js/*.js', 'img/**', '*.html'], {cwd: basePaths.dest}, browserSync.reload);

  browserSync({
    server: {
      baseDir: basePaths.dest
    },
    open  : false
  });
});
