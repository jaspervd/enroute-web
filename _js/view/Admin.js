/* globals Content:true */

var AdminApp = Backbone.View.extend({
    id: 'container',
    tagName: 'div',
    template: tpl.admin,

    initialize: function () {
        _.bindAll.apply(_, [this].concat(_.functions(this)));

        this.content = new Content();
        this.content.fetch();

        //this.adminView = new AdminView({collection: this.days});
    },

    render: function () {
        this.$el.append(this.template());
        return this;
    }
});