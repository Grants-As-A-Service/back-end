const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
//routes
const grantRoutes = require("./routes/routes.js");
const tagNamesRoute = require("./routes/tagNamesRoute.js");
const tagRoute = require("./routes/tagRoute.js");

const app = express();

//connect to mongo db
require("dotenv").config();
const mongoString = process.env.DATABASE_URL;

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on("error", (error) => {
    console.log(error);
});

database.once("connected", () => {
    console.log("Database Connected");
});

app.listen(process.env.PORT, () => {
    console.log(`The Server is started at ${process.env.PORT}`);
});

app.use((request, response, next) => {
    response.set({
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": "true",
        "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
        "Access-Control-Expose-Headers": "Set-Fake-Cookie",
    });
    if (request.method === "OPTIONS") {
        response.sendStatus(200);
    } else {
        next();
    }
});

//setup bodyparser for sending req
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
//app.use(cors());

//front end hits this to set up cookie, just for demo
app.post("/testRegister", (request, response) => {
    let account = request.body;

    console.log("got it", account);

    response.set({
        "Set-Fake-Cookie": "auth;" + JSON.stringify(account) + ";",
    });

    response.sendStatus(200);
});

app.use("/grants", grantRoutes);
app.use("/tagname", tagNamesRoute);
app.use("/tag", tagRoute);
