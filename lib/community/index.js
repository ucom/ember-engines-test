/* eslint-env node */
'use strict';

const EngineAddon = require('ember-engines/lib/engine-addon');

module.exports = EngineAddon.extend({
  name: 'community',

  lazyLoading: Object.freeze({
    enabled: true
  }),

  isDevelopingAddon() {
    return true;
  },

  included() {
    //this._super.included.apply(this, arguments);
    //this.import('node_modules/ember-simple-auth');
    // this.import('vendor/shims/moment.js');
  },

  // treeForVendor(vendorTree) {
  //   var momentTree = new Funnel(path.join(this.project.root, 'node_modules', 'ember-simple-auth'), {
  //     files: ['*.js'],
  //   });

  //   console.log('vendorTree', momentTree);
  //   return vendorTree;

  //   return new MergeTrees([vendorTree, momentTree]);
  // },

});
