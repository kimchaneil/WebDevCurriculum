import http from 'http';
import url from 'url';

const server = http.createServer((req, res) => {
  const { pathname, query } = url.parse(req.url, true);
  if (req.method === 'GET' && pathname === '/foo' && query.bar) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(`Hello,` + `${query.bar}`);
  } else {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World!');
  }
});

server.listen(8080);
