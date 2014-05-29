/* globals NavigationView:true */
/* globals ContentView:true */
/* globals Days:true */

var EnRouteApp = Backbone.View.extend({
    id: 'container',
    tagName: 'div',
    template: tpl.enroute,
    currentScreen: 'info',

    initialize: function () {
        _.bindAll.apply(_, [this].concat(_.functions(this)));

        this.days = new Days();
        this.days.fetch();

        this.navigationView = new NavigationView({collection: this.days});
        this.contentView = new ContentView({collection: this.days});
    },

    changeScreen: function (item) {
        console.log("[EnRouteApp] changeScreen()");
        /*var $prevScreen = $('#' + this.currentScreen);
        var $newScreen = $(item).attr('data');
        this.contentView.updateScreen($newScreen);
        if (this.currentScreen !== $(item).attr('data')) {
            $('.screen').css('z-index', 0).removeClass('pushRight').removeClass('pushDown').not($prevScreen).css('margin-left', '-100%');
            setTimeout(function () { // fix pushDown
                $prevScreen.addClass('pushDown');
                $newScreen.addClass('pushRight');
            }, 50);
            this.currentScreen = $newScreen;
        }*/
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