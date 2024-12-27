/* jshint node: true */
/* eslint-env node */

"use strict";

// Loading relative tasks
const loadTasksRelative = require('grunt-niagara/lib/loadTasksRelative');

// Define paths
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

module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // JSDoc Task for documentation
    jsdoc: {
      src: SRC_FILES.concat([ 'README.md' ])
    },

    // ESLint for JavaScript code linting
    eslint: {
      src: JS_FILES,
      options: {
        plugins: [ 'react' ]
      }
    },

    // Babel task for JS transpilation
    babel: {
      options: {
        presets: [ '@babel/preset-env' ],
        plugins: [ '@babel/plugin-transform-react-jsx' ],
        compact: false
      },
      build: {
        options: {
          plugins: [ '@babel/plugin-transform-react-jsx' ],
          compact: false
        },
        files: [{
          expand: true,
          cwd: 'src/rc/',
          src: ['**/*.js'],
          dest: 'build/src/rc/',
          ext: '.js'
        }]
      }
    },

    // Watch files for changes
    watch: {
      src: ALL_FILES,
      tasks: (tasks) => [ 'less' ].concat(tasks)
    },

    // LESS Compilation task
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

    // Karma for unit tests
    karma: {
      unit: {
        configFile: 'karma.conf.js', // Path to Karma configuration file
        singleRun: true // Run tests once
      }
    },

    // RequireJS Task for bundling and optimization
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
            "apexcharts": "src/rc/Public/vendor/apexchart/apexcharts.js", // Example: explicitly specify vendor files
            "chartist": "src/rc/Public/vendor/chartist/chartist.min.js"
            // Add more vendor paths as needed
          },
          shim: {} // Define dependencies if necessary
        }
      }
    },

    // Niagara-specific task for station setup
    niagara: {
      station: {
        stationName: 'Dashboard_Barclays',
        forceCopy: true,
        sourceStationFolder: './srcTest/rc/stations/BarclaysUnitTest'
      }
    }
  });

  // Load custom and standard tasks
  loadTasksRelative(grunt, 'grunt-niagara');
  loadTasksRelative(grunt, 'grunt-contrib-less');
  grunt.loadNpmTasks('grunt-requirejs');

  // Default task
  grunt.registerTask('default', ['requirejs']);
  grunt.registerTask('build', ['babel', 'requirejs']);
};
