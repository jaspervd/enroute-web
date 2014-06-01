/* globals Settings:true */

var Content = Backbone.Collection.extend({
    //model: Content,
    url: Settings.API + "/content"
});