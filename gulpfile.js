var gulp = require('gulp');
var gulpUtil=require('gulp-util');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var reactify = require('reactify');

var postCSSPlugins = [
		'postcss-modules-local-by-default',
		'postcss-modules-extract-imports',
		'postcss-modules-scope',
  ];


 gulp.task('browserify', function() {
 var b = browserify({
 entries: ['components/index.jsx'], //entry file
 debug: true
 });
 b.transform(reactify); // use the reactify transform
 
 return b.plugin('css-modulesify', {
        o: 'dist/main.css',
        use: postCSSPlugins
      })
 .bundle()
   .on('error',gulpUtil.log)
 .pipe(source('app.js'))
 .pipe(gulp.dest('./dist'));
});

gulp.task('watch', function() {
 gulp.watch('components/*.jsx', ['browserify']);
});
gulp.task('default', ['watch','browserify']);






