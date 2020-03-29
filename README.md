This is something to control light strips that are usually controlled via the magic home app

It also includes a packaged version so you can just download and run it via that rather than having to do an `npm install`!.

Just simply run index.win.exe with values for R,G,B and brightness, EG

`index-win.exe 0 0 255 0` for solid blue

## Compile from source

In order to compile from source, you need the npm package `pkg` installed globally, to do this run `npm install -g pkg`.

Once done, you can now run `pkg.cmd index.js --out-path executables`