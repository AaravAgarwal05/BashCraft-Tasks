# BashCraft Techincal Team Tasks

 BashCrafts Tasks Alloted For Technical Round

## Hi I am Aarav Agarwal. I have done both the tasks 1 & 2 to show my skills both in FrontEnd and BackEnd.

# Task Details:

## Task 1 Front End

## Task 2 Back End

### Create a TCP Server

- **Project Description:**
  - This project demonstrates the setup of a TCP server on the local host (127.0.0.1) using Node.js, Express, and Socket.IO, with TypeScript for type safety and development efficiency. The server listens on port 6969 and manages real-time client connections, allowing for   communication over WebSocket through Socket.IO.

  - The server integrates the EJS templating engine to render dynamic HTML pages for client interactions, ensuring that the client-side interface is served smoothly with Express. This combination allows us to display real-time connection status, messages, or other events triggered by the server within a styled HTML file rendered by EJS.

- **Key Features:**
  - Server Setup: The server is built using Express to handle HTTP requests, Socket.IO for real-time communication over WebSocket, and TypeScript for better code maintainability.
  - Socket.IO Integration: Handles client connections and disconnections in real-time, providing IP-based logging and automated disconnection after a set timeout.
  - EJS Templating: Utilizes EJS as the view engine to render a client_connection.ejs page that dynamically updates with connection status, messages, and events sent from the server.

- **Steps Implemented:**
  - Initialize an HTTP Server: Using Express, the server is configured to listen on 127.0.0.1 and port 6969.
  - Integrate Socket.IO: For seamless real-time communication, Socket.IO is attached to the HTTP server, enabling it to listen for and manage client connection and disconnection events.
  - Set Up EJS as a View Engine: EJS is configured as the templating engine to render HTML pages that serve as the client interface.
  - Client Interaction: The client.ejs page includes JavaScript to establish a connection to the server using Socket.IO, displays messages in real-time, and listens for disconnect events.
