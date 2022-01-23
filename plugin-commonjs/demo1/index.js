const me = require('./cjs-dep.js');
(async () => {
	me.uglyCjs; // Works in Dev === String
	me.uglyCjs = 0; // errors in Dev === String is not number need string
	//module.exports = me;
	const me2 = await import('./esm-src/esm-dep.js').then(({ default: mod }) => mod);

	me2.uglyEsm = 0; //errors correct
})().catch(console.log);
