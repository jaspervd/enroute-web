/* globals Buildings:true */
/* globals Building:true */
/* globals BiggieSmalls:true */
/* globals AdminContentItemView:true */

/*

var AdminContentView = Backbone.View.extend({
    id: 'admin_content',
    tagName: 'section',
    template: tpl.admincontent,
    currentDay: 0,
    contents: [],
    buildings: undefined,
    biggieSmalls: undefined,
    currentContentType: 'buildings',

    initialize: function () {
        _.bindAll.apply(_, [this].concat(_.functions(this)));
        console.log(this.collection);
        this.buildings = this.options.buildings;
        this.biggieSmalls = this.options.biggieSmalls;
        this.buildings.on('sync reset remove', this.render);
        this.biggieSmalls.on('sync reset remove', this.render);
    },

    events: {
        'click .contentType': 'setContentType'
    },

    setContentType: function(e) {
        e.preventDefault();
        var newContentType = $(e.currentTarget).attr('data-content-type');
        if(this.currentContentType !== newContentType) {
            this.currentContentType = newContentType;
            if(this.currentContentType === 'buildings') {
                this.contents = this.buildings;
            } else {
                this.contents = this.biggieSmalls;
            }
            this.render();
        }
    },

    renderContent: function (content) {
        var adminContentItemView = new AdminContentItemView({model: content});
        this.$el.find('ul').append(adminContentItemView.render().$el);
    },

    updateToDay: function (day) {
        console.log('[AdminContentView] updateToDay()', day);
        this.currentDay = day;
        if(this.currentContentType === 'buildings') {
            this.contents = new Buildings(this.buildings.where({day_id: this.currentDay}));
        } else {
            this.contents = new BiggieSmalls(this.biggieSmalls.where({day_id: this.currentDay}));
        }
        this.render();
    },

    render: function () {
        this.$el.html(this.template());
        if (this.contents.length > 0) {
            this.contents.each(function (content, index) {
                this.renderContent(content);
            }, this);
        } else {
            this.$el.find('ul').remove();
            this.$el.append('<p>Er is nog geen content beschikbaar voor deze dag.</p>');
        }
        return this;
    }
});
 */