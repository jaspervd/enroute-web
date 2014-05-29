(function(){

this["tpl"] = this["tpl"] || {};

Handlebars.registerPartial("screen", this["tpl"]["screen"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<article id=\"";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" class=\"screen\">\n    ";
  if (helper = helpers.type) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.type); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " ";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\n</article>";
  return buffer;
  }));

Handlebars.registerPartial("ticket", this["tpl"]["ticket"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n    <form method=\"post\" action=\"\">\n        <p>\n            <label for=\"txtName\">Naam:</label>\n            <input type=\"text\" name=\"txtName\" id=\"txtName\" placeholder=\"Voornaam Naam\"/>\n        </p>\n\n        <p>\n            <label for=\"txtEmail\">E-mailadres:</label>\n            <input type=\"email\" name=\"txtEmail\" id=\"txtEmail\"/>\n        </p>\n\n        <p>\n            <label for=\"rngTickets\">Aantal tickets:</label>\n            <input type=\"range\" name=\"rngTickets\" id=\"rngTickets\" min=\"1\" max=\"";
  if (helper = helpers.tickets_available) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.tickets_available); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"/>\n        </p>\n\n        <p>\n            <input type=\"submit\" name=\"btnSubmit\" id=\"btnSubmit\"/>\n        </p>\n    </form>\n    ";
  return buffer;
  }

function program3(depth0,data) {
  
  
  return "\n    <form method=\"post\" action=\"\">\n        <p>\n            <label for=\"txtName\">Schoolnaam:</label>\n            <input type=\"text\" name=\"txtName\" id=\"txtName\" placeholder=\"Schoolnaam\"/>\n        </p>\n\n        <p>\n            <label for=\"txtEmail\">E-mailadres:</label>\n            <input type=\"email\" name=\"txtEmail\" id=\"txtEmail\"/>\n        </p>\n\n        <p>\n            <input type=\"submit\" name=\"btnSubmit\" id=\"btnSubmit\"/>\n        </p>\n    </form>\n    ";
  }

  buffer += "<article id=\"";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" class=\"screen\">\n    ";
  stack1 = (helper = helpers.ifTypeIsPublic || (depth0 && depth0.ifTypeIsPublic),options={hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.type), options) : helperMissing.call(depth0, "ifTypeIsPublic", (depth0 && depth0.type), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    ";
  stack1 = (helper = helpers.ifTypeIsSchool || (depth0 && depth0.ifTypeIsSchool),options={hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.type), options) : helperMissing.call(depth0, "ifTypeIsSchool", (depth0 && depth0.type), options));
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
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n        <li><a href=\"\" class=\"title\" data=\"";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">"
    + escapeExpression((helper = helpers.formatDate || (depth0 && depth0.formatDate),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.title), options) : helperMissing.call(depth0, "formatDate", (depth0 && depth0.title), options)))
    + "</a> - ";
  stack1 = (helper = helpers.formatAvailability || (depth0 && depth0.formatAvailability),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.title), (depth0 && depth0.tickets_available), options) : helperMissing.call(depth0, "formatAvailability", (depth0 && depth0.title), (depth0 && depth0.tickets_available), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</li>\n    ";
  return buffer;
  }

  buffer += "<ul>\n    <li><a href=\"\" data=\"info\">info</a></li>\n    ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.days), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</ul>";
  return buffer;
  });

Handlebars.registerHelper('formatDate', function (date) {
    moment.lang('nl');
    return moment(date).format('dddd Do MMMM');
});

Handlebars.registerHelper('formatAvailability', function (date, tickets) {
    if (new Date(date) <= new Date()) {
        return '<span class="done">voorbij</span>';
    } else if (parseInt(tickets) === 0) {
        return '<span class="soldout">uitverkocht</span>';
    } else {
        return '<a href="" class="available">nog ' + tickets + ' tickets</a>';
    }
});

Handlebars.registerHelper('ifTypeIsPublic', function (type, options) {
    if (type === 'publiek') {
        return options.fn(this);
    }
});

Handlebars.registerHelper('ifTypeIsSchool', function (type, options) {
    if (type === 'scholen') {
        return options.fn(this);
    }
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

/* globals Settings:true */

var Ticket = Backbone.Model.extend({
    defaults: {
        id: null,
        day_id: undefined,
        name: undefined,
        email: undefined,
        tickets: 25
    },

    urlRoot: Settings.API + '/tickets'
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
        var $prevScreen = $('#' + this.currentScreen);
        var $newScreen = $(item).attr('data');
        if($newScreen !== 'info') {
            this.contentView.updateScreen($newScreen);
        }
        if (this.currentScreen !== $(item).attr('data')) {
            $('.screen').css('z-index', 0).removeClass('pushRight').removeClass('pushDown').css('margin-left', '-100%');
            $prevScreen.css('margin-left', 0);
            setTimeout(function () { // fix pushDown
                $prevScreen.addClass('pushDown');
                $('#' + $newScreen).css('margin-left', '').addClass('pushRight');
            }, 50);
            this.currentScreen = $newScreen;
        }
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
        this.collection.on('sync reset', this.render);
    },

    events: {
        "click a": "itemClicked"
    },

    itemClicked: function(e) {
        e.preventDefault();
        console.log("[NavigationView] itemClicked()");
        if($(e.currentTarget).attr('class') === 'available') {
            this.trigger('itemClicked', $(e.currentTarget).prev());
        } else {
            this.trigger('itemClicked', e.currentTarget);
        }
    },

    render: function () {
        this.$el.find('li').remove();
        this.$el.append(this.template({days: this.collection.toJSON()}));
        return this;
    }
});

var ScreenView = Backbone.View.extend({
    template: tpl.screen,

    initialize: function () {
        _.bindAll.apply(_, [this].concat(_.functions(this)));
    },

    render: function () {
        var html = this.template(this.model.toJSON());
        var newElement = $(html);
        this.$el.replaceWith(newElement);
        this.setElement(newElement);
        return this;
    }
});

/* globals Ticket:true */
var TicketView = Backbone.View.extend({
    model: Ticket,
    template: tpl.ticket,

    initialize: function () {
        _.bindAll.apply(_, [this].concat(_.functions(this)));
    },

    events: {
        'click #btnSubmit': 'orderTicket'
    },

    orderTicket: function(e) {
        e.preventDefault();
        console.log('[TicketView] orderTicket()');
        var ticket = new Ticket({
            day_id: this.model.get('id'),
            name: $('#txtName').val(),
            email: $('#txtEmail').val()
        });
        if($('#rngTickets').val()) {
            ticket.set('tickets', parseInt($('#rngTickets').val()));
        }
        ticket.save();
    },

    render: function () {
        var html = this.template(this.model.toJSON());
        var newElement = $(html);
        this.$el.replaceWith(newElement);
        this.setElement(newElement);
        return this;
    }
});

/* globals AppRouter:true */

var router = new AppRouter();
Backbone.history.start();

})();