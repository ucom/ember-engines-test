/* eslint-env node */
'use strict';

const EngineAddon = require('ember-engines/lib/engine-addon');
const Funnel = require('broccoli-funnel');
// const mergeTrees = require('broccoli-merge-trees');
const path = require('path');

module.exports = EngineAddon.extend({
  name: 'community',

  lazyLoading: Object.freeze({
    enabled: true
  }),

  isDevelopingAddon() {
    return true;
  },

  included() {
    this._super.included.apply(this, arguments);
  },

  // treeForVendor(vendorTree) {
  //   var momentTree = new Funnel(path.join(this.project.root, 'lib/community/node_modules', 'ember-pikaday'), {
  //     files: ['*.js'],
  //   });

  //   console.log('vendorTree', momentTree);
  //   return momentTree;
  //   // return new MergeTrees([vendorTree, momentTree]);
  // },

});
