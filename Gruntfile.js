module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        connect: {
          server: {
            options: {
              port: 8000,
              keepalive: true
            }
          }
        },
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

    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-newer');

    grunt.registerTask( 'images', [ 'newer:imagemin'] );

    grunt.registerTask('build', [
      'browserify:dist',
      'uglify:dist',
      'sass:dist',
      'images',
    ]);

    grunt.registerTask('server', ['connect:server']);

    grunt.registerTask('default',   [
      'build',
      'watch'
    ]);
};
