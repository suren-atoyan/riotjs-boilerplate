// Create in this page jQuery and Semantic-Ui
import $ 			from '../../node_modules/jquery/dist/jquery.js';
import jQuery from '../../node_modules/jquery/dist/jquery.js';
window.jQuery = jQuery;
require('../../semantic/dist/components/dimmer');
require('../../semantic/dist/components/transition');
require('../../semantic/dist/components/modal');
require('../../semantic/dist/components/dropdown');

// import '../../semantic/dist/components/rating';
// import '../../semantic/dist/components/tab';
// import '../../semantic/dist/components/popup';
// import '../../semantic/dist/components/sticky';

import Dispatcher from './controller/dispatcher.js';

Dispatcher.trigger('create:app.composite.view');
