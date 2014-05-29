/* globals Day:true */
/* globals Settings:true */

var Days = Backbone.Collection.extend({
    model: Day,
    url: Settings.API + "/days"
});