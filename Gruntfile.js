var ngrok = require('ngrok');

module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        browserify : {
          app : {
            files : {
              'dist/js/app.js' : ['src/js/app.js']
            }
          },
          dist: {
            files: [{
              expand: true,
              cwd: 'src/js/',
              src: ['*.js'],
              dest: 'dist/js/'
            }]
          }
        },
        uglify: {
          options: {
            sourceMap: true
          },
          dist: {
            files: [{
              expand: true,
              cwd: 'dist/js/',
              src: ['*.js'],
              dest: 'dist/js/'
            }]
          }
        },
        sass: {
            dist: {
              options: {
                style: 'compressed',
                bundleExec: true,
                compass: true,
                sourcemap: 'none',
                lineNumbers: true,
                require: ['susy']
              },
              files: [{
                expand: true,
                cwd: 'src/sass/',
                src: ['*.scss'],
                ext: ['.css'],
                dest: 'dist/css/'
              }]
            }
        },
        imagemin: {
          dynamic: {
            files: [{
              expand: true,               // Enable dynamic expansion
              cwd: 'src/images/',         // Src matches are relative to this path
              src: ['*.{png,jpg,gif}'],   // Actual patterns to match
              dest: 'dist/images/'        // Destination path prefix
            }]
          }
        },
        pagespeed: {
          options: {
            nokey: true
          },
          desktop: {
            options: {
              strategy: "desktop",
              locale: "en",
              threshold: 80
            }
          },
          mobile: {
            options: {
              strategy: "mobile",
              locale: "en",
              threshold: 80
            }
          }
        },
        watch: {
            options: {
              livereload: true
            },
            sass: {
              files: [ 'src/sass/*.scss', 'src/sass/**/*.scss', 'src/sass/partials/**/*.scss' ],
              tasks: [ 'sass' ]
            },
            images: {
              files: [ 'src/images/*' ],
              tasks: [ 'newer:imagemin' ]
            },
            browserify_dev: {
              files: [ 'src/js/app.js', 'src/js/lib/*.js' ],
              tasks: [ 'browserify:app' ]
            },
        },
    });

    // Register task for ngrok-pagespeed
    grunt.registerTask('ngrok-pagespeed', 'Run pagespeed with ngrok', function() {
      var done = this.async();
      var port = 8000;

      ngrok.connect(port, function(err, url) {
        if (err !== null) {
          grunt.fail.fatal(err);
          return done();
        }
        grunt.config.set('pagespeed.options.url', url);
        grunt.task.run('pagespeed');
        done();
      });
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-newer');
    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-pagespeed');

    grunt.registerTask( 'images',   [ 'newer:imagemin'] );
    grunt.registerTask( 'analyze',  [ 'ngrok-pagespeed'] );

    grunt.registerTask('build', [
      'browserify:dist',
      'uglify:dist',
      'sass:dist',
      'images',
    ]);

    grunt.registerTask('default',   [
      'build',
      'watch'
    ]);
};
