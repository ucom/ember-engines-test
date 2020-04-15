(function() {
  function vendorModule() {
    'use strict';

    return {
      'default': self['nouislider'],
      __esModule: true,
    };
  }

  define('nouislider', [], vendorModule);
})();
