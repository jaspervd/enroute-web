/* globals Content:true */
/* globals AdminContentView:true */

var AdminApp = Backbone.View.extend({
    id: 'container',
    tagName: 'div',
    template: tpl.admin,

    initialize: function () {
        _.bindAll.apply(_, [this].concat(_.functions(this)));

        this.content = new Content();
        this.content.fetch();

        this.adminContentView = new AdminContentView({collection: this.content});
    },

    render: function () {
        this.$el.append(this.template());
        this.$el.append(this.adminContentView.render().$el);
        return this;
    }
});