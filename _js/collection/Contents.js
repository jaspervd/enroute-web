/* globals Settings:true */
/* globals Content:true */

var Contents = Backbone.Collection.extend({
    model: Content,
    url: Settings.API + "/content",

    byDayID: function (day) {
        return this.filter(function (content) {
            return parseInt(content.get('day_id')) === parseInt(day);
        });
    }
});