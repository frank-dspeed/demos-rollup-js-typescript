When you create a cjs dependencie via declaring commonjs in package.json or leaving the type fild obsolet
and then import that into a other cjs dependencie it correctly typechecks

but when you import the same dependencie inside a subfolder or other esm context with a package.json type module
so esm then magicaly it shows the correct type but! it does not error when i assign a wrong 

when i now expand that example and create a esm dependencie with near identical content of the cjs one 
and assign a wrong value to that it errors again

## conclusion 
JS Typechecking only works inside the ESM context for ESM dependencies but NOT for CJS when using top level import
JS Typechecking works inside the CJS context for CJS dependencies and Dynamic imported() ESM!