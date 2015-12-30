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
    fs           = require('fs'),


    // HTML plugins
    htmlmin      = require('gulp-htmlmin'),
    inlineSource = require('gulp-inline-source'),
    RevAll       = require('gulp-rev-all'),

    // CSS plugins
    sass         = require('gulp-sass'),
    nano         = require('gulp-cssnano'),
    autoprefixer = require('gulp-autoprefixer'),

    // JS plugins
    uglify       = require('gulp-uglify'),
    concat       = require('gulp-concat'),
    modernizr    = require('modernizr'),


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
    'js/head.js',
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
    'video/*',
    'apple-touch-icon.png',
    'favicon.ico',
    'humans.txt',
    'robots.txt',
    'rocwang.pdf',
  ]
};

gulp.task('clean', function (cb) {
  del([
    basePaths.test,
    basePaths.release,
  ], cb);
});

gulp.task('scss', function () {
  return gulp.src(srcFiles.scss, {cwd: basePaths.src})
    .pipe(plumber({errorHandler: onError}))
    .pipe(isProduction ? util.noop() : sourcemaps.init())
    .pipe(sass({
      includePaths: [
        basePaths.vendor
      ],
      outputStyle : 'compressed'
    }))
    .pipe(nano({
      discardComments: {removeAll: true}
    }))
    .pipe(autoprefixer({
      browsers: ['last 2 versions', 'ie >= 10'],
      cascade : false
    }))

    .pipe(isProduction ? util.noop() : sourcemaps.write('.'))
    .pipe(gulp.dest(basePaths.test + 'css'))
    .pipe(browserSync.stream({match: '**/*.css'}));

});

gulp.task('js', ['modernizr'], function () {
  var mergedStream = merge();

  srcFiles.js.forEach(function (val) {
    var src = require(basePaths.src + val);
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

gulp.task('img', function () {
  return gulp.src(srcFiles.img, {cwd: basePaths.src})
    .pipe(plumber({errorHandler: onError}))
    .pipe(imagemin())
    .pipe(gulp.dest(basePaths.test + 'img'));
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
    .pipe(gulp.dest(basePaths.test + 'img'));
});

gulp.task('html', ['scss', 'js'], function () {
  return gulp.src(srcFiles.html, {cwd: basePaths.src})
    .pipe(plumber({errorHandler: onError}))
    .pipe(isProduction ? inlineSource({
      rootpath: basePaths.test
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
      useShortDoctype              : false
    }))
    .pipe(gulp.dest(basePaths.test));
});

gulp.task('misc', function () {
  return gulp.src(srcFiles.misc, {
      cwd : basePaths.src,
      base: basePaths.src
    })
    .pipe(plumber({errorHandler: onError}))
    .pipe(gulp.dest(basePaths.test));
});

gulp.task('modernizr', function (cb) {
  modernizr.build({
    'classPrefix'    : '',
    'options'        : [
      'setClasses',
    ],
    'feature-detects': [
      'css/flexbox'
    ]
  }, function (result) {
    fs.writeFile(basePaths.src + 'js/head/modernizr.js', result, function (err) {
      if (err) {
        return cb(err);
      }

      console.log('modernizr.js is generated');
      cb();
    });
  });
});

// Default task
gulp.task('default', Object.keys(srcFiles));

gulp.task('release', ['default'], function () {
  // Revise all files
  var revAll = new RevAll({
    dontGlobal    : [
      'humans.txt',
      'robots.txt',
      'rocwang.pdf',
      'favicon.ico',
    ],
    dontRenameFile: [
      'index.html',
    ]
  });

  var stream = gulp.src(basePaths.test + '**')
    .pipe(revAll.revision())
    .pipe(gulp.dest(basePaths.release));

  browserSync({
    server: {
      baseDir: basePaths.release
    },
    open  : false
  });

  return stream;
});

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

  gulp.watch(['js/*.js', 'img/**', '*.html'], {cwd: basePaths.test}, browserSync.reload);

  browserSync({
    server: {
      baseDir: basePaths.test
    },
    open  : false
  });
});
