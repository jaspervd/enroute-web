/* globals ErrorView:true */

var Validate = (function() {
    function Validate() {};

    Validate.fullName = function(e) { // .name is reserved?
        if (!Modernizr.input.required) { // !Modernizr.input.pattern -- pattern=".{7,}" no user friendly output from browser
            if ($(e.currentTarget).val().length < 7) {
                var errorView = new ErrorView({
                    model: 'Er wordt verwacht dat je naam minstens 7 karakters lang is.'
                });
                $(e.currentTarget).next().remove();
                $(e.currentTarget).after(errorView.render().$el);
                return false;
            }
        }
        return true;
    };

    Validate.email = function(e) {
        if (!Modernizr.input.required || !Modernizr.inputtypes.email) {
            var regExp = new RegExp("^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,4}$");
            if (!regExp.test($(e.currentTarget).val())) {
                var errorView = new ErrorView({
                    model: 'Dit is geen geldig e-mailadres.'
                });
                $(e.currentTarget).next().remove();
                $(e.currentTarget).after(errorView.render().$el);
                return false;
            }
        }
        return true;
    };

    return Validate;
})();