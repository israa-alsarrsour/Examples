'use strict';

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
      }
    }newObj['default'] = obj;return newObj;
  }
}

var _lib = require('./lib');

var lib = _interopRequireWildcard(_lib);

console.log(lib.square(11)); // 121
console.log(lib.diag(4, 3)); // 5

//# sourceMappingURL=main2-compiled.js.map

//# sourceMappingURL=main2-compiled-compiled.js.map