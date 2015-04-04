'use strict';

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
    imagemin            = require('gulp-imagemin');

// Allows gulp --dist to be run for production compilation
var isProduction = util.env.dist ? true : false;

// Base paths
var basePaths = {
  vendor: './src/bower_components/',
  src   : './src/',
  dest  : './dist/'
};

// paths definitions
var srcFiles = {
  less: [
    'scss/app.scss'
  ],
  js  : [
    'js/vendor.js',
    'js/app.js'
  ],
  img : [
    'img/**',
    'bower_components/blueimp-gallery/img/**'
  ],
  font: [
    'bootstrap/dist/fonts/*',
    'font-awesome/fonts/*'
  ],
  html: [
    'index.html',
    '404.html'
  ],
  misc: [
    'pdf/*.pdf',
    '.htaccess',
    'apple-touch-icon.png',
    'favicon.ico',
    'humans.txt',
    'robots.txt'
  ]
};

var onError = notify.onError("Error: <%= error.message %>");

gulp.task('clean', function (cb) {
  del('./dist/', cb);
});

gulp.task('css', function () {
  var vendor = gulp.src([
    'bootstrap/dist/css/bootstrap.css',
    'bootstrap/dist/css/bootstrap-theme.css',
    'font-awesome/css/font-awesome.css',
    'blueimp-gallery/css/blueimp-gallery.css'
  ], {
    cwd: basePaths.vendor
  }).pipe(plumber({errorHandler: onError}))
    .pipe(isProduction ? util.noop() : sourcemaps.init())
    .pipe(concat('vendor.css'))
    .pipe(minifyCss())
    .pipe(isProduction ? util.noop() : sourcemaps.write('.'))
    .pipe(gulp.dest(basePaths.dest + 'css'));


  var app = gulp.src(srcFiles.less, {cwd: basePaths.src})
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
    .pipe(gulp.dest(basePaths.dest + 'css'));

  return merge(vendor).add(app);
});

// Todo: Add jshint support
gulp.task('js', function () {
  // Modernizr.js
  var modernizr = gulp.src(basePaths.vendor + 'modernizr/modernizr.js')

    .pipe(plumber({errorHandler: onError}))
    .pipe(isProduction ? util.noop() : sourcemaps.init())
    .pipe(uglify())
    .pipe(isProduction ? util.noop() : sourcemaps.write('./'))
    .pipe(gulp.dest(basePaths.dest + 'js'));

  var mergedStream = merge(modernizr);

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

gulp.task('font', function () {
  return gulp.src(srcFiles.font, {cwd: basePaths.vendor})
    .pipe(plumber({errorHandler: onError}))
    .pipe(gulp.dest(basePaths.dest + 'fonts'));
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

// Todo: file rev

// Default task
gulp.task('default', ['css', 'js', 'img', 'font', 'misc', 'html']);

// Watch task
gulp.task('watch', ['default'], function () {
  gulp.watch('less/**', {cwd: basePaths.src}, ['css']);
  gulp.watch('js/**', {cwd: basePaths.src}, ['js']);
  gulp.watch('img/**', {cwd: basePaths.src}, ['img']);
  gulp.watch(srcFiles.misc, {cwd: basePaths.src}, ['misc']);

  gulp.watch([
//      'js/*.js',
//      'css/*.css',
//      'img/**',
//      '*.html',
      '**'
    ], {
      cwd: basePaths.dest
    },
    browserSync.reload
  );

  browserSync({
    server: {
      baseDir: basePaths.dest
    }
  });
});
