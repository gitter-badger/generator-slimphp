'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
module.exports = yeoman.generators.Base.extend({
	prompting: function() {
		var done = this.async();
		this.log(yosay('Welcome to the zetadelic ' + chalk.red('SlimPHP v0.1.0') + ' generator!'));
		var prompts = [];
		this.prompt(prompts, function(props) {
			this.props = props;
			done();
		}.bind(this));
	},
	writing: {
		app: function() {
			this.fs.copy(this.templatePath('package.json'), this.destinationPath('package.json'));
			this.fs.copy(this.templatePath('composer.json'), this.destinationPath('composer.json'));
			this.fs.copy(this.templatePath('composer.lock'), this.destinationPath('composer.lock'));
			this.fs.copy(this.templatePath('composer.phar'), this.destinationPath('composer.phar'));
			this.fs.copy(this.templatePath('Gruntfile.js'), this.destinationPath('Gruntfile.js'));
			this.fs.copy(this.templatePath('index.php'), this.destinationPath('index.php'));
			this.fs.copy(this.templatePath('grunt'), this.destinationPath('grunt'));
			this.fs.copy(this.templatePath('inc'), this.destinationPath('inc'));
		},
		projectfiles: function() {
			this.fs.copy(this.templatePath('editorconfig'), this.destinationPath('.editorconfig'));
			this.fs.copy(this.templatePath('jshintrc'), this.destinationPath('.jshintrc'));
			this.fs.copy(this.templatePath('bowerrc'), this.destinationPath('.bowerrc'));
		}
	},
	install: function() {
		this.installDependencies();
	}
});