var InfoView = Backbone.View.extend({
    id: 'info',
    tagName: 'section',
    template: tpl.info,

    initialize: function() {
        _.bindAll.apply(_, [this].concat(_.functions(this)));
    },

    render: function() {
        this.$el.html(this.template());
        return this;
    }
});