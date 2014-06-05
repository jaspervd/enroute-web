var NavigationView = Backbone.View.extend({
    id: 'nav',
    tagName: 'nav',
    template: tpl.navigation,

    initialize: function() {
        _.bindAll.apply(_, [this].concat(_.functions(this)));
    },

    render: function() {
        this.$el.html(this.template());
        return this;
    }
});