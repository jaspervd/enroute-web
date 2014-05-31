(function(){

this["tpl"] = this["tpl"] || {};

Handlebars.registerPartial("error", this["tpl"]["error"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var functionType="function", escapeExpression=this.escapeExpression;


  return escapeExpression((typeof depth0 === functionType ? depth0.apply(depth0) : depth0));
  }));

Handlebars.registerPartial("screen", this["tpl"]["screen"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<article id=\"";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" class=\"screen\">\n    <header>\n        <h1>";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</h1>\n    </header>\n    ";
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

Handlebars.registerPartial("success", this["tpl"]["success"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;


  buffer += "Dag ";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + ", je hebt succesvol ";
  if (helper = helpers.tickets) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.tickets); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " tickets besteld voor de workshop op "
    + escapeExpression((helper = helpers.formatDate || (depth0 && depth0.formatDate),options={hash:{},data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.day)),stack1 == null || stack1 === false ? stack1 : stack1.title), options) : helperMissing.call(depth0, "formatDate", ((stack1 = (depth0 && depth0.day)),stack1 == null || stack1 === false ? stack1 : stack1.title), options)))
    + "!";
  return buffer;
  }));

Handlebars.registerPartial("ticket", this["tpl"]["ticket"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n    <form method=\"post\" action=\"#\">\n        <div>\n            <label for=\"txtName_";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">Naam:</label>\n            <input type=\"text\" required name=\"txtName\" class=\"txtName\" id=\"txtName_";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" placeholder=\"Joske Vermeulen\"/>\n        </div>\n\n        <div>\n            <label for=\"txtEmail_";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">E-mailadres:</label>\n            <input type=\"email\" required name=\"txtEmail\" class=\"txtEmail\" id=\"txtEmail_";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" placeholder=\"joske.vermeulen@trammezand.lei\" required=\"required\" />\n        </div>\n\n        <div>\n            <label for=\"rngTickets_";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">Aantal tickets:</label>\n            <input type=\"range\" required name=\"rngTickets\" class=\"rngTickets\" id=\"rngTickets_";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" min=\"1\" max=\"";
  if (helper = helpers.tickets_available) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.tickets_available); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" required=\"required\"/>\n        </div>\n\n        <div>\n            <input type=\"submit\" name=\"btnSubmit\" class=\"btnSubmit\" value=\"Verder naar bestellen\"/>\n        </div>\n    </form>\n    ";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n    <form method=\"post\" action=\"#\">\n        <div>\n            <label for=\"txtName_";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">Schoolnaam:</label>\n            <input type=\"text\" required name=\"txtName\" class=\"txtName\" id=\"txtName_";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" placeholder=\"Volledige schoolnaam\"/>\n        </div>\n\n        <div>\n            <label for=\"txtEmail_";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">E-mailadres:</label>\n            <input type=\"email\" required name=\"txtEmail\" class=\"txtEmail\" id=\"txtEmail_";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" placeholder=\"joske.vermeulen@trammezand.lei\"/>\n        </div>\n\n        <div>\n            <input type=\"submit\" name=\"btnSubmit\" class=\"btnSubmit\" value=\"Verder naar bestellen\"/>\n        </div>\n    </form>\n    ";
  return buffer;
  }

  buffer += "<article id=\"";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" class=\"screen\">\n    <header>\n        <h1>Ticket bestellen</h1>\n    </header>\n    ";
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
  


  return "<header>\n    <h1>Inhoud</h1>\n</header>\n<article id=\"info\" class=\"screen pushRight\">\n<header>\n    <h1>Info</h1>\n</header>\n<p>\n    En route daagt je uit om gedurende één dag de stad anders te bekijken en te beleven. Na een actieve opwarming in\n    Durbuy trek je, onder begeleiding van een kunstdocent, op zintuiglijke en poëtische ontdekkingstocht\n    door de straten van Durbuy. Tijdens En route krijg je verschillende uitdagingen en opdrachten. Het materiaal dat\n    je tijdens de tocht verzamelt, wordt in de namiddag verwerkt en zo krijgt jouw persoonlijke blik op de stad vorm.\n</p>\n\n<p>\n    Kunst in Zicht ontwikkelt actieve kunsteducatieve projecten voor het onderwijs. Als expertisecentrum kunsteducatie\n    voor scholen brengt Kunst in Zicht kunstenaars, leerlingen en hun begeleiders dichter bij elkaar. Vorig schooljaar\n    lanceerde Kunst in Zicht in Turnhout het project En Route voor leerlingen van het secundair onderwijs.\n</p>\n</article>";
  });

this["tpl"]["enroute"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<header>\n    <h1>En Route</h1>\n</header>";
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

  buffer += "<header>\n    <h1>Navigation</h1>\n</header>\n<ul>\n    <li><a href=\"\" data=\"info\">info</a></li>\n    ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.days), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</ul>";
  return buffer;
  });

Handlebars.registerHelper('pleaselog', function (string) {
    console.log(string);
});

Handlebars.registerHelper('formatDate', function (date) {
    moment.lang('nl');
    return moment(date).format('dddd D MMMM');
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
        "home/": "overview",
        "tickets/:day": "dayView",
        "dag/:day": "dayView"
    },

    overview: function () {
        console.log("[AppRouter] overview()");
        this.enRouteApp = new EnRouteApp();
        $("#container").remove();
        $("body").prepend(this.enRouteApp.render().$el);
    },

    dayView: function (day) {
        console.log("[AppRouter] dayView()");
        this.enRouteApp = new EnRouteApp();
        this.enRouteApp.currentScreen = day;
        $("#container").remove();
        $("body").prepend(this.enRouteApp.render().$el);
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
        var $newScreen = '';
        var externalLoadedScreen = false; // fix for dayView()
        if($(item).attr('data')) {
            $newScreen = $(item).attr('data');
        } else {
            $newScreen = item;
            externalLoadedScreen = true;
        }
        var self = this; // fix for timeout
        if (this.currentScreen !== $newScreen || externalLoadedScreen) {
            if ($newScreen !== 'info') {
                this.contentView.updateScreen($newScreen);
            }
            $('.screen').removeClass('pushRight pushDown');
            $('#info').css({'z-index': 5, 'margin-left': '-100%'});
            $prevScreen.css('margin-left', 0);
            setTimeout(function () { // fix pushDown
                $prevScreen.removeClass('pushRight').addClass('pushDown');
                $('#' + $newScreen).css('margin-left', '').removeClass('pushDown').addClass('pushRight');
                self.contentView.$el.children('[class=screen]').not('#info').remove();
            }, 50);
            this.currentScreen = $newScreen;
        }
    },

    syncHandler: function () {
        console.log('hacky');
        this.changeScreen(this.currentScreen); // hacky method
    },

    render: function () {
        this.$el.append(this.template());
        this.$el.append(this.navigationView.render().$el);
        this.$el.append(this.contentView.render().$el);
        this.navigationView.on('itemClicked', this.changeScreen);
        if(this.currentScreen !== 'info') {
            this.days.on('sync', this.syncHandler);
        } else {
            Backbone.history.navigate('home/');
        }
        this.$el.append('<div class="clear"></div>');
        return this;
    }
});

var ErrorView = Backbone.View.extend({
    className: 'error',
    tagName: 'p',
    template: tpl.error,

    initialize: function () {
        _.bindAll.apply(_, [this].concat(_.functions(this)));
    },

    render: function () {
        this.$el.append(this.template(this.model));
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

    clear: function () {
        this.$el.find('header').remove();
        this.$el.find('ul').remove();
    },

    render: function () {
        this.clear();
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

var SuccessView = Backbone.View.extend({
    className: 'success',
    tagName: 'p',
    template: tpl.success,

    initialize: function () {
        _.bindAll.apply(_, [this].concat(_.functions(this)));
    },

    render: function () {
        this.$el.append(this.template(this.model));
        return this;
    }
});

/* globals Ticket:true */
/* globals SuccessView:true */
/* globals ErrorView:true */
var TicketView = Backbone.View.extend({
    model: Ticket,
    template: tpl.ticket,

    initialize: function () {
        _.bindAll.apply(_, [this].concat(_.functions(this)));
    },

    events: {
        'submit form': 'orderTicket',
        'blur .txtName': 'validateName',
        'keyup .txtName': 'validateName',
        'blur .txtEmail': 'validateEmail',
        'keyup .txtEmail': 'validateEmail'
    },

    orderTicket: function (e) {
        console.log('[TicketView] orderTicket()');
        e.preventDefault();
        this.clean();
        var self = this; // fix for error handler
        var tickets = this.$el.find('.rngTickets').val();
        var ticket = new Ticket({
            day_id: this.model.get('id'),
            name: this.$el.find('.txtName').val(),
            email: this.$el.find('.txtEmail').val()
        });
        if (tickets) {
            ticket.set('tickets', parseInt(tickets));
        }
        if (this.validateName(self.$el.find('.txtName')) && this.validateEmail(self.$el.find('.txtEmail'))) {
            ticket.save({}, {
                success: function (model, response) {
                    var successView = new SuccessView({model: response});
                    self.$el.find('.txtName, .txtEmail').val('');
                    self.$el.append(successView.render().$el);
                },
                error: function (model, response) {
                    console.log('[TicketView] generated 500 error code');
                    _.each(response.responseJSON.errors, function (error, key) {
                        console.log('[' + key + ']', error);
                        var errorView = new ErrorView({model: error});
                        var $elToInsertAfter;
                        if (key === 'name') {
                            $elToInsertAfter = '.txtName';
                        }
                        if (key === 'email') {
                            $elToInsertAfter = '.txtEmail';
                        }
                        if (tickets && key === 'tickets') {
                            $elToInsertAfter = '.rngTickets';
                        } else if (key === tickets) {
                            $elToInsertAfter = '.btnSubmit';
                        }
                        if (key === 'day_id') {
                            self.$el.prepend(errorView.render().$el);
                        } else {
                            self.$el.find($elToInsertAfter).after(errorView.render().$el);
                        }
                    });
                }
            });
        }
    },

    validateName: function (e) {
        if (!Modernizr.input.required) { // !Modernizr.input.pattern -- pattern=".{7,}" no user friendly output from browser
            if ($(e.currentTarget).val().length < 7) {
                var errorView = new ErrorView({model: 'Er wordt verwacht dat je naam minstens 7 karakters lang is.'});
                $(e.currentTarget).next().remove();
                $(e.currentTarget).after(errorView.render().$el);
                return false;
            }
        }
        return true;
    },

    validateEmail: function (e) {
        if (!Modernizr.input.required || !Modernizr.inputtypes.email) {
            var regExp = new RegExp("^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,4}$");
            if (!regExp.test($(e.currentTarget).val())) {
                var errorView = new ErrorView({model: 'Dit is geen geldig e-mailadres.'});
                $(e.currentTarget).next().remove();
                $(e.currentTarget).after(errorView.render().$el);
                return false;
            }
        }
        return true;
    },

    clean: function () {
        $('.success').remove();
        $('.error').remove();
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