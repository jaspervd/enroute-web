/* globals SuccessView:true */
/* globals ErrorView:true */
/* globals Validate:true */
/* globals Ticket:true */
/* globals Days:true */

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

        this.filteredCollection = new Days(this.filteredCollection);
        if (!this.currentTicket) {
            this.currentTicket = this.filteredCollection.first();
        }

        this.filteredCollection.on('sync reset', this.render);
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
                    self.$el.find('form').append(successView.render().$el);
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

    renderSelectTicket: function() {
        var selectTicket = this.$el.find('#selectTicket');
        var self = this;
        selectTicket.on('mousemove', function(e) {
            selectTicket.css({
                'width': self.filteredCollection.length * (self.$el.find('.day').parent().width() + 10) + 100
            });
            var x = -(((e.pageX - selectTicket.position().left) / $('#tickets').width()) * (selectTicket.width() + parseInt(selectTicket.css('paddingLeft')) + parseInt(selectTicket.css('paddingRight')) - $('#tickets').width()));
            selectTicket.css({
                'marginLeft': x + 'px'
            });
        });

        var firstMonth = this.$el.find('.day:first').attr('data-month');
        var lastMonth = this.$el.find('.day:last').attr('data-month');
        var firstDayInMonth = this.$el.find('.day[data-month=' + firstMonth + ']:first');
        var firstDayInOtherMonth = this.$el.find('.day[data-month=' + lastMonth + ']:first');
        if (firstMonth !== lastMonth) {
            this.$el.find('#selectTicket').append('<span class="month">' + firstMonth + '</span>');
        }
        selectTicket.append('<span class="month" style="margin-left:' + ((this.$el.find('.day').index(firstDayInOtherMonth) * 70) + 15) + 'px">' + lastMonth + '</span>');
    },

    render: function() {
        this.$el.html(this.template({
            days: this.filteredCollection.toJSON(),
            ticket: this.currentTicket.toJSON()
        }));
        this.renderSelectTicket();
        return this;
    }
});