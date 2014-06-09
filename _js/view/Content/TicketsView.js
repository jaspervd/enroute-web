var TicketsView = Backbone.View.extend({
    id: 'tickets',
    tagName: 'section',
    template: tpl.tickets,

    initialize: function() {
        _.bindAll.apply(_, [this].concat(_.functions(this)));
    },

    render: function() {
        this.$el.html(this.template());
        return this;
    }
});