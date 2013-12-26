'use strict';

module.exports = function(grunt) {
    // Show elapsed time at the end
    require('time-grunt')(grunt);
    // Load all grunt tasks
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        // Configurable paths
        rv: {
            dev  : 'dev',
            dist : 'dist'
        },
        serve: {
            dev:[
                'compass:dev',
                'autoprefixer',
                'connect:dev',
                'watch'
            ],
            dist: [
                'build',
                'connect:dist'
            ]
        },
        connect: {
            options: {
                protocol   : 'http',
                hostname   : '*',
                open       : true
            },
            dev: {
                options: {
                    port       : 8000,
                    keepalive : false,
                    base      : '<%= rv.dev %>',
                    livereload : true,
                }
            },
            dist: {
                options: {
                    port       : 8001,
                    keepalive : true,
                    base      : '<%= rv.dist %>',
                }
            }
        },
        watch: {
            notInjectable: {
                options: {
                    livereload: true,
                },
                files: [
                    '<%= rv.dev %>/*.html',
                    '<%= rv.dev %>/js/*.js',
                ]
            },
            injectable: {
                options: {
                    livereload: true,
                },
                files: [
                    '<%= rv.dev %>/css/*.css',
                    '<%= rv.dev %>/img/**/*.{gif,jpeg,jpg,png,svg,webp}',
                ]
            },
            scss: {
                files: ['<%= rv.dev %>/scss/*.scss'],
                tasks: ['compass:dev', 'autoprefixer'],
            },
        },
        useminPrepare: {
            options: {
                dest: '<%= rv.dist %>'
            },
            html: '<%= rv.dev %>/*.html'
        },
        usemin: {
            options: {
                assetsDirs: [
                    '<%= rv.dist %>',
                    '<%= rv.dist %>/img',
                    '<%= rv.dist %>/fonts',
                ]
            },
            html : '<%= rv.dist %>/*.html',
            css  : '<%= rv.dist %>/css/*.css',
        },
        clean: {
            temp : ['.tmp', '.sass-cache'],
            dev  : ['dev/css/*.css'],
            dist : 'dist',
        },
        copy: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= rv.dev %>',
                    src: [
                        '*.{html,ico,txt}',
                        //'*.{ico,png,txt}',
                        '.htaccess',
                        'img/**/*.{svg,webp}',
                        'pdf/*.pdf',
                    ],
                    dest: '<%= rv.dist %>',
                }, {
                    expand: true,
                    cwd: '<%= rv.dev %>',
                    flatten: true,
                    src: [
                        'bower_components/bootstrap/dist/fonts/*',
                        'bower_components/font-awesome/fonts/*',
                    ],
                    dest: '<%= rv.dist %>/fonts',
                }, {
                    expand: true,
                    cwd: '<%= rv.dev %>',
                    flatten: true,
                    src: [
                        //TODO imagemin these ?
                        'bower_components/blueimp-gallery/img/*',
                    ],
                    dest: '<%= rv.dist %>/img/',
                }],
            },
        },
        imagemin: {
            dist: {
                expand: true,
                cwd: '<%= rv.dev %>',
                src: [
                        'img/**/*.{gif,jpeg,jpg,png}',
                        'apple-touch-icon.png',
                ],
                dest: '<%= rv.dist %>',
            }
        },
        //TODO Study the options
        htmlmin: {
            dist: {
                options: {
                    collapseBooleanAttributes    : true,
                    collapseWhitespace           : true,
                    removeAttributeQuotes        : true,
                    removeCDATASectionsFromCDATA : true,
                    removeComments               : true,
                    removeCommentsFromCDATA      : true,
                    removeEmptyAttributes        : true,
                    removeOptionalTags           : false,
                    removeRedundantAttributes    : true,
                    useShortDoctype              : true,
                },
                expand:true,
                cwd: '<%= rv.dist %>',
                src: '*.html',
                dest: '<%= rv.dist %>',
            }
        },
        filerev: {
            options: {
                encoding  : 'utf8',
                algorithm : 'md5',
                length    : 8
            },
            dist: {
                src: [
                    '<%= rv.dist %>/js/*.js',
                    '<%= rv.dist %>/css/*.css',
                    '<%= rv.dist %>/img/**/*.{gif,jpeg,jpg,png,svg,webp}',
                    //'<%= rv.dist %>/fonts/*',
                ]
            }
        },
        compass: {
            options: {
                assetCacheBuster : false,
                cssDir           : '<%= rv.dev %>/css',
                debugInfo        : false,
                fontsDir         : '<%= rv.dev %>/fonts',
                imagesDir        : '<%= rv.dev %>/img',
                importPath       : '<%= rv.dev %>/bower_components',
                javascriptsDir   : '<%= rv.dev %>/js',
                sassDir          : '<%= rv.dev %>/scss',
            },
            dev: {
                options: {
                    environment    : 'development',
                }
            },
            dist: {
                options: {
                    environment    : 'production',
                }
            },
        },
        autoprefixer: {
            css: {
                files: [{
                    expand: true,
                    cwd: '<%= rv.dev %>/css',
                    src: '*.css',
                    dest: '<%= rv.dev %>/css',
                }]
            },
        },
        concurrent: {
            dist: [
                'imagemin:dist',     // Minify Image
                'copy:dist',         // Copy relevant files to destination folder
                'compass:dist',      // Use compass to generate CSS
            ]
        },
        jshint: {
            options: {
                jshintrc: '.jshintrc',
                reporter: require('jshint-stylish')
            },
            all: [
                'Gruntfile.js',
                '<%= rv.dev %>/js/*.js',
            ]
        },
    });

    grunt.registerMultiTask('serve', function () {
        return grunt.task.run(this.data);
    });

    // TODO: Use concurrent
    grunt.registerTask('build', [
        'clean:dist',
        'concurrent:dist',
        'autoprefixer',    // Add vendor prefix for CSS

        'useminPrepare',   // Config concat, cssmin & uglify
        'concat',          // Concat CSS & JS
        'cssmin',          // Minify CSS
        'uglify',          // Minify JS

        'filerev',         // Rename generated files with hash tag;
        'usemin',          // Use generated files
        'htmlmin',         // Minify HTML; Put it after usemin because: https: // github.com/yeoman/grunt-usemin/issues/44
    ]);

    // Default task
    grunt.registerTask('default', [
        'jshint',
        'build',
    ]);
};
