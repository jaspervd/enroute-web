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
        var step = 360 / buildings;
        var degree;

        for (var i = 0; i < buildings; i++) {
            this.$el.append('<div class="building"></div>');
            this.$el.find('.building:last').css('transform', 'rotate(' + (step * i) + 'deg)');
        }

        setTimeout(function(){
            $('body').find('.building').addClass("show");
        }, 200); // current way to solve animation after added to the dom

        return this;
    }
});