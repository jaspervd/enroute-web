/* globals BuildingView:true */
/* globals Buildings:true */

var DayView = Backbone.View.extend({
    id: 'day',
    tagName: 'section',
    template: tpl.day,
    buildings: undefined,
    bigScreen: true,

    initialize: function() {
        _.bindAll.apply(_, [this].concat(_.functions(this)));

        this.buildings = new Buildings();
        this.buildings.url = this.buildings.url + '/day/' + this.model.get('id');
        this.buildings.fetch();
        this.buildings.on('sync reset', this.render);

        $(window).on('resize', this.resizeHandler);
    },

    resizeHandler: function() {
        var newSize = $('body').width() > 640;
        if(newSize !== this.bigScreen) {
            this.bigScreen = newSize;
            this.render();
        }
    },

    render: function() {
        this.$el.html(this.template(this.model.toJSON()));
        var step = 360 / this.buildings.length;
        var degree;
        for (var i = 0; i < this.buildings.length; i++) {
            var buildingView = new BuildingView({
                model: this.buildings.at(i)
            });
            this.$el.append(buildingView.render().$el);
            if(this.bigScreen) {
                this.$el.find('.building:last').css('transform', 'rotate(' + (step * i) + 'deg)');
            }
        }

        var fixPosition = $('#durbuy').height() / 2 + 30;
        setTimeout(function() {
            $.each($('.building'), function(index, building) {
                if(this.bigScreen) {
                    $(this).css({
                        'margin-top': -($(this).find('.wrapper').height()) - fixPosition  + 'px',
                        'transform-origin-y': $(this).find('.wrapper').height() + fixPosition + 'px'
                    });
                } else {
                    $(this).css({
                        'margin-left': ($(this).find('.wrapper').width() + 20) * index  + 'px',
                        'margin-top': -($(this).find('.wrapper').height()) - fixPosition + 'px'
                    });
                }
            });
        }, 200); // current way to solve animation after added to the dom

        return this;
    }
});