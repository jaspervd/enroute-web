(function(){

this["tpl"] = this["tpl"] || {};

Handlebars.registerPartial("admincontentitem", this["tpl"]["admincontentitem"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"border_shadow\">\n	<p class=\"content_item\">\n		<span class=\"item\"><strong>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.day)),stack1 == null || stack1 === false ? stack1 : stack1.title)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + ": </strong>&laquo; ";
  if (helper = helpers.url) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.url); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " &raquo; ";
  if (helper = helpers.approved) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.approved); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span><br/>\n		<a class=\"approve\" href=\"\">approve</a>\n		<a class=\"deny\" href=\"\">deny</a>\n		<a class=\"delete\" href=\"\">delete</a><br/>\n		<span class=\"meta\">added on ";
  if (helper = helpers.uploaded_date) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.uploaded_date); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span>\n	</p>\n	<div class=\"border_right\"></div>\n	<div class=\"border_bottom\"></div>\n	<div class=\"border_connection\"></div>\n</div>";
  return buffer;
  }));

Handlebars.registerPartial("building", this["tpl"]["building"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "";
  buffer += "\n	<div class=\"layer\">\n		<video loop>\n		  <source src=\"uploads/"
    + escapeExpression((typeof depth0 === functionType ? depth0.apply(depth0) : depth0))
    + ".mp4\" type=\"video/mp4; codecs='avc1.42E01E, mp4a.40.2'\">\n		  <source src=\"uploads/"
    + escapeExpression((typeof depth0 === functionType ? depth0.apply(depth0) : depth0))
    + ".ogg\" type=\"video/webm;codecs='vp8, vorbis'\">\n		</video>\n	</div>\n";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "";
  buffer += "\n<audio loop>\n	<source src=\"uploads/"
    + escapeExpression((typeof depth0 === functionType ? depth0.apply(depth0) : depth0))
    + ".mp3\" type=\"audio/mpeg; codecs='mp3'\">\n	<source src=\"uploads/"
    + escapeExpression((typeof depth0 === functionType ? depth0.apply(depth0) : depth0))
    + ".ogg\" type=\"audio/ogg; codecs='vorbis'\">\n</audio>\n";
  return buffer;
  }

  buffer += "<div class=\"wrapper\">\n<div class=\"border_shadow\">\n";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.video_urls), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n	<div class=\"border_bottom\"></div>\n</div>\n";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.audio_urls), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</div>";
  return buffer;
  }));

Handlebars.registerPartial("contact", this["tpl"]["contact"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<header>\n	<h1>Contact</h1>\n</header>\n<form method=\"post\" action=\"\">\n	<div>\n		<label for=\"txtName\">Naam:</label>\n		<input type=\"text\" required name=\"txtName\" id=\"txtName\" placeholder=\"Joske Vermeulen\"/>\n	</div>\n\n	<div>\n		<label for=\"txtEmail\">E-mailadres:</label>\n		<input type=\"email\" required name=\"txtEmail\" id=\"txtEmail\" placeholder=\"joske.vermeulen@trammezand.lei\" />\n	</div>\n\n	<div>\n		<label for=\"txtMessage\">Bericht:</label>\n		<textarea name=\"txtMessage\" required id=\"txtMessage\" cols=\"30\" rows=\"10\" placeholder=\"Ik heb een vraag omtrent En Route...\"></textarea>\n	</div>\n\n	<div>\n		<input type=\"submit\" name=\"btnSubmit\" id=\"btnSubmitContact\" value=\"Stuur\"/>\n	</div>\n</form>\n<div id=\"length\">\n		<div class=\"row top\">\n		<div class=\"building type3\"></div>\n		<div class=\"building type2\"></div>\n		<div class=\"building type2\"></div>\n		<div class=\"building type2\"></div>\n		<div class=\"building type3\"></div>\n		<div class=\"clear\"></div>\n	</div>\n	<div class=\"row middle\">\n		<div class=\"building type2\"></div>\n		<div class=\"building type3\"></div>\n		<div class=\"building type3\"></div>\n		<div class=\"clear\"></div>\n	</div>\n	<div class=\"row bottom\">\n		<div class=\"building type1\"></div>\n		<div class=\"building type3\"></div>\n		<div class=\"building type2\"></div>\n		<div class=\"building type3\"></div>\n		<div class=\"building type2\"></div>\n		<div class=\"clear\"></div>\n	</div>\n	<div class=\"clear\"></div>\n</div>";
  }));

Handlebars.registerPartial("error", this["tpl"]["error"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var functionType="function", escapeExpression=this.escapeExpression;


  return escapeExpression((typeof depth0 === functionType ? depth0.apply(depth0) : depth0));
  }));

Handlebars.registerPartial("info", this["tpl"]["info"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<header>\n	<h1>En Route</h1>\n</header>\n<div class=\"border_shadow\">\n	<p>\n		En Route daagt je uit om gedurende één dag de stad anders te bekijken en te beleven. Samen met een kunstdocent ga je op ontdekkingsreis door de pittoreske straatjes van Durbuy.\n	</p>\n	<div class=\"border_right\"></div>\n	<div class=\"border_bottom\"></div>\n	<div class=\"border_connection\"></div>\n	<div class=\"speech\"></div>\n</div>";
  }));

Handlebars.registerPartial("success", this["tpl"]["success"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var functionType="function", escapeExpression=this.escapeExpression;


  return escapeExpression((typeof depth0 === functionType ? depth0.apply(depth0) : depth0));
  }));

Handlebars.registerPartial("tickets", this["tpl"]["tickets"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, functionType="function", self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    <ul id=\"selectTicket\">\n        ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.days), {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </ul>\n    <div class=\"clear\"></div>\n    ";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n        <li><a href=\"\" class=\"day"
    + escapeExpression((helper = helpers.returnAvailability || (depth0 && depth0.returnAvailability),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.title), (depth0 && depth0.tickets_available), options) : helperMissing.call(depth0, "returnAvailability", (depth0 && depth0.title), (depth0 && depth0.tickets_available), options)))
    + "\" data-date=\"";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">"
    + escapeExpression((helper = helpers.formatDate || (depth0 && depth0.formatDate),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.title), options) : helperMissing.call(depth0, "formatDate", (depth0 && depth0.title), options)))
    + "</a></li>\n        ";
  return buffer;
  }

function program4(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    	<div>\n    		<label for=\"txtName\">Naam:</label>\n    		<input type=\"text\" required name=\"txtName\" id=\"txtName\" placeholder=\"Joske Vermeulen\"/>\n    	</div>\n\n    	<div>\n    		<label for=\"txtEmail\">E-mailadres:</label>\n    		<input type=\"email\" required name=\"txtEmail\" id=\"txtEmail\" placeholder=\"joske.vermeulen@trammezand.lei\" />\n    	</div>\n\n    	<div class=\"range\">\n            <div class=\"amount\"><span>1</span> tickets</div>\n    		<label for=\"rngTickets\">Aantal tickets:</label>\n    		<input type=\"range\" required name=\"rngTickets\" id=\"rngTickets\" min=\"1\" max=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.ticket)),stack1 == null || stack1 === false ? stack1 : stack1.tickets_available)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" value=\"1\" />\n    	</div>\n    	";
  return buffer;
  }

function program6(depth0,data) {
  
  
  return "\n    	<div>\n    		<label for=\"txtName\">Schoolnaam:</label>\n    		<input type=\"text\" required name=\"txtName\" id=\"txtName\" placeholder=\"Volledige schoolnaam\"/>\n    	</div>\n\n    	<div>\n    		<label for=\"txtEmail\">E-mailadres:</label>\n    		<input type=\"email\" required name=\"txtEmail\" id=\"txtEmail\" placeholder=\"joske.vermeulen@trammezand.lei\"/>\n    	</div>\n    	";
  }

  buffer += "    <header>\n    	<h1>Ticket bestellen</h1>\n    </header>\n    <div class=\"info_wrapper\">\n        <div class=\"border_shadow\">\n            <p>\n                En Route daagt je uit om gedurende één dag de stad anders te bekijken en te beleven. Samen met een kunstdocent ga je op ontdekkingsreis door de pittoreske straatjes van Durbuy.\n            </p>\n            <div class=\"border_right\"></div>\n            <div class=\"border_bottom\"></div>\n            <div class=\"border_connection\"></div>\n            <div class=\"speech\"></div>\n        </div>\n    </div>\n    ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.days), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    <form method=\"post\" action=\"\">\n    	";
  stack1 = (helper = helpers.ifTypeIsPublic || (depth0 && depth0.ifTypeIsPublic),options={hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.ticket)),stack1 == null || stack1 === false ? stack1 : stack1.type), options) : helperMissing.call(depth0, "ifTypeIsPublic", ((stack1 = (depth0 && depth0.ticket)),stack1 == null || stack1 === false ? stack1 : stack1.type), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    	";
  stack1 = (helper = helpers.ifTypeIsSchool || (depth0 && depth0.ifTypeIsSchool),options={hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.ticket)),stack1 == null || stack1 === false ? stack1 : stack1.type), options) : helperMissing.call(depth0, "ifTypeIsSchool", ((stack1 = (depth0 && depth0.ticket)),stack1 == null || stack1 === false ? stack1 : stack1.type), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n    	<div>\n    		<input type=\"submit\" name=\"btnSubmit\" value=\"Bestel\"/>\n    	</div>\n    </form>";
  return buffer;
  }));

this["tpl"]["admin"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n        <li><a href=\"\" class=\"day\" data-day-id=\"";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">"
    + escapeExpression((helper = helpers.formatDate || (depth0 && depth0.formatDate),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.title), options) : helperMissing.call(depth0, "formatDate", (depth0 && depth0.title), options)))
    + "</a></li>\n    ";
  return buffer;
  }

  buffer += "<header>\n    <h1>Admin</h1>\n</header>\n<ul id=\"contentTypes\">\n    <li><a href=\"\" class=\"contentType\" data-content-type=\"buildings\">Gebouwen</a></li>\n    <li><a href=\"\" class=\"contentType\" data-content-type=\"biggiesmalls\">Foto's</a></li>\n</ul>\n<nav>\n<header>\n    <h1>Dagen</h1>\n</header>\n<ul id=\"selectDay\">\n    ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.days), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</ul>\n</nav>";
  return buffer;
  });

this["tpl"]["admincontent"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "    <header>\n        <h1>Beheer content</h1>\n    </header>\n    <ul></ul>";
  });

this["tpl"]["content"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<header>\n	<h1>Content</h1>\n</header>\n<a href=\"\" class=\"close\"></a>\n<nav>\n	<header>\n		<h1>Navigatie</h1>\n	</header>\n	<ul>\n		<li><a href=\"\" data-content=\"info\">En Route</a></li>\n		<li><a href=\"\" data-content=\"tickets\">Tickets</a></li>\n		<li><a href=\"\" data-content=\"contact\">Contact</a></li>\n	</ul>\n</nav>\n<div class=\"clear\"></div>";
  });

this["tpl"]["day"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<header>\n	<h1>";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</h1>\n</header>";
  return buffer;
  });

this["tpl"]["enroute"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<header>\n	<h1>Durbuy</h1>\n</header>";
  });

this["tpl"]["home"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div id=\"city\">\n	<div class=\"rotate forwards\">\n	<div class=\"red car\"></div>\n	<div class=\"yellow car\"></div>\n</div>\n<div class=\"rotate reverse\">\n	<div class=\"white car\"></div>\n</div>\n	<div id=\"city_top\"></div>\n</div>\n<div id=\"forest\"></div>\n<div id=\"scalable\">\n	<div id=\"text_city\"></div>\n	<div id=\"river\"></div>\n	<div id=\"daySelector\">\n		<span class=\"handle\"></span>\n		<span class=\"select\"></span>\n		<span class=\"month\">\n			<span>juni</span>\n		</span>\n	</div>\n	<div id=\"durbuy\">\n		<nav id=\"days\">\n			<header>\n				<h1>Dagen</h1>\n			</header>\n			<ul></ul>\n		</nav>\n		<audio id=\"toctoc\">\n			<source src=\"assets/toctoc.mp3\" type=\"audio/mpeg; codecs='mp3'\">\n			<source src=\"assets/toctoc.ogg\" type=\"audio/ogg; codecs='vorbis'\">\n		</audio>\n	</div>\n</div>\n<a href=\"\" id=\"toggleAudio\" class=\"play\"></a>\n<audio id=\"ambient_birds\"> <!-- autoplay loop -->\n	<source src=\"assets/ambient_birds.mp3\" type=\"audio/mpeg; codecs='mp3'\">\n	<source src=\"assets/ambient_birds.ogg\" type=\"audio/ogg; codecs='vorbis'\">\n</audio>";
  });

Handlebars.registerHelper('formatDate', function (date) {
    moment.lang('nl');
    return moment(date).format('D');
});

Handlebars.registerHelper('returnAvailability', function (date, tickets) {
    if (new Date(date) <= new Date()) {
        return ' past';
    } else if(parseInt(tickets) === 0) {
        return ' soldout';
    } else {
        return ' available';
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
    Settings.online = "http://student.howest.be/jasper.van.damme/20132014";
    Settings.path = "/MAIV/ENROUTE";
    Settings.API = Settings.base + Settings.path + "/enroute-web/api";
    //Settings.API = Settings.online + Settings.path + "/api/index.php";

    return Settings;
})();

/* globals ErrorView:true */

var Validate = (function() {
    function Validate() {}

    Validate.fullName = function(input) { // .name is reserved (error: string is not a function)
        console.log('[Validate] fullName()');
        if (!Modernizr.input.required) { // !Modernizr.input.pattern -- pattern=".{7,}" no user friendly output from browser
            $(input).next().remove();
            if ($(input).val().length < 7) {
                var errorView = new ErrorView({
                    model: 'Er wordt verwacht dat je naam minstens 7 karakters lang is.'
                });
                $(input).after(errorView.render().$el);
                return false;
            }
        }
        return true;
    };

    Validate.email = function(input) {
        console.log('[Validate] email()');
        if (!Modernizr.input.required || !Modernizr.inputtypes.email) {
            var regExp = new RegExp("^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,4}$");
            $(input).next().remove();
            if (!regExp.test($(input).val())) {
                var errorView = new ErrorView({
                    model: 'Dit is geen geldig e-mailadres.'
                });
                $(input).after(errorView.render().$el);
                return false;
            }
        }
        return true;
    };

    Validate.message = function(input) {
        console.log('[Validate] message()');
        $(input).next().remove();
        if ($(input).val().split(' ').length < 2) {
            var errorView = new ErrorView({
                model: 'Gelieve hier minstens 2 woorden in te vullen.'
            });
            $(input).next().remove();
            $(input).after(errorView.render().$el);
            return false;
        }
        return true;
    };

    return Validate;
})();

/* globals Settings:true */

var BiggieSmalls = Backbone.Model.extend({
    defaults:{
        id: null,
        day_id: null,
        url: undefined,
        latitude: undefined,
        longitude: undefined,
        approved: 0,
        uploaded_date: undefined
    },

    urlRoot: Settings.API + '/biggiesmalls'
});

/* globals Settings:true */

var Building = Backbone.Model.extend({
    defaults:{
        id: null,
        day_id: null,
        video_urls: undefined,
        audio_urls: undefined,
        approved: 0,
        uploaded_date: undefined
    },

    urlRoot: Settings.API + '/buildings'
});


/* globals Settings:true */

var Contact = Backbone.Model.extend({
    defaults:{
        name: undefined,
        email: undefined,
        message: undefined
    },

    urlRoot: Settings.API + '/contact'
});

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
/* globals AdminApp:true */
/* globals Settings:true */

var AppRouter = Backbone.Router.extend({
    enRouteApp: undefined,
    adminApp: undefined,

    initialize: function () {
        _.bindAll.apply(_, [this].concat(_.functions(this)));
    },

    routes: {
        '': 'home',
        'home/': 'home',
        'home/:day': 'homeDayView',
        'admin/': 'admin',
        'admin/:day': 'adminDayView',
        '*path': 'home'
    },

    home: function () {
        console.log('[AppRouter] home()');
        this.enRouteApp = new EnRouteApp();
        $('#container').remove();
        $('body').prepend(this.enRouteApp.render().$el);
    },

    homeDayView: function (day) {
        console.log('[AppRouter] homeDayView()');
        this.enRouteApp = new EnRouteApp();
        this.enRouteApp.showDay(day);
        $('#container').remove();
        $('body').prepend(this.enRouteApp.render().$el);
    },

    admin: function() {
        console.log('[AppRouter] admin()');
        this.adminApp = new AdminApp();
        $('#container').remove();
        $('body').prepend(this.adminApp.render().$el);
    },

    adminDayView: function (day) {
        console.log('[AppRouter] adminDayView()');
        this.adminApp = new AdminApp();
        this.adminApp.currentDay = day;
        $('#container').remove();
        $('body').prepend(this.adminApp.render().$el);
    }
});


/* globals Settings:true */
/* globals BiggieSmalls:true */

var BiggieSmalls = Backbone.Collection.extend({
    model: BiggieSmalls,
    url: Settings.API + "/biggiesmalls"
});

/* globals Settings:true */
/* globals Building:true */

var Buildings = Backbone.Collection.extend({
    model: Building,
    url: Settings.API + "/buildings"
});

/* globals Day:true */
/* globals Settings:true */

var Days = Backbone.Collection.extend({
    model: Day,
    url: Settings.API + "/days"
});

/* globals Buildings:true */
/* globals BiggieSmalls:true */
/* globals Days:true */
/* globals AdminBuildingsView:true */
/* globals AdminBiggieSmallsView:true */

var AdminApp = Backbone.View.extend({
    id: 'container',
    className: 'admin',
    tagName: 'div',
    template: tpl.admin,
    prevDay: 0,
    currentDay: 0,
    currentContentType: 'buildings',

    initialize: function() {
        _.bindAll.apply(_, [this].concat(_.functions(this)));

        this.days = new Days();
        this.days.fetch();
        this.days.on('sync reset', this.render);

        this.buildings = new Buildings();
        this.buildings.fetch();

        this.biggieSmalls = new BiggieSmalls();
        this.biggieSmalls.fetch();

        this.adminBuildingsView = new AdminBuildingsView({
            collection: this.buildings
        });
        this.adminBiggieSmallsView = new AdminBiggieSmallsView({
            collection: this.biggieSmalls
        });
    },

    events: {
        'click .day': 'showDay',
        'click .contentType': 'setContentType'
    },

    setContentType: function(e) {
        e.preventDefault();
        var newContentType = $(e.currentTarget).attr('data-content-type');
        if (this.currentContentType !== newContentType) {
            this.currentContentType = newContentType;
            this.render();
        }
    },

    showDay: function(e) {
        console.log('[AdminApp] showDay()');
        e.preventDefault();
        this.currentDay = $(e.currentTarget).attr('data-day-id');
        this.renderDay();
    },

    renderDay: function() {
        if (this.prevDay !== this.currentDay) {
            this.prevDay = this.currentDay;
            if (this.currentContentType === 'buildings') {
                this.adminBuildingsView.updateToDay(this.currentDay);
            } else {
                this.adminBiggieSmallsView.updateToDay(this.currentDay);
            }

            this.render();
            Backbone.history.navigate('admin/' + this.currentDay);
        }
    },

    render: function() {
        this.$el.html(this.template({
            days: this.days.toJSON()
        }));

        var selectDay = this.$el.find('#selectDay');
        var self = this;
        selectDay.on('mousemove', function(e) {
            selectDay.css({
                'width': self.days.length * (self.$el.find('.day').parent().width() + 10) + 100
            });
            var x = -(((e.pageX - $('#selectDay').position().left) / $("#selectDay").parent().width()) * ($("#selectDay").width() + parseInt($("#selectDay").css('paddingLeft')) + parseInt($("#selectDay").css('paddingRight')) - $("#selectDay").parent().width()));
            selectDay.css({
                'marginLeft': x + 'px'
            });
        });

        if (this.currentContentType === 'buildings') {
            this.$el.append(this.adminBuildingsView.render().$el);
        } else {
            this.$el.append(this.adminBiggieSmallsView.render().$el);
        }
        if (this.currentDay > 0) {
            this.buildings.on('sync reset', this.renderDay);
            this.biggieSmalls.on('sync reset', this.renderDay);
        }
        return this;
    }
});

/* globals Buildings:true */
/* globals Building:true */
/* globals BiggieSmalls:true */
/* globals AdminContentItemView:true */

var AdminBiggieSmallsView = Backbone.View.extend({
    id: 'admin_biggiesmalls',
    tagName: 'section',
    template: tpl.admincontent,
    currentDay: 0,
    biggiesmalls: undefined,

    initialize: function () {
        _.bindAll.apply(_, [this].concat(_.functions(this)));
        this.collection.on("sync reset destroy", this.render);
        this.biggiesmalls = this.collection;
    },

    renderBiggieSmalls: function (content) {
        var adminContentItemView = new AdminContentItemView({model: content});
        this.$el.find('ul').append(adminContentItemView.render().$el);
    },

    updateToDay: function (day) {
        console.log('[AdminBiggieSmallsView] updateToDay()', day);
        this.currentDay = day;
        this.collection = this.biggiesmalls;
        this.collection = new BiggieSmalls(this.collection.where({day_id: this.currentDay}));
        this.render();
    },

    render: function () {
        this.$el.html(this.template());
        if (this.collection.length > 0) {
            this.collection.each(function (building, index) {
                this.renderBiggieSmalls(building);
            }, this);
        } else {
            this.$el.find('ul').remove();
            this.$el.append('<p>Er zijn nog geen foto\'s beschikbaar voor deze dag.</p>');
        }
        return this;
    }
});

/* globals Buildings:true */
/* globals Building:true */
/* globals BiggieSmalls:true */
/* globals AdminContentItemView:true */

var AdminBuildingsView = Backbone.View.extend({
    id: 'admin_buildings',
    tagName: 'section',
    template: tpl.admincontent,
    currentDay: 0,
    buildings: undefined,

    initialize: function () {
        _.bindAll.apply(_, [this].concat(_.functions(this)));
        this.collection.on("sync reset destroy", this.render);
        this.buildings = this.collection;
    },

    renderBuildings: function (content) {
        var adminContentItemView = new AdminContentItemView({model: content});
        this.$el.find('ul').append(adminContentItemView.render().$el);
    },

    updateToDay: function (day) {
        console.log('[AdminBuildingsView] updateToDay()', day);
        this.currentDay = day;
        this.collection = this.buildings;
        this.collection = new Buildings(this.collection.where({day_id: this.currentDay}));
        this.render();
    },

    render: function () {
        this.$el.html(this.template());
        if (this.collection.length > 0) {
            this.collection.each(function (building, index) {
                this.renderBuildings(building);
            }, this);
        } else {
            this.$el.find('ul').remove();
            this.$el.append('<p>Er zijn nog geen gebouwen beschikbaar voor deze dag.</p>');
        }
        return this;
    }
});

var AdminContentItemView = Backbone.View.extend({
    template: tpl.admincontentitem,

    initialize: function () {
        _.bindAll.apply(_, [this].concat(_.functions(this)));
    },

    events: {
        "click .approve": "approveContent",
        "click .deny": "denyContent",
        "click .delete": "deleteContent"
    },

    approveContent: function (e) {
        console.log('[AdminContentItemView] approveContent()');
        e.preventDefault();
        this.model.set('approved', 1);
        this.model.url = this.model.urlRoot + "/" + this.model.id;
        this.model.save();
    },

    denyContent: function (e) {
        console.log('[AdminContentItemView] denyContent()');
        e.preventDefault();
        this.model.set('approved', 0);
        this.model.url = this.model.urlRoot + "/" + this.model.id;
        this.model.save();
    },

    deleteContent: function (e) {
        console.log('[AdminContentItemView] deleteContent()');
        e.preventDefault();
        this.model.url = this.model.urlRoot + "/" + this.model.id;
        this.model.destroy();
    },

    render: function () {
        this.$el.html(this.template(this.model.toJSON()));
        return this;
    }
});

var BuildingView = Backbone.View.extend({
    className: 'building',
    tagName: 'div',
    template: tpl.building,

    initialize: function () {
        _.bindAll.apply(_, [this].concat(_.functions(this)));
    },

    events: {
        'mouseenter .wrapper': 'playVideos',
        'click .wrapper': 'playVideos',
        'mouseleave .wrapper': 'stopVideos',
        'mouseenter .layer': 'playSound',
        'click .layer': 'playSound',
        'mouseleave .layer': 'stopSound'
    },

    playVideos: function(e) {
        console.log('[BuildingView] playVideos()');
        this.$el.find('video').each(function() {
            this.play();
        });
    },

    stopVideos: function(e) {
        console.log('[BuildingView] stopVideos()');
        this.$el.find('video').each(function() {
            this.pause();
        });
    },

    playSound: function(e) {
        console.log('[BuildingView] playSound()', e.currentTarget);
        var index = this.$el.find('.layer').index($(e.currentTarget));

        this.$el.find('audio').eq(index).get(0).play();
    },

    stopSound: function(e) {
        console.log('[BuildingView] playSound()', e.currentTarget);
        var index = this.$el.find('.layer').index($(e.currentTarget));

        this.$el.find('audio').eq(index).get(0).pause();
    },

    render: function () {
        this.$el.html(this.template(this.model.toJSON()));
        return this;
    }
});

/* globals InfoView:true */
/* globals TicketsView:true */
/* globals ContactView:true */

var ContentView = Backbone.View.extend({
    id: 'content',
    tagName: 'section',
    template: tpl.content,
    currentContent: undefined,

    initialize: function() {
        _.bindAll.apply(_, [this].concat(_.functions(this)));
    },

    events: {
        'click nav a': 'showContent',
        'click .close': 'hideContent'
    },

    showContent: function(e) {
        console.log('[ContentView] showContent()');
        e.preventDefault();
        this.$el.addClass('slideOut');
        $('nav a').parent().removeClass('active');
        $(e.currentTarget).parent().addClass('active');
        var newContent = $(e.currentTarget).attr('data-content');
        if (this.currentContent !== newContent) {
            this.currentContent = newContent;
            this.clear();

            switch (this.currentContent) {
                case 'tickets':
                    var ticketsView = new TicketsView({
                        collection: this.collection
                    });
                    this.$el.append(ticketsView.render().$el);
                    break;

                case 'contact':
                    var contactView = new ContactView();
                    this.$el.append(contactView.render().$el);
                    break;

                default:
                case 'info':
                    var infoView = new InfoView();
                    this.$el.append(infoView.render().$el);
                    break;
            }
        }

        this.$el.next().one('mousedown', this.hideContent);
    },

    hideContent: function(e) {
        e.preventDefault();
        $('nav a').parent().removeClass('active');
        this.$el.removeClass('slideOut');
    },

    clear: function() {
        this.$el.find('section').remove();
    },

    render: function() {
        this.$el.html(this.template());
        return this;
    }
});

/* globals BuildingView:true */
/* globals Buildings:true */

var DayView = Backbone.View.extend({
    id: 'day',
    tagName: 'section',
    template: tpl.day,
    buildings: undefined,
    bigScreen: true,

    initialize: function() {
        _.bindAll.apply(_, [this].concat(_.functions(this)));

        this.buildings = new Buildings();
        this.buildings.url = this.buildings.url + '/day/' + this.model.get('id');
        this.buildings.fetch();
        this.buildings.on('sync reset', this.render);

        $(window).on('resize', this.resizeHandler);
    },

    resizeHandler: function() {
        var newSize = $('body').width() > 640;
        if(newSize !== this.bigScreen) {
            this.bigScreen = newSize;
            this.render();
        }
    },

    render: function() {
        this.$el.html(this.template(this.model.toJSON()));
        var step = 360 / this.buildings.length;
        var degree;
        var self = this;

        for (var i = 0; i < this.buildings.length; i++) {
            var buildingView = new BuildingView({
                model: this.buildings.at(i)
            });
            this.$el.append(buildingView.render().$el);
            if(this.bigScreen) {
                this.$el.find('.building:last').css('transform', 'rotate(' + (step * i) + 'deg)');
            }
        }

        var fixPosition = $('#durbuy').height() / 2 + 30;
        setTimeout(function() {
            $.each($('.building'), function(index, building) {
                if(self.bigScreen) {
                    $(this).css({
                        'margin-top': -($(this).find('.wrapper').height()) - fixPosition  + 'px',
                        'transform-origin-y': $(this).find('.wrapper').height() + fixPosition + 'px'
                    });
                } else {
                    $(this).css({
                        'margin-left': ($(this).find('.wrapper').width() + 20) * index  + 'px',
                        'margin-top': -($(this).find('.wrapper').height()) - fixPosition + 'px'
                    });
                }
            });
        }, 200); // current way to solve animation after added to the dom

        return this;
    }
});

/* globals ContentView:true */
/* globals HomeView:true */
/* globals Days:true */
/* globals DayView:true */
var EnRouteApp = Backbone.View.extend({
    id: 'container',
    tagName: 'div',
    template: tpl.enroute,
    currentDay: undefined,

    initialize: function() {
        _.bindAll.apply(_, [this].concat(_.functions(this)));

        this.days = new Days();
        this.days.fetch();

        this.contentView = new ContentView({
            collection: this.days
        });

        this.homeView = new HomeView({
            collection: this.days
        });

        this.homeView.on('day_selected', this.showDay);
    },

    showDay: function(day) {
        console.log('[EnRouteApp]', day);
        if(day !== this.currentDay) {
            $('#day').remove();
            var dayView = new DayView({model: this.days.findWhere({title: day})});
            this.currentDay = day;
            this.$el.append(dayView.render().$el);
            Backbone.history.navigate('dag/'+ day);
        }
    },

    render: function() {
        this.$el.html(this.template());
        //this.$el.append('<div id="noise"></div>');
        this.$el.append(this.contentView.render().$el);
        this.$el.append(this.homeView.render().$el);
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

/* globals Moment:true */

var HomeView = Backbone.View.extend({
    id: 'home',
    tagName: 'div',
    template: tpl.home,
    allowAudio: true,
    currentTreeRows: null,

    initialize: function() {
        _.bindAll.apply(_, [this].concat(_.functions(this)));

        this.collection.on('sync reset', this.render);
    },

    events: {
        'click #toggleAudio': 'toggleAudio'
    },

    toggleAudio: function(e) {
        e.preventDefault();
        var birdsAudio = document.getElementById('ambient_birds');
        this.allowAudio = !this.allowAudio;
        if (this.allowAudio) {
            birdsAudio.play();
        } else {
            birdsAudio.pause();
            birdsAudio.currentTime = 0;
        }
        $(e.currentTarget).toggleClass('play');
    },

    render: function() {
        console.log('[HomeView] render()');
        this.$el.html(this.template());

        this.currentTreeRows = 0;
        this.createForest();
        this.createDays();
        this.handleRotation();

        $(window).on('resize', this.createForest);

        return this;
    },

    createForest: function() {
        var step = 360 / 60;
        var x, y, z, angle, zoom;
        var treeRows = parseInt($('body').width() / 100) / 2;
        var fixRows = 30;
        console.log(this.currentTreeRows, treeRows);
        if (this.currentTreeRows !== treeRows) {
            this.currentTreeRows = treeRows;
            $('.tree, .rocks').remove();

            for (var n = 1; n < treeRows; n++) {
                var radius = $('#forest').width() / 2 - (fixRows * n) - 30;
                var rockI = _.random(0, 49); // no pun intended
                for (var i = 0; i <= 64; i++) {
                    angle = (step * (i + 1)) * (Math.PI / 180);
                    x = Math.cos(angle) * (radius - 30) - fixRows * 2;
                    y = Math.sin(angle) * (radius - 15) - fixRows;
                    zoom = _.random(70, 99);
                    if (rockI === i && n > 3 && n < (treeRows - 1)) {
                        this.$el.find('#forest').append('<div class="rocks" style="margin-top:' + (x) + 'px;margin-left:' + (y - 50) + 'px;z-index:' + parseInt(z) + '"></div>');
                    } else {
                        if ((i % _.random(1, 20)) > 0) {
                            if (y < $('#forest').width() / 2) {
                                z = x;
                            } else {
                                z = -1 * x;
                            }
                            this.$el.find('#forest').append('<div data-circle="' + n + '" class="tree type' + _.random(1, 4) + '" style="margin-top:' + x + 'px;margin-left:' + y + 'px;z-index:' + parseInt(z) + ';background-size:' + zoom + '%"></div>');
                        }
                    }
                }
            }
        }
    },

    createDays: function() {
        var step = 360 / this.collection.length;
        var radius = $('#durbuy').width() / 2 + 90;
        var x, y, angle, date, textAlignment;
        var disabled = '';
        var todaysDate = new Date();
        for (var i = 0; i < this.collection.length; i++) {
            date = new Date(this.collection.at(i).get('title'));
            angle = -((step * (i + 1)) * (Math.PI / 180) + 160);
            x = Math.cos(angle) * radius - 10;
            y = Math.sin(angle) * radius;
            if ((todaysDate <= date)) {
                disabled = ' disabled';
            }

            if (i === 0 || i === (this.collection.length / 2)) {
                textAlignment = 'center';
            } else if (i < (this.collection.length / 2)) {
                textAlignment = 'right';
            } else {
                textAlignment = 'left';
            }
            this.$el.find('ul').append('<li class="day' + disabled + '" data-day="' + this.collection.at(i).get('title') + '" data-angle="' + (step * i) + '" style="text-align:' + textAlignment + ';margin-top:' + x + 'px;margin-left:' + y + 'px">' + date.getDate() + '</li>');
            disabled = '';
        }
    },

    handleRotation: function() {
        var $target = $('#daySelector');
        var $handle = $target.find('.handle');
        if ($handle.length > 0) {
            var offset = $target.offset();
            var dragging = false;

            $handle.on('touchstart mousedown', function(e) {
                e.stopPropagation();
                e.preventDefault();
                dragging = true;
                $('*').disableSelection();
            });

            var self = this;
            var $firstDisabledAngle = $('.day.disabled').first().attr('data-angle');
            var $lastDisabledAngle = $('.day.disabled').last().attr('data-angle');

            $(document).on('touchend mouseup', function(e) {
                e.stopPropagation();
                e.preventDefault();
                if (dragging) {
                    dragging = false;
                    $('*').enableSelection();
                    $.each($('.day'), function(key, value) {
                        if (self.checkForOverlap($target.find('.select'), $(value))) {
                            var currentAngleMatrix = self.getMatrix($target.css('transform'));
                            var currentAngle = (Math.atan2(currentAngleMatrix.b, currentAngleMatrix.a) * (180 / Math.PI)) + 90;
                            var radians = self.calculateRadians(offset, $target, $(value).offset().left + $(value).width() / 2, $(value).offset().top + $(value).height() / 2);
                            var degree = (radians * (180 / Math.PI) * -1) + 90;
                            var transformDegree = degree + 90;
                            if (transformDegree > $firstDisabledAngle && transformDegree < $lastDisabledAngle) {
                                console.log(($('.day.disabled').length / 2 + $('.day:not(.disabled)').length), $(value).index());
                                if (($('.day.disabled').length / 2 + $('.day:not(.disabled)').length) > $(value).index()) {
                                    value = $('.day:not(.disabled)').last();
                                } else {
                                    value = $('.day:not(.disabled)').first();
                                }
                                radians = self.calculateRadians(offset, $target, $(value).offset().left + $(value).width() / 2, $(value).offset().top + $(value).height() / 2);
                            }
                            degree = (radians * (180 / Math.PI) * -1) + 90;
                            self.trigger('day_selected', $(value).attr('data-day'));
                            $target.find('.month').css('transform', 'rotate(' + (degree * -1) + 'deg)');
                            $target.css('transform', 'rotate(' + degree + 'deg)');
                            var date = moment($(value).attr('data-day'));
                            selectedDay = value;
                            $target.find('.month span').html(date.format('MMMM'));
                            $(value).removeClass('almostFocus').addClass('focus');
                            // I used to be animated, but then I took an arrow to the knee
                            /*$target.animate({settingToAnimateRotation: Math.abs(currentAngle - degree - 90)}, {
                                step: function(angle, fx) {
                                    $target.find('.month').css('transform', 'rotate(' + ((degree - angle) * -1) + 'deg)');
                                    $target.css('transform', 'rotate('+ (degree - angle) +'deg)');
                                }, duration: 300
                            }, 'linear');*/
                            return false;
                        }
                    });
                }
            });

            var step = 360 / this.collection.length;
            var toctocAudio = document.getElementById('toctoc');
            var selectedDay;

            $(document).on('touchmove mousemove', function(e) {
                e.stopPropagation();
                e.preventDefault();
                if (dragging) {
                    var radians = self.calculateRadians(offset, $target, e.pageX, e.pageY);
                    var degree = (radians * (180 / Math.PI) * -1) - 90; // convert degree for reversal
                    var transformDegree = degree + 180;
                    /*if (transformDegree > $firstDisabledAngle && transformDegree < $lastDisabledAngle) {
                        var value = $('.day:not(.disabled)').last();
                        radians = self.calculateRadians(offset, $target, $(value).offset().left + $(value).width() / 2, $(value).offset().top + $(value).height() / 2);
                    }*/
                    degree = (radians * (180 / Math.PI) * -1) - 90;
                    $target.css('transform', 'rotate(' + degree + 'deg)');
                    $target.find('.month').css('transform', 'rotate(' + (degree * -1) + 'deg)');
                    $.each($('.day'), function(key, value) {
                        if (!$(value).hasClass('disabled') && self.checkForOverlap($target.find('.select'), $(value))) {
                            if (selectedDay !== value) {
                                var date = moment($(value).attr('data-day'));
                                selectedDay = value;
                                $target.find('.month span').html(date.format('MMMM'));
                                $(value).removeClass('almostFocus').addClass('focus');
                                if (self.allowAudio) {
                                    toctocAudio.pause();
                                    toctocAudio.currentTime = 0;
                                    toctocAudio.play();
                                }
                            }
                        } else {
                            $(value).removeClass('focus');
                        }
                    });
                }
            });
        }
    },

    getMatrix: function(matrix) {
        var returnMatrix = matrix.split('(')[1];
            returnMatrix = returnMatrix.split(')')[0];
            returnMatrix = returnMatrix.split(',');
            return {a: returnMatrix[0], b: returnMatrix[1], c: returnMatrix[2], d: returnMatrix[3]};
    },

    calculateRadians: function(offset, $target, object_x, object_y) {
        var center_x = (offset.left) + ($target.width() / 2);
        var center_y = (offset.top) + ($target.height() / 2);
        return Math.atan2(object_x - center_x, object_y - center_y);
    },

    checkForOverlap: function($select, $day) {
        var selectBox = {
            x1: $select.offset().top,
            y1: $select.offset().left,
            x2: ($select.offset().top + $select.width()),
            y2: ($select.offset().left + $select.width())
        };

        var dayBox = {
            x1: $day.offset().top,
            y1: $day.offset().left,
            x2: ($day.offset().top + $day.width()),
            y2: ($day.offset().left + $day.width())
        };

        return (selectBox.x1 <= dayBox.x1 && selectBox.y2 >= dayBox.y2 && selectBox.x2 >= dayBox.x2 && selectBox.y1 <= dayBox.y1);
    },
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

/* globals Validate:true */
/* globals Contact:true */
/* globals SuccessView:true */
/* globals ErrorView:true */

var ContactView = Backbone.View.extend({
    id: 'contact',
    tagName: 'section',
    template: tpl.contact,
    everyStep: 20,

    initialize: function() {
        _.bindAll.apply(_, [this].concat(_.functions(this)));
    },

    events: {
        'submit form': 'sendContact',
        'blur #txtName': 'validateName',
        'keyup #txtName': 'validateName',
        'blur #txtEmail': 'validateEmail',
        'keyup #txtEmail': 'validateEmail'
    },

    checkCharsHandler: function(e) {
        var charsLength = $(e.currentTarget).val().length;
        for (var i = 1; i <= this.everyStep; i++) {
            var thisDiv = $('#length').find('.building').eq((i - 1));
            if (charsLength >= i * this.everyStep) {
                thisDiv.addClass('hide');
            } else {
                thisDiv.removeClass('hide');
            }
        }
        this.validateMessage(e);
    },

    sendContact: function(e) {
        console.log('[ContactView] sendContact()');
        e.preventDefault();
        if (Validate.fullName(this.$el.find('#txtName')) && Validate.email(this.$el.find('#txtEmail')) && Validate.message(this.$el.find('#txtMessage'))) {
            var contact = new Contact({
                name: this.$el.find('#txtName').val(),
                email: this.$el.find('#txtEmail').val(),
                message: this.$el.find('#txtMessage').val()
            });
            var self = this;

            contact.save({}, {
                success: function(model, response) {
                    var successView = new SuccessView({
                        model: 'Je bericht is succesvol verzonden!'
                    });
                    self.$el.find('#txtName, #txtEmail, #txtMessage').val('');
                    self.$el.append(successView.render().$el);
                },
                error: function(model, response) {
                    console.log('[ContentView] generated 500 error code');
                    _.each(response.responseJSON.errors, function(error, key) {
                        console.log('[' + key + ']', error);
                        var errorView = new ErrorView({
                            model: error
                        });
                        var $elToInsertAfter;
                        if (key === 'name') {
                            $elToInsertAfter = '#txtName';
                        }
                        if (key === 'email') {
                            $elToInsertAfter = '#txtEmail';
                        }
                        if (key === 'message') {
                            $elToInsertAfter = '#txtMessage';
                        }
                        self.$el.find($elToInsertAfter).after(errorView.render().$el);
                    });
                }
            });
        }
    },

    controlSubmitButton: function(enable) {
        if (this.validateName) {
            if (enable) {
                $('#btnSubmitContact').removeAttr('disabled');
            } else {
                $('#btnSubmitContact').attr('disabled', 'disabled');
            }
        }
    },

    validateName: function(e) {
        var validate = Validate.fullName(e.currentTarget);
        this.controlSubmitButton(validate);
        return validate;
    },

    validateEmail: function(e) {
        var validate = Validate.email(e.currentTarget);
        this.controlSubmitButton(validate);
        return validate;
    },

    validateMessage: function(e) {
        var validate = Validate.message(e.currentTarget);
        this.controlSubmitButton(validate);
        return validate;
    },

    render: function() {
        this.$el.html(this.template());
        this.$el.find('#txtMessage').on('keypress change paste focus textInput input', this.checkCharsHandler);
        this.everyCharacters = this.$el.find('.building').length;
        return this;
    }
});

var InfoView = Backbone.View.extend({
    id: 'info',
    tagName: 'section',
    template: tpl.info,

    initialize: function() {
        _.bindAll.apply(_, [this].concat(_.functions(this)));
    },

    render: function() {
        this.$el.html(this.template());
        return this;
    }
});

/* globals SuccessView:true */
/* globals ErrorView:true */
/* globals Validate:true */
/* globals Ticket:true */

var TicketsView = Backbone.View.extend({
    id: 'tickets',
    tagName: 'section',
    template: tpl.tickets,
    currentTicket: undefined,
    filteredCollection: undefined,

    initialize: function() {
        _.bindAll.apply(_, [this].concat(_.functions(this)));
        this.filteredCollection = this.collection.filter(function(day) {
            return new Date(day.get('title')) >= new Date();
        });
        this.collection.reset(this.filteredCollection);
        if (!this.currentTicket) {
            this.currentTicket = this.collection.first();
        }

        this.collection.on('sync reset', this.render);
    },

    events: {
        'click .day': 'selectTicket',
        'submit form': 'orderTicket',
        'blur #xtName': 'validateName',
        'keyup #txtName': 'validateName',
        'blur #txtEmail': 'validateEmail',
        'keyup #txtEmail': 'validateEmail',
        'change #rngTickets': 'updateTickets'
    },

    updateTickets: function(e) {
        var $range = $(e.currentTarget);
        this.$el.find('.amount span').html($range);
        this.$el.find('.amount').css({
            left: $range.val() * $range.attr('max')
        });
    },

    selectTicket: function(e) {
        console.log('[TicketsView]', $(e.currentTarget).attr('data-date'));
        e.preventDefault();
        var date = $(e.currentTarget).attr('data-date');
        var newTicket = this.collection.findWhere({
            'title': date
        });
        if (this.currentTicket !== newTicket) {
            this.currentTicket = newTicket;
            this.render();
        }
    },

    orderTicket: function(e) {
        console.log('[TicketsView] orderTicket()');
        e.preventDefault();
        this.clean();
        var self = this; // fix for error handler
        var tickets = this.$el.find('#rngTickets').val();
        var ticket = new Ticket({
            day_id: this.currentTicket.get('id'),
            name: this.$el.find('#txtName').val(),
            email: this.$el.find('#txtEmail').val()
        });
        if (tickets) {
            ticket.set('tickets', parseInt(tickets));
        }
        if (Validate.fullName(this.$el.find('#txtName')) && Validate.email(this.$el.find('#txtEmail'))) {
            ticket.save({}, {
                success: function(model, response) {
                    var successView = new SuccessView({
                        model: 'Dag ' + response.name + ', je hebt succesvol ' + response.tickets + ' tickets besteld voor de workshop op ' + response.tickets.title + '!'
                    });
                    self.$el.find('#txtName, #txtEmail').val('');
                    self.$el.append(successView.render().$el);
                },
                error: function(model, response) {
                    console.log('[TicketView] generated 500 error code');
                    _.each(response.responseJSON.errors, function(error, key) {
                        console.log('[' + key + ']', error);
                        var errorView = new ErrorView({
                            model: error
                        });
                        var $elToInsertAfter;
                        if (key === 'name') {
                            $elToInsertAfter = '#txtName';
                        }
                        if (key === 'email') {
                            $elToInsertAfter = '#txtEmail';
                        }
                        if (tickets && key === 'tickets') {
                            $elToInsertAfter = '#rngTickets';
                        } else if (key === tickets) {
                            $elToInsertAfter = '#btnSubmit';
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

    validateName: function(e) {
        Validate.fullName(e.currentTarget);
    },

    validateEmail: function(e) {
        Validate.email(e.currentTarget);
    },

    clean: function() {
        $('.success').remove();
        $('.error').remove();
    },

    render: function() {
        this.$el.html(this.template({
            days: this.collection.toJSON(),
            ticket: this.currentTicket.toJSON()
        }));

        var selectTicket = this.$el.find('#selectTicket');
        var self = this;
        selectTicket.on('mousemove', function(e) {
            selectTicket.css({
                'width': self.collection.length * (self.$el.find('.day').parent().width() + 10) + 100
            });
            var x = -(((e.pageX - $('#selectTicket').position().left) / $("#tickets").width()) * ($("#selectTicket").width() + parseInt($("#selectTicket").css('paddingLeft')) + parseInt($("#selectTicket").css('paddingRight')) - $("#tickets").width()));
            $("#selectTicket").css({
                'marginLeft': x + 'px'
            });
        });
        return this;
    }
});

/* globals AppRouter:true */

moment.lang('nl');
var router = new AppRouter();
Backbone.history.start();

})();