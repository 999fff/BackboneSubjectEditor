
/**
 * Module dependencies.
 */


// Database

var mongoose = require('mongoose')
    , db = mongoose.connect('mongodb://localhost/subjEditor')
    , Subject = require('./models.js').Subject(db)
    , Theme = require('./models.js').Theme(db)
    , Subtheme = require('./models.js').Subtheme(db)
    , Material = require('./models.js').Material(db);

// Express config

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path');

var app = express();

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.cookieParser('etherlord'));
  app.use(express.session());
  app.use(app.router);
  app.use(require('stylus').middleware(__dirname + '/public'));
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

// Views

function get_subject(req, res, next) {
    var sendSubject = function(err, subject) {
        if (err) {
            return console.log(err.stack);
        }

        if(subject) {
            console.log('Subject will be fetched');
            res.send(subject);
            return console.log('Subject fetched');
        } else {
            console.log('There is no subject to fetch. We will create one');
            new_subject = new Subject({name: 'Experimental NodeSubject'});
            new_subject.save();
            res.send(new_subject);
            return console.log('Subject created');
        }
    };

    Subject.findOne({}, sendSubject);
}

function get_theme(req, res, next) {
    var sendTheme = function(err, themeList) {
        if (err) {
            return console.log(err.stack);
        }

        if(themeList) {
            console.log('Themes will be fetched');
            res.send(themeList);
            return console.log('Themes fetched');
        } else {
            console.log('There is no themes to fetch.');
        }
    };

    if('_id' in req.params) {
        Theme.findOne({'_id': req.params._id}, sendTheme);
    } else {
        Theme.find({}, sendTheme);
    }
}

function post_theme(req, res, next) {
    var saveTheme = function(err, subject) {
        if (err) {
            return console.log(err.stack);
        } else if(!subject) {
            return console.log(err.stack);
        }

        newTheme = new Theme({ name: req.body.name });
//        newTheme.save();
        subject.children.push(newTheme);
        subject.save();

        res.send(newTheme);
    }

    Subject.findOne({_id: req.body.parent}, saveTheme)
}

function delete_theme(req, res, next) {

    removeTheme = function(err, subj1){

        subj1.children.id(req.params._id).remove();
        subj1.save(function(err, subj2){
            if(err){
                console.log(err);
            }
            else {
                console.log('subject should be saved');
                res.send();
            }
        });

    }

    Subject.findOne({}, removeTheme);
}

// Routes

app.get('/', routes.index);
app.get('/users', user.list);

// Subject
app.get('/api/subject', get_subject);

// Theme
app.get('/api/theme', get_theme);
app.get('/api/theme/:_id', get_theme);
app.post('/api/theme', post_theme);
app.delete('/api/theme/:_id', delete_theme);


http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
