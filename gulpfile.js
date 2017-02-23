var fs=require('fs');
var gulp = require('gulp');
var less= require('gulp-less');
var bless = require('gulp-bless');
var gulpUtil=require('gulp-util');
var sourceMap=require('gulp-sourcemaps');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var reactify = require('reactify');
var glob=require('glob');
var livereload=require('gulp-livereload');
var jsons={files:[]};
var Router=require('react-router');
var allJsonArray=require('./index.json');

gulp.task('child',function(){
  var childRoutes=[];
  for(var i=0; i<allJsonArray.files.length; i++){
    var obj={path: allJsonArray.files[i].displayName, data:allJsonArray.files[i]};
    childRoutes.push(obj)
  }
  console.log(childRoutes);
  return childRoutes;
});

gulp.task('browserify', function() {
  var b = browserify({
    entries: ['components/index.jsx'], //entry file
    debug: true
  });
  b.transform(reactify); // use the reactify transform

  return b.bundle()
    .on('error',gulpUtil.log)
    .pipe(source('app.js'))
    .pipe(gulp.dest('./dist'))
    .pipe(livereload());
});


gulp.task('write',function(){
  glob('../**/*.json', {sync:true},function(err,files){
    if(err){
      console.log(err);
      return;
    }
    files.forEach(function(file) {
      // console.log(file);
      if(!file.match("/node_modules/") && !file.match("/package") && !file.match("/index")){
        console.log(file);
        jsons.files.push(require(file));
      }
    });

    fs.writeFile('index.json',JSON.stringify(jsons),function(err,data){
      if(err) throw err;
      console.log('data written to file');
    });
  });
});

gulp.task('less',function(){
    return gulp.src('./index.less')
      .pipe(sourceMap.init())
      .pipe(less())
      .pipe(bless())
      .pipe(sourceMap.write('./maps'))
      .pipe(gulp.dest('./dist'))
      .pipe(livereload());
});

gulp.task('watch', function() {
  livereload.listen();
  gulp.watch('components/**/*.jsx', ['browserify']).on('change',livereload.changed);
  gulp.watch('styles/*.less', ['less']).on('change',livereload.changed);

});

gulp.task('default', ['write','browserify','less','watch']);





