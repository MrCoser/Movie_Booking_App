const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const PORT = 8000;
require('dotenv').config();
require('./db');


const allowedOrigins = ['http://localhost:3000'];
app.use(bodyParser.json());
app.use(
    cors({
        origin: function(origin, callback) {
            if(!origin || allowedOrigins.includes(origin)) {
                callback(null, true);
            } else {
                callback(new Error('not allowed by CORS'));
            }
        },
        credentials: true,     // allow credentials required
    })
);
app.use(cookieParser());

app.get('/', (req, res) => {
    res.json({ message: 'API is working' });
});

app.listen(PORT, ()=>{
    console.log(`Server ready on PORT: ${PORT}`);
})