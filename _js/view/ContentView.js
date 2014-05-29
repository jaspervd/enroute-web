/* globals ScreenView:true */
/* globals TicketView:true */

var ContentView = Backbone.View.extend({
    id: 'content',
    tagName: 'section',
    template: tpl.content,

    initialize: function () {
        _.bindAll.apply(_, [this].concat(_.functions(this)));
    },

    updateScreen: function(prevScreen) {
        console.log('[ContentView] updateScreen()');
        var modelScreen = this.collection.findWhere({title: prevScreen});
        if(new Date(modelScreen.get('title')) <= new Date()) {
            var screenView = new ScreenView({model: modelScreen});
            this.$el.append(screenView.render().$el);
        } else {
            var ticketView = new TicketView({model: modelScreen});
            this.$el.append(ticketView.render().$el);
        }
    },

    render: function () {
        this.$el.append(this.template());
        return this;
    }
});