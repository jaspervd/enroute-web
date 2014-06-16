/* globals Buildings:true */
/* globals Building:true */
/* globals BiggieSmalls:true */
/* globals AdminContentItemView:true */

var AdminBiggieSmallsView = Backbone.View.extend({
    id: 'admin_biggiesmalls',
    tagName: 'section',
    template: tpl.admincontent,
    currentDay: 0,
    biggiesmalls: undefined,

    initialize: function() {
        _.bindAll.apply(_, [this].concat(_.functions(this)));
        this.collection.on("sync reset destroy", this.render);
        this.biggiesmalls = this.collection;
    },

    renderBiggieSmalls: function(content) {
        var adminContentItemView = new AdminContentItemView({
            model: content
        });
        this.$el.find('ul').append(adminContentItemView.render().$el);
    },

    updateToDay: function(day) {
        console.log('[AdminBiggieSmallsView] updateToDay()', day);
        this.currentDay = day;
        this.collection = this.biggiesmalls;
        this.collection = new BiggieSmalls(this.collection.where({
            day_id: this.currentDay
        }));
        this.render();
    },

    render: function() {
        this.$el.html(this.template());
        if (this.collection.length > 0) {
            this.collection.each(function(building, index) {
                this.renderBiggieSmalls(building);
            }, this);
        } else {
            this.$el.find('ul').remove();
            this.$el.append('<div class="border_shadow"><p class="content_item">Er zijn nog geen foto\'s beschikbaar voor deze dag.</p><div class="border_right"></div><div class="border_bottom"></div><div class="border_connection"></div></div>');
        }
        return this;
    }
});