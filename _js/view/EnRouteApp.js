/* globals NavigationView:true */
/* globals ContentView:true */

var EnRouteApp = Backbone.View.extend({
    id: 'container',
    tagName: 'div',
    template: tpl.enroute,
    currentScreen: 'info',

    initialize: function () {
        _.bindAll.apply(_, [this].concat(_.functions(this)));

        this.navigationView = new NavigationView();
        this.contentView = new ContentView();
    },

    changeScreen: function(item) {
        console.log("[EnRouteApp] changeScreen()");
        var $prevScreen = $('#' + this.currentScreen);
        $prevScreen.css('z-index', 0);
        this.currentScreen = $(item).attr('data');
        $('#' + this.currentScreen).css('z-index', 5).stop().animate({
            'margin-left': '0'
        }, 1000, 'easeOutQuint', function() {
            $prevScreen.css('margin-left', '-100%');
        });
    },

    render: function () {
        this.$el.append(this.template());
        this.$el.append(this.navigationView.render().$el);
        this.$el.append(this.contentView.render().$el);
        this.navigationView.on('itemClicked', this.changeScreen);
        this.$el.append('<div class="clear"></div>');
        return this;
    }
});