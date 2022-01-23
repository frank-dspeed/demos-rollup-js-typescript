var cjsDep = {exports: {}};

/** @type {any} */

(function (module, exports) {
module.exports = {
	uglyCjs: 'export cjs Type String',
};
}(cjsDep));

var me = cjsDep.exports;

// @ts-check
me.uglyCjs = 0; // should error does not cjs does so does esm

console.log('uff');
