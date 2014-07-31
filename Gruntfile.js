module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        bower : {
          install : {
            options : {
              targetDir : 'src/requires',
              layout : 'byComponent',
              verbose: true,
              cleanup: true
            }
          }
        },
        browserify : {
          vendor : {
            src : [
              'src/requires/jquery/js/jquery.min.js',
              'src/requires/underscore/js/underscore.js',
              'src/requires/modernizr/modernizr.js'
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
                    require: 'susy'
                },
                files: {
                    'assets/css/screen.css': [ 'assets/sass/application.scss' ]
                }
            }
        },
        imagemin: {
          dynamic: {
            files: [{
              expand: true,               // Enable dynamic expansion
              cwd: 'assets/images/src/',  // Src matches are relative to this path
              src: ['*.{png,jpg,gif}'],   // Actual patterns to match
              dest: 'assets/images/dist/' // Destination path prefix
            }]
          }
        },
        watch: {
            options: {
                livereload: true
            },
            sass: {
                files: [ 'assets/sass/*.scss' ],
                tasks: [ 'sass' ]
            },
            images: {
              files: [ 'assets/images/src/*' ],
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
    grunt.loadNpmTasks('grunt-contrib-coffee');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-newer');
    grunt.loadNpmTasks('grunt-bower-task');
    grunt.loadNpmTasks('grunt-browserify');

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
