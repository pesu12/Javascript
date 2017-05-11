var port = 8127;
 
// Require the modules we need
var http = require('http');
 
// Create a http server with a callback handling all requests
var httpServer = http.createServer(function(request, response) {
  console.log((new Date()) + ' Received request for ' + request.url);
  response.writeHead(200, {'Content-type': 'text/plain'});
  response.end('Hello world\n');
});
 
// Setup the http-server to listen to a port
httpServer.listen(port, function() {
  console.log((new Date()) + ' HTTP server is listening on port ' + port);
});

// Here should be the code from the example for the webserver, webserver.js,
// you need that also.
 
// Require the modules we need
var WebSocketServer = require('/home/saxon/teachers/com/mosstud/www/node/node_modules/websocket').server;
//var WebSocketServer = require('websocket').server;

 
// Create an object for the websocket
// https://github.com/Worlize/WebSocket-Node/wiki/Documentation
wsServer = new WebSocketServer({
  httpServer: httpServer,
  autoAcceptConnections: false
});
 
// Create a callback to handle each connection request
wsServer.on('request', function(request) {
var connection = request.accept('echo-protocol'); 
 console.log((new Date()) + ' Connection accepted from ' + request.origin);
 
  // Callback to handle each message from the client
  connection.on('message', function(message) {
      if (message.type === 'utf8') {
          console.log('Received Message: ' + message.utf8Data);
          connection.sendUTF(message.utf8Data);
      }
      else if (message.type === 'binary') {
          console.log('Received Binary Message of ' + message.binaryData.length + ' bytes');
          connection.sendBytes(message.binaryData);
      }
  });
 
  // Callback when client closes the connection
  connection.on('close', function(reasonCode, description) {
      console.log((new Date()) + ' Peer ' + connection.remoteAddress + ' disconnected.');
  });
});