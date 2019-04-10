const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const cors = require("cors");

const app = express();

app.use(cors());

const server = require('http').Server(app);
const io = require('socket.io')(server);

io.on("connection", socket => {
    socket.on("connectRoom", box =>{
        socket.join(box);
    });
});

mongoose.connect(
    'mongodb://localhost:27017/omnistack',
    { 
    useNewUrlParser: true
    }
);

app.use((req, res, next) => {
    req.io = io;

    return next();
});

app.use(express.json()); // support json encoded bodies
app.use(express.urlencoded({ extended: true })); // support encoded bodies
app.use('/files', express.static(path.resolve(__dirname, '..', 'tmp')));

app.use(require("./routes")); // importa arquivo

//start server
server.listen(3333);
console.log('server is running on port 3333');