/* globals Settings:true */

var BiggieSmalls = Backbone.Model.extend({
    defaults:{
        id: null,
        day_id: null,
        url: undefined,
        latitude: undefined,
        longitude: undefined,
        approved: 0,
        uploaded_date: undefined
    },

    urlRoot: Settings.API + '/biggiesmalls'
});