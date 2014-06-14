Handlebars.registerHelper('formatDate', function (date) {
    moment.lang('nl');
    return moment(date).format('D');
});

Handlebars.registerHelper('returnAvailability', function (date) {
    if (new Date(date) <= new Date()) {
        return ' class="past"';
    } else {
        return ' class="available"';
    }
});

Handlebars.registerHelper('ifTypeIsPublic', function (type, options) {
    if (type === 'publiek') {
        return options.fn(this);
    }
});

Handlebars.registerHelper('ifTypeIsSchool', function (type, options) {
    if (type === 'scholen') {
        return options.fn(this);
    }
});