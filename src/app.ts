import express from "express";

// Express app
const app = express();

app.get('/', (req, res) => res.send('posts'));

export default app;