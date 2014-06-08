var HomeView = Backbone.View.extend({
    template: tpl.home,

    initialize: function() {
        _.bindAll.apply(_, [this].concat(_.functions(this)));

        this.collection.on('sync reset', this.render);
    },

    render: function() {
        console.log('[HomeView] render()');

        this.$el.html(this.template());

        this.createDays();
        this.handleRotation();

        return this;
    },

    handleRotation: function() {
        var $target = $('#daySelector');
        var $handle = $target.find('.handle');
        if ($handle.length > 0) {
            var offset = $target.offset();
            var dragging = false;

            $handle.mousedown(function() {
                dragging = true;
                $('*').disableSelection();
            });

            var self = this;

            $(document).mouseup(function() {
                dragging = false;
                $('*').enableSelection();
                $.each($('.day'), function(key, value) {
                    if (self.checkForOverlap($target.find('.select'), $(value))) {
                        var center_x = (offset.left) + ($target.width() / 2);
                        var center_y = (offset.top) + ($target.height() / 2);
                        var mouse_x = $(value).offset().left + $(value).width() / 2;
                        var mouse_y = $(value).offset().top + $(value).height() / 2;
                        var radians = Math.atan2(mouse_x - center_x, mouse_y - center_y);
                        var degree = ((radians * (180 / Math.PI) * -1) + 90); // convert degree for reversal
                        self.trigger('day_selected', $(value).attr('data-day'));
                        $target.css('transform', 'rotate(' + degree + 'deg)');
                        return false;
                    }
                });
            });

            $(document).on('mousemove', function(e) {
                if (dragging) {
                    var center_x = (offset.left) + ($target.width() / 2);
                    var center_y = (offset.top) + ($target.height() / 2);
                    var mouse_x = e.pageX;
                    var mouse_y = e.pageY;
                    var radians = Math.atan2(mouse_x - center_x, mouse_y - center_y);
                    var degree = (radians * (180 / Math.PI) * -1) - 90; // convert degree for reversal
                    $target.css('transform', 'rotate(' + degree + 'deg)');
                }
            });
        }
    },

    checkForOverlap: function($select, $day) {
        var selectBox = {
            x1: $select.offset().top,
            y1: $select.offset().left,
            x2: ($select.offset().top + $select.width()),
            y2: ($select.offset().left + $select.width())
        };

        var dayBox = {
            x1: $day.offset().top,
            y1: $day.offset().left,
            x2: ($day.offset().top + $day.width()),
            y2: ($day.offset().left + $day.width())
        };

        return (selectBox.x1 <= dayBox.x1 && selectBox.y2 >= dayBox.y2 && selectBox.x2 >= dayBox.x2 && selectBox.y1 <= dayBox.y1);
    },

    createDays: function() {
        var step = 360 / this.collection.length;
        var radius = $('#durbuy').width() / 2 + 60;
        var x, y, angle;
        for (var i = 0; i < this.collection.length; i++) {
            angle = -((step * (i + 1)) * (Math.PI / 180) + 160);
            x = Math.cos(angle) * radius;
            y = Math.sin(angle) * radius;
            this.$el.find('ul').append('<li class="day" data-day="' + this.collection.at(i).get('title') + '" style="margin-top:' + x + 'px;margin-left:' + y + 'px">#' + i + '</li>');
        }
    },
});