/* globals Buildings:true */
/* globals BiggieSmalls:true */
/* globals Days:true */
/* globals AdminBuildingsView:true */
/* globals AdminBiggieSmallsView:true */

var AdminApp = Backbone.View.extend({
    id: 'container',
    className: 'admin',
    tagName: 'div',
    template: tpl.admin,
    prevDay: 0,
    currentDay: 0,
    currentContentType: 'buildings',

    initialize: function() {
        _.bindAll.apply(_, [this].concat(_.functions(this)));

        this.days = new Days();
        this.days.fetch();
        this.days.on('sync reset', this.render);

        this.buildings = new Buildings();
        this.buildings.fetch();

        this.biggieSmalls = new BiggieSmalls();
        this.biggieSmalls.fetch();

        this.adminBuildingsView = new AdminBuildingsView({
            collection: this.buildings
        });
        this.adminBiggieSmallsView = new AdminBiggieSmallsView({
            collection: this.biggieSmalls
        });
    },

    events: {
        'click .day': 'showDay',
        'click .contentType': 'setContentType'
    },

    setContentType: function(e) {
        e.preventDefault();
        var newContentType = $(e.currentTarget).attr('data-content-type');
        if (this.currentContentType !== newContentType) {
            this.currentContentType = newContentType;
            this.render();
        }
    },

    showDay: function(e) {
        console.log('[AdminApp] showDay()');
        e.preventDefault();
        this.currentDay = $(e.currentTarget).attr('data-day-id');
        this.renderDay();
    },

    renderDay: function() {
        if (this.prevDay !== this.currentDay) {
            this.prevDay = this.currentDay;
            if (this.currentContentType === 'buildings') {
                this.adminBuildingsView.updateToDay(this.currentDay);
            } else {
                this.adminBiggieSmallsView.updateToDay(this.currentDay);
            }

            this.render();
            Backbone.history.navigate('admin/' + this.currentDay);
        }
    },

    render: function() {
        this.$el.html(this.template({
            days: this.days.toJSON()
        }));

        var selectDay = this.$el.find('#selectDay');
        var self = this;
        selectDay.on('mousemove', function(e) {
            selectDay.css({
                'width': self.days.length * (self.$el.find('.day').parent().width() + 10) + 100
            });
            var x = -(((e.pageX - selectDay.position().left) / selectDay.parent().width()) * (selectDay.width() + parseInt(selectDay.css('paddingLeft')) + parseInt(selectDay.css('paddingRight')) - selectDay.parent().width()));
            selectDay.css({
                'marginLeft': x + 'px'
            });
        });

        var firstMonth = this.$el.find('.day:first').attr('data-month');
        var lastMonth = this.$el.find('.day:last').attr('data-month');
        var firstDayInMonth = this.$el.find('.day[data-month=' + firstMonth + ']:first');
        var firstDayInOtherMonth = this.$el.find('.day[data-month=' + lastMonth + ']:first');
        if (firstMonth !== lastMonth) {
            selectDay.append('<span class="month">' + firstMonth + '</span>');
        }
        selectDay.append('<span class="month" style="margin-left:' + (this.$el.find('.day').index(firstDayInOtherMonth) * 75.5) + 'px">' + lastMonth + '</span>');

        if (this.currentContentType === 'buildings') {
            this.$el.append(this.adminBuildingsView.render().$el);
        } else {
            this.$el.append(this.adminBiggieSmallsView.render().$el);
        }
        if (this.currentDay > 0) {
            this.buildings.on('sync reset', this.renderDay);
            this.biggieSmalls.on('sync reset', this.renderDay);
        }
        return this;
    }
});