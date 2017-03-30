'use strict';

module.exports = function gruntConfig(grunt) {

  grunt.initConfig({

    karma: { //task name - do not make this up, this is defined already
      all: { // target name - you make this up
        options: {
          frameworks: ['mocha', 'chai'],
          browsers: ['Chrome'],
          singleRun: true,
          files: [
            'node_modules/angular/angular.js',
            'node_modules/angular-mocks/angular-mocks.js',
            'src/js/shop.module.js',
            'src/js/**/*.js', //this will not dupilcate the module file
            'test/**/*.js'
          ]
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-karma');

  grunt.registerTask('build', [ 'karma' ]);

};
