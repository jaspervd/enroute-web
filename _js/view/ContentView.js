/* globals InfoView:true */
/* globals TicketsView:true */
/* globals ContactView:true */

var ContentView = Backbone.View.extend({
    id: 'content',
    tagName: 'section',
    template: tpl.content,
    currentContent: undefined,

    initialize: function() {
        _.bindAll.apply(_, [this].concat(_.functions(this)));
    },

    events: {
        'click nav a': 'showContent'
    },

    showContent: function(e) {
        console.log('[ContentView] showContent()');
        e.preventDefault();
        this.clear();
        this.$el.addClass('slideOut');
        $('nav a').parent().removeClass('active');
        $(e.currentTarget).parent().addClass('active');
        var newContent = $(e.currentTarget).attr('data-content');
        if (this.currentContent !== newContent) {
            this.currentContent = newContent;

            switch (this.currentContent) {
                case 'tickets':
                    var ticketsView = new TicketsView({collection: this.collection});
                    this.$el.append(ticketsView.render().$el);
                    break;

                case 'contact':
                    var contactView = new ContactView();
                    this.$el.append(contactView.render().$el);
                    break;

                default:
                case 'info':
                    var infoView = new InfoView();
                    this.$el.append(infoView.render().$el);
                    break;
            }
        }

        var self = this;
        this.$el.next().one('click', function() {
            $('nav a').parent().removeClass('active');
            self.$el.removeClass('slideOut');
        });
    },

    clear: function() {
        this.$el.find('section').remove();
    },

    render: function() {
        this.$el.html(this.template());
        return this;
    }
});