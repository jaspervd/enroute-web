var BuildingView = Backbone.View.extend({
    className: 'building',
    tagName: 'div',
    template: tpl.building,

    initialize: function () {
        _.bindAll.apply(_, [this].concat(_.functions(this)));
    },

    events: {
        'mouseenter .wrapper': 'playVideos',
        'click .wrapper': 'playVideos',
        'mouseleave .wrapper': 'stopVideos',
        'mouseenter .layer': 'playSound',
        'click .layer': 'playSound',
        'mouseleave .layer': 'stopSound'
    },

    playVideos: function(e) {
        console.log('[BuildingView] playVideos()');
        this.$el.find('video').each(function() {
            this.play();
        });
    },

    stopVideos: function(e) {
        console.log('[BuildingView] stopVideos()');
        this.$el.find('video').each(function() {
            this.pause();
        });
    },

    playSound: function(e) {
        console.log('[BuildingView] playSound()', e.currentTarget);
        var index = this.$el.find('.layer').index($(e.currentTarget));

        this.$el.find('audio').eq(index).get(0).play();
    },

    stopSound: function(e) {
        console.log('[BuildingView] playSound()', e.currentTarget);
        var index = this.$el.find('.layer').index($(e.currentTarget));

        this.$el.find('audio').eq(index).get(0).pause();
    },

    render: function () {
        this.$el.html(this.template(this.model.toJSON()));
        return this;
    }
});