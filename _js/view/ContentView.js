/* globals ScreenView:true */
/* globals TicketView:true */

var ContentView = Backbone.View.extend({
    id: 'content',
    tagName: 'section',
    template: tpl.content,

    initialize: function () {
        _.bindAll.apply(_, [this].concat(_.functions(this)));
    },

    updateScreen: function(newScreen) {
        console.log('[ContentView] updateScreen()');
        if(this.collection.length > 0) {
            var modelScreen = this.collection.findWhere({title: newScreen});
            if(new Date(modelScreen.get('title')) <= new Date()) {
                var screenView = new ScreenView({model: modelScreen});
                this.$el.append(screenView.render().$el);
                Backbone.history.navigate('dag/'+ modelScreen.get('title'));
            } else {
                var ticketView = new TicketView({model: modelScreen});
                this.$el.append(ticketView.render().$el);
                Backbone.history.navigate('tickets/'+ modelScreen.get('title'));
            }
        }
    },

    render: function () {
        this.$el.append(this.template());
        return this;
    }
});