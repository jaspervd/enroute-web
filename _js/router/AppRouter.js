/* globals EnRouteApp:true */
/* globals AdminApp:true */
/* globals Settings:true */

var AppRouter = Backbone.Router.extend({
    enRouteApp: undefined,
    adminApp: undefined,

    initialize: function () {
        _.bindAll.apply(_, [this].concat(_.functions(this)));
    },

    routes: {
        '': 'overview',
        'home/': 'overview',
        'contact/': 'contact',
        'tickets/:day': 'dayView',
        'dag/:day': 'dayView',
        'admin/': 'admin',
        'admin/:day': 'adminDayView'
    },

    overview: function () {
        console.log('[AppRouter] overview()');
        this.enRouteApp = new EnRouteApp();
        $('#container, noscript').remove();
        $('body').prepend(this.enRouteApp.render().$el);
    },

    contact: function () {
        console.log('[AppRouter] contact()');
        this.enRouteApp = new EnRouteApp();
        this.enRouteApp.currentScreen = 'contact';
        $('#container, noscript').remove();
        $('body').prepend(this.enRouteApp.render().$el);
    },

    dayView: function (day) {
        console.log('[AppRouter] dayView()');
        this.enRouteApp = new EnRouteApp();
        this.enRouteApp.currentScreen = day;
        $('#container, noscript').remove();
        $('body').prepend(this.enRouteApp.render().$el);
    },

    admin: function() {
        console.log('[AppRouter] admin()');
        this.adminApp = new AdminApp();
        $('#container, noscript').remove();
        $('body').prepend(this.adminApp.render().$el);
        Backbone.history.navigate('admin/');
    },

    adminDayView: function (day) {
        console.log('[AppRouter] adminDayView()');
        this.adminApp = new AdminApp();
        this.adminApp.currentDay = day;
        $('#container, noscript').remove();
        $('body').prepend(this.adminApp.render().$el);
    }
});
