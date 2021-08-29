const swaggerUI = require('swagger-ui-express');
const routes = require('../src/router/routes');
const mongoose = require('mongoose');
const express = require('express');
const env = require('../src/config/env')
const cors = require('cors');
const app = express();





// App Config

app.use(express.json());
app.use(routes);
;
app.use((req, res, next) => {
    // res.header('Access-Control-Allow-Origin', '*');
    // res.header("Access-Control-Allow-Methods", '*');
    // res.header("Access-Control-Allow-Headers", '*');
    app.use(cors())
    app.options('*', cors());
    next();
});


// Connect to MongoDB
mongoose.connect(env.environment.mongoDB.devConnection,
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
        console.log('===========================================');
        console.log('=            MongoDB not Connected        =');
        console.log('===========================================');
        console.log('=       The server will only start        =');
        console.log('=          if Mongo is connected          =');
        console.log('===========================================');
        //console.log(err);
        app.emit('error-on-mongo');
    });



// Swagger
app.use("/documentation",
    swaggerUI.serve,
    swaggerUI.setup(require('../src/config/swagger.json')));

// Start server
app.on('connected-on-mongo', () => {
    app.listen(env.environment.server.port, (res, req) => {
        console.log('===========================================');
        console.log('=    Access in: http://localhost:'.concat(env.environment.server.port), '   =')
        console.log('=          Press Ctrl+C to quit.          =');
        console.log('===========================================');
    });
});

