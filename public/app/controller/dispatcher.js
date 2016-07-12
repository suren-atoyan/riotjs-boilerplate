'use strict';

import Backbone from '../../../bower_components/backbone/backbone.js';
import _        from '../../../bower_components/underscore/underscore.js';
var $ = require('jquery');

var Dispatcher = _.extend({}, Backbone.Events);

var api = {
  test: function(options) {
    var data = {
      user_name: 'Suren',
    }
    var AppCompositeTpl = require('../tpls/app.composite.js')(data);
    console.log(AppCompositeTpl);
    $('#app_composite').html(AppCompositeTpl);
  }
}

Dispatcher.on({
  'create:app.composite.view': api.test,
});

export default Dispatcher;
