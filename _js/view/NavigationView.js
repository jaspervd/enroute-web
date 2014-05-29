var NavigationView = Backbone.View.extend({
    id: 'navigation',
    tagName: 'nav',
    template: tpl.navigation,

    initialize: function () {
        _.bindAll.apply(_, [this].concat(_.functions(this)));
        this.collection.on('sync reset', this.render);
    },

    events: {
        "click a": "itemClicked"
    },

    itemClicked: function(e) {
        e.preventDefault();
        console.log("[NavigationView] itemClicked()");
        if($(e.currentTarget).attr('class') === 'available') {
            this.trigger('itemClicked', $(e.currentTarget).prev());
        } else {
            this.trigger('itemClicked', e.currentTarget);
        }
    },

    render: function () {
        this.$el.find('li').remove();
        this.$el.append(this.template({days: this.collection.toJSON()}));
        return this;
    }
});