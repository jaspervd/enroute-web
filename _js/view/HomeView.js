var HomeView = Backbone.View.extend({
    template: tpl.home,

    initialize: function() {
        _.bindAll.apply(_, [this].concat(_.functions(this)));

        this.collection.on('sync reset', this.render);
    },

    render: function() {
        console.log('[HomeView] render()');
        /*this.clear();
        var html = this.template(this.collection.toJSON());
        var newElement = $(html);
        this.$el.replaceWith(newElement);
        this.setElement(newElement);*/

        this.$el.html(this.template());

        this.createDays();
        //this.handleDrag();
        this.handleTheRealDrag();
        //this.handleDrop();

        return this;
    },

    handleTheRealDrag: function() {
        $('#daySelector').rotatable({angle: Math.PI, handle: $('.handle')});
        /*$('#daySelector').draggable({
            handle: '.handle',
            helper: 'clone',
            drag: function(event, ui) {
                $('body').disableSelection();

                var x = ui.position.left - $('#daySelector').width() / 2;
                var y = ui.position.top - $('#daySelector').height() / 2;
                var angle = -(Math.atan2(x, y) * 360);
                var rotateCSS = 'rotate(' + angle + 'deg)';
                console.log(angle);

                $(this).css({
                    '-moz-transform': rotateCSS,
                    '-webkit-transform': rotateCSS
                });
            },
            stop: function() {
                $('body').enableSelection();
            }
        });*/
    },

    createDays: function() {
        var step = 360 / this.collection.length;
        var radius = $('#durbuy').width() / 2 + 40;
        var x, y, angle;
        for (var i = 1; i <= this.collection.length; i++) {
            angle = -((step * i) * (Math.PI / 180) + 160);
            x = Math.cos(angle) * radius;
            y = Math.sin(angle) * radius;
            this.$el.find('ul').append('<li class="day" style="margin-top:' + x + 'px;margin-left:' + y + 'px">#' + i + '</li>');
        }
    },

    handleDrop: function() {
        var self = this;
        $('.day').droppable({
            accept: "#dragDayHandle",
            tolerance: "pointer",
            drop: function(event, ui) {
                var $oppositeElement = $('#days').find('li').eq(($(this).index() + self.collection.length / 2) - self.collection.length);
                console.log($oppositeElement);
                var drop_p = $(this).offset();
                var drag_p = ui.draggable.offset();
                var left_end = drop_p.left - drag_p.left + 1;
                var top_end = drop_p.top - drag_p.top + 1;
                ui.draggable.animate({
                    top: '+=' + top_end,
                    left: '+=' + left_end
                }, 100);
                $('#showSelectedDay').animate({
                    top: '-=' + top_end,
                    left: '-=' + left_end
                }, 100);
                return true;
            }
        });
    },

    handleDrag: function() {
        var drag = $('#dragDayHandle');
        $('#showSelectedDay, #dragDayHandle').css('margin-top', -($('#durbuy').width() / 2 + 40));
        var radius = $('#durbuy').width() / 2 + 40;
        var self = this;
        drag.draggable({
            start: function(e) {
                if (!drag.data('circle')) {
                    drag.data('circle', {
                        radius: $('#durbuy').width() / 2 + 40,
                        centerX: 0,
                        centerY: radius
                    });
                }
            },
            drag: function(e, ui) {
                var positionHandle = self.calculatePosition(false, drag.data('circle'));
                ui.position.top = positionHandle.top;
                ui.position.left = positionHandle.left;
                var positionSelected = self.calculatePosition(true, drag.data('circle'));
                $('#showSelectedDay').css({
                    'top': positionSelected.top,
                    'left': positionSelected.left
                });
            }
        });
    },

    calculatePosition: function(inverted, data) {
        var offsetSelector = $('#durbuy').parent();
        var angle;
        var x = event.pageX + 40 - offsetSelector.offset().left - offsetSelector.width() / 2;
        var y = event.pageY + 40 - offsetSelector.offset().top - offsetSelector.height() / 2;
        if (inverted !== true) {
            angle = Math.atan2(x, y);
        } else {
            angle = Math.atan2(-x, -y);
        }
        var posTop = Math.ceil((data.centerY + (Math.cos(angle) * data.radius)));
        var posLeft = Math.ceil((data.centerX + (Math.sin(angle) * data.radius)));
        return {
            top: posTop,
            left: posLeft
        };
    }
});