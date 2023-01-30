import express from "express";
import cors from "cors";
require("dotenv").config();
import connection from "./src/config/connect_database";

const app = express();
app.use(
    cors({
        origin: process.env.CLIENT_URL,
        methods: ["GET", "PUT", "DELETE", "POST"],
    })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", (req, res) => {
    return res.send("SERVER ON");
});
connection();

const port = process.env.PORT || 8888;
app.listen(port, () => {
    console.log("Server is running on the port: " + port);
});
