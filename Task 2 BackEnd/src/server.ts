import express, { Request, Response } from "express";
import { createServer } from "http";
import { Server } from "socket.io";

// Define the host and port
const HOST = "127.0.0.1";
const PORT = 6969;

// Initialize Express and HTTP server
const app = express();
const httpServer = createServer(app);

// Initialize Socket.IO with the HTTP server
const io = new Server(httpServer);

// Set EJS as templating engine
app.set("view engine", "ejs");
app.set("views", "./src/views");

// Basic route
app.get("/", (req: Request, res: Response) => {
  res.render("client");
});

// Handle client connections
io.on("connection", (socket) => {
  const clientAddress = socket.handshake.address;
  console.log(`Client connected from ${clientAddress}`);

  // Set a timeout to disconnect the client
  setTimeout(() => {
    socket.disconnect(true); // Disconnect after a short delay
  }, 100); // Delay in milliseconds to avoid race conditions

  // Handle the disconnect event
  socket.on("disconnect", () => {
    console.log(`Client from ${clientAddress} disconnected.`);
  });
});

// Start the server
httpServer.listen(PORT, HOST, () => {
  console.log(`Socket.IO server is listening on http://${HOST}:${PORT}`);
});

// Error handling
httpServer.on("error", (error) => {
  console.error("Server error:", error);
});
