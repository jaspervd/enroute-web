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
        'click .btnSubmit': 'orderTicket'
    },

    orderTicket: function (e) {
        e.preventDefault();
        console.log('[TicketView] orderTicket()');
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
        ticket.save({}, {
            success: function (model, response) {
                self.$el.append(new SuccessView({model: response}));
            },
            error: function (model, response) {
                console.log('[TicketView] generated 500 error code');
                _.each(response.responseJSON.errors, function (error, key) {
                    console.log('[' + key + ']', error);
                    var errorView = new ErrorView({model: error});
                    var $elToInsertAfter;
                    if (key === 'name') {
                        $elToInsertAfter = $('.txtName');
                    }
                    if (key === 'email') {
                        $elToInsertAfter = $('.txtEmail');
                    }
                    if (tickets && key === 'tickets') {
                        $elToInsertAfter = $('.rngTickets');
                    } else if (key === tickets) {
                        $elToInsertAfter = $('.btnSubmit');
                    }
                    if (key === 'day_id') {
                        self.$el.prepend(errorView.render().$el);
                    } else {
                        self.$el.find($elToInsertAfter).after(errorView.render().$el);
                    }
                });
            }
        });
    },

    clean: function() {
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