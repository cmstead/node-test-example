var jasmine = require('./grunt/jasmine.json'),
    jshintConfig = require('./grunt/jshint.json');

module.exports = function(grunt){
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        jasmine_nodejs: jasmine,
        jshint: jshintConfig
    });

    /* Load grunt task adapters */

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-jasmine-nodejs');

    /* Register composite grunt tasks */

    grunt.registerTask('test', ['jshint', 'jasmine_nodejs']);

    grunt.registerTask('default', ['test']);
};