module.exports = function(grunt){

  grunt.initConfig({
    concat: {
      styles: {
        src: ['js/script.js'],
        dest: 'build/js/scripts.js',
      },
      index: {
        src: ['js/script.js', 'js/index.js'],
        dest: 'build/js/index.js',
      },
    },
    uglify: {
      my_target: {
        files: {
          'build/js/scripts.min.js': ['build/js/scripts.js'],
          'build/js/index.min.js': ['build/js/index.js']
        }
      }
    },
    watch: {
      js: {
        files: ['js/**/*.js'],
        tasks: ['concat:js', 'uglify'],
      },
    },
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['concat', 'uglify', 'watch']);
};
