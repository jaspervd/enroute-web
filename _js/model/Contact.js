/* globals Settings:true */

var Contact = Backbone.Model.extend({
    defaults:{
        name: undefined,
        email: undefined,
        message: undefined
    },

    urlRoot: Settings.API + '/contact'
});