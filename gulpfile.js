const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const autoprefixer = require('gulp-autoprefixer');
const sass = require('gulp-sass');
const imagemin = require('gulp-imagemin');
const svgSprite = require('gulp-svg-sprite');
const cache = require('gulp-cache');
const runSequence = require('run-sequence');

// Development Tasks 
// -----------------
gulp.task('browserSync', function () {
  browserSync.init({
    server: './'
  });
  gulp.watch('css/scss/**/*.scss', ['sass']);
  gulp.watch(['js/**/*.js'], ['js']);
  gulp.watch('./**/*.html').on('change', browserSync.reload);
  gulp.watch('js/**/*.js').on('change', browserSync.reload);
});

gulp.task('sass', function () {
  return gulp.src('css/scss/**/*.scss')
    .pipe(sass({
      outputStyle: 'compressed'
    }).on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(gulp.dest('./css'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

//Optimization tasks
//-------------------
gulp.task('images', function () {
  return gulp.src('img/**/*.+(png|jpg|jpeg|gif|svg)')
    // Caching images that ran through imagemin
    .pipe(cache(imagemin({
      interlaced: true
    })))
    .pipe(gulp.dest('./img'))
});

const config = {
  mode: {
    symbol: {
      dest: 'img/sprites',
      sprite: 'sprite.svg', // sprite name
      example: true // To create a HTML example page
    }
  },
  svg: {
    xmlDeclaration: false, // don't create xml inside svg
    doctypeDeclaration: false // don't create doctype xml inside svg
  }
};

gulp.task('sprites', function () {
  return gulp.src('img/svg/**/*.svg')
    .pipe(svgSprite(config))
    .pipe(gulp.dest('.'))
});

// Task Sequence
// ---------------
gulp.task('default', function (callback) {
  runSequence(['sass', 'browserSync', 'images', 'sprites'], callback)
})