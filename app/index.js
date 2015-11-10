/**
 * Created by colinjlacy on 11/10/15.
 */
'use strict';

const
	generators = require('yeoman-generator'),
	constructor = require('./constructor'),
	initializing = require('./initializing');

module.exports = generators.Base.extend({
	constructor: constructor,
	initializing: initializing
});