module.exports = function(grunt) {
    grunt.initConfig({       
        jshint: {
            files: ["app/**/*.js"]
        },
        options: {           
            predef: ["document", "console"],
            esnext: true,
            globalstrict: true,
            globals: {},
            browserify: true    
    },
        watch: {
            javascripts: {
                files: ['app/**/*.js'],
                tasks: ['jshint']
            }
    }
    });

    require("matchdep")
        .filter("grunt-*")
        .forEach(grunt.loadNpmTasks);
            grunt.registerTask('default', ['jshint', 'watch']);
};