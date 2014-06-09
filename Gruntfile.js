var jspaths = ['_js/helpers.js', '_js/classes/*.js', '_js/model/*.js', '_js/router/*.js', '_js/collection/*.js', '_js/view/*.js', '_js/view/*/*.js', '_js/app.js'];
var csspaths = ['_scss/*.scss'];
var templatepaths = ['_hbs/*.hbs'];
var imagepaths = ['_images/*.{png,jpg,gif}'];
var concatpaths = ['_js/templates.js'].concat(jspaths);

module.exports = function (grunt) {

    grunt.initConfig({

        concat: {
            options: {
                banner: "(function(){\n\n",
                footer: "\n\n})();",
                separator: '\n\n'
            },
            dist: {
                src: concatpaths,
                dest: 'js/app.js'
            }
        },

        watch: {
            js: {
                files: jspaths,
                tasks: ['jshint', 'handlebars', 'concat', 'clean']
            },
            scss: {
                files: csspaths,
                tasks: ['compass:development']
            },
            hbs: {
                files: templatepaths,
                tasks: ['handlebars', 'concat', 'clean']
            },
            images: {
                files: imagepaths,
                tasks: ['imagemin']
            }
        },

        uglify: {
            default: {
                options: {
                    wrap: true
                },
                files: {
                    'js/app.js': concatpaths
                }
            }
        },

        compass: {
            development: {
                options: {
                    sassDir: '_scss',
                    cssDir: 'css',
                    environment: 'development',
                    force: true
                }
            },
            production: {
                options: {
                    sassDir: '_scss',
                    cssDir: 'css',
                    environment: 'production',
                    outputStyle: 'compressed',
                    force: true
                }
            }
        },

        handlebars: {
            compile: {
                options: {
                    namespace: "tpl",
                    processName: function (filePath) {
                        var pieces = filePath.split("/");
                        return pieces[pieces.length - 1].split(".")[0];
                    },
                    partialsUseNamespace: true
                },
                files: {
                    "_js/templates.js": templatepaths
                }
            }
        },

        imagemin: {
            default: {
                options: {
                    optimizationLevel: 7, //PNG
                    progressive: true, //JPEG
                    interlaced: true //GIF
                },
                files: [
                    {
                        expand: true,
                        src: imagepaths,
                        dest: 'images',
                        rename: function (filePath, src) {
                            var pieces = src.split("/");
                            return filePath + '/' + pieces[pieces.length - 1];
                        }
                    }
                ]
            }
        },

        jshint: {
            default: {
                options: {
                    curly: true,
                    eqeqeq: true,
                    immed: true,
                    latedef: true,
                    newcap: true,
                    noarg: true,
                    sub: true,
                    undef: true,
                    eqnull: true,
                    browser: true,
                    noempty: true,
                    trailing: true,
                    globals: {
                        Backbone: true,
                        $: true,
                        console: true,
                        Handlebars: true,
                        tpl: true,
                        moment: true,
                        _: true,
                        Modernizr: true
                    }
                },
                files: {
                    src: jspaths
                }
            }
        },

        clean: ["_js/templates.js"]
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-handlebars');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-imagemin');

    grunt.registerTask('default', ['jshint', 'handlebars', 'concat', 'compass:development', 'clean', 'watch']);
    grunt.registerTask('production', ['jshint', 'handlebars', 'uglify', 'compass:production', 'clean', 'imagemin']);
};