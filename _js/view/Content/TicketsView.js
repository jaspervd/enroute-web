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