// @ts-check
import me from '../cjs-dep';
import me2 from './esm-dep';
me;
me.uglyCjs = 0; // should error does not cjs does so does esm

me2.uglyEsm = 0; // errors as it should

console.log('uff');

const me3 = await import('../cjs-dep.js').then(({ default: mod }) => mod);
