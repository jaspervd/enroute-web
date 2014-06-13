/* globals Validate:true */
/* globals Contact:true */
/* globals SuccessView:true */
/* globals ErrorView:true */

var ContactView = Backbone.View.extend({
    id: 'contact',
    tagName: 'section',
    template: tpl.contact,
    maxLength: 260,
    everyCharacters: 0,

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
        console.log(this.maxLength / this.everyCharacters, this.maxLength, this.everyCharacters);
        for (var i = 1; i <= (this.maxLength / this.everyCharacters); i++) {
            var thisDiv = $('#length').find('.building').eq((i - 1));
            if (charsLength >= i * this.everyCharacters) {
                thisDiv.addClass('hide');
            } else {
                thisDiv.removeClass('hide');
            }
        }
        this.controlSubmitButton((charsLength <= this.maxLength && charsLength > 0));
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