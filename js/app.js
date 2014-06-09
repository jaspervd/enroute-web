(function(){

this["tpl"] = this["tpl"] || {};

Handlebars.registerPartial("contact", this["tpl"]["contact"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<header>\n	<h1>Contact</h1>\n</header>\n<form method=\"post\" action=\"\">\n	<div>\n		<label for=\"txtName\">Naam:</label>\n		<input type=\"text\" required name=\"txtName\" id=\"txtName\" placeholder=\"Joske Vermeulen\"/>\n	</div>\n\n	<div>\n		<label for=\"txtEmail\">E-mailadres:</label>\n		<input type=\"email\" required name=\"txtEmail\" id=\"txtEmail\" placeholder=\"joske.vermeulen@trammezand.lei\" />\n	</div>\n\n	<div>\n		<label for=\"txtMessage\">Bericht:</label>\n		<textarea name=\"txtMessage\" required id=\"txtMessage\" cols=\"30\" rows=\"10\"></textarea>\n	</div>\n\n	<div>\n		<input type=\"submit\" name=\"btnSubmit\" id=\"btnSubmitContact\" value=\"Versturen\"/>\n	</div>\n</form>";
  }));

Handlebars.registerPartial("info", this["tpl"]["info"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<header>\n	<h1>En Route</h1>\n</header>\n<p>\n	En Route daagt je uit om gedurende één dag de stad anders te bekijken en te beleven. Samen met een kunstdocent ga je op ontdekkingsreis door de pittoreske straatjes van Durbuy.\n</p>";
  }));

Handlebars.registerPartial("tickets", this["tpl"]["tickets"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "sooooooon lulz";
  }));

this["tpl"]["content"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<header>\n	<h1>Content</h1>\n</header>\n<nav>\n	<header>\n		<h1>Navigatie</h1>\n	</header>\n	<ul>\n		<li><a href=\"\" data-content=\"info\">En Route</a></li>\n		<li><a href=\"\" data-content=\"tickets\">Tickets</a></li>\n		<li><a href=\"\" data-content=\"contact\">Contact</a></li>\n	</ul>\n</nav>";
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
  


  return "<div id=\"city\"></div>\n<div id=\"forest\"></div>\n<div id=\"river\"></div>\n<div id=\"daySelector\"><span class=\"handle\"></span><span class=\"select\"></span></div>\n<div id=\"durbuy\">\n	<nav id=\"days\">\n		<header>\n			<h1>Dagen</h1>\n		</header>\n		<ul></ul>\n	</nav>\n	<audio id=\"toctoc\">\n		<source src=\"assets/toctoc.mp3\" type=\"audio/mpeg; codecs='mp3'\">\n		<source src=\"assets/toctoc.ogg\" type=\"audio/ogg; codecs='vorbis'\">\n	</audio>\n</div>";
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

var Contact = Backbone.Model.extend({
    defaults:{
        name: undefined,
        email: undefined,
        message: undefined
    },

    urlRoot: Settings.API + '/contact'
});

/* globals Settings:true */

var Content = Backbone.Model.extend({
    defaults:{
        id: null,
        day_id: null,
        url: undefined,
        type: undefined,
        approved: 0,
        uploaded_date: undefined
    },

    urlRoot: Settings.API + '/content'
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
        '*path': 'home'
    },

    home: function () {
        console.log('[AppRouter] home()');
        this.enRouteApp = new EnRouteApp();
        $('#container').remove();
        $('body').prepend(this.enRouteApp.render().$el);
    }
});


/* globals Settings:true */
/* globals Content:true */

var Contents = Backbone.Collection.extend({
    model: Content,
    url: Settings.API + "/content",

    byDayID: function (day) {
        return this.filter(function (content) {
            return parseInt(content.get('day_id')) === parseInt(day);
        });
    }
});

/* globals Day:true */
/* globals Settings:true */

var Days = Backbone.Collection.extend({
    model: Day,
    url: Settings.API + "/days"
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
        'click nav a': 'showContent'
    },

    showContent: function(e) {
        console.log('[ContentView] showContent()');
        e.preventDefault();
        this.clear();
        this.$el.addClass('slideOut');
        $('nav a').parent().removeClass('active');
        $(e.currentTarget).parent().addClass('active');
        var newContent = $(e.currentTarget).attr('data-content');
        if (this.currentContent !== newContent) {
            this.currentContent = newContent;

            switch (this.currentContent) {
                case 'tickets':
                    var ticketsView = new TicketsView();
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
    },

    clear: function() {
        this.$el.find('section').remove();
    },

    render: function() {
        this.$el.html(this.template());
        return this;
    }
});

var DayView = Backbone.View.extend({
    id: 'day',
    tagName: 'section',
    template: tpl.day,

    initialize: function() {
        _.bindAll.apply(_, [this].concat(_.functions(this)));
    },

    render: function() {
        this.$el.html(this.template());
        var buildings = 12;
        var step = 360 / buildings;
        var degree;

        for (var i = 0; i < buildings; i++) {
            this.$el.append('<div class="building"></div>');
            this.$el.find('.building:last').css('transform', 'rotate(' + (step * i) + 'deg)');
        }

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

        this.contentView = new ContentView();
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
        this.$el.append(this.contentView.render().$el);
        this.$el.append(this.homeView.render().$el);
        return this;
    }
});

var HomeView = Backbone.View.extend({
    template: tpl.home,

    initialize: function() {
        _.bindAll.apply(_, [this].concat(_.functions(this)));

        this.collection.on('sync reset', this.render);
    },

    render: function() {
        console.log('[HomeView] render()');

        this.$el.html(this.template());

        this.createDays();
        this.handleRotation();

        return this;
    },

    handleRotation: function() {
        var $target = $('#daySelector');
        var $handle = $target.find('.handle');
        if ($handle.length > 0) {
            var offset = $target.offset();
            var dragging = false;

            $handle.mousedown(function() {
                dragging = true;
                $('*').disableSelection();
            });

            var self = this;

            $(document).mouseup(function() {
                if (dragging) {
                    dragging = false;
                    $('*').enableSelection();
                    $.each($('.day'), function(key, value) {
                        if (self.checkForOverlap($target.find('.select'), $(value))) {
                            var radians = self.calculateRadians(offset, $target, $(value).offset().left + $(value).width() / 2, $(value).offset().top + $(value).height() / 2);
                            var degree = (radians * (180 / Math.PI) * -1) + 90;
                            self.trigger('day_selected', $(value).attr('data-day'));
                            $target.css('transform', 'rotate(' + degree + 'deg)');
                            return false;
                        }
                    });
                }
            });

            var step = 360 / this.collection.length;
            var toctocAudio = document.getElementById('toctoc');

            $(document).on('mousemove', function(e) {
                if (dragging) {
                    var radians = self.calculateRadians(offset, $target, e.pageX, e.pageY);
                    var degree = (radians * (180 / Math.PI) * -1) - 90; // convert degree for reversal
                    $target.css('transform', 'rotate(' + degree + 'deg)');
                    $.each($('.day'), function(key, value) {
                        if (self.checkForOverlap($target.find('.select'), $(value))) {
                            toctocAudio.play();
                            $(value).removeClass('almostFocus').addClass('focus');
                            $('.day:nth-child(' + (key - 2) + '), .day:nth-child(' + (key) + ')').removeClass('focus').addClass('almostFocus');
                        }
                    });
                }
            });
        }
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

    createDays: function() {
        var step = 360 / this.collection.length;
        var radius = $('#durbuy').width() / 2 + 70;
        var x, y, angle, date;
        for (var i = 0; i < this.collection.length; i++) {
            date = new Date(this.collection.at(i).get('title'));
            angle = -((step * (i + 1)) * (Math.PI / 180) + 160);
            x = Math.cos(angle) * radius;
            y = Math.sin(angle) * radius;
            this.$el.find('ul').append('<li class="day" data-day="' + this.collection.at(i).get('title') + '" style="margin-top:' + x + 'px;margin-left:' + y + 'px">' + date.getDate() + '</li>');
        }
    },
});

var ContactView = Backbone.View.extend({
    id: 'contact',
    tagName: 'section',
    template: tpl.contact,

    initialize: function() {
        _.bindAll.apply(_, [this].concat(_.functions(this)));
    },

    render: function() {
        this.$el.html(this.template());
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

var TicketsView = Backbone.View.extend({
    id: 'tickets',
    tagName: 'section',
    template: tpl.tickets,

    initialize: function() {
        _.bindAll.apply(_, [this].concat(_.functions(this)));
    },

    render: function() {
        this.$el.html(this.template());
        return this;
    }
});

/* globals AppRouter:true */

var router = new AppRouter();
Backbone.history.start();

})();