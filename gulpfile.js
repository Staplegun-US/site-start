var gulp        = require('gulp');
var sass        = require('gulp-sass');
var prefix      = require('gulp-autoprefixer');
var imagemin    = require('gulp-imagemin');
var newer       = require('gulp-newer');
var webserver   = require('gulp-webserver');
var uglify      = require('gulp-uglify');
var sourcemaps  = require('gulp-sourcemaps');
var browserSync = require('browser-sync').create();

var paths = {
  styles: {
    src: './src/sass',
    files: './src/sass/**/*.scss',
    dest: './dist/css'
  },
  js: {
    files: './src/js/*.js',
    dest: './dist/js'
  },
  images: {
    src: './src/images/**',
    dest: './dist/images'
  }
}

var displayError = function(error) {
  var errorString = '[' + error.plugin + ']';
  errorString += ' ' + error.message.replace("\n",''); // Removes new line at the end

  if(error.fileName)    { errorString += ' in ' + error.fileName; }
  if(error.lineNumber)  { errorString += ' on line ' + error.lineNumber; }

  console.error(errorString);
}

gulp.task('sass', function (){
  return gulp.src(paths.styles.files)
    .pipe(sourcemaps.init())
    .pipe(sass({
        outputStyle: 'compressed',
        sourceComments: 'map',
        includePaths : [paths.styles.src]
    }))
    .on('error', function(err){
        displayError(err);
    })
    .pipe(prefix(
        'last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'
    ))
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest(paths.styles.dest))
    .pipe(browserSync.stream());
});

gulp.task('images', function(){
  return gulp.src(paths.images.src)
    .pipe(newer(paths.images.dest))
    .pipe(imagemin())
    .pipe(gulp.dest(paths.images.dest));
});

gulp.task('uglify', function() {
  return gulp.src(paths.js.files)
    .pipe(sourcemaps.init())
    .pipe(uglify())
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest(paths.js.dest))
    .pipe(browserSync.stream());
});

gulp.task('server', function() {
  gulp.src('.')
    .pipe(webserver({
      open: true,
    }));
});

gulp.task('browser-sync', function() {
  browserSync.init({
    server: {
      baseDir: "./"
    }
  });
});

gulp.task('default', ['browser-sync', 'sass', 'uglify', 'images'], function() {
  gulp.watch(paths.styles.files,  ['sass']);
  gulp.watch(paths.js.files,      ['uglify']);
  gulp.watch("*.html").on('change', browserSync.reload);

});
