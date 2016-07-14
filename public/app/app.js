var semantic = require('../../bower_components/semantic/dist/semantic.js');

if (NODE_ENV == 'production') {
	console.log('lkhg');
}

import Dispatcher from './controller/dispatcher.js';
Dispatcher.trigger('create:app.composite.view');
