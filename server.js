const fs = require('fs');
const http = require('http');

const server = http.createServer((req, res) => {
    // Home page
    if (req.url === '/') {
        res.writeHead(200, {'Content-type': 'text-html'}, 'utf-8');
        res.end('This is home page');
    }
//   About page
    if (req.url === '/about') {
        res.writeHead(200, {'Content-type': 'text/html'}, 'utf-8');
        res.end('This is about page');
    }
//     Contact page
    if (req.url === '/contact') {
        res.writeHead(200, {'Content-type': 'text/html'}, 'utf-8');
        res.end('This is contact page')
    }
//     Write file using fs module
    fs.writeFile('demo.txt', 'Hello world', (error) => {
        if (error) {
            res.writeHead(200, {'Content-type': 'text/html'}, 'utf-8');
            res.write('file created Unsuccessful')
            res.end();
        } else {
            res.writeHead(200, {'Content-type': 'text/html'}, 'utf-8');
            res.write('file created Successful')
            res.end();
        }
    })
})
server.listen(3000, () => {
    console.log('Server is running....')
})