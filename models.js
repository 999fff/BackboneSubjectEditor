/**
 * Created with JetBrains WebStorm.
 * User: MFilippov
 * Date: 06.03.13
 * Time: 14:19
 * To change this template use File | Settings | File Templates.
 */

var mongoose = require('mongoose')
    , Schema = mongoose.Schema;

/**
 * Schema definition
 */

var MaterialSchema = new Schema({
    name      : String
});

var SubthemeSchema = new Schema({
    name      : String
    , children   : [MaterialSchema]
});

var ThemeSchema = new Schema({
    name      : String
    , children   : [SubthemeSchema]
});

var SubjectSchema = new Schema({
    name      : String
    , children   : [ThemeSchema]
});

/**
 * Models
 */

mongoose.model('Subject', SubjectSchema);
exports.Subject = function(db) {
    return db.model('Subject');
};

mongoose.model('Theme', ThemeSchema);
exports.Theme = function(db) {
    return db.model('Theme');
};

mongoose.model('Subtheme', SubthemeSchema);
exports.Subtheme = function(db) {
    return db.model('Subtheme');
};

mongoose.model('Material', MaterialSchema);
exports.Material = function(db) {
    return db.model('Material');
};