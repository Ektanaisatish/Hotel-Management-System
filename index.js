// const express = require ("express");
// const app = express();
// const cors = require("cors");

// const dbConfig = require('./db')
// const roomsRoute = require('./routes/roomsRoute')
// const userRoute = require('./routes/usersRoute')
// app.use('/api',roomsRoute)
// app.use('./api/users',userRoute)

// const port = process.env.PORT || 5000;
// app.listen(port,()=> console.log(`server has started using nodemon ${port}` ));)}


const express = require("express");
const cors = require("cors");
const bodyParser = require('body-parser')

const app = express();
// create application/json parser
var jsonParser = bodyParser.json()

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

// Use cors middleware
app.use(cors());
app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());
const dbConfig = require("./db");
const roomsRoute = require("./routes/roomsRoute");
const userRoute = require("./routes/usersRoute");
// const userRoute = require("./routes/usersRoute");
const fooditemsRoute = require("./routes/fooditemsRoute")

app.use("/api", roomsRoute);
app.use("/api",fooditemsRoute);

app.use("/register",jsonParser, userRoute);


const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server has started using nodemon ${port}`));

