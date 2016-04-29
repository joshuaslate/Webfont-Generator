module.exports = function(grunt) {

  grunt.initConfig({
    webfont: {
        icons: {
          src: 'src/*.svg',
          dest: 'build/fonts',
          destCss: 'build/scss',
          options: {
            fontHeight: 512,
            htmlDemo: true,
            engine: 'node',
            optimize: false,
            hashes: false,
            autoHint: false,
            stylesheet: 'scss',
            relativeFontPath: '../fonts',
            fontFilename: 'webfont',
            templateOptions: {
              baseClass: 'webfont',
              classPrefix: 'webfont-',
              mixinPrefix: 'make-webfont-'
            }
          }
        }
    }
  });

  grunt.loadNpmTasks('grunt-webfont');
  grunt.registerTask('default', ['webfont']);
};
