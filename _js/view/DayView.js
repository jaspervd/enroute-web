var DayView = Backbone.View.extend({
    id: 'day',
    tagName: 'section',
    template: tpl.day,

    initialize: function() {
        _.bindAll.apply(_, [this].concat(_.functions(this)));
    },

    render: function() {
        this.$el.html(this.template());
        var buildings = 12;
        for (var i = 0; i < buildings; i++) {
            var angle = -(((360 / buildings) * (i + 1)) * (Math.PI / 180) + 160);
            this.$el.append('<div class="building" style="transform:rotate('+ angle +'deg);"></div>');
        }

        return this;
    }
});