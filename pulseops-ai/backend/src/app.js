const eventRoutes = require("./routes/event.routes");
const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const morgan = require("morgan");

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use("/events", eventRoutes);

app.get("/", (req, res) => {
    res.json({
        app: "PulseOps AI",
        status: "running",
        version: "0.1.0"
    });
});

app.get("/health", (req, res) => {
    res.json({
        status: "healthy",
        uptime: process.uptime(),
        timestamp: new Date().toISOString()
    });
});

module.exports = app;
