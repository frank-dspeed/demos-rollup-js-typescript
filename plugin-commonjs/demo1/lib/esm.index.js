/* eslint-disable object-shorthand */
/* eslint-disable prettier/prettier */
import { a as cjsDep } from './cjs-dep-dependencies.js';
import me2 from './esm-dep-dependencies.js';

// @ts-check
cjsDep.uglyCjs = 0; // should error does not cjs does so does esm

me2.uglyEsm = 0; // errors as it should

console.log('uff');

await import('./cjs-dep-dependencies.js').then(function (n) { return n.c; }).then(({ default: mod }) => mod);
