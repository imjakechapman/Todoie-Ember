// Gulp Requires
var gulp = require('gulp'),
    gutil = require('gulp-util'),
    concat = require('gulp-concat'),
    handlebars = require('gulp-ember-handlebars');


// Directories
var SRC = 'public/assets',
    BWR = 'public/assets/bower_components',
    DIST = 'public/dist';


// Compile Ember Templates
gulp.task('templates', function(){
  gulp.src([SRC + '/js/app/templates/**/*.hbs'])
    .pipe(handlebars({
      outputType: 'browser'
     }))
    .pipe(concat('templates.js'))
    .pipe(gulp.dest(DIST + '/js/'));
});


// Concat all libs and app
gulp.task('concat', function() {
  gulp.src([ BWR + '/jquery/dist/jquery.min.js', BWR + '/handlebars/handlebars.js', BWR + '/ember/ember.js', BWR + '/ember-data/ember-data.min.js', BWR + '/validatorjs/src/validator.js',])
    .pipe(concat('libs.js'))
    .pipe(gulp.dest(DIST + '/js/'));

  gulp.src(SRC + '/js/app/**/*.js')
    .pipe(concat('app.js'))
    .pipe(gulp.dest(DIST + '/js/'))
});


// Gulp Default Task
gulp.task('default', ['templates', 'concat']);
