/* globals Settings:true */

var Building = Backbone.Model.extend({
    defaults:{
        id: null,
        day_id: null,
        video_urls: undefined,
        audio_urls: undefined,
        approved: 0,
        uploaded_date: undefined
    },

    urlRoot: Settings.API + '/buildings'
});
