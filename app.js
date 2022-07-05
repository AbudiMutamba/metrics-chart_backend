const express = require('express')
const dotenv = require('dotenv').config()
const {errorHandler} = require('./middleware/errorMiddleware')
const routerUser_data = require('./routes/user_data')

const app = express();
const port = process.env.PORT || 5001

app.use(express.json());
app.use(express.urlencoded({extended : false}))


app.use('/', routerUser_data);

app.use(errorHandler)

app.listen(port, () => console.log(`Api working on http://localhost:${port}`)); 