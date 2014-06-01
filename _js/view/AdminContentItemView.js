var AdminContentItemView = Backbone.View.extend({
    template: tpl.admincontentitem,

    initialize: function () {
        _.bindAll.apply(_, [this].concat(_.functions(this)));
    },

    events: {
        "click .approve": "approveContent",
        "click .delete": "deleteContent"
    },

    approveContent: function(e) {
        console.log('[AdminContentItemView] approveContent()');
        e.preventDefault();
        this.model.set('approved', 1);
        this.model.url = this.model.urlRoot + "/" + this.model.id;
        this.model.save();
    },

    deleteContent: function(e) {
        console.log('[AdminContentItemView] deleteContent()');
        e.preventDefault();
        this.model.url = this.model.urlRoot + "/" + this.model.id;
        this.model.destroy();
    },

    render: function(){
        this.$el.html(this.template(this.model.toJSON()));
        return this;
    }
});