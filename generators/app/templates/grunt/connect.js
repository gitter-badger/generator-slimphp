'use strict';
module.exports = function(grunt) {
	grunt.config.set('php', {
		server: {
			options: {
				protocol: 'http',
				hostname: 'localhost',
				port: '9001',
				base: '',
				open: '/index.php',
				keepalive: true
			}
		}
	});
};