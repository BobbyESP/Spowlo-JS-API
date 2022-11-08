// Import express.js to get the make a server lol
const express = require("express");

// Setup the express server
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json({ limit: "100mb" }));

// Import routes
const converterRoute = require("./routes/spotToYT");

app.use("/api/v1/spottoyt", converterRoute);

app.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});