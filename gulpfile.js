const os = require("os");
const {src, dest, series, parallel, watch} = require('gulp');

// Utility plugins
const util = require('gulp-util');
const del = require('del');
const merge = require('merge-stream');
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const path = require('path');
const sourcemaps = require('gulp-sourcemaps');
const browserSync = require('browser-sync');


// HTML plugins
const htmlmin = require('gulp-htmlmin');
const inlineSource = require('gulp-inline-source');
const RevAll = require('gulp-rev-all');

// CSS plugins
const sass = require('gulp-sass');
const nano = require('gulp-cssnano');
const autoprefixer = require('gulp-autoprefixer');

// JS plugins
const uglify = require('gulp-uglify-es').default;
const concat = require('gulp-concat');
const eslint = require('gulp-eslint');

// Image plugins
const imagemin = require('gulp-imagemin');
const svgSprite = require('gulp-svg-sprite');
const transform = require('gulp-transform');

// Allows gulp --dist to be run for production compilation
const isProduction = util.env.dist;

const onError = notify.onError("Error: <%= error.message %>");

// Base paths
const basePaths = {
  vendor : './node_modules/',
  src    : './src/',
  test   : './test/',
  release: './release/',
};

// paths definitions
const srcFiles = {
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
    'sitemap.txt',
    'google3945080f16c90e1d.html',
  ],
};

function clean() {
  return del([
    basePaths.test,
    basePaths.release,
  ]);
}

function esLintTask() {
  return src([
    'gulpfile.js',
    basePaths.src + 'js/**/*.js',
    '!' + basePaths.src + 'js/head/modernizr.js',
  ]).pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
}

function scss() {
  return src(srcFiles.scss, {cwd: basePaths.src})
    .pipe(plumber({errorHandler: onError}))
    .pipe(isProduction ? util.noop() : sourcemaps.init())
    .pipe(sass({
      includePaths: [basePaths.vendor],
      outputStyle : 'compressed',
    })).pipe(nano({
      discardComments: {removeAll: true},
      discardUnused  : {fontFace: false},
    })).pipe(autoprefixer({
      browsers: ['last 2 versions', 'ie >= 10'],
      cascade : false,
    })).pipe(isProduction ? util.noop() : sourcemaps.write('.'))
    .pipe(dest(basePaths.test + 'css'))
    .pipe(browserSync.stream({match: '**/*.css'}));
}

const js = series(esLintTask, () => {
  const mergedStream = merge();

  srcFiles.js.forEach(val => {
    const jsSrc = require(basePaths.src + val);
    const stream = src(jsSrc, {cwd: basePaths.src + 'js'})
      .pipe(plumber({errorHandler: onError}))
      .pipe(isProduction ? util.noop() : sourcemaps.init())
      .pipe(concat(path.basename(val)))
      .pipe(uglify())
      .pipe(isProduction ? util.noop() : sourcemaps.write('./'))
      .pipe(dest(basePaths.test + 'js'));

    mergedStream.add(stream);
  });

  return mergedStream;
});

function img() {
  return src(srcFiles.img, {cwd: basePaths.src})
    .pipe(plumber({errorHandler: onError}))
    .pipe(imagemin())
    .pipe(dest(basePaths.test + 'img'));
}

function sprite() {
  return src(srcFiles.sprite, {cwd: basePaths.src})
    .pipe(plumber({errorHandler: onError}))
    .pipe(svgSprite({
      mode: {
        symbol: {
          dest   : '.',
          sprite : 'sprite.svg.js',
          example: false,
        },
      },
    }))
    .pipe(transform(contents => {
        // Wrap svg sprites file in js for pre-loading
        return "(function(){const sprites = '" + contents + "';"
          + "const div = document.createElement('div');"
          + "div.style.display='none';"
          + "div.innerHTML = sprites;"
          + "document.body.insertBefore(div, document.body.childNodes[0]);})();"
      },
      {encoding: 'utf8'}
    ))
    .pipe(uglify())
    .pipe(dest(basePaths.test + 'js'));
}

const html = series(parallel(scss, js), () => {
  return src(srcFiles.html, {cwd: basePaths.src})
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
    .pipe(dest(basePaths.test));
});

function misc() {
  return src(srcFiles.misc, {
    cwd : basePaths.src,
    base: basePaths.src,
  }).pipe(plumber({errorHandler: onError}))
    .pipe(dest(basePaths.test));
}

const build = parallel(html, misc, img, sprite);

const release = series(build, () => {
  return src(basePaths.test + '**')
  // Revise all files
    .pipe(RevAll.revision({
        dontGlobal    : [
          'humans.txt',
          'robots.txt',
          'favicon.ico',
          'sitemap.txt',
          'google3945080f16c90e1d.html',
        ],
        dontRenameFile: [
          'index.html',
        ],
      }
    )).pipe(dest(basePaths.release));
});

// Watch task
const serve = series(build, () => {
  browserSync.init({
    server: {
      baseDir: basePaths.test,
    },
    https : {
      key : os.homedir() + "/.localhost_ssl/server.key",
      cert: os.homedir() + "/.localhost_ssl/server.crt"
    },
    open  : false,
  });

  watch('scss/**', {cwd: basePaths.src}, scss);
  watch('js/**', {cwd: basePaths.src}, js);
  watch('img/**', {cwd: basePaths.src}, img);
  watch('sprite/*.svg', {cwd: basePaths.src}, sprite);
  watch('index.html', {cwd: basePaths.src}, html);
  watch([
    'video/*',
    'apple-touch-icon.png',
    'favicon.ico',
    'humans.txt',
    'robots.txt',
    'sitemap.txt',
    'google3945080f16c90e1d.html',
  ], {cwd: basePaths.src}, misc);
  watch(['js/*.js', 'img/**', '*.html'], {cwd: basePaths.test}, browserSync.reload);
});

module.exports = {
  default: serve,
  clean,
  release,
};

