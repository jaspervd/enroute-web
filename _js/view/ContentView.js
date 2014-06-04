/* globals ScreenView:true */
/* globals TicketView:true */
/* globals Validate:true */

var ContentView = Backbone.View.extend({
    id: 'content',
    tagName: 'section',
    template: tpl.content,

    initialize: function () {
        _.bindAll.apply(_, [this].concat(_.functions(this)));
    },

    events: {
        'click #btnSubmitContact': 'sendContact',
        'blur #txtName': 'validateName',
        'keyup #txtName': 'validateName',
        'blur #txtEmail': 'validateEmail',
        'keyup #txtEmail': 'validateEmail',
        'blur #txtMessage': 'validateMessage',
        'keyup #txtMessage': 'validateMessage'
    },

    sendContact: function(e) {
        console.log('[ContentView] sendContact()');
        e.preventDefault();
        if (Validate.fullName(this.$el.find('#txtName')) && Validate.email(this.$el.find('#txtEmail')) && Validate.message(this.$el.find('#txtMessage'))) {
            console.log('Hoera!');
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