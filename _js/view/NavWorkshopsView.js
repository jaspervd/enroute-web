var NavWorkshopsView = Backbone.View.extend({
    id: 'workshops',
    tagName: 'ul',
    template: tpl.workshops,

    initialize: function () {
        _.bindAll.apply(_, [this].concat(_.functions(this)));
    },

    render: function () {
        var date = new Date();
        this.model = _.reject(this.model.toJSON(), function (day) {
            return new Date(day.title) > date;
        });
        this.$el.append(this.template({days: this.model}));
        return this;
    }
});