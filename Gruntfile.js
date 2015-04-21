module.exports = function(grunt) {

	grunt.initConfig
	({

		bowerRequirejs: {
			target: {
				rjsConfig: 'app/scripts/main.js'
			}
		},

		'requirejs' : {
			'compile' : {
				'options' : {
					appDir: "app/",
					baseUrl: "scripts",
					dir: "dist/",
					mainConfigFile: "app/scripts/easelhacks.js",
					name: "easelhacks",
					optimizeCss: "standard",
					removeCombined: true,
					exclude: [

					]
				}
			}
		},

		'copy' : {
			'main' : {
				'files' : [
					{
						'expand' : true,
						'src' : './package.json',
						'dest' : 'dist'
					}
				]
			}
		},

		'clean' : [
			'dist/package.json',
			'dist/scripts/CatLab/'
		]
	});

	// Requirejs
	grunt.loadNpmTasks('grunt-contrib-requirejs');


	// Cleaner
	grunt.loadNpmTasks('grunt-contrib-clean');

	// Copy
	grunt.loadNpmTasks('grunt-contrib-copy');

	grunt.loadNpmTasks('grunt-bower-requirejs');

	grunt.registerTask('default', ['requirejs', 'copy', 'clean' ]);
};