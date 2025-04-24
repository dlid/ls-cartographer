import { existsSync, readFileSync, readSync } from 'fs';
import http from 'http'
import { extname, join } from 'path';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename); // get the name of the directory

// Create a server object
const server = http.createServer((req, res) => {
  // Set the response header

  let path = req.url;
  if (path == '/') {
    path += "index.html";
  } else if (!path.match(/\.[a-z]+$/)) {
    if (!path.endsWith('/')) {
        path+= "/";
    }
    path += "index.html";
  }

  let mimeType = 'text/html';

  const extension = extname(path).toLowerCase();

  switch(extension) {
    case '.html': mimeType = 'text/html'; break;
    case '.js': mimeType = 'application/javascript'; break;
    case '.css': mimeType = 'text/css'; break;
  }
  console.log(join(__dirname, path));

  if (existsSync(join(__dirname, path))) {
    const response = readFileSync(join(__dirname, path)).toString();
    res.writeHead(200, {'Content-Type': mimeType});
    res.end(response);

  } else {
    res.writeHead(404, {'Content-Type': 'text/plain'});
    res.end('404 Not found');
  }

    console.log(path);
 

  // Send a response
 
});

// Specify the port on which the server will listen
const port = 3000;

// Start the server and listen on the specified port
server.listen(port, () => {
  console.log(`Server running at http://localhost>:${port}`);
});

