import http from "http";

// Express app
import app from "./app";

// HTTP server
const server = http.createServer(app);

// Listening to a port
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => { console.log(`Server running on port ${PORT}`); });