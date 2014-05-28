/* globals Questionnaire:true */
/* globals Settings:true */

var AppRouter = Backbone.Router.extend({

	poll_id: 0,
	questionnaire: undefined,

	initialize: function(){
		_.bindAll.apply(_, [this].concat(_.functions(this)));
	},

	routes: {
		"": ""
	}
});
