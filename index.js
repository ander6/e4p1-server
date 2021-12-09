import Express from "express";
import Mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config()
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const mongodbRoute = process.env.MONGO_DB_URI
import router from "./routes/routes.js";


const app = Express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
server.listen(4000, () => {
    console.log('server started on port 4000');
});

const port = process.env.PORT || 3001;
app.use(Express.urlencoded({ extended: false }));
app.use(Express.json());
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
})
app.use((req, res, next) => {
    req.io = io;
    return next();
})

app.use(router);
const options = {
    socketTimeoutMS: 0,
    keepAlive: true,
    useNewUrlParser: true
};
Mongoose.Promise = global.Promise
Mongoose.connect(mongodbRoute, options, (err) => {
    if (err) {
        return console.log(`Error al conectar a la base de datos: ${err}`)
    }
    app.listen(port, () => {
        console.log(`Servidor up en ${port}`);
    });
    
    console.log(`Conexión con Mongo correcta.`)
})

