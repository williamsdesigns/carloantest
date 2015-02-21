module.exports = function(grunt) {

	grunt.initConfig({
	  sass: {                              // Task 
	    dist: {                            // Target 
	      options: {                       // Target options 
	        style: 'compressed'
	      },
	      files: {                         // Dictionary of files 
	        'css/core.css': 'dev/scss/build.scss',       // 'destination': 'source' 
	      }
	    }
	  },
	  watch: {
		  scripts: {
		    files: ['dev/**/*.scss'],
		    tasks: ['sass'],
		    options: {
		      spawn: false,
		    },
		  },
		}
	});
	 
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', ['sass']);
	grunt.registerTask('monitor', ['watch']);
};