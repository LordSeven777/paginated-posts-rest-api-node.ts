import http from "http";

// Express app
import app from "./app";

// Database connection
import sequelize from "./dbConnection";

// HTTP server
const server = http.createServer(app);

// Database authentication
sequelize.authenticate().then(() => { console.log('Connected to MySQL database ...'); })

// Listening to a port
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => { console.log(`Server running on port ${PORT} ...`); });