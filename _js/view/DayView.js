/* globals BuildingView:true */
/* globals Buildings:true */

var DayView = Backbone.View.extend({
    id: 'day',
    tagName: 'section',
    template: tpl.day,
    buildings: undefined,

    initialize: function() {
        _.bindAll.apply(_, [this].concat(_.functions(this)));

        this.buildings = new Buildings();
        this.buildings.url = this.buildings.url + '/day/' + this.model.get('id');
        this.buildings.fetch();
        this.buildings.on('sync reset', this.render);
    },

    render: function() {
        this.$el.html(this.template(this.model.toJSON()));
        var step = 360 / this.buildings.length;
        var degree;
        for (var i = 0; i < this.buildings.length; i++) {
            var buildingView = new BuildingView({model: this.buildings.at(i)});
            console.log(this.buildings.at(i));
            this.$el.append(buildingView.render().$el);
            this.$el.find('.building:last').css('transform', 'rotate(' + (step * i) + 'deg)');
        }

        setTimeout(function(){
            $('body').find('.building').addClass("show");
        }, 200); // current way to solve animation after added to the dom

        return this;
    }
});