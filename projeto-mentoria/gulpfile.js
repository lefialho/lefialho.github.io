const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const pug = require('gulp-pug');
const sass = require('gulp-sass');
const useref = require('gulp-useref');
const uglify = require('gulp-uglify');
const cssnano = require('gulp-cssnano');
const gulpIf = require('gulp-if');
const imagemin = require('gulp-imagemin');
const svgSprite = require('gulp-svg-sprite');
const cache = require('gulp-cache');
const del = require('del');
const runSequence = require('run-sequence');



// Devlopment Tasks 

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'src'
    },
  })
})

gulp.task('pug', function() {
  return gulp.src('src/views/**/*.pug')
  .pipe(pug({
      pretty: true
    }))
  .pipe(gulp.dest('src'));
});


gulp.task('sass', function() {
  return gulp.src('src/scss/**/*.scss') 
    .pipe(sass())
    .pipe(gulp.dest('src/css'))
    .pipe(browserSync.reload({
      stream: true
    }))
});


//Watchers

gulp.task('watch', ['browserSync', 'sass'], function() {
  gulp.watch('src/scss/**/*.scss', ['sass']); 
  gulp.watch('src/views/**/*.pug', ['pug']); 
  gulp.watch('src/**/*.html', browserSync.reload); 
  gulp.watch('src/js/**/*.js', browserSync.reload); 
});


//Optimization tasks

gulp.task('useref', function(){
  return gulp.src('src/*.html')
    .pipe(useref())
    .pipe(gulpIf('*.js', uglify()))
    .pipe(gulpIf('*.css', cssnano()))
    .pipe(gulp.dest('dist'))
});


gulp.task('images', function() {
  return gulp.src('src/images/**/*.+(png|jpg|jpeg|gif|svg)')
  .pipe(cache(imagemin({
      interlaced: true
    })))
  .pipe(gulp.dest('dist/images'))
});


var config = {
  mode: {
    symbol: {
      dest: 'dist/sprites',
      sprite: 'sprite.svg', 
      example: true 
    }
  },
  svg:{
    xmlDeclaration: false,
    doctypeDeclaration: false 
  }
};

gulp.task('sprites', function() {
  return gulp.src('src/icons/**/*.svg')
    .pipe(svgSprite(config))
    .pipe(gulp.dest('.'))
});


gulp.task('clean:dist', function() {
  return del.sync('dist');
})


// Task Sequences

gulp.task('default', function(callback) {
  runSequence(['sass', 'pug', 'browserSync', 'watch'],
    callback
  )
})

gulp.task('build', function(callback) {
  runSequence('clean:dist', ['useref', 'useref-int', 'images', 'sprites', 'copy'],
    callback
  )
})




