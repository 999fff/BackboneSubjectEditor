/**
 * Created with JetBrains WebStorm.
 * User: MFilippov
 * Date: 06.03.13
 * Time: 14:19
 * To change this template use File | Settings | File Templates.
 */

var mongoskin = require('mongoskin')
    ,skin = mongoskin.db('localhost:27017/subjEditor')
    ,Subjects = skin.collection('subjects')
    ,BSON = mongoskin.BSONPure;

/**
 * Models
 */

exports.Subject = function Subject() {
    this._id = new skin.ObjectID();
    this.name = 'new mongoskin subj';
    this.children = [];
};

exports.Theme = function Theme() {
    this._id = new skin.ObjectID();
    this.name = 'new mongoskin theme';
    this.children = [];
};
