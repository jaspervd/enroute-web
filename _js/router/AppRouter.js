/* globals EnRouteApp:true */
/* globals Settings:true */

var AppRouter = Backbone.Router.extend({
    enRouteApp: undefined,

    initialize: function () {
        _.bindAll.apply(_, [this].concat(_.functions(this)));
    },

    routes: {
        "": "overview",
        "*path": "overview"
    },

    overview: function () {
        console.log("[AppRouter] overview()");
        this.enRouteApp = new EnRouteApp();
        $("#container").remove();
        $("body").prepend(this.enRouteApp.render().$el);
        Backbone.history.navigate("home/");
    }
});
