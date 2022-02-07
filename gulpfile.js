var gulp = require('gulp'),
  fs = require('fs'),
  source = require('vinyl-source-stream'),
  browserify = require('browserify'),
  uglify = require('gulp-uglify'),
  streamify = require('gulp-streamify'),
  babelify = require("babelify");
	gsap = require("gsap");
	glslify = require("glslify");

function compileJS(file){
  browserify('src/'+file+'.js',{debug:true})
    .transform(babelify)
    .transform('glslify')
    .bundle()
    .on("error", function (err) { console.log("Error : " + err.message); })
    .pipe(source(file+'.min.js'))
    .pipe(streamify(uglify()))
    .pipe(gulp.dest('demo/js'));
}

// gulp.task('default',['js1','js2','js3'],function(){});

// run `npm run gulp js1` and get `demo/js/index.min.js`
gulp.task('js1',async function(){
  compileJS('index');
});
gulp.task('js2',async function(){
  compileJS('index2');
});
gulp.task('js3',async function(){
  compileJS('index3');
});
