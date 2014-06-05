(function(){

this["tpl"] = this["tpl"] || {};

this["tpl"]["enroute"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<header>\n	<h1>Durbuy</h1>\n</header>";
  });

this["tpl"]["home"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div id=\"city\"></div>\n<div id=\"forest\"></div>\n<div id=\"durbuy\">\n	<nav id=\"days\">\n		<ul></ul>\n		<div id=\"showSelectedDay\"></div>\n		<a href=\"\" id=\"dragDayHandle\">=</a>\n	</nav>\n</div>";
  });

this["tpl"]["navigation"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<header>\n	<h1>En Route</h1>\n</header>\n<p>\n	En Route daagt je uit om gedurende één dag de stad anders te bekijken en te beleven. Samen met een kunstdocent ga je op ontdekkingsreis door de pittoreske straatjes van Durbuy.\n</p>";
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
        'home/': 'home'
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

/* globals NavigationView:true */
/* globals HomeView:true */
/* globals Days:true */
var EnRouteApp = Backbone.View.extend({
    id: 'container',
    tagName: 'div',
    template: tpl.enroute,

    initialize: function() {
        _.bindAll.apply(_, [this].concat(_.functions(this)));

        this.days = new Days();
        this.days.fetch();

        this.navigationView = new NavigationView();
        this.homeView = new HomeView({
            collection: this.days
        });
    },

    render: function() {
        this.$el.html(this.template());
        this.$el.append(this.navigationView.render().$el);
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

    clear: function() {
        $('#city').remove();
        $('#forest').remove();
        $('#durbuy').remove();
    },

    render: function() {
        console.log('[HomeView] render()');
        /*this.clear();
        var html = this.template(this.collection.toJSON());
        var newElement = $(html);
        this.$el.replaceWith(newElement);
        this.setElement(newElement);*/

        this.$el.html(this.template());

        this.createDays();
        this.handleDrop();
        this.handleDrag();

        return this;
    },

    createDays: function() {
        var step = 360 / this.collection.length;
        var radius = $('#durbuy').width() / 2 + 40;
        var x, y, angle;
        for (var i = 1; i <= this.collection.length; i++) {
            angle = -((step * i) * (Math.PI / 180) + 160);
            x = Math.cos(angle) * radius;
            y = Math.sin(angle) * radius;
            this.$el.find('ul').append('<li class="day" style="margin-top:' + x + 'px;margin-left:' + y + 'px">#' + i + '</li>');
        }
    },

    handleDrop: function() {
        var self = this;
        $('.day').droppable({
            accept: "#dragDayHandle",
            tolerance: "pointer",
            drop: function(event, ui) {
                var $oppositeElement = $('#days').find('li').eq(($(this).index() + self.collection.length / 2) - self.collection.length);
                console.log($oppositeElement);
                var drop_p = $(this).offset();
                var drag_p = ui.draggable.offset();
                var left_end = drop_p.left - drag_p.left + 1;
                var top_end = drop_p.top - drag_p.top + 1;
                ui.draggable.animate({
                    top: '+=' + top_end,
                    left: '+=' + left_end
                }, 100);
                $('#showSelectedDay').animate({
                    top: '-=' + top_end,
                    left: '-=' + left_end
                }, 100);
                return true;
            }
        });
    },

    handleDrag: function() {
        var drag = $('#dragDayHandle');
        $('#showSelectedDay, #dragDayHandle').css('margin-top', -($('#durbuy').width() / 2 + 40));
        var radius = $('#durbuy').width() / 2 + 40;
        var self = this;
        drag.draggable({
            start: function(e) {
                if (!drag.data('circle')) {
                    drag.data('circle', {
                        radius: $('#durbuy').width() / 2 + 40,
                        centerX: 0,
                        centerY: radius
                    });
                }
            },
            drag: function(e, ui) {
                var positionHandle = self.calculatePosition(false, drag.data('circle'));
                ui.position.top = positionHandle.top;
                ui.position.left = positionHandle.left;
                var positionSelected = self.calculatePosition(true, drag.data('circle'));
                $('#showSelectedDay').css({
                    'top': positionSelected.top,
                    'left': positionSelected.left
                });
            }
        });
    },

    calculatePosition: function(inverted, data) {
        var offsetSelector = $('#durbuy').parent();
        var angle;
        var x = event.pageX - offsetSelector.offset().left - offsetSelector.width() / 2;
        var y = event.pageY - offsetSelector.offset().top - offsetSelector.height() / 2;
        if (inverted !== true) {
            angle = Math.atan2(x, y);
        } else {
            angle = Math.atan2(-x, -y);
        }
        var posTop = Math.ceil((data.centerY + (Math.cos(angle) * data.radius)));
        var posLeft = Math.ceil((data.centerX + (Math.sin(angle) * data.radius)));
        return {
            top: posTop,
            left: posLeft
        };
    }
});

var NavigationView = Backbone.View.extend({
    id: 'nav',
    tagName: 'nav',
    template: tpl.navigation,

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