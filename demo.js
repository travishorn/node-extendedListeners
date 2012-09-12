var app       = require('http').createServer(handler),
    fs        = require('fs'),
    listeners = require('listeners').listen(app);

listeners.addResource({
  request  : '/logger.js',
  resource : 'logger.js'
});

app.listen(3000);

function handler (req, res) {
  fs.readFile(__dirname + '/demo.html', function (err, data) {
    if (err) {
      res.writeHead(500);
      return res.end('Error loading page.');
    }

    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(data);
  });
}