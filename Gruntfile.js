module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        bower : {
          install : {
            options : {
              targetDir : 'vendor/bower_components',
              layout : 'byComponent',
              verbose: true,
              cleanup: true
            }
          }
        },
        browserify : {
          vendor : {
            src : [
              'vendor/bower_components/jquery/js/jquery.min.js',
              'vendor/bower_components/underscore/js/underscore.js',
              'vendor/bower_components/modernizr/modernizr.js'
            ],
            dest : 'build/vendor.js'
          },
          app : {
            files : {
              'build/app.js' : ['src/js/app.js']
            }
          },
          ie : {
            files : {
              'build/app.ie.js' : ['src/js/ie/app.js']
            }
          }
        },
        uglify: {
            options: {
              sourceMap: true
            },
            dist: {
              files: { 'dist/app.js': [ 'build/vendor.js', 'build/app.js' ], },
            },
            ie: {
              files: { 'dist/app.ie.js': [ 'build/app.ie.js' ] },
            }
        },
        sass: {
            dist: {
                options: {
                    style: 'compressed',
                    bundleExec: true,
                    compass: true,
                    sourcemap: false,
                    lineNumbers: true,
                    require: ['susy', 'normalize-scss']
                },
                files: {
                    'dist/app.css': [ 'src/sass/app.scss' ]
                }
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
              url: "http://localhost:8000",
              locale: "en",
              strategy: "desktop",
              threshold: 80
            }
          },
          mobile: {
            options: {
              url: "http://localhost:8000",
              locale: "en",
              strategy: "mobile",
              threshold: 80
            }
          }
        },
        watch: {
            options: {
                livereload: true
            },
            sass: {
                files: [ 'src/sass/*.scss', 'src/sass/**/*.scss' ],
                tasks: [ 'sass' ]
            },
            images: {
              files: [ 'src/images/*' ],
              tasks: [ 'newer:imagemin' ]
            },
            uglify_dist: {
              files: [ 'src/js/*.js' ],
              tasks: [ 'browserify:app', 'uglify:dist' ]
            },
            uglify_ie: {
              files: [ 'src/js/ie/*.js' ],
              tasks: [ 'browserify:ie', 'uglify:ie' ]
            }
        },
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-newer');
    grunt.loadNpmTasks('grunt-bower-task');
    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-pagespeed');

    // Default task(s).
    grunt.registerTask('default', [
        'browserify',
        'uglify',
        'sass',
        'watch'
      ]);
    grunt.registerTask( 'images', [ 'newer:imagemin'] );
    grunt.registerTask( 'init', [ 'bower:install'] );
};
