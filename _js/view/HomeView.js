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

            $(document).mouseup(function() {
                dragging = false;
                console.log($target.find('.select'));
                $('*').enableSelection();
            });

            //TODO:
            //collision test for $target or by calculating item by degrees

            $(document).on('mousemove', function(e) {
                if (dragging) {
                    var center_x = (offset.left) + ($target.width() / 2);
                    var center_y = (offset.top) + ($target.height() / 2);
                    var mouse_x = e.pageX;
                    var mouse_y = e.pageY;
                    var radians = Math.atan2(mouse_x - center_x, mouse_y - center_y);
                    var degree = (radians * (180 / Math.PI) * -1) - 90; // convert degree for outer
                    $target.css('transform', 'rotate(' + degree + 'deg)');
                }
            });
        }
    },

    createDays: function() {
        var step = 360 / this.collection.length;
        var radius = $('#durbuy').width() / 2 + 60;
        var x, y, angle;
        for (var i = 1; i <= this.collection.length; i++) {
            angle = -((step * i) * (Math.PI / 180) + 160);
            x = Math.cos(angle) * radius;
            y = Math.sin(angle) * radius;
            this.$el.find('ul').append('<li class="day" style="margin-top:' + x + 'px;margin-left:' + y + 'px">#' + i + '</li>');
        }
    },
});