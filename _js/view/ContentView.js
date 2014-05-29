/* globals ScreenView:true */

var ContentView = Backbone.View.extend({
    id: 'content',
    tagName: 'section',
    template: tpl.content,

    initialize: function () {
        _.bindAll.apply(_, [this].concat(_.functions(this)));
    },

    updateScreen: function() {
        console.log('[ContentView] updateScreen()');
    },

    render: function () {
        this.$el.append(this.template());
        return this;
    }
});