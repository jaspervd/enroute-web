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
        var $prevScreen = $('#' + this.currentScreen);
        var $newScreen = '';
        var externalLoadedScreen = false; // fix for dayView()
        if($(item).attr('data')) {
            $newScreen = $(item).attr('data');
        } else {
            $newScreen = item;
            externalLoadedScreen = true;
        }
        var self = this; // fix for timeout
        if (this.currentScreen !== $newScreen || externalLoadedScreen) {
            if ($newScreen !== 'info') {
                this.contentView.updateScreen($newScreen);
            }
            $('.screen').removeClass('pushRight pushDown');
            $('#info').css({'z-index': 5, 'margin-left': '-100%'});
            $prevScreen.css('margin-left', 0);
            setTimeout(function () { // fix pushDown
                $prevScreen.removeClass('pushRight').addClass('pushDown');
                $('#' + $newScreen).css('margin-left', '').removeClass('pushDown').addClass('pushRight');
                self.contentView.$el.children('[class=screen]').not('#info').remove();
            }, 50);
            this.currentScreen = $newScreen;
        }
    },

    syncHandler: function () {
        console.log('hacky');
        this.changeScreen(this.currentScreen); // hacky method
    },

    render: function () {
        this.$el.append(this.template());
        this.$el.append(this.navigationView.render().$el);
        this.$el.append(this.contentView.render().$el);
        this.navigationView.on('itemClicked', this.changeScreen);
        if(this.currentScreen !== 'info') {
            this.days.on('sync', this.syncHandler);
        } else {
            Backbone.history.navigate('home/');
        }
        this.$el.append('<div class="clear"></div>');
        return this;
    }
});