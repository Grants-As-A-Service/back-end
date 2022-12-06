const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const cors = require('cors');
//routes
const grantRoutes = require('./routes/routes.js');
const tagNamesRoute = require('./routes/tagNamesRoute.js');
const tagRoute = require('./routes/tagRoute.js');
const accountRoute = require('./routes/accountRoute.js');
const projectRoute = require('./routes/projectRoute');
const app = express();

//connect to mongo db
require('dotenv').config();
const mongoString = process.env.DATABASE_URL

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})

app.listen(process.env.PORT, () => {
    console.log(`The Server is started at ${process.env.PORT}`)
})

//setup bodyparser for sending req
app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cookieParser());
app.use(cors());
app.use('/grants', grantRoutes);
app.use('/tagname', tagNamesRoute);
app.use('/tag', tagRoute);
app.use('/account', accountRoute);
app.use('/project', projectRoute);

