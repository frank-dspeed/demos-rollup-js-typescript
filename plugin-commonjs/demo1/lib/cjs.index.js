/* eslint-disable object-shorthand */
/* eslint-disable prettier/prettier */
import { a as cjsDep } from './cjs-dep-dependencies.js';

var demo1 = {};

const me = cjsDep;
(async () => {
	me.uglyCjs; // Works in Dev === String
	me.uglyCjs = 0; // errors in Dev === String is not number need string
	//module.exports = me;
	const me2 = await import('./esm-dep-dependencies.js').then(({ default: mod }) => mod);

	me2.uglyEsm = 0; //errors correct
})().catch(console.log);

export { demo1 as default };
