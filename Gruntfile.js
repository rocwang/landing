'use strict';

module.exports = function(grunt) {
    // Show elapsed time at the end
    require('time-grunt')(grunt);
    // Load all grunt tasks
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        connect: {
            dev_server: {
                options: {
                    port:       8000,
                    protocol:   'http',
                    hostname:   '*',
                    base:       '.',
                    livereload: true,
                    keepalive:  false,
                    open:       true
                }
            }
        },
        watch: {
            options: {
                livereload: true
            },
            not_injectable: {
                files: [
                    'index.html',
                    'main.js',
                ]
            },
            injectable: {
                files: [
                    'css/*.css',
                    'img/*.{jpg,png}',
                    'img/portfolio/*.jpg',
                    'img/portfolio/thumbnail/*.jpg'
                ]
            },
        }
    });

    // Default task
    grunt.registerTask('default', [
        'connect:dev_server',
        'watch',
    ]);
};
