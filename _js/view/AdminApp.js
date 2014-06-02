/* globals Content:true */
/* globals Days:true */
/* globals AdminContentView:true */

var AdminApp = Backbone.View.extend({
    id: 'container',
    tagName: 'div',
    template: tpl.admin,
    currentDay: 0,

    initialize: function () {
        _.bindAll.apply(_, [this].concat(_.functions(this)));

        this.days = new Days();
        this.days.fetch();
        this.days.on('sync reset', this.render);

        this.content = new Content();
        this.content.fetch();

        this.adminContentView = new AdminContentView({collection: this.content});
    },

    events: {
        'click .title': 'showDay'
    },

    showDay: function(e) {
        console.log('[AdminApp] showDay()');
        e.preventDefault();
        var currentDay = $(e.currentTarget).attr('data');
        this.adminContentView.updateToDay(currentDay);
        this.render();
        Backbone.history.navigate('admin/'+ currentDay);                                                                         // taxi zo simpel zot het leven in elkaar
    },

    render: function () {
        this.$el.html(this.template({days: this.days.toJSON()}));
        this.$el.append(this.adminContentView.render().$el);
        return this;
    }
});