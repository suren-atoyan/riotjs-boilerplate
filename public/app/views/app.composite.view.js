import Backbone from 'backbone';

var tpl = require('../tpls/app.composite.js');

var test = Backbone.View.extend({
	el: '#app_composite',

	events: {
		'click .meta a': 'modal_show',
	},

	template: tpl,

	initialize: function() {
		this.data = {
      user_name: 'Suren',
    };
    this.render();
	},

	render: function() {
    this.$el.html(this.template(this.data));
    this.$('.ui.dropdown')
 			  .dropdown();

    return this;
	},

	modal_show: function() {
		console.log(Backbone);
    this.$('.ui.basic.modal')
      	.modal('show');
	}
});

export default test;