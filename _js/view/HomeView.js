/* globals Moment:true */

var HomeView = Backbone.View.extend({
    id: 'home',
    tagName: 'div',
    template: tpl.home,
    currentTreeRows: null,

    initialize: function() {
        _.bindAll.apply(_, [this].concat(_.functions(this)));

        this.collection.on('sync reset', this.render);
    },

    render: function() {
        console.log('[HomeView] render()');
        this.$el.html(this.template());

        this.currentTreeRows = 0;
        this.createForest();
        this.createDays();
        this.handleRotation();

        $(window).on('resize', this.createForest);

        return this;
    },

    createForest: function() {
        var step = 360 / 50;
        var x, y, z, angle, zoom;
        var treeRows = parseInt($('body').width() / 100) / 2;
        var fixRows = 30;
        console.log(this.currentTreeRows, treeRows);
        if (this.currentTreeRows !== treeRows) {
            this.currentTreeRows = treeRows;
            $('.tree, .rocks').remove();

            for (var n = 1; n < treeRows; n++) {
                var radius = $('#forest').width() / 2 - (fixRows * n) - 30;
                var rockI = _.random(0, 49); // no pun intended
                for (var i = 0; i <= 50; i++) {
                    angle = (step * (i + 1)) * (Math.PI / 180);
                    x = Math.cos(angle) * (radius - 30) - fixRows * 2;
                    y = Math.sin(angle) * (radius - 15) - fixRows;
                    zoom = _.random(70, 99);
                    if (rockI === i && n > 3 && n < (treeRows-1)) {
                        this.$el.find('#forest').append('<div class="rocks" style="margin-top:' + (x) + 'px;margin-left:' + (y - 50) + 'px;z-index:' + parseInt(z) + '"></div>');
                    } else {
                        if ((i % _.random(1, 20)) > 0) {
                            if (y < $('#forest').width() / 2) {
                                z = x;
                            } else {
                                z = -1 * x;
                            }
                            this.$el.find('#forest').append('<div data-circle="' + n + '" class="tree type' + _.random(1, 4) + '" style="margin-top:' + x + 'px;margin-left:' + y + 'px;z-index:' + parseInt(z) + ';background-size:' + zoom + '%"></div>');
                        }
                    }
                }
            }
        }
    },

    createDays: function() {
        var step = 360 / this.collection.length;
        var radius = $('#durbuy').width() / 2 + 95;
        var x, y, angle, date;
        for (var i = 0; i < this.collection.length; i++) {
            date = new Date(this.collection.at(i).get('title'));
            angle = -((step * (i + 1)) * (Math.PI / 180) + 160);
            x = Math.cos(angle) * radius - 10;
            y = Math.sin(angle) * radius;
            this.$el.find('ul').append('<li class="day" data-day="' + this.collection.at(i).get('title') + '" style="margin-top:' + x + 'px;margin-left:' + y + 'px">' + date.getDate() + '</li>');
        }
    },

    handleRotation: function() {
        var $target = $('#daySelector');
        var $handle = $target.find('.handle');
        if ($handle.length > 0) {
            var offset = $target.offset();
            var dragging = false;

            $handle.on('touchstart mousedown', function(e) {
                e.stopPropagation();
                e.preventDefault();
                dragging = true;
                $('*').disableSelection();
            });

            var self = this;

            $(document).on('touchend mouseup', function(e) {
                e.stopPropagation();
                e.preventDefault();
                if (dragging) {
                    dragging = false;
                    $('*').enableSelection();
                    $.each($('.day'), function(key, value) {
                        if (self.checkForOverlap($target.find('.select'), $(value))) {
                            var radians = self.calculateRadians(offset, $target, $(value).offset().left + $(value).width() / 2, $(value).offset().top + $(value).height() / 2);
                            var degree = (radians * (180 / Math.PI) * -1) + 90;
                            self.trigger('day_selected', $(value).attr('data-day'));
                            $target.find('.month').css('transform', 'rotate(' + (degree * -1) + 'deg)');
                            $target.css('transform', 'rotate(' + degree + 'deg)');
                            // TODO: animate ^ (via step)
                            // $('.tree').addClass('goInsideBitch');
                            return false;
                        }
                    });
                }
            });

            var step = 360 / this.collection.length;
            var toctocAudio = document.getElementById('toctoc');
            var selectedDay;
            var $outerDays;

            $(document).on('touchmove mousemove', function(e) {
                e.stopPropagation();
                e.preventDefault();
                if (dragging) {
                    var radians = self.calculateRadians(offset, $target, e.pageX, e.pageY);
                    var degree = (radians * (180 / Math.PI) * -1) - 90; // convert degree for reversal
                    $target.css('transform', 'rotate(' + degree + 'deg)');
                    $target.find('.month').css('transform', 'rotate(' + (degree * -1) + 'deg)');
                    $.each($('.day'), function(key, value) {
                        $outerDays = $('.day:nth-child(' + (key) + '), .day:nth-child(' + (key + 2) + ')');
                        if (self.checkForOverlap($target.find('.select'), $(value))) {
                            if (selectedDay !== value) {
                                var date = moment($(value).attr('data-day'));
                                selectedDay = value;
                                $target.find('.month span').html(date.format('MMMM'));
                                toctocAudio.pause();
                                toctocAudio.currentTime = 0;
                                toctocAudio.play();
                                $(value).removeClass('almostFocus').addClass('focus');
                                //$outerDays.removeClass('focus').addClass('almostFocus');
                            }
                        } else {
                            /*if ($(value).hasClass('focus')) {
                                $outerDays.removeClass('almostFocus');
                            }*/
                            $(value).removeClass('focus');
                        }
                    });
                }
            });
        }
    },

    calculateRadians: function(offset, $target, object_x, object_y) {
        var center_x = (offset.left) + ($target.width() / 2);
        var center_y = (offset.top) + ($target.height() / 2);
        return Math.atan2(object_x - center_x, object_y - center_y);
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
});