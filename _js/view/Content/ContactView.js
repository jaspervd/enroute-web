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