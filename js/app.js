(function(){

this["tpl"] = this["tpl"] || {};

Handlebars.registerPartial("contact", this["tpl"]["contact"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<header>\n	<h1>Contact</h1>\n</header>\n<form method=\"post\" action=\"\">\n	<div>\n		<label for=\"txtName\">Naam:</label>\n		<input type=\"text\" required name=\"txtName\" id=\"txtName\" placeholder=\"Joske Vermeulen\"/>\n	</div>\n\n	<div>\n		<label for=\"txtEmail\">E-mailadres:</label>\n		<input type=\"email\" required name=\"txtEmail\" id=\"txtEmail\" placeholder=\"joske.vermeulen@trammezand.lei\" />\n	</div>\n\n	<div>\n		<label for=\"txtMessage\">Bericht:</label>\n		<textarea name=\"txtMessage\" required id=\"txtMessage\" cols=\"30\" rows=\"10\"></textarea>\n	</div>\n\n	<div>\n		<input type=\"submit\" name=\"btnSubmit\" id=\"btnSubmitContact\" value=\"Versturen\"/>\n	</div>\n</form>";
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
  


  return "<header>\n	<h1>En Route</h1>\n</header>\n<p>\n	En Route daagt je uit om gedurende één dag de stad anders te bekijken en te beleven. Samen met een kunstdocent ga je op ontdekkingsreis door de pittoreske straatjes van Durbuy.\n</p>";
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
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    	<div>\n    		<label for=\"txtName\">Naam:</label>\n    		<input type=\"text\" required name=\"txtName\" id=\"txtName\" placeholder=\"Joske Vermeulen\"/>\n    	</div>\n\n    	<div>\n    		<label for=\"txtEmail\">E-mailadres:</label>\n    		<input type=\"email\" required name=\"txtEmail\" id=\"txtEmail\" placeholder=\"joske.vermeulen@trammezand.lei\" />\n    	</div>\n\n    	<div>\n    		<label for=\"rngTickets\">Aantal tickets:</label>\n    		<input type=\"range\" required name=\"rngTickets\" id=\"rngTickets\" min=\"1\" max=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.ticket)),stack1 == null || stack1 === false ? stack1 : stack1.tickets_available)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" />\n    	</div>\n    	";
  return buffer;
  }

function program3(depth0,data) {
  
  
  return "\n    	<div>\n    		<label for=\"txtName\">Schoolnaam:</label>\n    		<input type=\"text\" required name=\"txtName\" id=\"txtName\" placeholder=\"Volledige schoolnaam\"/>\n    	</div>\n\n    	<div>\n    		<label for=\"txtEmail\">E-mailadres:</label>\n    		<input type=\"email\" required name=\"txtEmail\" id=\"txtEmail\" placeholder=\"joske.vermeulen@trammezand.lei\"/>\n    	</div>\n    	";
  }

function program5(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    	<ul>\n    		";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.days), {hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    	</ul>\n    	";
  return buffer;
  }
function program6(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n    		<li><a href=\"\" data-date=\"";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">"
    + escapeExpression((helper = helpers.formatDate || (depth0 && depth0.formatDate),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.title), options) : helperMissing.call(depth0, "formatDate", (depth0 && depth0.title), options)))
    + "</a></li>\n    		";
  return buffer;
  }

  buffer += "    <header>\n    	<h1>Ticket bestellen</h1>\n    </header>\n    <form method=\"post\" action=\"\">\n    	";
  stack1 = (helper = helpers.ifTypeIsPublic || (depth0 && depth0.ifTypeIsPublic),options={hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.ticket)),stack1 == null || stack1 === false ? stack1 : stack1.type), options) : helperMissing.call(depth0, "ifTypeIsPublic", ((stack1 = (depth0 && depth0.ticket)),stack1 == null || stack1 === false ? stack1 : stack1.type), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    	";
  stack1 = (helper = helpers.ifTypeIsSchool || (depth0 && depth0.ifTypeIsSchool),options={hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.ticket)),stack1 == null || stack1 === false ? stack1 : stack1.type), options) : helperMissing.call(depth0, "ifTypeIsSchool", ((stack1 = (depth0 && depth0.ticket)),stack1 == null || stack1 === false ? stack1 : stack1.type), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n    	";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.days), {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n    	<div>\n    		<input type=\"submit\" name=\"btnSubmit\" value=\"Verder naar bestellen\"/>\n    	</div>\n    </form>";
  return buffer;
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
  


  return "<div id=\"city\"></div>\n<div id=\"street\"></div>\n<div id=\"forest\"></div>\n<div id=\"river\"></div>\n<div id=\"daySelector\"><span class=\"handle\"></span><span class=\"select\"></span><span class=\"month\">juni</span></div>\n<div id=\"durbuy\">\n	<nav id=\"days\">\n		<header>\n			<h1>Dagen</h1>\n		</header>\n		<ul></ul>\n	</nav>\n	<audio id=\"toctoc\">\n		<source src=\"assets/toctoc.mp3\" type=\"audio/mpeg; codecs='mp3'\">\n		<source src=\"assets/toctoc.ogg\" type=\"audio/ogg; codecs='vorbis'\">\n	</audio>\n</div>";
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
                    var ticketsView = new TicketsView({collection: this.collection});
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

        var self = this;
        this.$el.next().one('click', function() {
            $('nav a').parent().removeClass('active');
            self.$el.removeClass('slideOut');
        });
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
            var selectedDay;

            $(document).on('mousemove', function(e) {
                if (dragging) {
                    var radians = self.calculateRadians(offset, $target, e.pageX, e.pageY);
                    var degree = (radians * (180 / Math.PI) * -1) - 90; // convert degree for reversal
                    $target.css('transform', 'rotate(' + degree + 'deg)');
                    $target.find('.month').css('transform', 'rotate(' + (degree * -1) + 'deg)');
                    $.each($('.day'), function(key, value) {
                        if (self.checkForOverlap($target.find('.select'), $(value))) {
                            if (selectedDay !== value) {
                                var date = moment($(value).attr('data-day'));
                                selectedDay = value;
                                $target.find('.month').html(date.format('MMMM'));
                                toctocAudio.play();
                                $(value).removeClass('almostFocus').addClass('focus');
                                $('.day:nth-child(' + (key - 2) + '), .day:nth-child(' + (key) + ')').removeClass('focus').addClass('almostFocus');
                            }
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

    initialize: function() {
        _.bindAll.apply(_, [this].concat(_.functions(this)));
    },

    events: {
        'submit form': 'sendContact',
        'blur #txtName': 'validateName',
        'keyup #txtName': 'validateName',
        'blur #txtEmail': 'validateEmail',
        'keyup #txtEmail': 'validateEmail',
        'blur #txtMessage': 'validateMessage',
        'keyup #txtMessage': 'validateMessage'
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

    validateName: function(e) {
        Validate.fullName(e.currentTarget);
    },

    validateEmail: function(e) {
        Validate.email(e.currentTarget);
    },

    validateMessage: function(e) {
        Validate.message(e.currentTarget);
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

/* globals SuccessView:true */
/* globals ErrorView:true */
/* globals Validate:true */
/* globals Ticket:true */

var TicketsView = Backbone.View.extend({
    id: 'tickets',
    tagName: 'section',
    template: tpl.tickets,
    currentTicket: undefined,

    initialize: function() {
        _.bindAll.apply(_, [this].concat(_.functions(this)));
        this.currentTicket = this.collection.findWhere({'title': moment().format('YYYY-MM-DD')});
    },

    events: {
        'click a': 'selectTicket',
        'submit form': 'orderTicket',
        'blur #xtName': 'validateName',
        'keyup #txtName': 'validateName',
        'blur #txtEmail': 'validateEmail',
        'keyup #txtEmail': 'validateEmail'
    },

    selectTicket: function(e) {
        console.log('[TicketsView]', $(e.currentTarget).attr('data-date'));
        e.preventDefault();
        var date = $(e.currentTarget).attr('data-date');
        var newTicket = this.collection.findWhere({'title': date});
        if(this.currentTicket !== newTicket) {
            this.currentTicket = newTicket;
            this.render();
        }
    },

    orderTicket: function (e) {
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
                success: function (model, response) {
                    var successView = new SuccessView({model: 'Dag '+ response.name +', je hebt succesvol '+ response.tickets +' tickets besteld voor de workshop op '+ response.tickets.title +'!'});
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

    clean: function () {
        $('.success').remove();
        $('.error').remove();
    },

    render: function() {
        this.$el.html(this.template({days: this.collection.toJSON(), ticket: this.currentTicket.toJSON()}));
        return this;
    }
});

/* globals AppRouter:true */

moment.lang('nl');
var router = new AppRouter();
Backbone.history.start();

})();