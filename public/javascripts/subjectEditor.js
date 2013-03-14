/**
 * Created with JetBrains WebStorm.
 * User: MFilippov
 * Date: 05.03.13
 * Time: 17:48
 * To change this template use File | Settings | File Templates.
 */
(function($) {

    $.subjEditor = {};

//    Models

    $.subjEditor.Material = Backbone.RelationalModel.extend({
        urlRoot: '/api/material',
        idAttribute: '_id'
    });

    $.subjEditor.Subtheme = Backbone.RelationalModel.extend({
        urlRoot: '/api/subtheme',
        idAttribute: '_id',
        relations: [{
            type: Backbone.HasMany,
            key: 'children',
            relatedModel: '$.subjEditor.Material',
            reverseRelation: {
                key: 'parent',
                includeInJSON: '_id'
            }
        }]
    });

    $.subjEditor.Theme = Backbone.RelationalModel.extend({
        urlRoot: '/api/theme',
        idAttribute: '_id',
        relations: [{
            type: Backbone.HasMany,
            key: 'children',
            relatedModel: '$.subjEditor.Subtheme',
            reverseRelation: {
                key: 'parent',
                includeInJSON: '_id'
            }
        }]
    });

    $.subjEditor.Subject = Backbone.RelationalModel.extend({
        urlRoot: '/api/subject',
        idAttribute: '_id',
        relations: [{
            type: Backbone.HasMany,
            key: 'children',
            relatedModel: '$.subjEditor.Theme',
            collectionType: '$.subjEditor.ThemeCollection',
            reverseRelation: {
                key: 'parent',
                includeInJSON: '_id'
            }
        }]
    });

    $.subjEditor.MaterialCollection = Backbone.Collection.extend({
        url: '/api/material',
        model: $.subjEditor.Material
    });

    $.subjEditor.SubthemeCollection = Backbone.Collection.extend({
        url: '/api/subtheme',
        model: $.subjEditor.Subtheme
    });

    $.subjEditor.ThemeCollection = Backbone.Collection.extend({
        url: '/api/theme',
        model: $.subjEditor.Theme
    });

//    Views

    $.subjEditor.SubjectView = Backbone.View.extend({
        initialize: function(){
            this.listenTo(this.model, 'change', this.render);
            this.listenTo(this.model, 'reset', this.render);
            this.listenTo(this.model, 'add:children', this.renderTheme)
            this.listenTo(this.model, 'remove:children', this.removeTheme)
        },

        events: {
            'click #addTheme':  'addTheme',
            'click #clearThemes':  'clearThemes'
        },

        addTheme: function() {
            var theme = new $.subjEditor.Theme({ name: 'New Test Theme', parent: this.model });
            theme.save();
        },

        clearThemes: function() {
            var themes, toRemove;
            themes = this.model.get('children');
            toRemove = themes.models;
            themes.remove(toRemove);
        },

        removeTheme: function(theme){
            console.log( 'remove %o', theme );
            theme.destroy();
        },

        headTemplate: _.template("<h1>Name: <%= name %></h1>"),

        render: function() {
            this.$('#subjectHeader').html(this.headTemplate(this.model.attributes));
//            var themes = this.model.children;
//            themes.forEach(this.renderTheme);
            return this;
        },

        themeTemplate:  _.template("<div><%= name %></div>"),

        renderTheme: function(theme) {
            this.$('#themesList').append(this.themeTemplate(theme.attributes));
            return this;
        }

    });

//    Router

    $.subjEditor.Router = Backbone.Router.extend({
        routes: {
            "": "showSubject"
        },

        showSubject: function() {
            var subject = new $.subjEditor.Subject();
            var subjectView = new $.subjEditor.SubjectView({el: $('#mainSubject'),model: subject });
            subject.fetch();
        }

    });

//    App

    $.subjEditor.app = null;

    $.subjEditor.bootstrap = function() {
        $.subjEditor.app = new $.subjEditor.Router();
        Backbone.history.start({pushState: true});
    };

})(jQuery);
