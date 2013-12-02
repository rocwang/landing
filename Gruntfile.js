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
            options: {
                livereload: true
            },
            not_injectable: {
                files: [
                    '<%= rv.dev %>/*.html',
                    '<%= rv.dev %>/main.js',
                ]
            },
            injectable: {
                files: [
                    '<%= rv.dev %>/css/*.css',
                    '<%= rv.dev %>/img/**/*.{gif,jpeg,jpg,png,svg,webp}',
                ]
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
                assetsDirs: ['<%= rv.dist %>']
            },
            html : ['<%= rv.dist %>/*.html'],
            css  : ['<%= rv.dist %>/monolith.css'],
        },
        clean: {
            dist: ['.tmp', 'dist'],
        },
        copy: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= rv.dev %>',
                    src: [
                        '*.{html,ico,png,txt}',
                        //'*.{ico,png,txt}',
                        '.htaccess',
                        'img/**/*.webp',
                        'pdf/*.pdf',
                    ],
                    dest: '<%= rv.dist %>',
                }, {
                    expand: true,
                    cwd: '<%= rv.dev %>',
                    flatten: true,
                    src: [
                        'bower_components/bootstrap/fonts/*',
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
                cwd: '<%= rv.dev %>/img',
                src: '**/*.{gif,jpeg,jpg,png}',
                dest: '<%= rv.dist %>/img',
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
                    '<%= rv.dist %>/*.js',
                    '<%= rv.dist %>/*.css',
                    '<%= rv.dist %>/img/**/*.{gif,jpeg,jpg,png,webp}',
                    '<%= rv.dist %>/fonts/*',
                ]
            }
        },
    });

    grunt.registerMultiTask('serve', function () {
        return grunt.task.run(this.data);
    });

    grunt.registerTask('build', [
        'clean',         // Clean up generated files

        'useminPrepare', // Config concat, cssmin & uglify

        //'autoprefixer', // Add vendor prefix for CSS

        'concat',        // Concat CSS & JS
        'cssmin',        // Minify CSS
        'uglify',        // Minify JS

                         // TODO Use concurrent
        'imagemin',      // Minify Image
        'copy',          // Copy relevant files to destination folder

        //'filerev',       // Rename generated files with hash tag;

        'usemin',        // Use generated files

        'htmlmin',       // Minify HTML; Put it after usemin because: https: // github.com/yeoman/grunt-usemin/issues/44
    ]);

    // Default task
    grunt.registerTask('default', [
        'build'
    ]);
};
