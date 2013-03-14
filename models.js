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

var Subject = new Schema({
    name      : String
    , children   : [Theme]
});

var Theme = new Schema({
    name      : String
    , children   : [Subtheme]
});

var Subtheme = new Schema({
    name      : String
    , children   : [Material]
});

var Material = new Schema({
    name      : String
});

/**
 * Models
 */

mongoose.model('Subject', Subject);
exports.Subject = function(db) {
    return db.model('Subject');
};

mongoose.model('Theme', Theme);
exports.Theme = function(db) {
    return db.model('Theme');
};

mongoose.model('Subtheme', Subtheme);
exports.Subtheme = function(db) {
    return db.model('Subtheme');
};

mongoose.model('Material', Material);
exports.Material = function(db) {
    return db.model('Material');
};