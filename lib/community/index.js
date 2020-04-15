/* eslint-env node */
"use strict";

const EngineAddon = require("ember-engines/lib/engine-addon");
const Funnel = require("broccoli-funnel");
const mergeTrees = require("broccoli-merge-trees");
const path = require("path");

module.exports = EngineAddon.extend({
  name: "community",

  lazyLoading: Object.freeze({
    enabled: true,
  }),

  isDevelopingAddon() {
    return true;
  },

  included() {
    // example hack to prevent import into host app in node_modules/ember-cli-nouislider/index.js
    process.env.EMBER_CLI_FASTBOOT = true;

    this._super.included.apply(this, arguments);

    // to include npm dependencies move them into /vendor and import them here
    this.import("vendor/moment/moment.js");
    this.import("vendor/shims/moment.js");

    // some ember addons may have their own imports of dependencies in index.js which
    // needs to be prevented as these imports end up in the host app's vendor.js
    this.import("vendor/nouislider/distribute/nouislider.js");
    this.import("vendor/nouislider/distribute/nouislider.min.css");
    this.import("vendor/shims/nouislider.js");
  },
});
