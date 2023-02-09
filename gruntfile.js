module.exports = function(grunt) {
    grunt.initConfig({
      less: {
        development: {
          options: {
            compress: true,
            yuicompress: true,
            optimization: 2
          },
          files: {
            "path/to/css/output.css": "path/to/less/input.less"
          }
        }
      },
      uglify: {
        my_target: {
          files: {
            'path/to/js/output.min.js': ['path/to/js/input1.js', 'path/to/js/input2.js']
          }
        }
      }
    });
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.registerTask('default', ['less', 'uglify']);
  };
  