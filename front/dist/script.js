let socket = null;
function connect() {
    if (socket !== null) {
        console.log("Already connected to WebSocket");
        return;
    }
    const wsUrl = "ws://localhost:3000";
    socket = new WebSocket(wsUrl);
    socket.addEventListener("open", () => {
        console.log("Connected to WebSocket");
    });
    socket.addEventListener("message", (event) => {
        console.log("Message from server:", event.data.toString());
    });
    socket.addEventListener("close", () => {
        console.log("Disconnected from WebSocket");
        socket = null;
    });
}
function disconnect() {
    if (socket === null) {
        console.log("Not connected to WebSocket");
        return;
    }
    socket.close();
}
function send() {
    if (socket === null) {
        console.log("Not connected to WebSocket");
        return;
    }
    const message = document.getElementById("message").value;
    socket.send(message);
}
