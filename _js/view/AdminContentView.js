/* globals AdminContentItemView:true */

var AdminContentView = Backbone.View.extend({
    template: tpl.admincontent,
    currentDay: 0,

    initialize: function () {
        _.bindAll.apply(_, [this].concat(_.functions(this)));
        this.collection.on("sync reset", this.render);
    },

    renderContent: function (content) {
        var adminContentItemView = new AdminContentItemView({model: content});
        this.$el.find('ul').append(adminContentItemView.render().$el);
        adminContentItemView.on('deleteContent', this.deleteModelFromCollection);
    },

    deleteModelFromCollection: function (model) {
        this.collection.remove(model);
        this.render();
    },

    updateToDay: function (day) {
        console.log('[AdminContentView] updateToDay()', day);
        this.currentDay = day;
        var self = this;
        this.collection = _.reject(this.collection.toJSON(), function (day) {
            return parseInt(day.id) !== parseInt(self.currentDay);
        });
        this.render();
    },

    render: function () {
        this.$el.html(this.template());
        this.currentDay = 2;
        if (this.currentDay > 0) {
            console.log('ok');
            //this.collection = this.collection.where({day_id: this.day});
        }
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