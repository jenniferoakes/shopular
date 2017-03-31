'use strict';

module.exports = function gruntConfig(grunt) {

  grunt.initConfig({

    concat: {
      alljs: {
        options: {
          sourceMap: true
        },
        src: ['src/js/shop.module.js', 'src/js/**/*.js'],
        dest: 'build/js/main.js'
      }
    },

    babel: {
      all: { //all js files
        options: {
          presets: ['es2015'],
          sourceMap: true //need this so that when we run the build, the sourcemap will show us where we have errors
        },
        files: {
          'build/js/main.js': 'build/js/main.js'
          //where we want the files to go in build : where the files are currently
        }
      }

    },

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
            'tests/**/*.js'
          ],
          //need to add preprocessor to our tests/code to send it through the coverage tool
          preprocessors: {
            'src/js/**/*.js': ['coverage']
          },
          //we need to tell it to show us the data
          reporters: ['dots', 'coverage'],
          //show test reports as dots, and the coverage reports
          coverageReporter: {
            type: 'text-summary'
          }
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-karma');
  grunt.loadNpmTasks('grunt-babel');
  grunt.loadNpmTasks('grunt-contrib-concat');

  grunt.registerTask('build', [ 'karma', 'concat', 'babel' ]);

};
