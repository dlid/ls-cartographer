import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = dirname(__filename); // get the name of the directory

import * as sass from 'sass'
import { existsSync, writeFileSync } from 'fs';
import * as glob from "glob";
const result = sass.compile(join(__dirname, 'scss/cartographer.scss'), {
    verbose: true,
    importers: [{
        // An importer that redirects relative URLs starting with "~" to
        // `node_modules`.
        findFileUrl(url) {
            console.log(url);
          if (!url.startsWith('~')) return null;
          return new URL(url.substring(1), pathToFileURL('node_modules'));
        }
      }]

});

if (!existsSync(join(__dirname, 'dest/cartographer.css'))) {
    mkdirSync(join(__dirname, 'dest/cartographer.css'));
}
  

writeFileSync(join(__dirname, 'dest/cartographer.css'), result.css);

