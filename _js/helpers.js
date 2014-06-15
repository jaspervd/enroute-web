Handlebars.registerHelper('formatDate', function (date) {
    moment.lang('nl');
    return moment(date).format('D');
});

Handlebars.registerHelper('returnAvailability', function (date, tickets) {
    console.log(new Date(date), tickets);
    if (new Date(date) <= new Date()) {
        return ' past';
    } else if(tickets === 0) {
        return ' soldout';
    } else {
        return ' available';
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