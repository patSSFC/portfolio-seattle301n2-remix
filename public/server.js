// var requestProxy = require('express-request-proxy'),
//   express = require('express'),
//   port = process.env.PORT || 3000,
//   app = express();
//
// var proxyGitHub = function(request, response) {
//   console.log('Routing GitHub request for', request.params[0]);
//   (requestProxy({
//     url: 'https://api.github.com/' + request.params[0],
//     headers: { Authorization: 'token ' + process.env.GITHUB_TOKEN }
//   }))(request, response);
// };
//
// app.get('/github/*', proxyGitHub);
//
// app.use(express.static('./'));
//
// app.get('*', function(request, response) {
//   console.log('New request:', request.url);
//   response.sendFile('index.html', { root: '.' });
// });
//
// app.listen(port, function() {
//   console.log('Server started on port ' + port + '!');
// });
var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));
app.get('/', function(req,res) {
  console.log(req.body);
  res.sendFile(__dirname + '/public/index.html');
});
app.listen(port, function() {
  console.log('Server running on...' + port);
});
