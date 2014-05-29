(function(){

this["tpl"] = this["tpl"] || {};

this["tpl"]["content"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<article id=\"info\" class=\"screen\">\n    En route daagt je uit om gedurende één dag de stad anders te bekijken en te beleven. Na een actieve opwarming in De Tuin van HETPALEIS trek je op zintuiglijke en poëtische ontdekkingstocht door de straten van Antwerpen onder begeleiding van een kunstdocent.\n</article>\n<article id=\"item1\" class=\"screen\">\n    item1\n</article>\n<article id=\"item2\" class=\"screen\">\nitem2\n</article>\n<article id=\"item3\" class=\"screen\">\nitem3\n</article>\n<article id=\"item4\" class=\"screen\">\nitem4\n</article>\n<article id=\"item5\" class=\"screen\">\nitem5\n</article>";
  });

this["tpl"]["enroute"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "";


  return buffer;
  });

this["tpl"]["navigation"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<ul>\n    <li><a href=\"\" data=\"info\">info</a></li>\n    <li><a href=\"\" data=\"item1\">item 1</a></li>\n    <li><a href=\"\" data=\"item2\">item 2</a></li>\n    <li><a href=\"\" data=\"item3\">item 3</a></li>\n    <li><a href=\"\" data=\"item4\">item 4</a></li>\n    <li><a href=\"\" data=\"item5\">item 5</a></li>\n</ul>";
  });

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


var ContentView = Backbone.View.extend({
    id: 'content',
    tagName: 'section',
    template: tpl.content,

    initialize: function () {
        _.bindAll.apply(_, [this].concat(_.functions(this)));
    },

    render: function () {
        this.$el.append(this.template());
        return this;
    }
});

/* globals NavigationView:true */
/* globals ContentView:true */

var EnRouteApp = Backbone.View.extend({
    id: 'container',
    tagName: 'div',
    template: tpl.enroute,
    currentScreen: 'info',

    initialize: function () {
        _.bindAll.apply(_, [this].concat(_.functions(this)));

        this.navigationView = new NavigationView();
        this.contentView = new ContentView();
    },

    changeScreen: function(item) {
        console.log("[EnRouteApp] changeScreen()");
        var $prevScreen = $('#' + this.currentScreen);
        $prevScreen.css('z-index', 0);
        this.currentScreen = $(item).attr('data');
        $('#' + this.currentScreen).css('z-index', 5).stop().animate({
            'margin-left': '0'
        }, 1000, 'easeOutQuint', function() {
            $prevScreen.css('margin-left', '-100%');
        });
    },

    render: function () {
        this.$el.append(this.template());
        this.$el.append(this.navigationView.render().$el);
        this.$el.append(this.contentView.render().$el);
        this.navigationView.on('itemClicked', this.changeScreen);
        this.$el.append('<div class="clear"></div>');
        return this;
    }
});

var NavigationView = Backbone.View.extend({
    id: 'navigation',
    tagName: 'nav',
    template: tpl.navigation,

    initialize: function () {
        _.bindAll.apply(_, [this].concat(_.functions(this)));
    },

    events: {
        "click a": "itemClicked"
    },

    itemClicked: function(e) {
        e.preventDefault();
        console.log("[NavigationView] itemClicked()");
        this.trigger('itemClicked', e.currentTarget);
    },

    render: function () {
        this.$el.append(this.template());
        return this;
    }
});

/* globals AppRouter:true */

var router = new AppRouter();
Backbone.history.start();

})();