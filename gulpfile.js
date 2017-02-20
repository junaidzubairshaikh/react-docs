var gulp = require('gulp');
var less= require('gulp-less');
var bless = require('gulp-bless');
var gulpUtil=require('gulp-util');
var sourceMap=require('gulp-sourcemaps');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var reactify = require('reactify');
var glob=require('glob');
var jsons=[];

gulp.task('browserify', function() {
  var b = browserify({
    entries: ['components/index.jsx'], //entry file
    debug: true
  });
  b.transform(reactify); // use the reactify transform

  // return b.plugin(require('css-modulesify'), {
  //   o: 'dist/main.css'
  //   // use: postCSSPlugins
  // })
  return b.bundle()
    .on('error',gulpUtil.log)
    .pipe(source('app.js'))
    .pipe(gulp.dest('./dist'));
});

gulp.task('list',function(){
  console.log('what is it');
  glob(['../../docs/**/*.json','!{node_modues}'], {sync:true},function(err,files){
    if(err){
      console.log(err);
      return;
    }
    files.forEach(function(file) {
      console.log(file);
      gulpUtil.log(file);
      jsons.push(file);
    });
    console.log(jsons.length);
  });

});

gulp.task('less',function(){
    return gulp.src('./index.less')
      .pipe(sourceMap.init())
      .pipe(less())
      .pipe(bless())
      .pipe(sourceMap.write('./maps'))
      .pipe(gulp.dest('./dist'))
});

gulp.task('watch', function() {
  gulp.watch('components/*.jsx', ['browserify']);
  gulp.watch('styles/*.less', ['less']);

});
gulp.task('default', ['watch','browserify','less']);





