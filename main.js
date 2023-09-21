require('dotenv').config();
const express = require("express");
const cors = require("cors");
const app = express();


const authRoute = require('./src/routes/auth');
const userRoute = require('./src/routes/user')

app.use(express.json());
app.use(cors());
app.use('/api/auth', authRoute);
app.use('/api/user', userRoute);


app.listen(process.env.PORT || 3000, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${5000}`);
})
