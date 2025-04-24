import minifyAll from "minify-all-js";
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = dirname(__filename); // get the name of the directory



minifyAll(join(__dirname, 'dest'))