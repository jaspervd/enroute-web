/* globals Contents:true */
/* globals Content:true */
/* globals AdminContentItemView:true */

var AdminContentView = Backbone.View.extend({
    template: tpl.admincontent,
    currentDay: 0,
    contents: undefined,

    initialize: function () {
        _.bindAll.apply(_, [this].concat(_.functions(this)));
        this.collection.on("sync reset destroy", this.render);
        this.contents = this.collection;
    },

    renderContent: function (content) {
        var adminContentItemView = new AdminContentItemView({model: content});
        this.$el.find('ul').append(adminContentItemView.render().$el);
    },

    updateToDay: function (day) {
        console.log('[AdminContentView] updateToDay()', day);
        this.currentDay = day;
        this.collection = this.contents;
        this.collection = new Contents(this.collection.where({day_id: this.currentDay}));
        this.render();
    },

    render: function () {
        this.$el.html(this.template());
        if (this.collection.length > 0) {
            this.collection.each(function (content, index) {
                this.renderContent(content);
            }, this);
        } else {
            this.$el.find('ul').remove();
            this.$el.append('<p>Er is nog geen content beschikbaar voor deze dag.</p>');
        }
        return this;
    }
});