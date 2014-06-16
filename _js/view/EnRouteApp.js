/* globals ContentView:true */
/* globals HomeView:true */
/* globals Days:true */
/* globals DayView:true */
/* globals $f:true */
var EnRouteApp = Backbone.View.extend({
    id: 'container',
    tagName: 'div',
    template: tpl.enroute,
    currentDay: undefined,

    initialize: function() {
        _.bindAll.apply(_, [this].concat(_.functions(this)));

        this.days = new Days();
        this.days.fetch();

        this.contentView = new ContentView({
            collection: this.days
        });

        this.homeView = new HomeView({
            collection: this.days
        });

        this.homeView.on('day_selected', this.showDay);
    },

    events: {
        'click #showMov a': 'toggleMov',
        'click #closeMov a': 'toggleMov'
    },

    toggleMov: function(e) {
        e.preventDefault();
        $('#home, #day').toggle();
        $('#showMov').toggleClass('hide');
        $('#closeMov').toggleClass('show');
        $('#movtoshowoff').toggle();
        var iframe = document.getElementById('movtoshowoff');
        var player = $f(iframe);
        if($('#closeMov').hasClass('show')) {
            player.api('play');
        } else {
            player.api('pause');
        }
    },

    showDay: function(day) {
        console.log('[EnRouteApp]', day);
        if (day !== this.currentDay) {
            $('#day').remove();
            var dayView = new DayView({
                model: this.days.findWhere({
                    title: day
                })
            });
            this.currentDay = day;
            this.$el.append(dayView.render().$el);
            Backbone.history.navigate('dag/' + day);
        }
    },

    render: function() {
        this.$el.html(this.template());
        this.$el.append('<div id="noise"></div>');
        this.$el.append(this.contentView.render().$el);
        this.$el.append(this.homeView.render().$el);
        return this;
    }
});