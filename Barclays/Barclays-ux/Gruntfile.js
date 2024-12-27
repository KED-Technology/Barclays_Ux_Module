/* jshint node: true *//* eslint-env node */

"use strict";

const loadTasksRelative = require('grunt-niagara/lib/loadTasksRelative');

const SRC_FILES = [
  'src/rc/**/*.js',
  'Gruntfile.js',
  '!**/*.built.js',
  '!**/*.built.min.js'
];
const TEST_FILES = [
  'srcTest/rc/**/*.js'
];
const JS_FILES = SRC_FILES.concat(TEST_FILES);
const ALL_FILES = JS_FILES.concat('src/rc/**/*.less');

module.exports = function runGrunt(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    jsdoc: {
      src: SRC_FILES.concat([ 'README.md' ])
    },
    eslint: {
      src: JS_FILES,
      options: {
        plugins: [ 'react' ]
      }
    },
    babel: {
      options: {
        presets: [ '@babel/preset-env' ],
        plugins: [ '@babel/plugin-transform-react-jsx' ]
      },
      coverage: {
        options: {
          plugins: [ '@babel/plugin-transform-react-jsx', 'istanbul' ]
        }
      }
    },
    watch: {
      src: ALL_FILES,
      tasks: (tasks) => [ 'less' ].concat(tasks)
      
    },
    less: {
      options: {
        banner: '/* @noSnoop */',
        sourceMap: true,
        sourceMapBasepath: 'src',
        sourceMapRootpath: '/module/Barclays/'
      },
      Barclays: {
        options: {
          sourceMapFilename: 'build/src/maps/Barclays.map',
          sourceMapURL: '/module/Barclays/maps/Barclays.map'
        },
        files: {
          'build/src/rc/Barclays.css': 'src/rc/Barclays.less',
          'build/karma/src/rc/Barclays.css': 'src/rc/Barclays.less'
        }
      }
    },
    karma: {
    unit: {
        configFile: 'karma.conf.js', // Path to Karma configuration file
        singleRun: true // Set to false for watching files and running tests continuously
      }
    },
    requirejs: {
         compile: {
            options: {
              baseUrl: 'src/rc', // Directory containing your source JS files
              name: 'Barclays', // Entry point file name (e.g., main.js)
              out: 'build/src/rc/Barclays.built.min.js', // Output bundled file
              optimize: 'uglify2', // Minification option
              generateSourceMaps: true, // Optional: generate source maps
              preserveLicenseComments: false, // Remove comments
              paths: {
                // Define module aliases if needed
              },
              shim: {
                // Configure dependencies if required
              }
            }
          }
    },
    niagara: {
      station: {
        stationName: 'Dashboard_Barclays',
        forceCopy: true,
        sourceStationFolder: './srcTest/rc/stations/BarclaysUnitTest'
      }
    }
  });

  loadTasksRelative(grunt, 'grunt-niagara');
  loadTasksRelative(grunt, 'grunt-contrib-less');
    
};
