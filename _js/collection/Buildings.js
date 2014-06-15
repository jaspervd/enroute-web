/* globals Settings:true */
/* globals Building:true */

var Buildings = Backbone.Collection.extend({
    model: Building,
    url: Settings.API + "/buildings"
});