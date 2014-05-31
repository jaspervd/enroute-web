/* globals NavWorkshopsView:true */
/* globals NavTicketsView:true */

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

    itemClicked: function (e) {
        e.preventDefault();
        console.log("[NavigationView] itemClicked()");
        var itemClass = $(e.currentTarget).attr('class');
        if (itemClass === 'workshops') {
            this.renderWorkshops();
        } else if (itemClass === 'tickets') {
            this.renderTickets();
        } else if (itemClass === 'available') {
            this.trigger('itemClicked', $(e.currentTarget).prev());
        } else {
            this.trigger('itemClicked', e.currentTarget);
        }
    },

    clear: function () {
        this.$el.find('header').remove();
        this.$el.find('#navControl').remove();
        this.$el.find('ul').remove();
    },

    renderWorkshops: function () {
        this.$el.find('#workshops, #tickets').remove();
        var navWorkshopsView = new NavWorkshopsView({model: this.collection});
        this.$el.append(navWorkshopsView.render().$el);
    },

    renderTickets: function () {
        this.$el.find('#workshops, #tickets').remove();
        var navTicketsView = new NavTicketsView({model: this.collection});
        this.$el.append(navTicketsView.render().$el);
    },

    render: function () {
        this.clear();
        this.$el.append(this.template());
        this.renderWorkshops();
        return this;
    }
});