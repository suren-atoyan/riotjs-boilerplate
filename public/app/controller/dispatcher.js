'use strict';

import _        from '../../../bower_components/underscore/underscore.js';

var Backbone = require('backbone');

var Dispatcher = _.extend({}, Backbone.Events);

var api = {
  test: function(options) {
    var CompositeView = require('../views/app.composite.view');
    console.log(CompositeView())
  }
}

Dispatcher.on({
  'create:app.composite.view': api.test,
});

export default Dispatcher;
