import express from "express";
import cors from "cors";
require("dotenv").config();
import connection from "./src/config/connect_database";
import zingmp3 from "./src/routes/zingmp3";
import initRoutes from "./src/routes";

const app = express();
app.use(
    cors({
        origin: process.env.CLIENT_URL,
        methods: ["GET", "PUT", "DELETE", "POST"],
    })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

initRoutes(app);
connection();

const port = process.env.PORT || 8888;
app.listen(port, () => {
    console.log("Server is running on the port: " + port);
});
