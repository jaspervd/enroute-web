/* globals AdminContentItemView:true */

var AdminContentView = Backbone.View.extend({
    template: tpl.admincontent,

    initialize: function () {
        _.bindAll.apply(_, [this].concat(_.functions(this)));
        this.collection.on("sync reset", this.render);
    },

    renderContent: function (content) {
        this.$el.find('ul').append(new AdminContentItemView({model: content}).render().$el);
    },

    render: function () {
        this.$el.html(this.template());
        this.collection.each(function(content, index){
            this.renderContent(content);
        }, this);
        return this;
    }
});