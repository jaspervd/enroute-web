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