/* globals Buildings:true */
/* globals BiggieSmalls:true */
/* globals Days:true */
/* globals AdminBuildingsView:true */
/* globals AdminBiggieSmallsView:true */

var AdminApp = Backbone.View.extend({
    id: 'container',
    tagName: 'div',
    template: tpl.admin,
    prevDay: 0,
    currentDay: 0,
    currentContentType: 0,

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
        'click .title': 'showDay',
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
        this.currentDay = $(e.currentTarget).attr('data');
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