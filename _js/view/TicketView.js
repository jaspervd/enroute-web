/* globals Ticket:true */
var TicketView = Backbone.View.extend({
    model: Ticket,
    template: tpl.ticket,

    initialize: function () {
        _.bindAll.apply(_, [this].concat(_.functions(this)));
    },

    events: {
        'click #btnSubmit': 'orderTicket'
    },

    orderTicket: function() {
        console.log('[TicketView] orderTicket()');
        var ticket = new Ticket({
            day_id: this.model.get('id'),
            name: $('txtName').val(),
            email: $('txtEmail').val()
        });
        if($('#rngTickets').val()) {
            ticket.set('tickets', parseInt($('#rngTickets').val()));
        }
        console.log(ticket);
    },

    render: function () {
        var html = this.template(this.model.toJSON());
        var newElement = $(html);
        this.$el.replaceWith(newElement);
        this.setElement(newElement);
        return this;
    }
});