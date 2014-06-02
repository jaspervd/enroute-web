/* globals Contents:true */
/* globals Days:true */
/* globals AdminContentView:true */

var AdminApp = Backbone.View.extend({
    id: 'container',
    tagName: 'div',
    template: tpl.admin,
    prevDay: 0,
    currentDay: 0,

    initialize: function () {
        _.bindAll.apply(_, [this].concat(_.functions(this)));

        this.days = new Days();
        this.days.fetch();
        this.days.on('sync reset', this.render);

        this.content = new Contents();
        this.content.fetch();

        this.adminContentView = new AdminContentView({collection: this.content});
    },

    events: {
        'click .title': 'showDay'
    },

    showDay: function(e) {
        console.log('[AdminApp] showDay()');
        e.preventDefault();
        this.currentDay = $(e.currentTarget).attr('data');
        this.renderDay();
    },

    renderDay: function() {
        if(this.prevDay !== this.currentDay) {
            this.prevDay = this.currentDay;
            this.adminContentView.updateToDay(this.currentDay);
            this.render();
            Backbone.history.navigate('admin/'+ this.currentDay);
        }
    },

    render: function () {
        this.$el.html(this.template({days: this.days.toJSON()}));
        this.$el.append(this.adminContentView.render().$el);
        if(this.currentDay > 0) {
            this.content.on('sync reset', this.renderDay);
        }
        return this;
    }
});