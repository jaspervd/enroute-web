/* globals Settings:true */
/* globals Content:true */

var Content = Backbone.Collection.extend({
    model: Content,
    url: Settings.API + "/content"
});