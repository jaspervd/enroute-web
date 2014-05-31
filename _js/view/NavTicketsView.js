var NavTicketsView = Backbone.View.extend({
    id: 'tickets',
    tagName: 'div',
    template: tpl.tickets,

    initialize: function () {
        _.bindAll.apply(_, [this].concat(_.functions(this)));
    },

    render: function () {
        this.$el.append(this.template({days: this.model.toJSON()}));
        return this;
    }
});