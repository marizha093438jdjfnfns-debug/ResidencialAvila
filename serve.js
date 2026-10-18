const http = require('http');
const fs = require('fs');
const path = require('path');

let PORT = process.env.PORT || 8080;
const ROOT = __dirname;

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon'
};

const server = http.createServer((req, res) => {
  let reqPath = decodeURI(req.url.split('?')[0]);
  if (reqPath === '/') reqPath = '/index.html';

  const fullPath = path.join(ROOT, reqPath);

  // Prevent directory traversal
  if (!fullPath.startsWith(ROOT)) {
    res.statusCode = 403;
    res.end('Access Denied');
    return;
  }

  fs.stat(fullPath, (err, stats) => {
    if (err || !stats.isFile()) {
      res.statusCode = 404;
      res.end('File not found');
      return;
    }

    const ext = path.extname(fullPath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    res.writeHead(200, { 'Content-Type': contentType });
    fs.createReadStream(fullPath).pipe(res);
  });
});

function startServer(p) {
  server.listen(p, () => {
    console.log(`Servidor de Residencial Avila iniciado con éxito.`);
    console.log(`URL local: http://localhost:${p}`);
  }).on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
      console.log(`Puerto ${p} ocupado, intentando puerto ${p + 1}...`);
      startServer(p + 1);
    } else {
      console.error(err);
    }
  });
}

startServer(PORT);
