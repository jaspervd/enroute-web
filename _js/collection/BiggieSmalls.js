/* globals Settings:true */
/* globals BiggieSmalls:true */

var BiggieSmalls = Backbone.Collection.extend({
    model: BiggieSmalls,
    url: Settings.API + "/biggiesmalls"
});