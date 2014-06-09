var ContactView = Backbone.View.extend({
    id: 'contact',
    tagName: 'section',
    template: tpl.contact,

    initialize: function() {
        _.bindAll.apply(_, [this].concat(_.functions(this)));
    },

    render: function() {
        this.$el.html(this.template());
        return this;
    }
});