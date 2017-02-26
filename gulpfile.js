'use strict';

// Load plugins
var gulp         = require('gulp'),

    // Utility plugins
    util         = require('gulp-util'),
    del          = require('del'),
    merge        = require('merge-stream'),
    plumber      = require('gulp-plumber'),
    notify       = require('gulp-notify'),
    path         = require('path'),
    sourcemaps   = require('gulp-sourcemaps'),
    browserSync  = require('browser-sync'),


    // HTML plugins
    htmlmin      = require('gulp-htmlmin'),
    inlineSource = require('gulp-inline-source'),
    RevAll       = require('gulp-rev-all'),
    html5lint    = require('gulp-html5-lint'),

    // CSS plugins
    sass         = require('gulp-sass'),
    nano         = require('gulp-cssnano'),
    autoprefixer = require('gulp-autoprefixer'),
    scsslint     = require('gulp-scss-lint'),

    // JS plugins
    uglify       = require('gulp-uglify'),
    concat       = require('gulp-concat'),
    eslint       = require('gulp-eslint'),


    // Image plugins
    imagemin     = require('gulp-imagemin'),
    svgSprite    = require('gulp-svg-sprite');

// Allows gulp --dist to be run for production compilation
var isProduction = util.env.dist;

var onError = notify.onError("Error: <%= error.message %>");

// Base paths
var basePaths = {
  vendor : './node_modules/',
  src    : './src/',
  test   : './test/',
  release: './release/',
};

// paths definitions
var srcFiles = {
  scss  : [
    'scss/above-the-fold.scss',
    'scss/below-the-fold.scss',
  ],
  js    : [
    'js/vendor.js',
    'js/app.js',
  ],
  img   : [
    'img/**',
  ],
  sprite: [
    'sprite/*.svg',
  ],
  html  : [
    'index.html',
  ],
  misc  : [
    'video/*',
    'apple-touch-icon.png',
    'favicon.ico',
    'humans.txt',
    'robots.txt',
    'rocwang.pdf',
    'sitemap.txt',
    'google3945080f16c90e1d.html',
  ],
};

gulp.task('clean', function(cb) {
  del([
    basePaths.test,
    basePaths.release,
  ], cb);
});

gulp.task('scss', ['scsslint'], function() {
  return gulp.src(srcFiles.scss, {cwd: basePaths.src})
    .pipe(plumber({errorHandler: onError}))
    .pipe(isProduction ? util.noop() : sourcemaps.init())
    .pipe(sass({
      includePaths: [basePaths.vendor],
      outputStyle : 'compressed',
    }))
    .pipe(nano({
      discardComments: {removeAll: true},
      discardUnused  : {fontFace: false},
    }))
    .pipe(autoprefixer({
      browsers: ['last 2 versions', 'ie >= 10'],
      cascade : false,
    }))

    .pipe(isProduction ? util.noop() : sourcemaps.write('.'))
    .pipe(gulp.dest(basePaths.test + 'css'))
    .pipe(browserSync.stream({match: '**/*.css'}));

});

gulp.task('js', ['eslint'], function() {
  var mergedStream = merge();

  srcFiles.js.forEach(function(val) {
    var src    = require(basePaths.src + val);
    var stream = gulp.src(src, {cwd: basePaths.src + 'js'})
      .pipe(plumber({errorHandler: onError}))
      .pipe(isProduction ? util.noop() : sourcemaps.init())
      .pipe(concat(path.basename(val)))
      .pipe(uglify())
      .pipe(isProduction ? util.noop() : sourcemaps.write('./'))
      .pipe(gulp.dest(basePaths.test + 'js'));

    mergedStream.add(stream);
  });

  return mergedStream;
});

gulp.task('img', function() {
  return gulp.src(srcFiles.img, {cwd: basePaths.src})
    .pipe(plumber({errorHandler: onError}))
    .pipe(imagemin())
    .pipe(gulp.dest(basePaths.test + 'img'));
});

gulp.task('sprite', function() {
  return gulp.src(srcFiles.sprite, {cwd: basePaths.src})

    .pipe(plumber({errorHandler: onError}))
    .pipe(svgSprite({
      mode: {
        symbol: {
          dest   : '.',
          sprite : 'sprite.svg',
          example: false,
        },
      },
    }))
    .pipe(gulp.dest(basePaths.test + 'img'));
});

gulp.task('html', ['scss', 'js'], function() {
  return gulp.src(srcFiles.html, {cwd: basePaths.src})
    .pipe(plumber({errorHandler: onError}))
    .pipe(isProduction ? inlineSource({
        rootpath: basePaths.test,
      }) : util.noop())
    .pipe(htmlmin({
      collapseBooleanAttributes    : true,
      collapseWhitespace           : true,
      removeAttributeQuotes        : true,
      removeCDATASectionsFromCDATA : true,
      removeComments               : true,
      removeCommentsFromCDATA      : true,
      removeEmptyAttributes        : true,
      removeOptionalTags           : true,
      removeRedundantAttributes    : true,
      removeScriptTypeAttributes   : true,
      removeStyleLinkTypeAttributes: true,
      useShortDoctype              : false,
    }))
    .pipe(gulp.dest(basePaths.test));
});

gulp.task('misc', function() {
  return gulp.src(srcFiles.misc, {
    cwd : basePaths.src,
    base: basePaths.src,
  })
    .pipe(plumber({errorHandler: onError}))
    .pipe(gulp.dest(basePaths.test));
});

// Default task
gulp.task('default', Object.keys(srcFiles));

gulp.task('release', ['default'], function() {

  return gulp.src(basePaths.test + '**')
  // Revise all files
    .pipe(RevAll.revision({
        dontGlobal    : [
          'humans.txt',
          'robots.txt',
          'rocwang.pdf',
          'favicon.ico',
          'sitemap.txt',
          'google3945080f16c90e1d.html',
        ],
        dontRenameFile: [
          'index.html',
        ],
      }
    ))
    .pipe(gulp.dest(basePaths.release));
});

// Watch task
gulp.task('watch', ['default'], function() {

  Object.keys(srcFiles).forEach(function(element) {
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

  gulp.watch(['js/*.js', 'img/**', '*.html'], {cwd: basePaths.test}, browserSync.reload);

  browserSync({
    server: {
      baseDir: basePaths.test,
    },
    open  : false,
  });
});

gulp.task('eslint', function() {
  return gulp.src([
    'gulpfile.js',
    basePaths.src + 'js/**/*.js',
    '!' + basePaths.src + 'js/head/modernizr.js',
  ])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

gulp.task('scsslint', function() {
  return gulp.src([
    basePaths.src + 'scss/**/*.scss',
    '!' + basePaths.src + 'scss/_bootstrap-variables.scss',
  ])
    .pipe(scsslint())
    .pipe(scsslint.failReporter())
});

gulp.task('html5lint', function() {
  return gulp.src(basePaths.release + srcFiles.html)
    .pipe(html5lint());
});

