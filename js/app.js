(function(){

this["tpl"] = this["tpl"] || {};

Handlebars.registerPartial("screen", this["tpl"]["screen"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<article id=\"";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" class=\"screen\">\n    ";
  if (helper = helpers.content) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.content); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</article>";
  return buffer;
  }));

this["tpl"]["content"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<article id=\"info\" class=\"screen\">\n    <img src=\"http://lorempixel.com/720/800/\"/>\n</article>";
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
  


  return "<ul>\n    <li><a href=\"\" data=\"info\">info</a></li>\n</ul>";
  });

var Settings = (function () {
    function Settings() {}

    Settings.base = "http://localhost";
    Settings.path = "/MAIV/ENROUTE/enroute-web";
    Settings.API = Settings.base + Settings.path + "/api";

    return Settings;
})();

var Day = Backbone.Model.extend({
    defaults:{
        id: null,
        title: undefined,
        type: undefined
    }
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


/* globals Day:true */
/* globals Settings:true */

var Days = Backbone.Collection.extend({
    model: Day,
    url: Settings.API + "/days"
});

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

/* globals NavigationView:true */
/* globals ContentView:true */
/* globals Days:true */

var EnRouteApp = Backbone.View.extend({
    id: 'container',
    tagName: 'div',
    template: tpl.enroute,
    currentScreen: 'info',

    initialize: function () {
        _.bindAll.apply(_, [this].concat(_.functions(this)));

        this.days = new Days();
        this.days.fetch();

        this.navigationView = new NavigationView({collection: this.days});
        this.contentView = new ContentView({collection: this.days});
    },

    changeScreen: function (item) {
        console.log("[EnRouteApp] changeScreen()");
        /*var $prevScreen = $('#' + this.currentScreen);
        var $newScreen = $(item).attr('data');
        this.contentView.updateScreen($newScreen);
        if (this.currentScreen !== $(item).attr('data')) {
            $('.screen').css('z-index', 0).removeClass('pushRight').removeClass('pushDown').not($prevScreen).css('margin-left', '-100%');
            setTimeout(function () { // fix pushDown
                $prevScreen.addClass('pushDown');
                $newScreen.addClass('pushRight');
            }, 50);
            this.currentScreen = $newScreen;
        }*/
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

var ScreenView = Backbone.View.extend({
    template: tpl.content,

    initialize: function () {
        _.bindAll.apply(_, [this].concat(_.functions(this)));
    },

    render: function () {
        this.$el.append(this.template(this.model));
        return this;
    }
});

/* globals AppRouter:true */

var router = new AppRouter();
Backbone.history.start();

})();