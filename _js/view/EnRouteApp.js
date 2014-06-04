/* globals NavigationView:true */
/* globals ContentView:true */
/* globals Days:true */
var EnRouteApp = Backbone.View.extend({
    id: 'container',
    tagName: 'div',
    template: tpl.enroute,
    currentScreen: 'info',
    hardcodedPages: ['info', 'contact'],

    initialize: function() {
        _.bindAll.apply(_, [this].concat(_.functions(this)));

        this.days = new Days();
        this.days.fetch();

        this.navigationView = new NavigationView({
            collection: this.days
        });

        this.contentView = new ContentView({
            collection: this.days
        });
    },

    changeScreen: function(item) {
        console.log("[EnRouteApp] changeScreen()");
        var $prevScreen = $('#' + this.currentScreen);
        var $newScreen = '';
        var externalLoadedScreen = false; // fix for dayView()

        if ($(item).attr('data')) {
            $newScreen = $(item).attr('data');
        } else {
            $newScreen = item;
            externalLoadedScreen = true;
        }

        var self = this; // fix for timeout
        if (this.currentScreen !== $newScreen || externalLoadedScreen) {
            if (!_.contains(this.hardcodedPages, $newScreen)) {
                this.contentView.updateScreen($newScreen);
            } else {
                this.navigateToCorrectPage();
            }
            $('.screen').removeClass('pushRightIn pushRightOut');
            $('#info, #contact').css('margin-left', '-100%');
            setTimeout(function() { // fix push
                $prevScreen.addClass('pushRightOut');
                $('#' + $newScreen).css('margin-left', '').addClass('pushRightIn');
                self.contentView.$el.children('[class=screen]').not('#info, #contact').remove();
            }, 50);
            this.currentScreen = $newScreen;
        }
    },

    navigateToCorrectPage: function() {
        if (this.currentScreen === 'contact') {
            Backbone.history.navigate('contact/');
        } else {
            Backbone.history.navigate('home/');
        }
    },

    render: function() {
        this.$el.append(this.template());
        this.$el.append(this.navigationView.render().$el);
        this.$el.append(this.contentView.render().$el);
        this.navigationView.on('itemClicked', this.changeScreen);
        if (!_.contains(this.hardcodedPages, this.currentScreen)) {
            this.days.on('sync', this.changeScreen(this.currentScreen));
        } else {
            this.navigateToCorrectPage();
        }
        this.$el.append('<div class="clear"></div>');
        return this;
    }
});