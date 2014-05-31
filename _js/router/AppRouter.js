/* globals EnRouteApp:true */
/* globals Settings:true */

var AppRouter = Backbone.Router.extend({
    enRouteApp: undefined,

    initialize: function () {
        _.bindAll.apply(_, [this].concat(_.functions(this)));
    },

    routes: {
        '': 'overview',
        'home/': 'overview',
        'tickets/:day': 'dayView',
        'dag/:day': 'dayView'
    },

    overview: function () {
        console.log('[AppRouter] overview()');
        this.enRouteApp = new EnRouteApp();
        $('#container, noscript').remove();
        $('body').prepend(this.enRouteApp.render().$el);
    },

    dayView: function (day) {
        console.log('[AppRouter] dayView()');
        this.enRouteApp = new EnRouteApp();
        this.enRouteApp.currentScreen = day;
        $('#container, noscript').remove();
        $('body').prepend(this.enRouteApp.render().$el);
    }
});
