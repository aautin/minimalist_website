const WebSocket = require('ws');
const http = require('http');

const port = 3000;

// Create an HTTP server
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('WebSocket + HTTP Server Running');
});

// Attach WebSocket server to HTTP server
const wss = new WebSocket.Server({ server });

wss.on('connection', (ws) => {
  console.log("New WebSocket client connected");

  ws.on('message', (message) => {
    console.log("Received from client:", message.toString());
    ws.send(`received`);
  });

  ws.on('close', () => {
    console.log("WebSocket client disconnected");
  });

});

// Start the HTTP server (which also hosts WebSockets)
server.listen(port, () => {
  console.log(`\nServer running at http://localhost:${port}`);
  console.log(`WebSocket listening at ws://localhost:${port}`);
});
