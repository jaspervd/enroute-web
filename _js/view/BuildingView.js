var BuildingView = Backbone.View.extend({
    className: 'building',
    tagName: 'div',
    template: tpl.building,

    initialize: function () {
        _.bindAll.apply(_, [this].concat(_.functions(this)));
    },

    render: function () {
        this.$el.html(this.template(this.model.toJSON()));
        return this;
    }
});