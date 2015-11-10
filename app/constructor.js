/**
 * Created by colinjlacy on 11/10/15.
 */
const generators = require('yeoman-generator');

module.exports = function() {
	generators.Base.apply(this, arguments);
	// make appname a required argument on the yo command
	this.argument('appname', {type: String, required: true});
};