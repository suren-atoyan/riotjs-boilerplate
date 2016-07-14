var Backbone = require('backbone');
var tpl = require('../tpls/app.composite.js');

module.exports = function() {
	return new Backbone.View({
		el: '#app_composite',

		events: {
			'click .meta a': 'modal_show',
		},

		template: tpl,

		initialize: function() {
			this.data = {
	      user_name: 'Suren',
	    };
	    console.log(this.$el, this.template)
	    this.render();
		},

		render: function() {
	    this.$el.html(this.template(this.data));

	    return this;
		},

		modal_show: function() {
	    this.$('.ui.basic.modal')
	    	.modal('show')
		}
	});
} 
