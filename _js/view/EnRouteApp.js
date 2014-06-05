/* globals NavigationView:true */
/* globals HomeView:true */
/* globals Days:true */
var EnRouteApp = Backbone.View.extend({
    id: 'container',
    tagName: 'div',
    template: tpl.enroute,

    initialize: function() {
        _.bindAll.apply(_, [this].concat(_.functions(this)));

        this.days = new Days();
        this.days.fetch();

        this.navigationView = new NavigationView();
        this.homeView = new HomeView({
            collection: this.days
        });
    },

    render: function() {
        this.$el.html(this.template());
        this.$el.append(this.navigationView.render().$el);
        this.$el.append(this.homeView.render().$el);
        return this;
    }
});