const swaggerUI = require('swagger-ui-express');
const routes = require('../src/router/routes');
const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();


mongoose.connect(process.env.MONGO_URI,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log('===========================================');
        console.log('=            MongoDB Connected            =');
        console.log('===========================================');
        app.emit('connected-on-mongo');
    })
    .catch(err => {
        console.log(err);
        app.emit('error-on-mongo');
    });


app.use(express.json());
app.use(routes);
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
    app.use(cors());
    next();
});

app.use("/documentation",
    swaggerUI.serve,
    swaggerUI.setup(require('../src/config/swagger.json')));

app.on('connected-on-mongo', () => {

    app.listen(3000, (res, req) => {
        console.log('===========================================');
        console.log('=    Access in: http://localhost:3000     =')
        console.log('=       Server running on port 3000       =');
        console.log('=          Press Ctrl+C to quit.          =');
        console.log('===========================================');
    });
})

