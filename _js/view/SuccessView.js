var SuccessView = Backbone.View.extend({
    className: 'success',
    tagName: 'p',
    template: tpl.success,

    initialize: function () {
        _.bindAll.apply(_, [this].concat(_.functions(this)));
    },

    render: function () {
        this.$el.append(this.template(this.model));
        return this;
    }
});